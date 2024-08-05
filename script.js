document.addEventListener('DOMContentLoaded', () => {
    fetchImages();
});

async function fetchImages() {
    try {
        // For the purpose of this artifact, we'll use a hardcoded array instead of fetching from a JSON file
        const data = {
            "images": [
                {"url": "/api/placeholder/400/400", "alt": "Placeholder Image 1"},
                {"url": "/api/placeholder/400/400", "alt": "Placeholder Image 2"},
                {"url": "/api/placeholder/400/400", "alt": "Placeholder Image 3"},
                {"url": "/api/placeholder/400/400", "alt": "Placeholder Image 4"},
                {"url": "/api/placeholder/400/400", "alt": "Placeholder Image 5"},
                {"url": "/api/placeholder/400/400", "alt": "Placeholder Image 6"},
                {"url": "/api/placeholder/400/400", "alt": "Placeholder Image 7"},
                {"url": "/api/placeholder/400/400", "alt": "Placeholder Image 8"},
                {"url": "/api/placeholder/400/400", "alt": "Placeholder Image 9"}
            ]
        };
        displayImages(data.images);
        const gallery = document.getElementById('gallery-grid');
        images.forEach(image => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            const img = document.createElement('img');
            img.src = image.url;
            img.alt = image.alt;
            item.appendChild(img);
            gallery.appendChild(item);
        });
    }catch{}
}

// Function to change the number of columns in the grid
function setGridColumns(columns) {
    const gallery = document.getElementById('gallery-grid');
    gallery.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}
