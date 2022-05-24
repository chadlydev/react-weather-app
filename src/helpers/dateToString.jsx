import capFirstLetter from './capFirstLetter';

const dateToString = function () {
    const date = new Date();
    return capFirstLetter(
        date.toDateString([], {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        })
    );
};

export default dateToString;
