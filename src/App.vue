<template>
  <n-config-provider
    :locale="language.locale"
    :date-locale="language.dateLocale"
    :theme="dayOrNight"
    :theme-overrides="themeOverrides"
  >
    <router-view />
  </n-config-provider>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { zhCN, dateZhCN, enUS, dateEnUS } from 'naive-ui'
import { darkTheme, lightTheme } from 'naive-ui'
import { lighten } from '@/utils/index.js'
import { useStore } from 'vuex'
import Fingerprint2 from '@fingerprintjs/fingerprintjs'

const store = useStore()

onMounted(() => {
  Fingerprint2.get((c) => {
    console.log('Fingerprint2: ', c.visitorId)
  })
})

const languages = {
  zhCN: {
    locale: zhCN,
    dateLocale: dateZhCN
  },
  enUS: {
    locale: enUS,
    dateLocale: dateEnUS
  }
}

const themes = {
  day: lightTheme,
  night: darkTheme
}

const language = computed(() => languages[store.getters.language])
const dayOrNight = computed(() => themes[store.getters.dayOrNight])
const themeOverrides = computed(() => {
  let theme = store.getters.theme
  return {
    common: {
      primaryColor: theme,
      primaryColorHover: lighten(theme, 6),
      primaryColorPressed: lighten(theme, 6)
    }
  }
})
</script>

<style lang="less">
#app {
  height: 100%;
  .n-config-provider {
    height: 100%;
  }
}
</style>
