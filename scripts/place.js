document.addEventListener("DOMContentLoaded", function () {
    const tempCelsius = 10;
    const windSpeedKmh = 5;
    const windChillElement = document.getElementById("windchill");

    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return Math.round(
                13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
            );
        } else {
            return "N/A";
        }
    }

    windChillElement.textContent = calculateWindChill(tempCelsius, windSpeedKmh);

    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

});

const currentYearElement = document.getElementById("currentyear");
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}