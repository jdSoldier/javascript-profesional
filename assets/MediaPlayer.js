function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];
  //damos como valor inicial en caso de no encontrar un pluggin un array vacio
  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
  this.plugins.forEach((plugin) => {
    plugin.run(this);
  });
};

MediaPlayer.prototype.play = function () {
  this.media.play();
};

MediaPlayer.prototype.pause = function () {
  this.media.pause();
};

MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
};

MediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
};

MediaPlayer.prototype.togglePlay = function () {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};

export default MediaPlayer;
