import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/layout/index.vue'
import { renderIcon } from '@/utils/index'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
// 进度条动画配置
NProgress.configure({
  showSpinner: false // 是否显示加载ico
})

/**
 * 公开路由表
 */
const publicRoutes = [
  {
    path: '/login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/',
    component: layout,
    redirect: '/statistics',
    children: [
      {
        path: '/statistics',
        name: 'statistics',
        component: () => import('@/views/statistics'),
        meta: {
          title: '平台数据统计'
        }
      },
      {
        path: '/sysUserManage',
        name: 'sysUserManage',
        component: () => import('@/views/system/manager-user'),
        meta: {
          title: '管理端用户管理'
        }
      },
      {
        path: '/sysRoleManage',
        name: 'sysRoleManage',
        component: () => import('@/views/system/manager-role'),
        meta: {
          title: '管理端角色管理'
        }
      },
      {
        path: '/sysMenuManage',
        name: 'sysMenuManage',
        component: () => import('@/views/system/manager-menu'),
        meta: {
          title: '管理端菜单管理'
        }
      },
      {
        path: '/groupManage',
        name: 'groupManage',
        component: () => import('@/views/system/user-group'),
        meta: {
          title: '用户组'
        }
      },
      {
        path: '/orgManage',
        name: 'orgManage',
        component: () => import('@/views/system/organization-manager'),
        meta: {
          title: '机构管理'
        }
      },
      {
        path: '/cliUserManage',
        name: 'cliUserManage',
        component: () => import('@/views/system/client-user'),
        meta: {
          title: '客户端用户管理'
        }
      },
      {
        path: '/runLogManage',
        name: 'runLogManage',
        component: () => import('@/views/logger/emm-run-log'),
        meta: {
          title: 'emm运行日志'
        }
      },
      {
        path: '/flowRecordManage',
        name: 'flowRecordManage',
        component: () => import('@/views/logger/cardmaker-run-log'),
        meta: {
          title: '制卡机日志管理'
        }
      },
      {
        path: '/openCardManage',
        name: 'openCardManage',
        component: () => import('@/views/logger/cardmaker-trade-detail'),
        meta: {
          title: '制卡机交易明细'
        }
      },
      {
        path: '/pages',
        name: 'pages',
        component: () => import('@/views/logger/cardmaker-statistics'),
        meta: {
          title: '制卡统计'
        }
      },
      {
        path: '/devRegister',
        name: 'devRegister',
        component: () => import('@/views/device/register'),
        meta: {
          title: '设备登记'
        }
      },
      {
        path: '/devAssigned',
        name: 'devAssigned',
        component: () => import('@/views/device/distribution'),
        meta: {
          title: '设备分配'
        }
      },
      {
        path: '/devManage',
        name: 'devManage',
        component: () => import('@/views/device/manager'),
        meta: {
          title: '设备管理'
        }
      },
      {
        path: '/devAssignedRecord',
        name: 'devAssignedRecord',
        component: () => import('@/views/device/distribution-record'),
        meta: {
          title: '设备分配记录'
        }
      },
      {
        path: '/importantRecord',
        name: 'importantRecord',
        component: () => import('@/views/device/lbc-record'),
        meta: {
          title: '重空数据记录'
        }
      },
      {
        path: '/appManage',
        name: 'appManage',
        component: () => import('@/views/appplication/deployment'),
        meta: {
          title: '应用部署'
        }
      },
      {
        path: '/appAccreditAppView',
        name: 'appAccreditAppView',
        component: () => import('@/views/appplication/authorize-appview'),
        meta: {
          title: '应用授权(应用视图)'
        }
      },
      {
        path: '/appClassManage',
        name: 'appClassManage',
        component: () => import('@/views/appplication/category-manager'),
        meta: {
          title: '应用分类管理'
        }
      },
      {
        path: '/devPolicyManage',
        name: 'devPolicyManage',
        component: () => import('@/views/strategy/device-strategy'),
        meta: {
          title: '设备策略'
        }
      },
      {
        path: '/devPolicyForOrgManage',
        name: 'devPolicyForOrgManage',
        component: () => import('@/views/strategy/authorize-orgview'),
        meta: {
          title: '设备策略授权(机构视图)'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404.vue')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401.vue')
      }
    ]
  }
]

/**
 * 私有路由表
 */
const privateRoutes = [
  {
    path: '/user',
    component: layout,
    redirect: '/user/manage',
    name: 'userManage',
    meta: {
      title: 'user'
    },
    children: [
      // {
      //   path: '/user/info/:id',
      //   name: 'userInfo',
      //   component: () => import('@/views/user-info/index.vue'),
      //   meta: {
      //     title: 'userInfo'
      //   }
      // },
      // {
      //   path: '/user/import',
      //   name: 'import',
      //   component: () => import('@/views/import/index.vue'),
      //   meta: {
      //     title: 'excelImport'
      //   }
      // }
    ]
  },
  {
    // path: '/article',
    // component: layout,
    // redirect: '/article/ranking',
    // meta: {
    //   title: 'article'
    // },
    // children: [
    // {
    //   path: '/article/editor/:id',
    //   component: () => import('@/views/article-create/index'),
    //   meta: {
    //     title: 'articleCreate'
    //   }
    // }
    // ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...publicRoutes, ...privateRoutes]
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  next()
  NProgress.done()
})

export default router
