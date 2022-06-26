
import { getFirestore } from "firebase/firestore/lite";
import { collection, addDoc } from "firebase/firestore";
import app from "./credentials";

const db = getFirestore(app)

export const addToBookmarks = async (page) => {
  const addPage = await addDoc(collection(db, 'bookmarks'), {
    path: page
  })
}
// console.log("Document written with ID: ", docRef.id)