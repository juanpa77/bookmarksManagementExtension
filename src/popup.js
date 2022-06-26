import { addToBookmarks } from "./db";

async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
async function sendPages () {
  const page = await getCurrentTab()
  addToBookmarks(page.url)
}

function printTab() {
  const popup = document.getElementById('test')
  getCurrentTab().then((res) => popup.textContent = res.url)
}

function myAlert(){
  alert('hello world');
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('button').addEventListener('click', sendPages);
});