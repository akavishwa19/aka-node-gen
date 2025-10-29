import fs from "fs";
import path from "path";

function ensureDir(dirPath: string): void {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true })
    }
}

function writeFile(filePath: string, data: string): void {
    ensureDir(path.dirname(filePath));
    fs.writeFileSync(filePath, data, 'utf-8');
}

function copyFile(src: string, dest: string): void {
    ensureDir(path.dirname(dest));
    fs.copyFileSync(src, dest);
}

function fileExists(filePath: string): boolean {
    return fs.existsSync(filePath)
}

export {
    ensureDir,
    writeFile,
    copyFile,
    fileExists
}