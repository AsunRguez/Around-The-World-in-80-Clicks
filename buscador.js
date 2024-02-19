function searchImages() {
    const searchInput = document.getElementById('searchInput').value;
    const imageResults = document.getElementById('imageResults');

    // Limpia los resultados anteriores
    imageResults.innerHTML = '';

    // Realiza la búsqueda solo si se ingresó algo en el campo de búsqueda
    if (searchInput.trim() !== '') {
        // Puedes usar la API de Unsplash u otro recurso de imágenes
        // Aquí se utiliza el servicio de Picsum para propósitos de ejemplo
        const url = `https://picsum.photos/v2/list?page=1&limit=10`;

        fetch(url)
            .then(response => response.json())
            .then(data => displayImages(data, searchInput))
            .catch(error => console.error('Error:', error));
    }
}

function displayImages(images, searchTerm) {
    const imageResults = document.getElementById('imageResults');

    images.forEach(image => {
        // Filtra las imágenes basadas en el término de búsqueda
        if (image.author.toLowerCase().includes(searchTerm.toLowerCase())) {
            const imgElement = document.createElement('img');
            imgElement.src = image.download_url;
            imgElement.alt = image.author;
            imageResults.appendChild(imgElement);
        }
    });
}
