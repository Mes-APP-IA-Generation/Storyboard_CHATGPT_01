document.getElementById("addCaseBtn").addEventListener("click", addStoryboardCase);

function addStoryboardCase() {
  const storyboard = document.getElementById("storyboard");

  // Création d'une case de storyboard
  const caseElement = document.createElement("div");
  caseElement.classList.add("storyboard-case");

  // Contenu de la case
  caseElement.innerHTML = `
    <button class="delete-case-btn" title="Supprimer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20px" height="20px">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 8H6v11c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8z"/>
      </svg>
    </button>
    <input type="text" class="case-name" placeholder="Nom du plan">
    <div class="image-container">
      <label>Image :</label>
      <input type="file" class="image-upload" accept="image/*">
      <img class="preview-image" alt="Aperçu de l'image" style="display: none; width: 100%; border-radius: 5px; margin-top: 10px;">
    </div>
    <div class="select-container">
      <label>Type de plan :</label>
      <select class="type-select">
        <option>Macro</option>
        <option>Serré</option>
        <option>Moyen</option>
        <option>Large</option>
      </select>
    </div>
    <div class="select-container">
      <label>Caméra :</label>
      <select class="camera-select">
        <option>Canon 77D</option>
        <option>Canon 5D</option>
        <option>Lumix S5M2</option>
      </select>
    </div>
    <div class="focal-container">
      <label>Focal (mm) :</label>
      <input type="number" class="focal-input" min="10" max="200" placeholder="10 - 200">
    </div>
    <textarea class="description" placeholder="Description..."></textarea>
  `;
  
  document.getElementById("movieTitle").addEventListener("input", (event) => {
  localStorage.setItem("movieTitle", event.target.value);
});

document.getElementById("movieYear").addEventListener("input", (event) => {
  localStorage.setItem("movieYear", event.target.value);
});

// Chargement des données sauvegardées
window.addEventListener("DOMContentLoaded", () => {
  const savedTitle = localStorage.getItem("movieTitle");
  const savedYear = localStorage.getItem("movieYear");
  if (savedTitle) document.getElementById("movieTitle").value = savedTitle;
  if (savedYear) document.getElementById("movieYear").value = savedYear;
});


  // Ajout de la case au storyboard
  storyboard.appendChild(caseElement);

  // Gestion du téléchargement et de l'aperçu de l'image
  const imageInput = caseElement.querySelector(".image-upload");
  const previewImage = caseElement.querySelector(".preview-image");

  imageInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        previewImage.src = e.target.result;
        previewImage.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });

  // Gestion du bouton de suppression
  const deleteButton = caseElement.querySelector(".delete-case-btn");
  deleteButton.addEventListener("click", () => {
    caseElement.remove();
  });
}
