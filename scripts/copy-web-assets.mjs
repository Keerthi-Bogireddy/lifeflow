import { copyFile, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const webDirectory = path.join(projectRoot, 'www');

await mkdir(webDirectory, { recursive: true });
await copyFile(
  path.join(projectRoot, 'lifeflow_personal_management_hub.html'),
  path.join(webDirectory, 'index.html')
);
await copyFile(
  path.join(projectRoot, 'lifeflow.generated.css'),
  path.join(webDirectory, 'lifeflow.generated.css')
);

const vendorFiles = ['chart.umd.min.js', 'lucide.min.js'];
const webVendorDirectory = path.join(webDirectory, 'vendor');
await mkdir(webVendorDirectory, { recursive: true });
await rm(path.join(webVendorDirectory, 'tailwindcss.browser.js'), { force: true });
await rm(
  path.join(projectRoot, 'android', 'app', 'src', 'main', 'assets', 'public', 'vendor', 'tailwindcss.browser.js'),
  { force: true }
);

await Promise.all(
  vendorFiles.map(file =>
    copyFile(path.join(projectRoot, 'vendor', file), path.join(webVendorDirectory, file))
  )
);
