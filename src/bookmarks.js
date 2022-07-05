import Category from "./category";
import Db from "./data/db";
import LocalBd from "./data/localDb";

class BookmarksPopup {
  constructor() {
    this.db = new Db()
    this.localDb = new LocalBd()
    this.category = new Category()
    this.page = {
      title: '',
      url: '',
      icon: '',
      categories: [this.category.inputCategory]
    };
  }

  setIcon() {
    chrome.action.setIcon({
      path: "./favorites-add.png"
    })
  }
  
 showSelect() {
  this.db.category.format()
    .then((categories) => {
    // transform in seter
      this.category.categoryList = categories
      this.category.filteredList = categories
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

  setPageIcon() {
    const $icon = document.getElementById('pageIcon')
    $icon.src = this.page.icon
  }

  setTilte() {
    this.page.title = document.getElementById('inputTitle').value
  }

  setPage() {
    this.getCurrentTab().then((res) => {
      this.page.title = res.title
      this.page.url = res.url
      this.page.icon = res.favIconUrl
      // console.log(res)
      this.setInputTitle()
      this.setPageIcon()
    })
  }

  setTitleBookmark() {
    this.inputName = document.getElementById('inputTitle')
    this.getCurrentTab().then((res) => {
      this.inputName.value = res.title
    })
  }

  async sendPages () {
    this.setTilte()
    // console.log(this.page, this.category.inputCategory, this.category.categoryList)
    this.db.addToBookmarks(this.page, this.category.inputCategory, this.category.categoryList)
    this.localDb.addPage(this.page)
  }
  
  async deletPages() {
    this.setTilte()
    this.db.deletBookmarks(this.page)
    this.localDb.deletePage(this.page)
  }
}

export default BookmarksPopup
