const getters = {
  language: (state) => state.app.language,
  dayOrNight: (state) => state.app.dayOrNight,
  useTransition: (state) => state.app.useTransition,
  transitionType: (state) => state.app.transitionType,
  theme: (state) => state.app.theme,
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  /**
   * 是否存在用户信息
   * @param {Object} state
   * @returns true 表示已存在用户信息
   */
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  }
}

export default getters
