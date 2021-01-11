import ui from './ui';

class LazyLoad {
    lazyLoadImages() {
        const images = ui.getMultipleElements('[data-src]');

        const options = {
            root: null,
            rootMargin: '200px 0px 200px 150px',
            threshold: 0.5,
        };

        const intersectionObserver = new IntersectionObserver(this.onIntersectImage.bind(this), options);

        images.forEach((image) => intersectionObserver.observe(image));
    }

    onIntersectImage(entries, imgObserver) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                this.preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        });
    }

    preloadImage(image) {
        const source = image.getAttribute('data-src');
        if (!source) { return; }

        // eslint-disable-next-line no-param-reassign
        image.src = source;
        // eslint-disable-next-line no-param-reassign
        image.style.visibility = 'visible';
    }
}

const lazyLoad = new LazyLoad();

export default lazyLoad;
