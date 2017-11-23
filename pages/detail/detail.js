//index.js
var api=require('../../utils/api.js')
Page({
  data: {
    list:[]
  },
  //事件处理函数
  onLoad: function (options) {
    var id =options.id;
    api.getDetail(id).then(res=>{
        this.setData({
          list:res
        })
    })
  
  }
})
