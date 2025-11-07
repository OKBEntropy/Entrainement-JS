    document.getElementById("formulaire").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message");

    if (nom && prenom && email) {
    message.textContent = `${prenom} ${nom}, Votre demande est bien envoyée !`;
    message.style.color = "green";
    this.reset(); 
    } 
});