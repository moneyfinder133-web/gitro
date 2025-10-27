document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const resultado = document.getElementById("resultado");

  if (nombre && telefono && mensaje) {
    resultado.textContent = "✅ Tu solicitud fue enviada. Te contactaremos pronto.";
    resultado.style.color = "green";
    this.reset();
  } else {
    resultado.textContent = "⚠️ Completa todos los campos antes de enviar.";
    resultado.style.color = "red";
  }
});
