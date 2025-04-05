const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

const mainnav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');
hamButton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hamButton.classList.toggle('show');
});   