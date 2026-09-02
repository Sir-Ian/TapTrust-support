import { readFile } from 'node:fs/promises';
import path from 'node:path';

const buildDirectory = path.resolve('build');
const spaEntryPoint = await readFile(path.join(buildDirectory, 'index.html'));
const legalRoutes = ['terms', 'privacy'];

for (const route of legalRoutes) {
  const routeEntryPoint = path.join(buildDirectory, route, 'index.html');
  let routeDocument;

  try {
    routeDocument = await readFile(routeEntryPoint);
  } catch {
    throw new Error(`Missing build entry point for /${route}: ${routeEntryPoint}`);
  }

  if (!routeDocument.equals(spaEntryPoint)) {
    throw new Error(`Build entry point for /${route} does not match the generated SPA document`);
  }
}

console.log(`Validated SPA entry points for: ${legalRoutes.map((route) => `/${route}`).join(', ')}`);
