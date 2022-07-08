import "./sass/main.scss"
import BookmarksPopup from "./bookmarks"

const popup = new BookmarksPopup()

document.addEventListener('DOMContentLoaded', () => {
  const $wrapperCategory = document.getElementById('wrapperSelected')
  const $input = document.getElementById('selected')
  document.addEventListener('click', (evnt) => {
    const $elementId = evnt .target.id
    if ($elementId === 'btn-add') popup.sendPages()
    if ($elementId === 'btn-delet') popup.deletPages()
    if ($elementId === 'wrapperSelected' || $elementId === 'selected') $input.select()
  })

  $wrapperCategory.addEventListener('keydown', (event) => {
    const selectedCategory = popup.category.filteredList[popup.category.indexOver]
    if (event.key === 'Enter') popup.category.setCategorySelected(selectedCategory)
    popup.category.moveOver(event.key)
  })
  
  document.getElementById('category-options')
    .addEventListener('click', (e) => {
      const selectedCategory = e.target.dataset.value
      popup.category.setCategorySelected(selectedCategory)
    })
    
  popup.category.onChangeInput()
  popup.setPage()
  popup.showSelect()
  // popup.setIcon()
  // popup.localDb.getPage('d').then((res) => console.log(res))
});