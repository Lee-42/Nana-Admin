import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入SvgIcon
import installIcons from '@/assets/icons'
// 导入国际化
import i18n from '@/i18n/index'

// 导入路由鉴权
import './permission'

import {
  create,
  NAvatar,
  NBreadcrumb,
  NBreadcrumbItem,
  NButton,
  NCard,
  NConfigProvider,
  NDatePicker,
  NDivider,
  NDrawer,
  NDrawerContent,
  NDropdown,
  NForm,
  NFormItem,
  NIcon,
  NInput,
  NLayout,
  NLayoutSider,
  NMenu,
  NPopselect,
  NSelect,
  NSpace,
  NSwitch
} from 'naive-ui'
// 导入全局样式
import './styles/index.less'

const naive = create({
  components: [
    NButton,
    NCard,
    NForm,
    NFormItem,
    NInput,
    NIcon,
    NSpace,
    NSwitch,
    NLayout,
    NLayoutSider,
    NMenu,
    NDropdown,
    NAvatar,
    NBreadcrumb,
    NBreadcrumbItem,
    NConfigProvider,
    NDatePicker,
    NPopselect,
    NDrawer,
    NDrawerContent,
    NDivider,
    NSwitch,
    NSelect
  ]
})
const app = createApp(App)
installIcons(app)
app.use(store).use(router).use(naive).use(i18n).mount('#app')
