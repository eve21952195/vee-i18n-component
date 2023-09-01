<template>
  <!-- 利用 keep-values 保留資料。 就算元件被銷毀也會保留原本輸入的資料 -->
  <!-- 原因: 由於 利用 v-if、v-for ，會使元件創建、卸載。而卸載時，原本輸入的資料就會不見，再次創建時也就為空。這對於多步驟表單填寫很惱人 -->
  <!-- 所以可以在 <Form> 使用 keep-values 屬性，保留整個表格的資料。 <Field> 則是使用 keep-value -->

  <!-- All fields values will be kept -->
  <h1>keep-values 應用</h1>
  <Form keep-values v-slot="{ values }">
    <!-- This field value will be kept -->
    <Field v-if="showFields" name="email" v-slot="{ field }">
      <label for="email">email</label>
      <input type="text" v-bind="field" />
    </Field>
    <!-- This field value will be removed -->
    <Field v-if="showFields" name="name" :keep-value="false" v-slot="{ field }">
      <label for="name">姓名</label>
      <input type="text" v-bind="field" />
    </Field>
    <button @click="showFields = !showFields" type="button">
      Show/Hide fields
    </button>
  </Form>
  <button>Submit</button>
  <pre>{{ values }}</pre>
</template>
  <script>
export default {
  data: () => ({
    showFields: true,
  }),
};
</script>

<style scoped>
button {
  display: block;
  margin-top: 10px;
}
</style>