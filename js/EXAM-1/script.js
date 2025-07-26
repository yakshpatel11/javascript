const API_URL = "https://restcountries.com/v3.1/all?fields=name,capital,flags,currencies";

const countryListEl = document.getElementById('country-list');
const favoriteListEl = document.getElementById('favorite-list');
const searchInput = document.getElementById('search');

let countries = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];


async function fetchCountries() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        countries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        displayCountries();
        displayFavorites();
    } catch (err) {
        console.error("Failed to fetch countries", err);
    }
}

function displayCountries(filter = "") {
    countryListEl.innerHTML = '';
    countries
        .filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
        .forEach(country => {
            const isFavorite = favorites.some(fav => fav.name.common === country.name.common);
            const countryEl = document.createElement('div');
            countryEl.className = 'country';
            countryEl.innerHTML = `
        <div class="info">
          <img src="${country.flags.png}" alt="Flag" />
          <div>
            <strong>${country.name.common}</strong><br/>
            <small>${country.capital ? country.capital[0] : "N/A"}</small>
          </div>
        </div>
        <button ${isFavorite ? 'disabled' : ''}>${isFavorite ? 'Favorited' : 'Favorite'}</button>
      `;
            const favBtn = countryEl.querySelector('button');
            favBtn.addEventListener('click', () => {
                addToFavorites(country);
            });
            countryListEl.appendChild(countryEl);
        });
}

function addToFavorites(country) {
    if (!favorites.some(fav => fav.name.common === country.name.common)) {
        favorites.push(country);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        displayCountries(searchInput.value);
        displayFavorites();
    }
}


function removeFromFavorites(countryName) {
    favorites = favorites.filter(fav => fav.name.common !== countryName);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayCountries(searchInput.value);
    displayFavorites();
}


function displayFavorites() {
    favoriteListEl.innerHTML = '';
    favorites.forEach(country => {
        const favEl = document.createElement('div');
        favEl.className = 'favorite';
        favEl.innerHTML = `
      <div class="info">
        <img src="${country.flags.png}" alt="Flag" />
        <div>
          <strong>${country.name.common}</strong>
        </div>
      </div>
      <button>Remove</button>
    `;
        favEl.querySelector('button').addEventListener('click', () => {
            removeFromFavorites(country.name.common);
        });
        favoriteListEl.appendChild(favEl);
    });
}


searchInput.addEventListener('input', (e) => {
    displayCountries(e.target.value);
});

fetchCountries();
