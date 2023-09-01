// import "./assets/main.css"
import { createApp } from "vue"
import App from "./App.vue"
import i18n from "./i18n"

// vee-validate
// 引入元件、方法
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'

// 引入验证规则
import { email, required, between, confirmed } from '@vee-validate/rules'

// *引入 localize 的方法
import { localize, setLocale } from '@vee-validate/i18n';

// *引入 vee-validate/i18n 内建的繁体中文语系檔
import zh_TW from './language/zh-TW.json'
import ja from './language/ja-JP.json'
import en from '@vee-validate/i18n/dist/locale/en.json'


// // 自定义 - 规则
// defineRule('email', email)
// defineRule('required', required)

// // 自定义 - 设置错误信息
// configure({
//     generateMessage: (context) => {
//         const messages = {
//             required: '此字段为必填项',
//             email: '请输入有效的电子邮件地址'
//         }

//         const message = messages[context.rule.name] || '验证失败'
//         return message
//     }
// })

// 引入原本的规则
defineRule('required', required);
defineRule('between', between);
defineRule('confirmed', confirmed);


// 设置VeeValidate的语言包 - 将语言包绑定到对应的语言标识符
localize({ ja, zh_TW })

// Vee-Validate 的全局配置
configure({
    // generateMessage属性 - 用于生成验证错误消息
    // localize() - 设置VeeValidate的语言包 - 将语言包绑定到对应的语言标识符
    generateMessage: localize({
        ja: {
            names: {
                name: "名前",
                age: "年",
                ageConfirm: "年齢を確認する"
            }
        },
        zh_TW: {
            names: {
                name: "姓名",
                age: "年齡",
                ageConfirm: "確認年齡"
            }
        }
    }),
    validateOnInput: true // 調整為：輸入文字時，就立即進行驗證
});

// 重要! 設定預設語系
setLocale('ja')

createApp(App)
    .use(i18n)
    .component('Field', Field) // 掛載 Global 的 VeeValidate 元件
    .component('Form', Form)
    .component('ErrorMessage', ErrorMessage)
    .mount('#app')
