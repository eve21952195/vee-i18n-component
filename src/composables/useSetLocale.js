// 切換語言时，統一修改 locale 
// 要引入 t 方法、locale 属性、availableLocales 属性

// availableLocales - 在 messages 中可用的语言包列表

import { useI18n } from "vue-i18n"
import { setLocale } from "@vee-validate/i18n";


export function useSetLocale() {

    const { t, locale, availableLocales } = useI18n()
    const setAllLocale = (val)=> {
        // 修改 vue-i18n locale
        locale.value = val;
        // 修改 @vee-validate/i18n 
        setLocale(val)
    }
 
    return {
        t,
        setAllLocale,
        availableLocales
    }
}