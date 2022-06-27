import Db from "./db";

class BookmarksPopup {
  constructor() {
    this.db = new Db()
    this.inputName;
    this.inputCategory;
    this.categoryList;
    this.isCategoryListVisible = false
  }
  
  toggelVisibility() {
    const categoryList = document.getElementById('category-options')
    this.isCategoryListVisible
      ? categoryList.classList.remove('category-options--visible')
      : categoryList.classList.add('category-options--visible')
    this.isCategoryListVisible = !this.isCategoryListVisible
  }
  
  setCategoryList(newCategories) {
    const $wrapperCategory = document.getElementById('category-options')
    newCategories.map((category) => {
      const $newCategory = document.createElement('li')
      $newCategory.appendChild(document.createTextNode(category))
      return $wrapperCategory.appendChild($newCategory)
    })
  }
  
  async getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  setTitleTab() {
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
    console.log(this)
    this.db.addToBookmarks(page, this.inputCategory)
  }
    
}

export default BookmarksPopup
