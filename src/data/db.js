
import { getFirestore, arrayRemove, addDoc } from "firebase/firestore/lite";
import { doc, updateDoc, arrayUnion, setDoc, collection, getDocs } from "firebase/firestore";
import app from "../credentials";
import Category from "./category";

class Db {
  constructor() {
    this.db = getFirestore(app)
    this.category = new Category(this.db) 
  }

  async addToBookmarks(pageData, category, categoryList) {
    const bookmarksRef = collection(this.db, 'bookmarks')
    await addDoc(bookmarksRef, pageData)
    if (!categoryList.includes(category)) {
      await this.category.add(category)
      return
    }
  }

  async deletBookmarks(pageDelet) {
    const querySnapshot = await getDocs(collection(this.db, 'bookmarks'));
    querySnapshot.forEach((category) => {
      const pageRef = doc(this.db, 'bookmarks', category.id)
      if (category.id !== 'category') {
        const pages = category.data().pages
        const pageRefDelet = pages.find(page => page.name === pageDelet.name)
        updateDoc(pageRef, {
          pages: arrayRemove(pageRefDelet) 
        })
        // console.log(doc.id, " => ", doc.data());
      }
    }) 
  }
}

export default Db
