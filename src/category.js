
class Category {
  constructor(dbCatigory) {
    this.dbCategory = dbCatigory
    this.categoryList
    this.isCategoryListVisible = false
    this.selectedCategory = 'inbox'
    this.inputCategory
  }
  
  setCategory() {
    const inputValue = document.getElementById('input-newCategory').value
    this.inputCategory = inputValue
    console.log(inputValue)
    return inputValue
  }
  
  cancelFormNewCategory() {
    const $wrapperSelected = document.getElementById('wrapperSelected')
    while($wrapperSelected.firstChild) {
      $wrapperSelected.removeChild($wrapperSelected.firstChild)
    }
    const $newSelected = document.createElement('span')
    $newSelected.classList.add('selected')
    $newSelected.id = 'selected'
    $wrapperSelected.appendChild($newSelected)
  }

  addFormNewCategory() {
    const $wrapperSelected = document.getElementById('wrapperSelected')
    const $selected = document.getElementById('selected')
    $wrapperSelected.removeChild($selected)
    const $inputCategory = document.createElement('input')
    $inputCategory.id = 'input-newCategory'
    const $cancelBtn = document.createElement('div')
    $cancelBtn.classList.add('btn-cancel')
    $cancelBtn.id = 'btn-canel'
    $cancelBtn.textContent = 'X'
    $wrapperSelected.appendChild($inputCategory)
    $wrapperSelected.appendChild($cancelBtn)
    this.isCategoryListVisible = false
    this.toggelVisibility()
    this.addEventSubmit()
  }

  addEventSubmit() {
    document.getElementById('input-newCategory').addEventListener('keydown', (evnt) => {
      if (evnt.key === 'Enter' ) this.dbCategory.add(this.setCategory())
    })
  }
  
  setCategorySelected(e) {
    const $selected = document.getElementById('selected')
    this.selectedCategory = e.target.dataset.value
    $selected.textContent = this.selectedCategory 
    if (this.selectedCategory === 'newCategory') {
      this.addFormNewCategory()

    }
    this.toggelVisibility()
    console.log(e.target.dataset.value)
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
    this.categoryList.map((category) => {
      const $newCategory = document.createElement('li')
      $newCategory.setAttribute('data-value', category)
      $newCategory.appendChild(document.createTextNode(category))
      return $wrapperCategory.appendChild($newCategory)
    })
  }
}

export default Category