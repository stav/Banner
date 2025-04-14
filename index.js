function createGalleryItem(image) {
    const template = document.getElementById('gallery-item-template');
    const item = template.content.cloneNode(true);
    
    // Set main image properties
    const mainImg = item.querySelector('img[data-fancybox]');
    mainImg.src = image.path;
    mainImg.alt = image.path.split('/').pop();
    mainImg.setAttribute('data-src', image.path);
    mainImg.setAttribute('data-caption', image.caption);
    
    // Handle logo overlay
    const logoOverlay = item.querySelector('[data-logo-overlay]');
    if (image.logo) {
        const logoImg = item.querySelector('[data-logo-img]');
        logoImg.src = image.logo;
    } else {
        logoOverlay.remove();
    }
    
    // Set caption properties
    const title = item.querySelector('[data-title]');
    title.href = image.url;
    title.textContent = image.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
    
    const description = item.querySelector('[data-description]');
    description.textContent = image.caption;
    
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