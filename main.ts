import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const entry = "Sorry my bug double-billed everyone; the compiler demanded exception handling, so I refunded everyone but the CEO. Closed: exception handled.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), `${entry}\n`, 'utf8');
