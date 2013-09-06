
define([
  'enchant',
  'nineleap',
  'ui'
], function(enchant, nineleap, ui) {
  enchant();
  var core = new Core(320, 320);
  core.fps = 16;
  core.preload('img/chara1.png', 'img/map2.png', 'img/timeup.png');
  core.score = 0;
  core.limitTime = 35;
  core.keybind(88, 'a');
  return core;
});