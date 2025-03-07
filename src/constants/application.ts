export const INDEXED_DEPTH = 3 // h3まではインデックスされる。

// ログイン状態の確認用にアクセスするドキュメント
export const PRIVATE_DOC_PATH = '/private/basics/romu-hanako-details.md'

// プロダクト > コンポーネントのStorybook関連の定義
import packageInfo from 'smarthr-ui/package.json'

export const SHRUI_GITHUB_RAW = `https://raw.githubusercontent.com/kufu/smarthr-ui/v${packageInfo.version}`
export const SHRUI_STORYBOOK_IFRAME = 'https://smarthr-ui.netlify.app/iframe.html'

export const PATTERNS_STORYBOOK_URL = `https://main--62f0ae48c21b0728fd1a5c85.chromatic.com/`
