import * as $ from 'jquery'

function createAnalytics() {
    let counter = 0;
    let isRemoved = false;

    const listener = () => {
        counter++;
        $('.analytics__counter').text(counter);
    };

    $(document).on('click', listener);

    return {
        remove() {
            $(document).off('click', listener);
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