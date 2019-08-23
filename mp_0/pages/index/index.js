Page({

  data: {
    id_text_0: getApp().globalData.data_index.id_text_0,
    id_text_1: new Date().toString(),
  },



  onLaunch: function() {
    console.log('App Launch')
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  },





  id_fun_0: function() {

    var fs = wx.getFileSystemManager();
    fs.writeFileSync(`${wx.env.USER_DATA_PATH}/hello.txt`, 'abcdef', 'utf8');
    var fc = fs.readFileSync(`${wx.env.USER_DATA_PATH}/hello.txt`, 'utf8');
    console.log(fc[0], fc[fc.length - 1]);
    console.log(9);

    getApp().g_fun();
    getApp().globalData.data_index.id_text_0 = getApp().globalData.data_index.id_text_0 + " " + "NEW "

    this.setData({
      id_text_1: new Date().toString() + "\n" + this.data.id_text_1,
      id_text_0: "new id_text_0 + global var : " +
        " " + getApp().globalData.data_index.id_text_0,
    });
  },





})