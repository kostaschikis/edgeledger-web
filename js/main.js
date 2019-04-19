// Initialize and add the map
function initMap() {
    //Location
    const loc = { lat: 37.9927964, lng: 23.6815886 };
    //Centered map on location
    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc
    });
    //The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map:map });
}