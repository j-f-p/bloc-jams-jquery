$(document).ready( function() {
  $('button#previous').click( function() {
    if( player.playState=='playing' &&
        album.songs.indexOf(player.currentlyPlaying) > 0 )
      player.playPause(
        album.songs[album.songs.indexOf(player.currentlyPlaying) - 1]
      );
  });

  $('button#play-pause').click( function() {
    player.playPause();
    $(this).attr('playState',player.playState);
  });

  $('button#next').click( function() {
    if( player.playState=='playing' &&
        album.songs.indexOf(player.currentlyPlaying) < album.songs.length-1 )
      player.playPause(
        album.songs[album.songs.indexOf(player.currentlyPlaying) + 1]
      );
  });

  $('#time-control input').on('input', function(event) {
    player.skipTo(event.target.value);
  });

  setInterval( () => {
    $('#time-control .current-time').text(player.getTime());
    $('#time-control input').val(
      100 * player.getTimeSeconds() / player.getDurationSeconds());
  }, 1000);

  $('#volume-control input').on('input', function(event) {
    player.setVolume(event.target.value);
  });

});
