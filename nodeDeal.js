var fs = require('fs');
//渲染md转html工具
let markdowner = require('markdown-it');
var md = new markdowner({
    html: true,
    prefix: 'code-',
    linkify: true,
    typographer: true
});
//读取markdown转html的内容 
var mdData = fs.readFileSync('./test.md','utf-8');
var md2htmlData = md.render(mdData||'');   
console.log(md2htmlData)
//修改html内容以符合标准dom
var htmlContentData = md2htmlData.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "'");
//读取js内容
var jsContentData = fs.readFileSync('./test.js','utf-8');
//读取html模板
var htmlTempData = fs.readFileSync('./htmlTemp.html','utf-8');
//替换模板内容
var newHtmlData = htmlTempData.replace("htmlContent", htmlContentData).replace("javascriptContent", jsContentData);
fs.writeFileSync("./newTest.html", newHtmlData);