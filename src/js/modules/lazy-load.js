import { ui } from './ui.js';

class LazyLoad {

    constructor() { }

    lazyLoadImages() {
        const images = ui.getMultipleElements('[data-src]');

        const imageOptions = {
            root: null,
            rootMargin: "0px 0px 0px 150px",
            threshold: 0.5
        };

        const intersectionObserver = new IntersectionObserver(this.onIntersectImage.bind(this), imageOptions);

        images.forEach(image => intersectionObserver.observe(image));
    }

    onIntersectImage(entries, imgObserver) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                this.preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })
    }

    preloadImage(image) {
        const source = image.getAttribute('data-src');
        if (!source) { return; }

        image.src = source;
        image.style.visibility = 'visible';
    }
}

const lazyLoad = new LazyLoad();

export { lazyLoad };