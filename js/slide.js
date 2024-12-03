let currentSlide = 0;
        const slides = document.querySelectorAll(".slide");

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        showSlide(currentSlide);

        function irpagina(pagina){
            window.location.href = pagina;
        }