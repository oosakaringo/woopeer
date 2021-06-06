if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/shop/evangelion/sw.js', { scope: '/shop/evangelion/' }).then(function(reg) {
    console.log('登録に成功しました。 Scope は ' + reg.scope);
    registration.onupdatefound = function() {
      console.log('アップデートがあります！');
      registration.update();
    }
  }).catch(function(error) {
    console.log('登録に失敗しました。' + error);
  });
}