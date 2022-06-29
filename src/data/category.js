import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore/lite";

class Category {
  constructor(db){
    this.db = db
  }
  
  async format() {
    const categories = (await this.get()).data();
    return categories.name;
  }

  async get() {
    const categoryRef = doc(this.db, 'bookmarks', 'category')
    const test = await getDoc(categoryRef)
    return test
  }
  
  async add(name) {
    const categoryRef = doc(this.db, 'bookmarks', 'category')
    updateDoc(categoryRef,{ name: arrayUnion(name) }, { merge: true })
  }
}

export default Category
