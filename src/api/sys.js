import request from '@/utils/request'

/**
 * 登录
 * @param {Objecg} data
 * @returns
 */
export const login = (data) => {
  return request({
    url: '/sys/user/login',
    method: 'POST',
    data
  })
}

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return request({
    url: '/sys/profile',
    method: 'POST'
  })
}

/**
 * 获取菜单列表
 * @returns
 */
export const getMenu = () => {
  return request({
    url: '/txCtrl?txcode=menu005',
    method: 'POST'
  })
}
