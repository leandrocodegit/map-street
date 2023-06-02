 
// Sidebar mobile open

function openLeftMenu() {
  document.getElementById("leftMenu").style.display = "flex";
}

function closeLeftMenu() {  
  document.getElementById("leftMenu").style.display = "none"; 
}

 

// Tooltip css

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Validação formulario bootstrap
 
  const forms = document.querySelectorAll('.needs-validation')
 
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
 
  

 