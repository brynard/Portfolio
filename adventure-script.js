window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const headerHeight = document.querySelector('.header').offsetHeight;
    const hobbySection = document.querySelector('.welcome');
    
    const zoomLevel = 1 + scrollY / 1000;
    const fadeOutLevel = Math.min(scrollY / headerHeight, 1);

    document.querySelector('.console').style.transform = `scale(${zoomLevel})`;
    document.querySelector('.header-content').style.opacity = 1 - fadeOutLevel;

    if (scrollY >= headerHeight * 0.9) {
        hobbySection.style.opacity = 1;
    } else {
        hobbySection.style.opacity = 0;
    }
});



document.addEventListener('scroll', function() {
    var characterSection = document.getElementById('character');
    var characterSheet = document.querySelector('.character-sheet');

    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add/remove class to character sheet based on scroll position
    if (scrollTop > characterSection.offsetTop - 200) { // Adjust the threshold (-200) as needed
        characterSheet.classList.add('enlarge');
      
    }
    //  else {
    //     characterSheet.classList.remove('enlarge');
     
    // }
});




document.addEventListener('DOMContentLoaded', function() {
    // Select the map section and map elements
    const mapSection = document.getElementById('map');
    const mapTitle = mapSection.querySelector('h2');
    const mapContainer = mapSection.querySelector('.map-container');

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to fade in elements
    function fadeInElement(element) {
        element.classList.add('show');
    }

    // Check if map section is in viewport and trigger animations
    function checkMapVisibility() {
        if (isInViewport(mapTitle) && !mapSection.classList.contains('show')) {
            
        }
        if (isInViewport(mapContainer) && !mapSection.classList.contains('show')) {
            fadeInElement(mapTitle);
            fadeInElement(mapContainer);
        }
    }

    // Initial check on page load
    checkMapVisibility();

    // Listen for scroll events to check visibility again
    window.addEventListener('scroll', checkMapVisibility);
});


document.addEventListener('DOMContentLoaded', function () {
    const scrollModal = document.getElementById('scroll-modal');
    const closeModal = document.querySelector('.scroll-header .close');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const scrollContent = document.querySelector('.scroll-content');
    const checkpoints = document.querySelectorAll('.checkpoint');

    let currentBackground = 0;
    const backgrounds = ["images/USA-1.png", "images/USA-2.png", "images/USA-3.png"]; // Array of background images

    checkpoints.forEach(checkpoint => {
        checkpoint.addEventListener('click', function () {
            scrollModal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', function () {
        scrollModal.style.display = 'none';
    });

    nextBtn.addEventListener('click', function () {
        currentBackground = (currentBackground + 1) % backgrounds.length;
        scrollContent.style.backgroundImage = `url(${backgrounds[currentBackground]})`;
    });

    prevBtn.addEventListener('click', function () {
        currentBackground = (currentBackground - 1 + backgrounds.length) % backgrounds.length;
        scrollContent.style.backgroundImage = `url(${backgrounds[currentBackground]})`;
    });

    // Hide modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === scrollModal) {
            scrollModal.style.display = 'none';
        }
    });
});
