const marked = require('marked')
module.exports = source =>{
   
    const html = marked(source)
    // return `module.export = ${JSON.stringify(html)}`
    return html
}