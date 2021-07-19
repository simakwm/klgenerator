import { writeFileSync } from 'fs'

export default async function writeKnownLinksFile (data) {
  try {
    const results = await writeFileSync('knownlinks', data)
    return Promise.resolve(results)
  } catch (error) {
    return Promise.reject(error)
  }
}
