import { getExecutablePath } from '@replayio/playwright'
import { Playwright } from './playwright'
export { quit } from './playwright'

export class Replay extends Playwright {
  async launchBrowser(browserName: string, launchOptions: Record<string, any>) {
    const browser: any = browserName === 'chrome' ? 'chromium' : browserName
    return super.launchBrowser(browserName, {
      ...launchOptions,
      executablePath: getExecutablePath(browser) || undefined,
      env: {
        RECORD_ALL_CONTENT: 1,
        RECORD_REPLAY_METADATA_FILE: '/tmp/replay-metadata',
      },
    })
  }
}
