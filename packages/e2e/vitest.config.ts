import { defineConfig } from 'vitest/config'
import FlakinessReporter from 'vite-reporter-flakiness'

export default defineConfig({
  test: {
    retry: 1,
    reporters: [
      new FlakinessReporter({
        outputFile: './test-results/flaky-tests.json',
        pretty: true,
      }),
    ],
  },
})
