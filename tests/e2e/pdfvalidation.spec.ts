import { test, expect } from '@playwright/test';

import fs from 'fs';

import path from 'path';

import { readPDF } from '../../src/utils/pdfUtils.ts';

test('Validate pdf file', async ({ request }) => {

  // Create downloads folder if missing
  if (!fs.existsSync('downloads')) {

    fs.mkdirSync('downloads');

  }

  // PDF URL
  const pdfUrl =
    'https://www.orimi.com/pdf-test.pdf';

  // Download PDF
  const response = await request.get(pdfUrl);

  expect(response.ok()).toBeTruthy();

  // Convert to buffer
  const buffer = await response.body();

  // File path
  const filePath =
    path.join('downloads', 'sample.pdf');

  // Save PDF
  fs.writeFileSync(filePath, buffer);

  // Print absolute location
  console.log(
    'PDF Saved At:',
    path.resolve(filePath)
  );

  // Read PDF
  const text = await readPDF(filePath);

  console.log(text);

  // Validate content
  expect(text).toContain('PDF');

  // KEEP FILE FOR NOW
  fs.unlinkSync(filePath);

});