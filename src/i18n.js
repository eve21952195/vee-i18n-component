import { createI18n } from "vue-i18n" // 引入 i18n

import zh from "./language/zh-TW.json"
import en from "./language/en-US.json"
import ja from "./language/ja-JP.json"

const i18n = createI18n({
    legacy: false,
    locale: "zh_TW",
    fallbackLocale: "zh_TW",
    messages: {
        "zh_TW": zh,
        "en": en,
        "ja": ja
    }
})

export default i18n