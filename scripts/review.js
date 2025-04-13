document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 },
    ];

    const selectElement = document.getElementById("product-name");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
});

const countElement = document.getElementById('reviewCount');
    let reviewCount = localStorage.getItem('reviewCount');

    if (reviewCount) {
      reviewCount = parseInt(reviewCount) + 1;
    } else {
      reviewCount = 1;
    }

    localStorage.setItem('reviewCount', reviewCount);
    countElement.textContent = reviewCount;

const currentYearElement = document.getElementById("currentyear");
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}