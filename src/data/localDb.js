
import { openDB } from 'idb'

class LocalBd {
  constructor(){
    // this.storeName = 'pages'
    // this.db
  }

  async open() {
    this.db = await openDB('bookmarks', 1, {
      upgrade(db) {
        db.createObjectStore('pages', {
          keyPath: 'url'
        })
      }
    })
  }

  async addPage(page) {
    await this.open()
    console.log(page)
    await this.db.add('pages', page)
  }
  
  async deletePage(page) {
    await this.open()
    await this.db.delete('pages', page.url)
  }

  async getPage(key) {
    await this.open()
    return await this.db.get('pages', key);
  }
}

export default LocalBd
