import BookmarksPopup from "./bookmarks"

const popup = new BookmarksPopup()

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (evnt) => {
    if (evnt.target.id === 'btn-add') popup.sendPages()
    if (evnt.target.id === 'btn-delet') popup.deletPages()

  })
  
  document.getElementById('wrapperSelected').addEventListener('click', (e) => {
    if (e.target.id === 'btn-canel') popup.category.cancelFormNewCategory()
    popup.category.toggelVisibility()
  })
  document.getElementById('category-options').addEventListener('click', (e) => popup.category.setCategorySelected(e))
  popup.setPage()
  popup.showSelect()
});