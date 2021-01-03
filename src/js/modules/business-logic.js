import ui from './ui';
import http from './http';
import form from './form';
import lazyLoad from './lazy-load';
import googleMap from './google-maps';

class BusinessLogic {
    mediaQueryCondition = '(max-width: 600px)';

    intializeApp() {
        this.setCopyrightDate();
        this.setEventListeners();

        form.setFormEvents();
        http.setCoffeeProducts((coffeeResponse) => this.renderCoffeeProducts(coffeeResponse));
        googleMap.initGoogleMap();
    }

    setCopyrightDate() {
        const copyrightYearElement = ui.getSingleElement('#copyright-year');

        copyrightYearElement.textContent = new Date().getFullYear();
    }

    setEventListeners() {
        const submitForm = ui.getSingleElement('#contact__form');
        const sidebarElements = ui.getMultipleElements('[data-tab');
        const menuTitleElement = ui.getSingleElement('#menu-title');
        const closeMenuElement = ui.getSingleElement('#menu-close');
        const introductionWrapper = ui.getSingleElement('.introduction');

        sidebarElements.forEach((sidebarElement) => {
            sidebarElement.addEventListener('click', (event) => this.onSidebarItemClick(event));
            sidebarElement.addEventListener('mouseenter', (event) => this.onSidebarItemEnterLeave(event, true));
            sidebarElement.addEventListener('mouseleave', (event) => this.onSidebarItemEnterLeave(event, false));
        });

        submitForm.addEventListener('submit', (event) => form.onSubmitForm(event));
        closeMenuElement.addEventListener('click', () => this.onSidebarMenuClose());
        menuTitleElement.addEventListener('click', (event) => this.onMenuTitleClick(event));
        introductionWrapper.addEventListener('click', (event) => this.onIntroductionWrapperClick(event));

        window.addEventListener('resize', this.onWindowResize.bind(this), true);
    }

    onWindowResize() {
        const navElement = ui.getSingleElement('#nav');
        const overlayElement = ui.getSingleElement('#overlay');
        const mediaQuery = window.matchMedia(this.mediaQueryCondition);

        if (mediaQuery.matches) {
            const overlayOpened = overlayElement.style.display === 'block';

            navElement.style.display = overlayOpened ? 'block' : 'none';
        } else {
            navElement.style.display = 'block';
        }
    }

    onIntroductionWrapperClick(event) {
        const languageSelection = ui.getSingleElement('.header__language--expanded');
        const isExpanded = languageSelection.style.display === 'block';

        const isLanguageMenuOpened = event.target.closest('.header__language');

        if (!isLanguageMenuOpened && isExpanded) {
            languageSelection.style.display = 'none';
        }
    }

