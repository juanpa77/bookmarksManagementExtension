import LocalBd from "./data/localDb";

let color = '#3aa757';
const localDb = new LocalBd()

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

async function getCurrentTab () {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  console.log(tab)
  return tab;
}

function setIcon(path) {
  chrome.action.setIcon({
    path
  })
}

async function isInBookmarks () {
  const currentTab = await getCurrentTab()
  const tabUrl = currentTab.url
  const reslut = await localDb.getPage(tabUrl)
  console.log(reslut, tabUrl)
  reslut !== undefined
  ? setIcon("./favorites-add.png")
  : setIcon("./favorites.png")
 console.log(reslut) 
}

chrome.tabs.onActivated.addListener(isInBookmarks)
chrome.webNavigation.onCompleted.addListener(isInBookmarks)
// chrome.tabs.onCreated.addListener(isInBookmarks)
// chrome.history.onVisited.addListener(isInBookmarks)
// chrome.tabs.onUpdated.addListener(isInBookmarks)