import Category from "./category";
import Db from "./data/db";

class BookmarksPopup {
  constructor() {
    this.db = new Db()
    this.category = new Category(this.db.category)
    this.inputCategory = 'inbox';
    this.page = {
      title: '',
      url: ''
    };
  }

 showSelect() {
  this.db.category.format()
    .then((categories) => {
    // transform in seter
      this.category.categoryList = categories
      this.category.printCategoryList()
    })
  }
  
  async getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  setInputTitle() {
    const inputName = document.getElementById('inputTitle')
    inputName.value = this.page.title
  }

  setTilte() {
    this.page.title = document.getElementById('inputTitle').value
  }

  setPage() {
    this.getCurrentTab().then((res) => {
      this.page.title = res.title
      this.page.url = res.url
      this.setInputTitle()
    })
  }

  setTitleBookmark() {
    this.inputName = document.getElementById('inputTitle')
    this.getCurrentTab().then((res) => {
      this.inputName.value = res.title
    })
  }

  setCategory() {
    const inputValue = document.getElementById('selected').textContent
    // this.inputCategory = inputValue
    console.log(inputValue)
  }

  async sendPages () {
    this.setTilte()
    this.setCategory()
    console.log(this.inputCategory)
    this.db.addToBookmarks(this.page, this.inputCategory)
  }
  
  async deletPages() {
    this.setTilte()
    this.setCategory()
    this.db.deletBookmarks(this.page, this.inputCategory)
  }
}

export default BookmarksPopup
