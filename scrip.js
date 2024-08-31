function captura() {

    var skillEst = document.getElementById("skill").value;
    var AcadeEst = document.getElementById("Acade").value;
    if(skillEst==""){
        alert("Es obligatorio digitar la informacion")
        document.getElementById("skill").focus();
    }
    else{
        if(AcadeEst==""){

            alert("Por favor digite su historial academico")
            document.getElementById("Acade").focus();
        }

    }
   
}
