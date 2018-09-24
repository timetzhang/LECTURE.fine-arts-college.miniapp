//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  wechatTap() {
    wx.navigateTo({
      url: '/pages/wechat/wechat',
    })
  },
  contactTap() {
    wx.navigateTo({
      url: '/pages/contact/contact',
    })
  },
  discoverTap() {
    wx.navigateTo({
      url: '/pages/discover/discover',
    })
  },
  myTap() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  }
})