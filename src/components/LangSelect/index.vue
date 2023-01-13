<template>
  <n-popselect
    v-model:value="language"
    :options="languages"
    trigger="click"
    @update:value="handleSetLanguage"
  >
    <svg-icon :component="Language" :size="20"></svg-icon>
  </n-popselect>
</template>

<script setup>
import { computed } from 'vue'
import { Language } from "@vicons/ionicons5"
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

const store = useStore()

const language = computed(() => store.getters.language)

const languages = [
  {
    label: '中文简体',
    value: 'zhCN'
  },
  {
    label: 'English',
    value: 'enUS'
  }
]

const i18n = useI18n()
const handleSetLanguage = (lang) => {
  i18n.locale.value = lang
  store.commit('app/setLanguage', lang)
}
</script>
