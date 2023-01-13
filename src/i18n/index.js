import { createI18n } from 'vue-i18n'
import zhCNLocale from './lang/zhCN'
import enUSLocale from './lang/enUS'
import store from '@/store'

// 本地国际化内容
const messages = {
  enUS: {
    msg: {
      ...enUSLocale
    }
  },
  zhCN: {
    msg: {
      ...zhCNLocale
    }
  }
}

/**
 * 返回当前 lang
 */
function getLanguage() {
  return store && store.getters && store.getters.language
}

const i18n = createI18n({
  // 使用Composition Api模式, 则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default i18n
