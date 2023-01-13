import { getItem, setItem } from '@/utils/storage'
import {
  LANG,
  DAYORNIGHT,
  USE_TRANSITION,
  TRANSITION_TYPE,
  TRANSITION_TYPES,
  BUILDIN_THEMES,
  THEME
} from '@/constant/index.js'

export default {
  namespaced: true,
  state: () => ({
    language: getItem(LANG) || 'zhCN',
    dayOrNight: getItem(DAYORNIGHT) || 'day',
    useTransition: getItem(USE_TRANSITION) || true,
    transitionType: getItem(TRANSITION_TYPE) || TRANSITION_TYPES[0].value,
    theme: getItem(THEME) || BUILDIN_THEMES[0]
  }),
  mutations: {
    /**
     * 设置国际化
     * @param {Object} state
     * @param {String} lang
     */
    setLanguage(state, lang) {
      setItem(LANG, lang)
      state.language = lang
    },
    /**
     * 设置主题
     * @param {Object} state
     * @param {String} dayOrNight
     */
    setDayOrNight(state, dayOrNight) {
      setItem(DAYORNIGHT, dayOrNight)
      state.dayOrNight = dayOrNight
    },
    /**
     * 是否使用动画
     * @param {Object} state
     * @param {String} isUsed
     */
    setUseTransition(state, isUsed) {
      setItem(USE_TRANSITION, isUsed)
      state.useTransition = isUsed
    },
    /**
     * 切换动画类型
     * @param {Object} state
     * @param {String} type
     */
    setTransitionType(state, type) {
      setItem(TRANSITION_TYPE, type)
      state.transitionType = type
    },
    /**
     * 设置主题
     * @param {Object} state
     * @param {String} theme
     */
    setTheme(state, theme) {
      setItem(THEME, theme)
      state.theme = theme
    }
  },
  actions: {}
}
