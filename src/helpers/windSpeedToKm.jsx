const windSpeedToKm = speed => {
    const result = (speed * 60 * 60) / 1000;

    return result.toFixed(1);
};

export default windSpeedToKm;
