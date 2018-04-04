const fs = require('fs')
const exampleConfigs = require('./configs.json')
const exec = require('child_process').exec

var procCode = exec('cp -r node_modules/slick-carousel/slick/fonts node_modules/slick-carousel/slick/ajax-loader.gif docs/')

const toString = obj => {
  let ret = '{\n'
  Object.keys(obj).forEach(key => {
    if (obj[key].match('function') ||
      obj[key].match('React.createElement'|| obj[key].match('\n'))) {
      return
    }
    if (key.match('style') || key.match('src') || key.match('border') ||
      key.match('settings') || key.match('responsive')) return
    ret += '\t' + key + ': ' + obj[key] + ',\n'
  })
  ret += '}\n'
  return ret
}

let bodyHTML = ''
let bodyScript = ''
Object.keys(exampleConfigs).forEach(key => {
  const props = exampleConfigs[key]['props']
  const children = exampleConfigs[key]['children']
  if (!props || !children) return
  bodyHTML += `
    <div>
      <h2>${key}</h2>
      ${children}
    </div>
  `
  bodyScript += `
$('[name="${key}"').slick(${toString(props)})
  `
})

let HTMLString = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./slick.css">
    <link rel="stylesheet" href="./slick-theme.css">
    <link rel="stylesheet" href="./docs.css">
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
    <script type="text/javascript" src="../node_modules/slick-carousel/slick/slick.min.js"></script>
    <!--
    <style>
      .slick-dots li button:before {
        content: "•";
      }
      .slick-prev:before {
        content: "←";
      }
      .slick-next:before {
        content: "→";
      }
      -->
    </style>
  </head>
  <body>
    <div class="content">
      ${bodyHTML}
    </div>
    <script type='text/javascript'>
      $(document).on('ready', function() {
        ${bodyScript}
      })
    </script>
  </body>
</html>
`

fs.writeFileSync('docs/jquery.html', HTMLString)
