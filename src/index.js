import loadWalkFiles from './lib/loadWalkFiles.js'
import parseWalkData from './lib/parseWalkData.js'
import createKnownLinksData from './lib/createKnownLinksData.js'
import writeKnownLinksFile from './lib/writeKnownLinksFile.js'

import config from '../config.js'

async function main () {
  try {
    const { routerIP, ignoredInterfaces, rate } = config
    const walkFilesData = await loadWalkFiles()
    const { descriptionData } = walkFilesData
    const JSONtoWorkWith = parseWalkData({ descriptionData, ignoredInterfaces })
    const knownLinksData = createKnownLinksData({ data: JSONtoWorkWith, routerIP, rate })
    const results = await writeKnownLinksFile(knownLinksData)
    return Promise.resolve(results)
  } catch (error) {
    return Promise.reject(error)
  }
}

main()
  .then((results) => console.log(results))
  .catch((error) => console.error(error))
