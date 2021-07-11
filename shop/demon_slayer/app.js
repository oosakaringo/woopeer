if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/shop/demon_slayer/sw.js', { scope: '/shop/demon_slayer/' }).then(function(reg) {
    console.log('登録に成功しました。 Scope は ' + reg.scope);
    reg.onupdatefound = function() {
      console.log('アップデートがあります！');
      reg.update();
    }
  }).catch(function(error) {
    console.log('登録に失敗しました。' + error);
  });
}