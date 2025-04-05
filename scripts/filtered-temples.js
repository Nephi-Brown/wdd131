
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 40500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
      },
      {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Washington_D.C._Temple_At_Dusk.jpg/440px-Washington_D.C._Temple_At_Dusk.jpg"
      },
      {
        templeName: "Kona Hawaii",
        location: "Kailua-Kona, Hawaii, United States",
        dedicated: "2000, January, 23",
        area: 10000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kona-hawaii-temple/kona-hawaii-temple-40578-main.jpg"
      },
      {
        templeName: "Preston",
        location: "Chorley, England, United Kingdom",
        dedicated: "1998, June, 7",
        area: 15000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/preston-england-temple/preston-england-temple-45357-main.jpg"
      },
      {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
      },
  ];

function displayTemples(filteredTemples) {
    const gallery = document.querySelector('.temple-gallery');
    gallery.innerHTML = ''; // Clear previous content
  
    filteredTemples.forEach(temple => {
      const figure = document.createElement('figure');
      const img = document.createElement('img');
      img.src = temple.imageUrl;
      img.alt = temple.templeName;
      img.loading = 'lazy'; 
  
      const figcaption = document.createElement('figcaption');
      figcaption.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area.toLocaleString()} sq ft</p>
      `;
  
      figure.appendChild(img);
      figure.appendChild(figcaption);
      gallery.appendChild(figure);
    });
  }
  
  displayTemples(temples);
  
  document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', event => {
      const action = event.target.getAttribute('data-action');
      let filteredTemples = temples;
  
      if (action === 'old') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
      } else if (action === 'new') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
      } else if (action === 'large') {
        filteredTemples = temples.filter(temple => temple.area > 90000);
      } else if (action === 'small') {
        filteredTemples = temples.filter(temple => temple.area < 10000);
      }
  
      displayTemples(filteredTemples);
    });
  });
  