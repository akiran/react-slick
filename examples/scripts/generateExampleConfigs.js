const fs = require('fs')
const babel = require('babel-core')
const ReactDOMServer = require('react-dom/server')

let configsObject
if (fs.existsSync('./configs.json')) {
  configsObject = require('./configs.json')
} else {
  configsObject = {}
}


const fetchExampleString = exampleName => {
  const exampleString = fs.readFileSync(`examples/${exampleName}.js`, 'utf-8')
  return exampleString
}

const extractConfig = exampleString => {
  const pattern = /(var|const)\s+settings\s*=\s*(\{(.|\n)+?\n\s*\};)/
  let extraction = exampleString.match(pattern)
  if (extraction) extraction = extraction[2]
  else return null
  const propPattern = /(\w+)\:((?:.|\n)+?)(?=(,\n)|(\n\s*};))/g
  let match
  let matchObject = {}
  do {
    match = propPattern.exec(extraction)
    if (!match) break
    if (!matchObject[match[1]]) {
      matchObject[match[1]] = match[2].trim()
    }
  } while (match)
  return matchObject
}

const generateExample = (fileName, index) => {
  const exampleName = fileName.substring(0, fileName.length-3)
  const exampleString = fetchExampleString(exampleName)
  const transformedString = babel.transform(exampleString, {plugins: [
    'transform-react-jsx',
    'babel-plugin-transform-object-rest-spread',
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-es2015-arrow-functions'
  ]}).code
  let config = extractConfig(transformedString)
  if (config) {
    configsObject[exampleName] = config
  } else {
    console.log('couldn\'t fetch config for fileName:', fileName)
  }
}



const exampleFiles = fs.readdirSync('examples')
  .filter(file => file.endsWith('.js') && file[0] === file[0].toUpperCase())
  .forEach((fileName, index) => generateExample(fileName, index))

fs.writeFileSync('examples/scripts/configs.json', JSON.stringify(configsObject, null, 4))

