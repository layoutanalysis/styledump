const puppeteer = require('puppeteer');
const extend = require('extend');
const allCSSProperties = require('known-css-properties').all;

module.exports = async function dumpComputedStyles (url, opts){
        var opts = opts || {};
        var defaultOptions = {
            timeout: 60000
        }

        var options = extend({}, defaultOptions, opts);
        //get rid of vendor-specific properties
        var cssProperties = allCSSProperties.filter(prop => !prop.startsWith('-'))

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto(process.argv[2], {waitUntil: 'load', timeout: options.timeout});
        const result = await page.evaluate((cssProperties) => {
            
            try {
                function SetToJSON (key, value) {
                    if (typeof value === 'object' && value instanceof Set) {
                    return [...value];
                    }
                    return value;
                }
                
                var extractedProps = {};
                
                cssProperties.forEach(prop => {extractedProps[prop] = new Set()})
                
                document.querySelectorAll('body *').forEach(el =>{
                    var style = window.getComputedStyle(el,null);
                    cssProperties.forEach(prop => extractedProps[prop].add(style[prop]))
                });

                var jsonProps = {};
                Object.entries(extractedProps).forEach(entry => {
                    var usedValues = Array.from(entry[1]);
                    // do not include unused properties in the result
                    if (JSON.stringify(usedValues) !== "[null]"){
                        jsonProps[entry[0]] = usedValues;
                    }
                })

                JSON.stringify({
                    properties: jsonProps,
                    url: location.href
                }, SetToJSON);

                return JSON.stringify({properties: jsonProps, url: location.href, title: document.title}, SetToJSON); // return our serialized JSON data
            } catch(err) {
                console.log("ERROR! " + err.toString());
            }
        },cssProperties);
        await browser.close();
        return result; 
}
