
class Category {
  constructor() {
    this.categoryList
    this.filteredList
    this.isCategoryListVisible = false
    this.inputCategory = 'inbox'
    this.indexOver = 0
  }

  filterCategories() {
    const reslut = this.categoryList.filter((category) => {
      if (category.includes(this.inputCategory)) return category
    })
    this.filteredList = reslut
  }
  
  setInputCategory(category) {
    this.inputCategory = category
  }

  removeClass(elemtns, className) {
    const elemntLis = Array.from(elemtns)
    elemntLis.forEach((element) => element.classList.remove(className))
  }
  
  filterOver() {
    const $wrapperCategory = document.getElementById('category-options').childNodes
    this.removeClass($wrapperCategory, 'filterSelecter')
    if ($wrapperCategory.length !== 0) $wrapperCategory[this.indexOver].classList.add('filterSelecter')
  }

  moveOver(key) {
    const totalItem = this.filteredList.length - 1
    const isLast = this.indexOver >= totalItem
    const isFirst = this.indexOver <= 0

    if (key === 'ArrowDown' && isLast === false) {
      this.indexOver += 1 
      this.filterOver()
    }

    if (key === 'ArrowUp' && isFirst === false) {
      this.indexOver -= 1 
      this.filterOver()
    }
  }

  setCategorySelected(category) {
    const $inputCategory = document.getElementById('selected')
    this.setInputCategory(category)
    $inputCategory.value = this.inputCategory 
    this.toggelVisibility()
  }

  onChangeInput() {
    const $inputCategory = document.getElementById('selected')
    $inputCategory.addEventListener('input', (evnt) => {
      if (this.isCategoryListVisible === false) this.toggelVisibility()
      this.setInputCategory(evnt.target.value)
      this.printCategoryList()
      this.indexOver = 0
    })
  }
  
  toggelVisibility() {
    const categoryList = document.getElementById('category-options')
    this.isCategoryListVisible
      ? categoryList.classList.remove('category-options--visible')
      : categoryList.classList.add('category-options--visible')
    this.isCategoryListVisible = !this.isCategoryListVisible
  }

  printCategoryList() {
    const $wrapperCategory = document.getElementById('category-options')
    while($wrapperCategory.firstChild) {
      $wrapperCategory.removeChild($wrapperCategory.firstChild)
    }
    this.filterCategories()
    this.inputCategory.length === 0? this.createCategoryList(this.categoryList)
    : this.createCategoryList(this.filteredList) 
    this.filterOver()
  }

  createCategoryList(categories) {
    categories.map((category) => {
      const $wrapperCategory = document.getElementById('category-options')
      const $newCategory = document.createElement('li')
      $newCategory.setAttribute('data-value', category)
      $newCategory.appendChild(document.createTextNode(category))
      return $wrapperCategory.appendChild($newCategory)
    })
  }
}

export default Category