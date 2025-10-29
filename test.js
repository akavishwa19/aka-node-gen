import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const readFile = ()=>{
    try {
        const _filename=fileURLToPath(import.meta.url);
        const _dirname = path.dirname(_filename);
        const filePath = path.join(_dirname,'/package.json');
        console.log(filePath)
        const data = fs.readFileSync(filePath,'utf-8');
        let jsonData=JSON.parse(data);
        jsonData.author='edited name';

        fs.writeFileSync(filePath,JSON.stringify(jsonData,null,2))

    } catch (error) {
        console.log(error)
    }
};
readFile()

