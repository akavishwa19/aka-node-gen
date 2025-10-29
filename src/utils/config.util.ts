import fs from "fs";
import path from "path";

function getConfigPath(projectRoot: string): string {
    return path.join(projectRoot, '.aka-node-gen', 'config.json');
}

function ensureConfigDir(projectRoot: string): void {
    const configDir = path.dirname(getConfigPath(projectRoot));
    if (!fs.existsSync(configDir)) {
        fs.mkdirSync(configDir, {
            recursive: true
        })
    }
}

function saveConfig(projectRoot: string, config: Record<string, any>): void {
    ensureConfigDir(projectRoot);
    fs.writeFileSync(getConfigPath(projectRoot), JSON.stringify(config, null, 2), 'utf-8')
}

function loadConfig(projectRoot: string): Record<string, any> {
    const configPath = getConfigPath(projectRoot);
    if (fs.existsSync(configPath)) {
        const data = fs.readFileSync(configPath, 'utf-8');
        return JSON.parse(data);
    }
    return {}
}

export {
    getConfigPath,
    ensureConfigDir,
    saveConfig,
    loadConfig
}