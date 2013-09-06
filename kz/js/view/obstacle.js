define(['enchant', 'core'], function(enchant, core) {

  var Obstacle = enchant.Class.create(enchant.Sprite, {

    //初期化処理
    initialize: function(x, y, mode) {

      enchant.Sprite.call(this, 16, 16);
      this.image = core.assets['img/icon0.png'];
      this.x = x;
      this.y = y;
      this.frame = 24;

      this.addEventListener('enterframe', function(e) {

        this.x -= 4;
        if (this.x < -16) {
          this.remove();
        }
        if ( this.within(mode, 16)) {
          core.score -= 50;
          this.remove();
        }

      }, false)


    },

    show: function() {
      core.rootScene.addChild(this);
    },
    remove: function() {
      core.rootScene.removeChild(this);
      delete this;
    }
  });

  return Obstacle;

});