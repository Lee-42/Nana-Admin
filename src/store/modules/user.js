import { login, getUserInfo } from '@/api/sys'
import router from '@/router'
import encrypt from '@/utils/encrypt'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constant'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: getItem('user_info') || {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      setItem('user_info', userInfo)
    }
  },
  actions: {
    /**
     * 登录
     * @param {Object} context
     * @param {Object} loginInfo
     * @returns
     */
    login(context, loginInfo) {
      const { account_id, password } = loginInfo
      return new Promise((resolve, reject) => {
        login({
          account_id,
          password: encrypt.rsa(password)
        })
          .then((data) => {
            let { token, user_info } = data
            this.commit('user/setToken', token)
            this.commit('user/setUserInfo', user_info)
            // 保存登录时间
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    /**
     * 获取用户信息
     * @param {Object} context
     * @returns
     */
    async getUserInfo(context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    },

    /**
     * 主动退出登录
     */
    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      router.push('/login')
    }
  }
}
