import ui from './ui';

class GoogleMaps {
    googleMapsAPIkey = 'AIzaSyChHo9jCCaY2jumTfXZg35NBvvNY0piHXk';

    initGoogleMap() {
        const script = document.createElement('script');
        document.head.appendChild(script);

        script.addEventListener('load', () => {
            const latLong = { lat: 43.749247, lng: 19.718955 };
            const esenticoLogo = 'assets/logo/logo__circle__small.png';

            // eslint-disable-next-line no-undef
            const map = new google.maps.Map(ui.getSingleElement('#map'), {
                center: latLong,
                zoom: 19,
                zoomControl: true,
                zoomControlOptions: true,
                clickableIcons: true,
                disableDoubleClickZoom: false,
                // eslint-disable-next-line no-undef
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            });

            // eslint-disable-next-line no-unused-vars, no-undef
            const mapMarker = new google.maps.Marker({
                position: latLong,
                map,
                title: 'Esentico Boki',
                icon: esenticoLogo,
            });
        });

        // script.src = `https://maps.googleapis.com/maps/api/js?key=${this.googleMapsAPIkey}`;
    }
}

const googleMaps = new GoogleMaps();

export default googleMaps;
