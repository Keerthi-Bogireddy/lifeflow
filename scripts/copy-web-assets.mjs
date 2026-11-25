import { copyFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const webDirectory = path.join(projectRoot, 'www');

await mkdir(webDirectory, { recursive: true });
await copyFile(
  path.join(projectRoot, 'lifeflow_personal_management_hub.html'),
  path.join(webDirectory, 'index.html')
);
