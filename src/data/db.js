
import { FieldValue, getFirestore, arrayRemove } from "firebase/firestore/lite";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import app from "../credentials";
import Category from "./category";

class Db {
  constructor() {
    this.db = getFirestore(app)
    this.category = new Category(this.db) 
  }

  async addToBookmarks(page, category) {
    const pageRef = doc(this.db, 'bookmarks', category)
    updateDoc(pageRef, {
      pages: arrayUnion({
        url: page.url,
        title: page.title
      })
    },
    {
      merge: true
    })
  }

  async deletBookmarks(page, category) {
    const pageRef = doc(this.db, 'bookmarks', category)
    await updateDoc(pageRef, {
      pages: arrayRemove(page) 
    })
  }
}

export default Db
