import { randomHexColorStartWith } from 'random-hex-color-generator'

export default function createKnownLinksData ({ data, routerIP, rate }) {
  let body = ''
  data.forEach((item) => {
    const color = randomHexColorStartWith('00').replace('#', '')
    body += `${routerIP}\t${item.id}\t${item.tag}\t${item.tag}\t${color}\t${rate}\n`
  })
  return body.trim()
}
