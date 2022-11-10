import { type DocumentData, QuerySnapshot } from "firebase/firestore";

export const docsMapper = (docs: QuerySnapshot<DocumentData>) => {
    const tempArray: any = [];
    docs.forEach(async (doc) => {
      tempArray.push(doc.data());
    });
    return tempArray;
  };
  