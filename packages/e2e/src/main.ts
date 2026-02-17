import { exec } from 'node:child_process'
import { promisify } from 'node:util'
const execAsync = promisify(exec)

async function runVitest() {
  try {
    const { stdout, stderr } = await execAsync('vitest')
    console.log(stdout)
    console.error(stderr)
  } catch (err) {
    console.error(err)
  }
}

await runVitest()
console.log('Done')
