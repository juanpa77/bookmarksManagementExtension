
import { FieldValue, getFirestore, arrayRemove } from "firebase/firestore/lite";
import { doc, updateDoc, arrayUnion, setDoc } from "firebase/firestore";
import app from "../credentials";
import Category from "./category";

class Db {
  constructor() {
    this.db = getFirestore(app)
    this.category = new Category(this.db) 
  }

  async addToBookmarks(page, category, categoryList) {
    const pageRef = doc(this.db, 'bookmarks', category)
    const pageData = {
      pages: arrayUnion({
        url: page.url,
        title: page.title
      })
    }
    console.log(categoryList.includes(category))
    if (categoryList.includes(category)) {
      await this.category.add(category)
      await  updateDoc(pageRef, pageData, { merge: true })
      return
    }
    await setDoc(pageRef, pageData)
  }

  async deletBookmarks(page, category) {
    const pageRef = doc(this.db, 'bookmarks', category)
    await updateDoc(pageRef, {
      pages: arrayRemove(page) 
    })
  }
}

export default Db
