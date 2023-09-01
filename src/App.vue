<script setup>
import { ref, watch, provide } from "vue";
import HeaderItem from "./components/HeaderItem.vue"
import FormItem01 from "./components/FormItem01.vue"
import FormItem02 from "./components/FormItem02.vue"
import FormItem03 from "./components/FormItem03.vue"
import KeepValue from "./components/KeepValue.vue"


import { useSetLocale } from "./composables/useSetLocale"


//获取 t方法
const { t } = useSetLocale()
provide("t", t)


</script>

<template>
  <div id="app">
    <!-- 使用 vee-validate 全元件 + @vee-validate/i18n -->
    <h1>vee-validate4 全元件、規則 + @vee-validate/i18n(錯誤提示國際化) + vue-i18n(整個文本)</h1>
    <HeaderItem/>
    <FormItem01></FormItem01>
    <hr>
    <FormItem02></FormItem02>
    <hr>
    <FormItem03></FormItem03>
    <hr>
    <KeepValue></KeepValue>
    <!-- <p>{{ t("page1.upload", { language: t("page1.picture") }) }}</p> -->
  </div>
</template>

<style>
label {
  display: block;
}
</style>
