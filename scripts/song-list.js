$(document).ready( function() {
  album.songs.forEach((song,index) => {
    song.element = $(`
      <tr>
        <td>${index+1}</td>
        <td>${song.title}</td>
        <td>$${song.duration}</td>
      </tr>
    `);

    song.element.click( event => {
      player.playPause(song);
    });

    $('#song-list').append(song.element);
  });
});
