// db/db.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.addDB()
    // this.getDB()
    // this.queryDB()
    // this.updateDB()
    this.removeDB()
  },
  //添加数据
  addDB(){
    const db=wx.cloud.database()
    db.collection('dbtest').add({
      data:{
        username:'admin',
        password:'123456'
      },
      success(res){
        console.log(res);
      }
    })
    
  },
  //按照_id查找数据
  async getDB(){
    const db=wx.cloud.database()
    const res=await db.collection('dbtest').doc('6aebd2215e89b753004d90ef26710bb5').get()
    console.log(res);
  },
  //按相对应的属性查找数据
  async queryDB(){
    const db=wx.cloud.database()
    const res=await db.collection('dbtest').where({
      username:'admin'
    }).get()
    console.log(res);
  },
  //修改数据库
  updateDB(){
    const db=wx.cloud.database()
    db.collection('dbtest').doc("f3db088f5e89b87e005c7d6a32e26fc0").update({
      data:{
        password:'dreamqwe'
      },success(res){
        console.log(res);
    
      }
    },)
  },
  //删除数据
  removeDB(){
    const db=wx.cloud.database()
    db.collection('dbtest').doc("f3db088f5e89b87e005c7d6a32e26fc0").remove({
      success(res){
        console.log(res);
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})