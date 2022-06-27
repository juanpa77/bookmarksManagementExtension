
import { getFirestore } from "firebase/firestore/lite";
import { collection, addDoc, doc, updateDoc, arrayUnion, setDoc, query, where, getDoc } from "firebase/firestore";
import app from "./credentials";

export const addToBookmarks = async (page) => {
  const addPage = await addDoc(collection(db, 'bookmarks'), {
    path: page.url,
    title: page.title
  })
}

class Db {
  constructor() {
    this.db = getFirestore(app)
  }

  async getCategories() {
    const categoryRef = collection(db, 'category')
    const test = await getDoc(categoryRef)
    return test
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

  adCategory() {
    
  }

}

export default Db

// console.log("Document written with ID: ", docRef.id)