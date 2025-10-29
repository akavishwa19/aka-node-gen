import ejs from "ejs";
import { writeFile } from "./file.util.js";

async function renderTemplate(templatePath: string, data: Record<string, any>, outputPath: string) {
    const renderedFile = await ejs.renderFile(templatePath, data);
    writeFile(outputPath, renderedFile);
}

export {
    renderTemplate
}