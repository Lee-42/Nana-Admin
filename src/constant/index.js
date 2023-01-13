// token
export const TOKEN = 'token'
// token 时间戳
export const TIME_STAMP = 'timeStamp'
// 超时时长(毫秒) 两小时
export const TOKEN_TIMEOUT_VALUE = 2 * 3600 * 1000
// 国际化
export const LANG = 'language'
// 白天或者夜晚模式
export const DAYORNIGHT = 'dayOrNight'
// 主题
export const THEME = 'theme'
// 内置主题
export const BUILDIN_THEMES = [
  '#2d8cf0',
  '#0960bd',
  '#009688',
  '#536dfe',
  '#d4cc19',
  '#9c27b0',
  '#78dec7',
  '#b57923'
]
// 是否使用动画
export const USE_TRANSITION = 'useTransition'
// 动画类型
export const TRANSITION_TYPE = 'transition_type'
export const TRANSITION_TYPES = [
  { value: 'zoom-fade', label: '渐变' },
  { value: 'zoom-out', label: '闪现' },
  { value: 'fade-slide', label: '滑动' },
  { value: 'fade', label: '消退' },
  { value: 'fade-bottom', label: '底部消退' },
  { value: 'fade-scale', label: '缩放消退' }
]
// 主题色保存的 key
export const MAIN_COLOR = 'mainColor'
// 默认色值
export const DEFAULT_COLOR = '#409eff'
// tags
export const TAGS_VIEW = 'tagsView'
