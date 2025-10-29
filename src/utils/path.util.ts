import path from "path";
import { fileURLToPath } from "url";
import { PathUtil } from "../types/pathUtil.types.js";

function getPath(importMetaUrl: string): PathUtil {
    const _filename = fileURLToPath(importMetaUrl);
    const _dirname = path.dirname(_filename);

    //helper to resolve the current path
    const resolvedPath = (...args: string[]): string => path.resolve(_dirname, ...args);

    return {
        resolvedPath,
        _dirname,
        _filename
    }

}

function getRootPath(): string {
    const _filename = fileURLToPath(import.meta.url);
    const _dirname = path.dirname(_filename);
    const rootpath = path.join(_dirname, '../../')

    return rootpath;
}

export { getPath, getRootPath }