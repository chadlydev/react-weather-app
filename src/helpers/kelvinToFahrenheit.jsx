const kelvinToFahrenheit = kelvin => {
    const result = 1.8 * (kelvin - 273.15) + 32;

    return result.toFixed();
};

export default kelvinToFahrenheit;
