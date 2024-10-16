document.addEventListener("DOMContentLoaded", function () {
    // Simple interaction to view project details (could be expanded as needed)
    const projectLinks = document.querySelectorAll('.view-code');

    projectLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const url = this.getAttribute('href');
            window.open(url, '_blank');
        });
    });
});
