
function searchAlbum() { 
  // Получаем введенное пользователем значение поиска 
  const searchValue = document.getElementById('search-input').value.toLowerCase(); 
  // Получаем все элементы альбомов 
  const albums = document.getElementById('album-list').getElementsByTagName('li'); 
  // Проходимся по каждому элементу альбома 
  for (let i = 0; i < albums.length; i++) { 
    const album = albums[i]; 
    // Получаем название альбома 
    const albumNameElement = album.getElementsByTagName('h3')[0]; 
    const albumName = albumNameElement ? albumNameElement.innerText.toLowerCase() : ''; 
    // Проверяем, содержит ли название альбома введенное значение поиска 
    if (albumName.includes(searchValue)) { 
      // Если содержит, показываем альбом 
      album.style.display = 'block'; 
    } else { 
      // Если не содержит, скрываем альбом 
      album.style.display = 'none'; 
    } 
  } 
}