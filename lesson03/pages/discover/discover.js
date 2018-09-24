// pages/discover/discover.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgcolor: '',
    imageUrls: [
      {
        name: '天空',
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        color: "blue"
      },
      {
        name: '交互',
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        color:"white"
      },
      {
        name: '篮球',
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        color: "yellow"
      }
    ],
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
  imgChange(e){
    this.setData({
      bgcolor: this.data.imageUrls[e.detail.current].color
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

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