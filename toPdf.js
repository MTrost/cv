// TODO Refactor to TS; Add output to gitignore
const puppeteer = require('puppeteer')
;(async () => {
  let fileinput = process.argv[2]
  let fileoutput = process.argv[3]
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(fileinput, { waitUntil: 'networkidle2' })
  await page.pdf({
    path: fileoutput,
    format: 'A4',
    printBackground: true
  })

  browser.close()
})()
