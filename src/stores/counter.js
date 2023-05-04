import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'counter',
  state: () => ({
    // 用户信息
    userInfo: null,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    // 获取用户信息
    getUserInfo(data) {
      this.userInfo = data;
    }
  }
})
