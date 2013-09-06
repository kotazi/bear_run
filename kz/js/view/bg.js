define(['enchant', 'core'], function(enchant, core) {

  var BG = enchant.Class.create(enchant.Sprite, {

    //初期化処理
    initialize: function(x, y){

      enchant.Sprite.call(this, x, y);
      this.backgroundColor = '#4abafa';
      this.buttonMode = 'a';

      //ブロックを配置する
      var image = new Surface(320, 320);
      for (var i = 0; i < 20; i++) {
        image.draw(core.assets['img/map2.png'], 0, 0, 16, 16, i * 16, 16 * 12, 16, 16);
      }
      this.image = image;

      this.addEventListener('enterframe', function(e) {
        this.x -= 4;
        if (this.x < -320) {
          this.x = 0;
        }
      });

    },
    show: function() {
      core.rootScene.addChild(this);
    }
  });

  return BG;
});