document.getElementById("formulaire").addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  const nom = document.getElementById("nom").value.trim();
  const prenom = document.getElementById("prenom").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message");

  if (nom && prenom && email) {
    message.textContent = `Merci ${prenom} ${nom}, votre formulaire a été envoyé !`;
    message.style.color = "green";
    this.reset(); // Réinitialise le formulaire
  } else {
    message.textContent = "Veuillez remplir tous les champs.";
    message.style.color = "red";
  }
});