import { ui } from './ui.js';
class GoogleMaps {

    googleMapsAPIkey = 'AIzaSyChHo9jCCaY2jumTfXZg35NBvvNY0piHXk';

    constructor() { }

    initGoogleMap() {
        const script = document.createElement("script");
        document.head.appendChild(script);

        script.addEventListener('load', () => {

            const latLong = { lat: 43.749247, lng: 19.718955 };
            const esenticoLogo = 'assets/logo/logo__circle__small.png';

            const map = new google.maps.Map(ui.getSingleElement('#map'), {
                center: latLong,
                zoom: 19,
                zoomControl: true,
                zoomControlOptions: true,
                clickableIcons: true,
                disableDoubleClickZoom: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            const mapMarker = new google.maps.Marker({
                position: latLong,
                map,
                title: "Esentico Boki",
                icon: esenticoLogo
            });
        });

        // script.src = `https://maps.googleapis.com/maps/api/js?key=${this.googleMapsAPIkey}`;
    }
}

const googleMap = new GoogleMaps();

export { googleMap };