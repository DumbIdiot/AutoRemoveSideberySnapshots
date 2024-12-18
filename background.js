const removeSideberySnapshotsFromHistory = async () => {

  let downloads = await browser.downloads.search({ query: ['snapshot'] });
  const sideberySnapshots = downloads.filter(dl => dl.byExtensionName === 'Sidebery');

  sideberySnapshots.forEach(snapshot => {
    browser.downloads.erase({id: snapshot.id});
  });
};

browser.downloads.onChanged.addListener((downloadItem) => {
  if (downloadItem.state && downloadItem.state.current === 'complete') {
    setTimeout(removeSideberySnapshotsFromHistory, 5000);
  }
});
