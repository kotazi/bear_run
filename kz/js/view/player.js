define(['enchant', 'core'], function(enchant, core) {

  var Player = enchant.Class.create(enchant.Sprite, {

    initialize: function(x, y) {

      enchant.Sprite.call(this, x, y);
      this.image = core.assets['img/chara1.png'];
      this.x = 120;
      this.y = 160;
      this.frame = 0;
      this.isJump = false;
      this.vy = 0;

      this.addEventListener('enterframe', function() {
        //アニメーションを表示する処理
        this.frame = core.frame % 3;

        //[a]ボタンが押されたら
        if (core.input.a) {
          this.vy = -64;
          this.isJump = true;
        }

        //ジャンプしたらな
        if (this.y < 160) {
          this.vy = 4;
          this.isJump = false;
        }

        //着地したら
        if (this.isJump === false && this.y === 160) {
          this.vy = 0;
        }
        this.y += this.vy;

      }, false);

    },
    show: function(){
      core.rootScene.addChild(this);
    }

  });

  return Player;
});
