 // Cargar el archivo JSON y mostrar las noticias
 fetch('noticias.json')
 .then(response => response.json())
 .then(data => {
     let noticiasHTML = '';
     data.forEach(noticia => {
         noticiasHTML += `
             <div class="noticia">
                 <div class="titulo">${noticia.titulo}</div>
                 <div class="fecha">${noticia.fecha}</div>
                 <div class="contenido">${noticia.contenido}</div>
             </div>
         `;
     });
     document.getElementById('noticias-container').innerHTML = noticiasHTML;
 })
 .catch(error => console.log('Error al cargar el archivo JSON:', error));