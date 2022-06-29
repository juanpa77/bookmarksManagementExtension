import BookmarksPopup from "./bookmarks"

const popup = new BookmarksPopup()

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-add').addEventListener('click', () => popup.sendPages());
  document.getElementById('wrapperSelected').addEventListener('click', (e) => {
    if (e.target.id === 'btn-canel') popup.category.cancelFormNewCategory()
    popup.category.toggelVisibility()
  })
  document.getElementById('category-options').addEventListener('click', (e) => popup.category.setCategorySelected(e))
  popup.setTitleBookmark()
  popup.showSelect()
  // console.log(popup.category.categoryList)
});