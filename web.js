const moreImages = [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/1280px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg', caption: 'Mysore Palace' },
    { src: 'https://i.pinimg.com/originals/7e/5d/c1/7e5dc126c5d74dede622ce80ed6a53b3.jpg', caption: 'Konark Sun Temple' },
    { src: 'https://cdn.britannica.com/19/251919-050-D3E64798/konark-sun-temple-orissa-india-unesco-heritage-site.jpg', caption: 'Amer Fort' },
    { src: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/02/22141026/5r4t-12.jpg', caption: 'Charminar' },
    { src: 'https://i0.wp.com/mysuruinfrahub.com/wp-content/uploads/2023/08/mysorepalace3.jpg?fit=1200%2C675&ssl=1', caption: 'Victoria Memorial' },
  ];

  const imageGrid = document.getElementById('imageGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  
  loadMoreBtn.addEventListener('click', function() {
    moreImages.forEach(image => {
      const newDiv = document.createElement('div');
      const newImg = document.createElement('img');
      const newP = document.createElement('p');
      
      newDiv.className = 'box1';
      newImg.src = image.src;
      newP.textContent = image.caption;
      
      newDiv.appendChild(newImg);
      newDiv.appendChild(newP);
      imageGrid.appendChild(newDiv);
    });

    // Hide the button after clicking
    loadMoreBtn.style.display = 'none';
  });


  

function toggleContent(event) {
    event.preventDefault(); // Prevents the default anchor behavior
    
    const article = event.target.closest('.blog-post');
    const shortContent = article.querySelector('.short-content');
    const fullContent = article.querySelector('.full-content');
    const readMoreLink = article.querySelector('.read-more');
    
    // Toggle visibility
    if (fullContent.style.display === 'none') {
        fullContent.style.display = 'block';
        shortContent.style.display = 'none';
        readMoreLink.textContent = 'Read less...'; // Change the text to "Read less..."
    } else {
        fullContent.style.display = 'none';
        shortContent.style.display = 'block';
        readMoreLink.textContent = 'Read more...'; // Change the text back to "Read more..."
    }
}