    onMenuTitleClick(event) {
        const menuTitle = event.currentTarget;
        const closeMenuElement = ui.getSingleElement('#menu-close');

        if (closeMenuElement.classList.value.includes('hidden')) {
            const navElement = ui.getSingleElement('#nav');
            const overlayElement = ui.getSingleElement('#overlay');
            const sidebarTitles = ui.getMultipleElements('.sidenav__title');

            sidebarTitles.forEach((sidebarTitle) => sidebarTitle.classList.toggle('sidenav__title--active'));

            navElement.style.display = 'block';
            menuTitle.style.display = 'none';
            overlayElement.style.display = 'block';
            overlayElement.style.height = `${document.body.scrollHeight}px`;
            closeMenuElement.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    onSidebarMenuClose() {
        const overlayElement = ui.getSingleElement('#overlay');
        const menuTitleElement = ui.getSingleElement('#menu-title');
        const closeMenuElement = ui.getSingleElement('#menu-close');
        const sidebarTitles = ui.getMultipleElements('.sidenav__title');

        sidebarTitles.forEach((sidebarTitle) => sidebarTitle.classList.toggle('sidenav__title--active'));

        this.checkToShowNavigationElement();

        menuTitleElement.style.display = 'block';
        overlayElement.style.display = 'none';
        closeMenuElement.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    checkToShowNavigationElement() {
        const navElement = ui.getSingleElement('#nav');
        const mediaQuery = window.matchMedia(this.mediaQueryCondition);

        const styleToApply = mediaQuery.matches ? 'none' : 'block';

        navElement.style.display = styleToApply;
    }

    onSidebarItemEnterLeave(event, isMouseEnter) {
        const sidebarItem = event.target.closest('[data-tab]').querySelector('.sidenav__title');

        if (sidebarItem) {
            if (isMouseEnter) {
                sidebarItem.classList.add('sidenav__title--active');
            } else {
                const closeMenuElement = ui.getSingleElement('#menu-close');

                if (closeMenuElement.classList.value.includes('hidden')) {
                    sidebarItem.classList.remove('sidenav__title--active');
                }
            }
        }
    }

    renderCoffeeProducts(coffeeProducts) {
        const productsContainerElement = ui.getSingleElement('.products__container');

        const productCardsHTML = coffeeProducts
            .map((coffeeProduct) => {
                const {
                    picture, price, name, description, available, action, actionText,
                } = coffeeProduct;
                const availabilityTextClass = available ? 'product__card--footer-available' : 'product__card--footer-unavailable';
                const availabilityButtonClass = available ? 'product__card--price-available' : 'product__card--price-unavailable';
                const actionElement = action ? `<span class="product__card--action">${actionText}</span>` : '';

                return `
                    <div class="product__card">
                        ${actionElement}
                        <img data-src="assets/img/coffee_sack.png" alt="coffee-sack" class="product__card--img-sack">
                            <span>
                                <img data-src="${picture}" alt="${name}" class="product__card--img-inside">
                            </span>
                        <div class="product__card--text">
                            <p>${name}</p>
                            <span>${description}</span>
                        </div>
                        <div class="product__card--footer">
                            <span class="${availabilityTextClass}">${available ? 'available' : 'not available'}</span>
                            <div>
                                <span class="product__card--price ${availabilityButtonClass}">
                                    ${price} 
                                    <span class="product__card--unit">RSD/kg</span>
                                </span>
                            </div>
                        </div>
                    </div>
            `;
            })
            .join('');

        const fragment = document.createRange().createContextualFragment(productCardsHTML);
        productsContainerElement.appendChild(fragment);

        this.initIntersectionObserver(window.matchMedia(this.mediaQueryCondition) ? 0 : 400);
        lazyLoad.lazyLoadImages();
    }

    setLocalstorageItem(key, value) {
        localStorage.setItem(key, value);
    }

    onSidebarItemClick(event) {
        const currentElement = event.currentTarget;
        const { section } = currentElement.dataset;
        const overlayElement = ui.getSingleElement('#overlay');

        if (overlayElement.style.display === 'block') {
            this.onSidebarMenuClose();
        }

        const matchingElement = ui.getSingleElement(`#${section}`);
        const topPosition = matchingElement.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }

    getBeansOffset(selectedSection) {
        const parsedTab = Number.parseInt(selectedSection, 10);

        return `calc(${(parsedTab - 1) * 33.3}% - 7px)`;
    }

    getLocalstorageItem(key) {
        return localStorage.getItem(key);
    }

    initIntersectionObserver(bottomMargin) {
        const options = {
            root: null,
            rootMargin: `0px 0px -${bottomMargin}px 0px`,
            threshold: 0.1,
        };

        const observer = new IntersectionObserver(this.onIntersectingSection.bind(this), options);

        const homeSection = ui.getSingleElement('#home');
        const beansSection = ui.getSingleElement('#beans');
        const contactSection = ui.getSingleElement('#contact');
        const productsSection = ui.getSingleElement('#products');

        [homeSection, beansSection, productsSection, contactSection].forEach((section) => observer.observe(section));
    }

    onIntersectingSection(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const matchingElement = entry.target;
                const sliderBeans = ui.getSingleElement('#slider__beans');
                const beanTopOffset = this.getBeansOffset(matchingElement.dataset.id);

                sliderBeans.style.top = beanTopOffset;
            }
        });
    }

    fetchMainImage() {
        const introductionImageElement = ui.getSingleElement('#introduction__image');

        introductionImageElement.src = 'assets/img/intro-coffee.jpg';
    }
}

const businessLogic = new BusinessLogic();

export default businessLogic;
