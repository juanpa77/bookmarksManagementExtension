import Category from "./category";
import Db from "./data/db";

class BookmarksPopup {
  constructor() {
    this.db = new Db()
    this.category = new Category(this.db.category)
    this.inputName;
    this.inputCategory;
  }

 showSelect() {
  this.db.category.format()
    .then((categories) => {
    // transform in seter
      this.category.categoryList = categories
      console.log(categories)
      this.category.printCategoryList()
    })
  }
  
  async getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  setTitleBookmark() {
    this.inputName = document.getElementById('inputTitle')
    this.getCurrentTab().then((res) => this.inputName.value = res.title)
  }

  setCategory() {
    const inputValue = document.getElementById('inputCategory').value
    this.inputCategory = inputValue
    console.log(inputValue)
  }

  async sendPages () {
    const page = await this.getCurrentTab()
    this.setCategory()
    this.db.addToBookmarks(page, this.inputCategory)
    console.log(this)
  }
    
}

export default BookmarksPopup
