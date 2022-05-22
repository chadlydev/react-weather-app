const dateToString = function () {
    const date = new Date();
    return date.toLocaleDateString([], {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
};

export default dateToString;
