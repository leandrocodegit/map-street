function openLeftMenu(){document.getElementById("leftMenu").style.display="flex"}function closeLeftMenu(){document.getElementById("leftMenu").style.display="none"}var tooltipTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),tooltipList=tooltipTriggerList.map(function(e){return new bootstrap.Tooltip(e)});const forms=document.querySelectorAll(".needs-validation");function adicionar(){document.getElementById("box-descricao").innerHTML+='<div class="mb-2"><label for="nome" class="form-label">Titulo</label><input type="text" class="form-control" id="nome" name="nome" required><div class="invalid-feedback">Nome do catalogo.</div><label for="nome" class="form-label">Desci\xe7\xe3o</label><textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea><div class="invalid-feedback">Nome do catalogo.</div></div>'}Array.from(forms).forEach(e=>{e.addEventListener("submit",a=>{e.checkValidity()||(a.preventDefault(),a.stopPropagation()),e.classList.add("was-validated")},!1)});var xValues=["Italy","France","Spain","USA","Argentina"],yValues=[55,49,44,24,15],barColors=["red","green","blue","orange","brown"];new Chart("myChart",{type:"bar",data:{labels:xValues,datasets:[{backgroundColor:barColors,data:yValues}]},options:{legend:{display:!1},title:{display:!0,text:"World Wine Production 2018"}}});