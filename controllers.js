document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalDesc = document.getElementById('modalDescription');
    const closeButton = document.querySelector('.close-button');
    const imageCards = document.querySelectorAll('.image-card');
    
    // Añadir animación de entrada
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 300);
    
    // Función para mostrar el modal con imagen y descripción
    function showModal(imgSrc, description) {
        modalImg.src = imgSrc;
        modalDesc.textContent = description;
        modal.classList.add('show');
        document.body.classList.add('no-scroll');
    }
    
    // Función para cerrar el modal
    function closeModal() {
        modal.classList.remove('show');
        document.body.classList.remove('no-scroll');
    }
    
    // Añadir evento de clic a cada tarjeta de imagen
    imageCards.forEach(card => {
        card.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const description = this.getAttribute('data-description');
            showModal(imgSrc, description);
        });
    });
    
    // Cerrar modal con el botón de cierre
    closeButton.addEventListener('click', closeModal);
    
    // Cerrar modal haciendo clic fuera de la imagen
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Animación para los girasoles
    const sunflowerIcons = document.querySelectorAll('.sunflower-icon');
    
    function animateSunflowers() {
        sunflowerIcons.forEach((sunflower, index) => {
            setTimeout(() => {
                sunflower.classList.add('bloom');
            }, index * 200);
        });
    }
    
    // Iniciar animación después de cargar la página
    setTimeout(animateSunflowers, 500);
    
    // Efecto de desplazamiento suave para los elementos
    function revealOnScroll() {
        const elements = document.querySelectorAll('.message, .gallery, .poem, footer');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 50) {
                element.classList.add('revealed');
            }
        });
    }
    
    // Aplicar el efecto al cargar y al desplazarse
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    
    // Ajustar altura de las tarjetas de imágenes para que sean cuadradas
    function adjustImageCards() {
        const cards = document.querySelectorAll('.image-card');
        cards.forEach(card => {
            const width = card.offsetWidth;
            card.style.height = `${width}px`;
        });
    }
    
    // Ejecutar al cargar y al cambiar el tamaño de la ventana
    window.addEventListener('resize', adjustImageCards);
    adjustImageCards();

    // agregare esta linea para hacer un commit
});