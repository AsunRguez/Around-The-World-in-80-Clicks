var map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.7128, lng: -74.0060 },
        zoom: 8
    });

    // Reduce
    document.getElementById("Reducir").addEventListener("click", function() {
        map.setZoom(map.getZoom() - 1);
    });

    // Aumenta
    document.getElementById("Aumentar").addEventListener("click", function() {
        map.setZoom(map.getZoom() + 1);
    });
}