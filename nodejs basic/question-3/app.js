import os from 'os';
import { promises as fs } from 'fs';

async function main() {
  try {
    console.log(`Free memory: ${os.freemem()} bytes`);
    console.log(`CPU cores: ${os.cpus().length}`);

    const dataFile = 'data.txt';
    const readmeFile = 'Readme.md';

    await fs.writeFile(dataFile, 'Hello World');
    await fs.writeFile(readmeFile, '## This is first line in Readme');

    const data = await fs.readFile(dataFile, 'utf-8');
    console.log('data.txt content:', data);

    await fs.appendFile(dataFile, '\nThis is second line');

    await fs.unlink(readmeFile);
  } catch (error) {
    console.error('Error during file operations:', error);
  }
}

main();
