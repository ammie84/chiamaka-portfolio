// Welcome message
console.log("Welcome to my personal portfolio!");

// Smooth navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        console.log("Navigation clicked!");
    });
});