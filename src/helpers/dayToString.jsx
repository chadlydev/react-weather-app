const dayToString = timestamp => {
    const day = new Date(timestamp * 1000);

    return day.toLocaleDateString('en-EN', { weekday: 'long' });
};

export default dayToString;
