const removeSideberySnapshotsFromHistory = async () => {

  let downloads = await browser.downloads.search({ query: ['snapshot'] });
  const sideberySnapshots = downloads.filter(dl => dl.byExtensionName = 'Sidebery')

  sideberySnapshots.forEach(snapshot => {
    browser.downloads.erase({id: snapshot.id});
  })
}

removeSideberySnapshotsFromHistory()

setInterval(removeSideberySnapshotsFromHistory, 60 * 1000)
