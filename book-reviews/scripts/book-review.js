document.addEventListener("DOMContentLoaded", () => {
  const mainnav = document.querySelector('.navigation');
  const hamButton = document.querySelector('#menu');
  
  hamButton.addEventListener('click', () => {
      mainnav.classList.toggle('show');
      hamButton.classList.toggle('show');
  });

  const renderReviews = (filteredReviews) => {
    const reviewGrid = document.querySelector(".review-grid");
    if (!reviewGrid) {
      console.error("Element with class 'review-grid' not found.");
      return;
    }

    reviewGrid.innerHTML = "";
    filteredReviews.forEach((review) => {
      const reviewItem = document.createElement("div");
      reviewItem.className = "review-item";
      reviewItem.innerHTML = `
      <img src="${review.image}" alt="..." width="200" height="300" class="rating-image">
      <h3>${review.title}</h3>
      <p>${review.description}</p>
      <p>Rating: ${review.rating}</p>
      <a href="#" class="read-more">Read More</a>
    `;
      reviewGrid.appendChild(reviewItem);
    });
  };

  const reviewGrid = document.querySelector(".review-grid");
  if (reviewGrid) {
    const reviews = [
      {
        title: "Eragon",
        description:
          'Eragon is a thrilling fantasy adventure filled with dragons, magic, and destiny. Paolini weaves an epic tale of courage and growth that captivates both young and mature readers alike.',
        image: "https://m.media-amazon.com/images/I/911J2aXKEaL._SY522_.jpg",
        genre: "fantasy",
        author: "christopherpaolini", 
        rating: 4.5,
      },
      {
        title: "At the Mountains of Madness",
        description:
          "At the Mountains of Madness is a chilling, atmospheric journey into cosmic horror. Lovecraft masterfully builds tension and awe through ancient mysteries, alien ruins, and psychological dread.",
        image: "https://m.media-amazon.com/images/I/A1UnHUPci9L._SY522_.jpg",
        genre: "horror",
        author: "hplovecraft",
        rating: 4.7,
      },
      {
        title: "Mistborn",
        description:
          "Mistborn delivers a gripping tale of rebellion, unique magic, and complex characters. Sanderson crafts a richly layered world with clever twists and a satisfying, action-packed narrative.",
        image:
          "https://m.media-amazon.com/images/I/410oiEb7wwL._SY445_SX342_.jpg",
        genre: "adventure",
        author: "brandonsanderson",
        rating: 4.8,
      },
      {
        title: "No, We Can't Be Friends",
        description:
          "No, We Can’t Be Friends is a witty, relatable rom-com filled with heart and humor. Sophie Ranald captures modern relationships with charm, making it a delightful, breezy read.",
        image:
          "https://m.media-amazon.com/images/I/41hW+xM3U1L._SY445_SX342_.jpg",
        genre: "romance",
        author: "sophieranald",
        rating: 4.3,
      },
      {
        title: "The Way of Kings",
        description:
          "The Way of Kings is an epic masterpiece of world-building, rich characters, and deep lore. A must-read for high fantasy fans who love immersive, slow-burn storytelling.",
        image:
          "https://m.media-amazon.com/images/I/41iKre4oHvL._SY445_SX342_.jpg",
        genre: "fantasy",
        author: "brandonsanderson",
        rating: 4.9,
      },
      {
        title: "James Bond: The Man with the Golden Gun",
        description:
          "The Man with the Golden Gun delivers classic Bond action with tropical intrigue and a deadly assassin. While not Fleming’s strongest, it offers a sharp, fast-paced finale to the series.",
        image:
          "https://upload.wikimedia.org/wikipedia/en/7/79/The_Man_with_the_Golden_Gun%2C_wraparound_cover.jpg",
        genre: "thriller",
        author: "ianfleming",
        rating: 4.0,
      },
    ];

  renderReviews(reviews);

  const genreSelect = document.getElementById("genre");
  const authorSelect = document.getElementById("author");
  const sortSelect = document.getElementById("sort");

  if (genreSelect && sortSelect && authorSelect) {
    const applyFilters = () => {
      let filteredReviews = [...reviews];

      const selectedGenre = genreSelect.value;
      if (selectedGenre !== "all") {
        filteredReviews = filteredReviews.filter(
          (review) => review.genre === selectedGenre
        );
      }

    const selectedAuthor = authorSelect.value;
    if (selectedAuthor !== "all") {
      filteredReviews = filteredReviews.filter(
        (review) => review.author === selectedAuthor
      );
    }

      if (sortSelect.value === "rating") {
        filteredReviews.sort((a, b) => b.rating - a.rating);
      }

      renderReviews(filteredReviews);
    };

    genreSelect.addEventListener("change", applyFilters);
    authorSelect.addEventListener("change", applyFilters);
    sortSelect.addEventListener("change", applyFilters);
  }
}

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const userName = document.getElementById("name").value;
      const userEmail = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      const contact = {
        name: userName,
        email: userEmail,
        subject: subject,
        message: message,
      };

      localStorage.setItem("contact", JSON.stringify(contact));

      alert("Contact sent successfully!");
    });
  }

  window.addEventListener("load", () => {
    const contactData = localStorage.getItem("contact");
    if (contactData) {
      const contact = JSON.parse(contactData);
      console.log("Saved Contact:", contact);
    }
  });
});