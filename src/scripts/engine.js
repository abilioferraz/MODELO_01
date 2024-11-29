document.querySelector('.scroll-down').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight, 
        behavior: 'smooth'
    });
});
