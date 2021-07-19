import { readFileSync } from 'fs'

export default async function loadWalkFiles () {
  try {
    const descriptionData = await readFileSync('./descriptions.txt')
    console.log(`descriptions size: ${descriptionData.length}`)
    return Promise.resolve({ descriptionData })
  } catch (error) {
    return Promise.reject(error)
  }
}
