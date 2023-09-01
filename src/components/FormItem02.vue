<script setup>
import { watch, inject } from "vue";
// import { useI18n } from "vue-i18n";

// const { t, locale } = useI18n();

// 監聽 vue-i18n 的 locale
// watch(locale, (newVal)=> {
//   console.log("vue-i18n改變了");
//   setLocale(newVal)
// })
const t = inject("t");

const onSubmit = (value) => {
  console.log(value);
  console.log("验证通过");
};
</script>

<template>
  <div class="item">
    <!-- vee-validate4 元件使用 - 渲染簡單的單一欄位 -->
    <!-- ** 在 input上 單獨定義规则 -->
    <!-- 利用 :label + t('key')语法。 绑定并切换栏位语系名称-->
    <Form @submit="onSubmit">
      <label for="name">{{ t("page1.name") }}</label>
      <Field
        id="name"
        name="name"
        :label="t('page1.name')"
        as="input"
        type="text"
        rules="required"
      />
      <ErrorMessage name="name" />

      <label for="email">{{ t("page1.email") }}</label>
      <Field
        id="email"
        name="email"
        :label="t('page1.email')"
        type="text"
        rules="required|email"
      />
      <ErrorMessage name="email" />

      <label for="age">{{ t("page1.age") }}</label>
      <Field
        id="age"
        name="age"
        :label="t('page1.age')"
        type="number"
        rules="required|between:18,96"
      />
      <ErrorMessage name="age" />

      <label for="ageConfirm">{{ t("page1.ageConfirm") }}</label>
      <Field
        id="ageConfirm"
        name="ageConfirm"
        :label="t('page1.ageConfirm')"
        type="number"
        rules="required|confirmed:@age"
      />
      <ErrorMessage name="ageConfirm" />
      <button>送出</button>
    </Form>
  </div>
</template>

<style scoped>
  button {
    display: block;
    margin-top: 10px;
  }
</style>
