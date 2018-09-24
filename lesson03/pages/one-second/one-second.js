// pages/one-second/one-second.js
var startTime
var endTime
var timer

Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: 12,
    active: '',
    percent: 0
  },
  touchStart() {
    this.setData({
      percent: 0,
      active: 'active'
    })

    var now = new Date()
    startTime = now.getTime()

    var that = this;

    timer = setInterval(function(){
      that.setData({
        percent: that.data.percent + 1
      })
    }, 10)
  },
  touchEnd() {
    clearInterval(timer);

    var now = new Date()
    endTime = now.getTime()

    var value = endTime - startTime
    var diff = Math.abs(value - 1000)

    if (diff == 0) {
      wx.showToast({
        title: '你简直是神',
      })
    } else if (diff <= 50) {
      wx.showToast({
        title: '你太厉害了',
      })
    } else if (diff <= 100){
      wx.showToast({
        title: '你太不错哦',
      })
    } else if (diff > 400) {
      wx.showToast({
        title: '你脑子有问题',
      })
    }

    this.setData({
      result: value,
      active: ''
    })
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

  }
})