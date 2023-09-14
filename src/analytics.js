function createAnalytics() {
    let counter = 0;
    let isRemoved = false;

    const listener = () => {
        counter++;
        document.querySelector('.counter').innerText = counter;
    };

    document.addEventListener('click', listener);

    return {
        remove() {
            document.removeEventListener('click', listener);
            isRemoved = true;
        },

        getClicks() {
            if (isRemoved) {
                return 'Analytics is removed';
            }

            return counter;
        }
    }
}

window.analytics = createAnalytics();