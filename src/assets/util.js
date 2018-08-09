export default {
  saveInfo: function(res) {
    let hostory = window.localStorage;
    let data = res.data.Data;
    hostory.setItem("Guid", data.Guid)
    hostory.setItem("PhoneNumber", data.UserName)
    hostory.setItem("Email", data.Email)
    hostory.setItem("UserName", data.UserName)
    hostory.setItem("Name", data.Name)
    let photo = data.UserPhotos;
    if (photo.length == 0) {
      hostory.setItem("url", '')
    } else {
      hostory.setItem("url", photo[0].Url)
    }

  },
  getInfo: function() {
    let hostory = window.localStorage;
    return hostory.getItem('data')
  },
  changeItem(item, val) {
    let hostory = window.localStorage;
    hostory.setItem(item, val)
  },
  changeStory: function(data) {
    let hostory = window.localStorage;
    var val = hostory.getItem(data);
    return val

  },
}
