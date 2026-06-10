import fs from 'fs';

// Direct parser import
import pdf from 'pdf-parse/lib/pdf-parse.js';

export async function readPDF(filePath: string): Promise<string> {

    // Read file buffer
    const buffer = fs.readFileSync(filePath);

    // Parse PDF
    const data = await pdf(buffer);

    // Return extracted text
    return data.text;

}