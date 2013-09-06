
//設定
requirejs.config({

  shim: {

    enchant: {
      exports: 'enchant'
    },

    nineleap: {
      deps: ['enchant']
    },

    ui: {
      deps: ['enchant']
    }

  },

  paths: {
    enchant: './../lib/enchantjs/enchant',
    nineleap: './../lib/enchantjs/nineleap.enchant',
    ui: './../lib/enchantjs/ui.enchant',
    core: './common'
  }

});

//実行関数
require([
  'enchant',
  'core',
  './view/obstacle',
  './view/bg',
  './view/player'
], function(enchant, core, Obstacle, BG, Player) {

  core.addEventListener('load', function(e) {

    /**
     * 背景の生成
     * @type {Sprite}
     */
    var bg = new BG(640, 320);
    bg.show();

    /**
     * プレイヤーの生成
     * @type {Sprite}
     */
    var player = new Player(32, 32);
    player.show();


    /**
     * タイムラベルの生成
     * @type {MutableText}
     */
    var timeLabel = new MutableText(10, 0);
    timeLabel.text ='TIME: ' + core.limitTime;
    core.rootScene.addChild(timeLabel);

    /**
     * スコアラベルの生成
     * @type {ScoreLabel}
     */
    var scoreLabel = new ScoreLabel(160, 0);
    scoreLabel.score = 0;
    scoreLabel.easing = 0;
    core.rootScene.addChild(scoreLabel);

    core.rootScene.addEventListener('enterframe', function(e) {

      //時間切れの処理
      if (core.limitTime === 0) {
        core.end(null, null, core.assets['img/timeup.png']);
      }

      //1秒おきに走る処理
      if (core.frame % core.fps === 0) {
        core.score += 10;
        core.limitTime--;
        timeLabel.text = 'TIME: ' + core.limitTime;
        scoreLabel.score = core.score;
      }

      //たまに爆弾を出す
      if (core.frame % 36 === 0) {
        if (rand(100) <50) {
          var obstacle = new Obstacle(384, 176, player);
          obstacle.show();
        }
      }
    }, false)

  }, false);
  core.start();
});