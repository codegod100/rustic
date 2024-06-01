import { dlopen } from 'node:process';
import { fileURLToPath } from 'node:url';
const module = {
    exports: {} as {
        /**
         * Welcome message
         */
        hello: (a: string) => string;
        /**
         * CPU count
         */
        cpu_count: number;
        /**
         * Current time
         */
        now: () => Date
    }
};

dlopen(module, fileURLToPath(new URL('index.node', import.meta.url)));
export const { hello, cpu_count, now } = module.exports