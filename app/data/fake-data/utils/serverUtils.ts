// app/data/fake-data/utils/serverUtils.ts

import { readFileSync } from 'fs';
import path from 'path';

// Utility function to read the content of a file
export const readFileContent = (fileName: string): string => {
    const filePath = path.join(process.cwd(), fileName);
    return readFileSync(filePath, 'utf-8');
};

// Utility function to read multiple files and return their content
export const readMultipleFiles = (fileNames: string[]): Record<string, string> => {
    const fileContents: Record<string, string> = {};
    fileNames.forEach(fileName => {
        fileContents[fileName] = readFileContent(fileName);
    });
    return fileContents;
};
