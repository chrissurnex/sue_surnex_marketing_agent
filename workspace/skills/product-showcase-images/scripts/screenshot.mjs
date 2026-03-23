#!/usr/bin/env node
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const [, , inputPath, outputPath, widthArg, heightArg] = process.argv;

if (!inputPath || !outputPath) {
  console.error('Usage: node scripts/screenshot.mjs <input.html> <output.png> [width] [height]');
  process.exit(1);
}

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  try {
    ({ chromium } = await import('playwright-core'));
  } catch {
    console.error('Missing dependency: install playwright or playwright-core, or render the HTML with the browser tool.');
    process.exit(1);
  }
}

const width = Number(widthArg || 1200);
const height = Number(heightArg || 900);
const url = pathToFileURL(path.resolve(inputPath)).href;

const launchOptions = { headless: true };
if (process.env.PLAYWRIGHT_EXECUTABLE_PATH) {
  launchOptions.executablePath = process.env.PLAYWRIGHT_EXECUTABLE_PATH;
}

let browser;
try {
  browser = await chromium.launch(launchOptions);
} catch (error) {
  console.error('Could not launch Chromium. Set PLAYWRIGHT_EXECUTABLE_PATH to a valid browser binary, or use the browser tool.');
  console.error(String(error));
  process.exit(1);
}

const page = await browser.newPage({
  viewport: { width, height },
  deviceScaleFactor: 2,
});

await page.goto(url, { waitUntil: 'networkidle' });
await page.screenshot({ path: outputPath, type: 'png' });
await browser.close();

console.log(`Saved screenshot to ${outputPath} (${width}x${height} @2x)`);
