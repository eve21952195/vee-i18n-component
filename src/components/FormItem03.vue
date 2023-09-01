<script setup>
import { useSetLocale } from "../composables/useSetLocale";
const { t } = useSetLocale();

// 集中宣告规则
const schema = {
  name: "required",
  email: "required|email",
  age: "required|between:18,96",
  ageConfirm: "required|confirmed:@age",
};

const onSubmit = (value) => {
  console.log(value);
  console.log("验证通过");
};
</script>

<template>
  <div>
    <!-- 將集中宣告規則。塞入 Form 的 validation-schema props -->
    <Form :validation-schema="schema" @submit="onSubmit">
      <label for="name">{{ t("page1.name") }}</label>
      <Field
        id="name"
        name="name"
        :label="t('page1.name')"
        as="input"
        type="text"
      />
      <ErrorMessage name="name" />

      <label for="email">{{ t("page1.email") }}</label>
      <Field id="email" name="email" :label="t('page1.email')" type="text" />
      <ErrorMessage name="email" />

      <label for="age">{{ t("page1.age") }}</label>
      <Field id="age" name="age" :label="t('page1.age')" type="number" />
      <ErrorMessage name="age" />

      <label for="ageConfirm">{{ t("page1.ageConfirm") }}</label>
      <Field
        id="ageConfirm"
        name="ageConfirm"
        :label="t('page1.ageConfirm')"
        type="number"
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