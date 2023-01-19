import { firebaseConfiguration } from "./firebase.config";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { Order } from "../../store/orderHistory/orderHistory.types";

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
