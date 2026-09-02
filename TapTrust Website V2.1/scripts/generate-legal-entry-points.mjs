import { copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const buildDirectory = path.resolve('build');
const spaEntryPoint = path.join(buildDirectory, 'index.html');
const legalRoutes = ['terms', 'privacy'];

for (const route of legalRoutes) {
  const routeDirectory = path.join(buildDirectory, route);
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(spaEntryPoint, path.join(routeDirectory, 'index.html'));
}

console.log(`Generated SPA entry points for: ${legalRoutes.map((route) => `/${route}`).join(', ')}`);
