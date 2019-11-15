//index.js
//获取应用实例
//var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    list:[],
    first: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  onLoad: function () {
  },

  detail: function(e){

  },

  come_baby: function (event) {
    wx.switchTab({
      url: '../index/index',
    })
  }
})
