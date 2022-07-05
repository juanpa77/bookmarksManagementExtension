
import { openDB } from 'idb'

class LocalBd {
  constructor(){
    this.storeName = 'pages'
    // this.db
  }

  async open() {
    this.db = await openDB('bookmarks', 1, {
      upgrade(db) {
        db.createObjectStore(this.storeName, {
          keyPath: 'url'
        })
      }
    })
  }

  async addPage(page) {
    await this.open()
    console.log(page)
    await this.db.add(this.storeName, page)
  }
  
  async deletePage(page) {
    await this.open()
    await this.db.delete(this.storeName, page.url)
  }
}

export default LocalBd
