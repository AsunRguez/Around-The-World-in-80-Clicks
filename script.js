document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const images = document.querySelectorAll(".image-container img");

    searchInput.addEventListener("keyup", function() {
        const searchTerm = searchInput.value.toLowerCase();

        images.forEach(function(image) {
            const altText = image.alt.toLowerCase();

            if (altText.includes(searchTerm)) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    });
});
