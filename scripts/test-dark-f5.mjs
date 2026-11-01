import { chromium } from 'playwright'

async function run() {
  console.log('Launching browser...')
  // Try channel chrome or msedge, fallback to bundled chromium
  let browser
  try {
    browser = await chromium.launch({ channel: 'msedge', headless: true })
  } catch {
    try {
      browser = await chromium.launch({ channel: 'chrome', headless: true })
    } catch {
      browser = await chromium.launch({ headless: true })
    }
  }

  const context = await browser.newContext()
  const page = await context.newPage()

  // 1. Visit page
  console.log('Navigating to http://localhost:5174 ...')
  await page.goto('http://localhost:5174')

  // 2. Set theme to dark in localStorage
  await page.evaluate(() => {
    localStorage.setItem('theme', 'dark')
  })

  // 3. Track backgroundColor when DOM is loading
  await page.addInitScript(() => {
    window.__bgColors = []
    const check = (stage) => {
      const htmlHasDark = document.documentElement.classList.contains('dark')
      const bodyBg = document.body ? window.getComputedStyle(document.body).backgroundColor : 'no-body'
      window.__bgColors.push({ stage, htmlHasDark, bodyBg })
    }
    // Check as early as possible
    document.addEventListener('readystatechange', () => {
      check('readystatechange-' + document.readyState)
    })
    document.addEventListener('DOMContentLoaded', () => {
      check('DOMContentLoaded')
    })
  })

  // 4. Reload page (F5)
  console.log('Reloading page (F5)...')
  await page.reload({ waitUntil: 'networkidle' })

  const results = await page.evaluate(() => window.__bgColors)
  console.log('Recorded stages on F5 reload:', JSON.stringify(results, null, 2))

  const finalHtmlClass = await page.evaluate(() => document.documentElement.className)
  const finalBg = await page.evaluate(() => window.getComputedStyle(document.body).backgroundColor)
  console.log('Final HTML class:', finalHtmlClass)
  console.log('Final body background:', finalBg)

  await browser.close()
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})

