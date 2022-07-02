import BookmarksPopup from "./bookmarks"

const popup = new BookmarksPopup()

document.addEventListener('DOMContentLoaded', () => {
  const $wrapperCategory = document.getElementById('wrapperSelected')
  const $input = document.getElementById('selected')
  document.addEventListener('click', (evnt) => {
    if (evnt.target.id === 'btn-add') popup.sendPages()
    if (evnt.target.id === 'btn-delet') popup.deletPages()
  })

  $wrapperCategory.addEventListener('keydown', (event) => {
    const selectedCategory = popup.category.filteredList[popup.category.indexOver]
    if (event.key === 'Enter') popup.category.setCategorySelected(selectedCategory)
    popup.category.moveOver(event.key)
    console.log(event.key)
  })
  
  $wrapperCategory.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target.id === 'selected') $input.select()
  })

  document.getElementById('category-options')
    .addEventListener('click', (e) => {
      const selectedCategory = e.target.dataset.value
      popup.category.setCategorySelected(selectedCategory)
    })
    
  popup.category.onChangeInput()
  popup.setPage()
  popup.showSelect()
});