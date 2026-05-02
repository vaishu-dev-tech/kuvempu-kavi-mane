export function displayPlaces(data) {
  const container = document.getElementById("places");

  container.innerHTML = data.map(place => `
    <div class="card">
      <img src="${place.image}" alt="${place.name}" width="100%">
      <h3>${place.name}</h3>
      <p><b>${place.location}</b></p>
      <p>${place.description}</p>

      <button onclick="savePlace(${place.id})">
        ❤️ Save
      </button>
    </div>
  `).join('');
}