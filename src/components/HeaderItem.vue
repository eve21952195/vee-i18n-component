<script setup>
import { useSetLocale } from "../composables/useSetLocale"

const { setAllLocale, availableLocales } = useSetLocale()

const changeLanguage = ($event)=> {
    console.log("change val--->", $event.target.value);
    setAllLocale($event.target.value)
}

</script>

<template>
  <div>
    <select @change="changeLanguage">
        <option  v-for="locale in availableLocales" :key="locale" :value="locale" :selected="(locale === 'zh_TW')" >{{ locale }}</option>
    </select>
    
  </div>
</template>

<style scoped></style>