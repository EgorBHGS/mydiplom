
function searchAlbum() { 
  
  const searchValue = document.getElementById('search-input').value.toLowerCase(); 
 
  const albums = document.getElementById('album-list').getElementsByTagName('li'); 
  
  for (let i = 0; i < albums.length; i++) { 
    const album = albums[i]; 
    
    const albumNameElement = album.getElementsByTagName('h3')[0]; 
    const albumName = albumNameElement ? albumNameElement.innerText.toLowerCase() : ''; 
    
    if (albumName.includes(searchValue)) { 
       
      album.style.display = 'block'; 
    } else { 
      
      album.style.display = 'none'; 
    } 
  } 
}
