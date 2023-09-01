<script setup>
import { watch, inject } from "vue";

const t = inject("t");

// 自订规则
const validateEmail = (value) => {
  // 如果值为空
  if (!value) return "This field is required";
  // 如果不是合法的 email 格式
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) return "This field must be a valid email";
  // 全部符合
  return true;
};

const onSubmit = (value) => {
  console.log(value);
  console.log("验证通过");
};
</script>

<template>
  <div>
    <!-- vee-validate4 元件使用 - 渲染複雜的欄位 搭配 Scoped Slots -->
    <!-- 利用 :label + t('key')语法。 绑定并切换栏位语系名称-->
    <!-- 显示错误消息 不一定要使用 ErrorMessage 元件。-->
    <Form @submit="onSubmit">
      <Field id="email" name="email" v-slot="obj" rules="required|email" :label="t('page1.email')">
        <!-- <p>{{ obj }}</p> -->
        <label for="email">{{ t("page1.email") }}</label>
        <input type="text" v-bind="obj.field" />
        <!-- 错误消息 使用原生标签 -->
        <span>{{ obj.errorMessage }}</span>
      </Field>
      <Field
        id="age"
        name="age"
        v-slot="{ field }"
        rules="required|between:18,96"
        :label="t('page1.age')"
      >
        <label for="age">{{ t("page1.age") }}</label>
        <input type="number" v-bind="field" />
      </Field>
      <!-- 错误消息 使用 ErrorMessage 元件 -->
      <ErrorMessage name="age" />
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
