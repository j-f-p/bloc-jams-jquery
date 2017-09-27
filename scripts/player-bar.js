$(document).ready( function() {
  $('button#play-pause').click( function() {
    player.playPause();
    $(this).attr('playState',player.playState);
  });
});
