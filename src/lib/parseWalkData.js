function createTagName (interfaceName) {
  return interfaceName
    .replace(/-/g, '_')
    .replace(/\./g, '_')
    .replace(/\//g, '_')
    .replace('igabitEthernet', '')
    .replace('rt_channel', '')
}

function isValid ({ data, ignoredInterfaces }) {
  let result = true
  ignoredInterfaces.forEach((item) => {
    if (data.search(item) !== -1) {
      result = false
    }
  })
  return result
}

function parseDescriptions ({ data, ignoredInterfaces }) {
  const results = data.map((item) => {
    const valuePart = item.replace('IF-MIB::ifDescr.', '')
    if (valuePart) {
      const indexPart = valuePart.split('=')[0]
      const descPart = valuePart.split(': ')[1]
      const tag = createTagName(descPart)
      if (!isValid({ data: descPart, ignoredInterfaces })) {
        return null
      }
      return { id: +indexPart, tag, description: descPart }
    }
    return null
  })
  const filteredResults = results.filter((item) => item !== null)
  return filteredResults
}

export default function parseWalkData ({ descriptionData, ignoredInterfaces }) {
  const descriptionStr = descriptionData.toString()
  const descriptionArr = descriptionStr.split('\n')
  const parsed = parseDescriptions({ data: descriptionArr, ignoredInterfaces })
  return parsed
}
