import BookmarksPopup from "./bookmarks"

const popup = new BookmarksPopup()

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-add').addEventListener('click', () => popup.sendPages());
  document.getElementById('selected').addEventListener('click', () => popup.toggelVisibility())
  popup.setCategoryList(['test', 'test2'])
  popup.setTitleBookmark()
});