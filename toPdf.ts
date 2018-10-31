import * as puppeteer from 'puppeteer'

/* Project must be running to generate the pdf output */
;(async (): Promise<void> => {
  const url = process.argv[2]
  const path = process.argv[3]

  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto(url, { waitUntil: 'networkidle2' })
    await page.pdf({
      path,
      format: 'A4',
      printBackground: true
    })

    browser.close()
  } catch (err) {
    console.error(err)
  }
})()
