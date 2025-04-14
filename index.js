function createGalleryItem(image) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    
    const img = document.createElement('img');
    img.src = image.path;
    img.alt = image.path.split('/').pop();
    img.setAttribute('data-fancybox', 'gallery');
    img.setAttribute('data-src', image.path);
    img.setAttribute('data-caption', image.caption);
    
    // Add logo overlay if logo exists
    if (image.logo) {
        console.log(image.logo);
        const logoOverlay = document.createElement('div');
        logoOverlay.className = 'logo-overlay';
        console.log('logoOverlay', logoOverlay);
        
        const logoImg = document.createElement('img');
        logoImg.src = image.logo;
        logoImg.alt = 'Logo';
        console.log('logoImg', logoImg);

        logoOverlay.appendChild(logoImg);
        item.appendChild(logoOverlay);
        console.log('item', item);
    }
    
    const caption = document.createElement('div');
    caption.className = 'caption';
    
    const title = document.createElement('a');
    title.href = image.url;
    title.textContent = image.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
    title.target = '_blank';
    
    const description = document.createElement('p');
    description.textContent = image.caption;
    
    caption.appendChild(title);
    caption.appendChild(description);
    
    item.appendChild(img);
    item.appendChild(caption);
    
    return item;
}

function initializeGallery() {
    const gallery = document.getElementById('gallery');
    imageList.forEach(image => {
        const galleryItem = createGalleryItem(image);
        gallery.appendChild(galleryItem);
    });

    // Initialize Fancybox
    Fancybox.bind("[data-fancybox]", {
        // Custom options
        Thumbs: {
            type: "classic",
        },
        Toolbar: {
            display: {
                left: [],
                middle: [],
                right: ["close"],
            },
        },
    });
}

// Initialize gallery when the page loads
window.addEventListener('DOMContentLoaded', initializeGallery); 