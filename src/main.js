// import "./assets/main.css"
import { createApp } from "vue"
import App from "./App.vue"
import i18n from "./i18n"

// vee-validate
// 引入元件、方法
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'

// 引入 VeeValidate 的驗證規則
import AllRules from '@vee-validate/rules';

// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n';

// 引入 vee-validate 語言包 (可以引入自己的來源，或是使用 @vee-validate/i18n 內部預設已經有的語言包。)
import zh_TW from './language/zh-TW.json'
import ja from './language/ja-JP.json'
import en from './language/en-US.json'

// 洗资料
function extractMessages(originData){
    return JSON.parse(JSON.stringify(originData)).common   
}


// defineRule 注册所有規則
Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]);
  });



// Vee-Validate 的全局配置
configure({
    // generateMessage属性 - 用于生成验证错误消息
    // localize() - 设置VeeValidate的语言包 - 将语言包绑定到对应的语言标识符
    generateMessage: localize({ ja: extractMessages(ja), zh_TW: extractMessages(zh_TW), en: extractMessages(en) }),
    validateOnInput: true // 調整為：輸入文字時，就立即進行驗證
});

// 重要! 設定預設語系
setLocale('zh_TW')



createApp(App)
    .use(i18n)
    .component('Field', Field) // 掛載 Global 的 VeeValidate 元件
    .component('Form', Form)
    .component('ErrorMessage', ErrorMessage)
    .mount('#app')
