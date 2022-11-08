import { firebaseConfiguration } from "./firebase.config";
import { initializeApp } from "firebase/app";
import {
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import type { User } from "firebase/auth";
import {
  collection,
  connectFirestoreEmulator,
  doc,
  type DocumentData,
  enableMultiTabIndexedDbPersistence,
  getDoc,
  getDocs,
  getFirestore,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  setDoc,
  updateDoc,
  where,
  writeBatch
} from "firebase/firestore";
import { Order } from "../../store/orderHistory/orderHistory.types";
import { Category } from "../../store/categories/category.types";
import {
  AdditionalInformation,
  UserData,
  UserFromDBData
} from "../../store/userReducer/user.types";
import { CartItem } from "../../store/cartReducer/cart.types";
import {
  SortType,
  UserDatabaseDataType
} from "../../store/userReducer/user.reducer";
import { WhichCollection } from "../../types/checkTypes/firebase.typeGuards";

export function firebaseInit() {
  const firebaseApp = initializeApp(firebaseConfiguration.firebaseConfig);
  const userAuth = getAuth(firebaseApp);
  const fireStorage = getFirestore(firebaseApp);
  const categoriesCollectionRef = collection(fireStorage, "categories");
  const orderHistoryCollectionRef = collection(fireStorage, "orderHistory");
  const usersCollectionRef = collection(fireStorage, "users");
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });
  // if (location.hostname === "localhost") {
  //   connectAuthEmulator(userAuth, "http://localhost:9090");
  //   connectFirestoreEmulator(fireStorage, "localhost", 8080);
  // }
  // enableMultiTabIndexedDbPersistence(fireStorage);
  return {
    categoriesCollectionRef,
    orderHistoryCollectionRef,
    usersCollectionRef,
    firebaseApp,
    userAuth,
    fireStorage,
    googleProvider
  };
}

export const {
  categoriesCollectionRef,
  orderHistoryCollectionRef,
  usersCollectionRef,
  firebaseApp,
  userAuth,
  fireStorage,
  googleProvider
} = firebaseInit();

export type CollectionName = {
  categories: "categories";
  orderHistory: "orderHistory";
};
export type NewOrder = Order;

export const docsMapper = (docs: QuerySnapshot<DocumentData>) => {
  const tempArray: any = [];
  docs.forEach(async (doc) => {
    tempArray.push(doc.data());
  });
  return tempArray;
};

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      userAuth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};

export const getUserCartItemsAndOrderHistory = async (userAuth: User) => {
  const userDocRef = doc(usersCollectionRef, userAuth.uid);
  const cartItems: CartItem[] = docsMapper(
    await getDocs(collection(userDocRef, "cartItems"))
  );
  const orderHistory: Order[] = docsMapper(
    await getDocs(collection(userDocRef, "orderHistory"))
  );

  return {
    cartItems,
    orderHistory
  };
};

//login functions

export const signInAnonymous = async () => {
  const { user } = await signInAnonymously(userAuth);
  console.log(user);
  return user;
};

export const signUpByEmailAndPassword = (email: string, password: string) => {
  if (!email || !password) return;

  createUserWithEmailAndPassword(userAuth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((error) => {
      console.log("Error message: ", error.message);
      console.log("Error code: ", error.code);

      if (error.code === "auth/email-already-in-use")
        window.alert(
          "E-mail jest w użyciu, zaloguj się albo użyj innego mail'a "
        );
    });
};

export const signInByEmailAndPassword = async (
  email: string,
  password: string
) => {
  let user = {};
  signInWithEmailAndPassword(userAuth, email, password)
    .then((userCredential) => {
      // Signed in
      user = userCredential.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);

      if (error.code === "auth/wrong-password")
        window.alert("Nieprawidłowe hasło ");
      else if (error.code === "auth/user-not-found")
        window.alert("Nie istnieje użytkownik z takim adresem e-mail ");

      return error;
    });
};

export const signInWithGooglePopUp = () =>
  signInWithPopup(userAuth, googleProvider);

export const signOutUser = () => signOut(userAuth);

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInfos = {} as AdditionalInformation
) => {
  const userDocRef = doc(usersCollectionRef, userAuth.uid); //database, collection, unique ID
  const userSnapshot = await getDoc(userDocRef);
  let usersDataFromDataBase: UserFromDBData | null = null;

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const { cartItems, orderHistory, photoUrl } = additionalInfos;

    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        photoUrl
      });
      addCollectionToDocuments(userAuth, cartItems, "cartItems");
      addCollectionToDocuments(userAuth, orderHistory, "orderHistory");
      return usersDataFromDataBase;
    } catch (error) {
      console.log("I just caught some error while creating users!!", error);
      return usersDataFromDataBase;
    }
  }
  // if user data exists
  else if (userSnapshot.exists()) {
    const { cartItems, orderHistory } = await getUserCartItemsAndOrderHistory(
      userAuth
    );
    console.log("UserCartItems: ", cartItems);
    console.log("OrderHistory: ", orderHistory);

    usersDataFromDataBase = {
      cartItems: cartItems as any,
      orderHistory: orderHistory as any
    };
    return usersDataFromDataBase;
  }
  return usersDataFromDataBase;
};

//order History functions
export const addNewOrderToHistory = (newOrder: NewOrder) => {
  console.log("New Order: ", newOrder);
  const newDoc = doc(
    fireStorage,
    `orderHistory/${newOrder.time.replaceAll("/", ".")}`
  );
  console.log("New Doc: ", newDoc);

  setDoc(newDoc, newOrder, { merge: true });
};

export const updateUsersCartItems = async (
  userAuth: User,
  objectsToAdd: CartItem[] | Order[],
  { cartItems, orderHistory }: UserDatabaseDataType
) => {
  
  cartItems.forEach(async (cartItem: any) => {
    console.log("cartItem from a user snapshot: ", cartItem);
    // await updateDoc(doc(collWithCartItems, 'cartItems', matchDetails?.id, 'messages', allDoc?.id), objectsToAdd)
  });
};

export const addCollectionToDocuments = (
  userAuth: User,
  objectsToAdd: CartItem[] | Order[],
  collectionName: "orderHistory" | "cartItems"
) => {
  const userDocRef = doc(usersCollectionRef, userAuth.uid);
  const collToAdd = collection(userDocRef, collectionName);
  const batch = writeBatch(fireStorage);
  let objectName = "";

  console.log(collectionName);
  objectsToAdd.forEach((object) => {
    console.log(object);

    WhichCollection(object, "cartItems")
      ? (objectName = object.name)
      : (objectName = object.time.replaceAll("/", "."));

    const docRef = doc(collToAdd, objectName);
    batch.set(docRef, object);
  });

  batch.commit();
};

//function to create orderHistory collection and categories

// export const addCollectionAndDocuments = async (
//   collectionKey: string,
//   objectsToAdd: Category[]
// ) => {
//   const collectionRef = collection(fireStorage, collectionKey);
//   const batch = writeBatch(fireStorage);

//   objectsToAdd.forEach((object) => {
//     const docRef = doc(collectionRef, object.title); //time.replaceAll("/", "."));
//     batch.set(docRef, object);
//   });

//   await batch.commit();
//   console.log("done");
// };
