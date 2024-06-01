import { dlopen } from 'node:process';
import { fileURLToPath } from 'node:url';
const module = { exports: {} };
dlopen(module, fileURLToPath(new URL('index.node', import.meta.url)));
export const { hello } = module.exports