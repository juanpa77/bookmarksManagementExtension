
import { getFirestore } from "firebase/firestore/lite";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
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
}

export default Db
