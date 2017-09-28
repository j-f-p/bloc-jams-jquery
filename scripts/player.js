class Player {
  constructor () {
    this.currentlyPlaying = album.songs[0];
    this.playState = 'stopped';
    this.volume = 80;
    this.soundObject = new buzz.sound(this.currentlyPlaying.soundFileUrl);
  }

  prettyTime(timeInSeconds) {
    if(timeInSeconds<10)
      return `0:0${Math.floor(timeInSeconds)}`;
    if(timeInSeconds<60)
      return `0:${Math.floor(timeInSeconds)}`;

    const minutes = Math.floor(timeInSeconds/60);
    const seconds = Math.floor(timeInSeconds-minutes*60);
    if(seconds<10)
      return `${minutes}:0${seconds}`;
    return `${minutes}:${seconds}`;
  }

  getDurationSeconds() {
    return this.soundObject.getDuration();
  }

  getTimeSeconds() {
    return this.soundObject.getTime();
  }

  getDuration() {
    return this.prettyTime( this.soundObject.getDuration() );
  }

  getTime() {
    return this.prettyTime( this.soundObject.getTime() );
  }

  playPause (song = this.currentlyPlaying) {
    if (this.currentlyPlaying !== song) {
      // Stop the currently playing sound file (even if nothing is playing)
      this.soundObject.stop();
      // Clear classes on the song that's currently playing
      this.currentlyPlaying.element.removeClass('playing paused');

      // Update our currentlyPlaying and playState properties
      this.currentlyPlaying = song;
      this.playState = 'stopped';
      this.soundObject = new buzz.sound(this.currentlyPlaying.soundFileUrl);
      $('#time-control .total-time').text(
        this.prettyTime(this.currentlyPlaying.duration));
    }
    if (this.playState === 'paused' || this.playState === 'stopped') {
      this.soundObject.setVolume( this.volume );
      this.soundObject.play();
      this.playState = 'playing';
      this.currentlyPlaying.element.removeClass('paused').addClass('playing');
      $('#time-control .total-time').text(
        this.prettyTime(this.currentlyPlaying.duration));
    } else {
      this.soundObject.pause();
      this.playState = 'paused';
      this.currentlyPlaying.element.removeClass('playing').addClass('paused');
    }
  }

  skipTo (percent) {
    if (this.playState !== 'playing') { return }
    this.soundObject.setTime( (percent / 100) * this.soundObject.getDuration() );
  }

  setVolume (percent) {
    this.volume = percent;
    this.soundObject.setVolume(percent);
  }

}

const player = new Player();
