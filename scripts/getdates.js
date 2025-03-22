const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;


//let lastModifiedParagraph = new Date(document.lastModified);
//const lastModifiedParagraph = document.getElementById('lastModified');
//document.querySelector("#lastModified") = lastModifiedParagraph;
//const lastModifiedDate = new Date(document.lastModified);
//::contentReference[oaicite:28]{index=28}

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;