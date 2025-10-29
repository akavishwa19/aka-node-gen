export interface PathUtil {
    _dirname: string;
    _filename: string;
    resolvedPath: (...args: string[]) => string;
}

