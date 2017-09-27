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
});
