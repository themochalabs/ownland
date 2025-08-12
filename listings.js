fetch('listings.json')
  .then(response => response.json())
  .then(data => {
    const featuredContainer = document.getElementById('featured-listing');
    const gridContainer = document.getElementById('listing-grid');

    data.forEach(listing => {
      if (listing.featured) {
        // Build and inject featured listing
        const featuredHTML = `
          <div class="featured-content">
            <div class="featured-image">
              <img src="${listing.image}" alt="${listing.title}" />
            </div>
            <div class="featured-text">
              <h2>${listing.title}</h2>
              <p>${listing.location}</p>
              <p>${listing.size} - ${listing.prims} Prims</p>
              <p>ID: ${listing.id}</p>
              <p class="description">${listing.description}</p>
              <p class="price">For Sale ${listing.price}</p>
              <a href="${listing.link}" class="button" target="_blank" rel="noopener">Visit in SL</a>
            </div>
          </div>
        `;
        featuredContainer.innerHTML = featuredHTML;
      } else {
        // Build and append regular listing
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${listing.image}" alt="${listing.title}" />
          <div class="card-content">
            <h2>${listing.title}</h2>
            <p>${listing.location}</p>
            <p>${listing.size} - ${listing.prims} Prims</p>
            <p>ID: ${listing.id}</p>
            <p class="description">${listing.description}</p>
            <p class="price">For Sale ${listing.price}</p>
            <a href="${listing.link}" class="button" target="_blank" rel="noopener">Visit in SL</a>
          </div>
        `;
        gridContainer.appendChild(card);
      }
    });
  })
  .catch(error => console.error('Error loading listings:', error));
