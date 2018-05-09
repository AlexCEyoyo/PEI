function Validar(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("pwd").value;
    
    if(username == ""){
        $("#alert").html("Escribe tu UserName primero...").slideDown(500);
        $("#username").focus();
        return false;
    }else{
        $("#alert").html("").slideUp(300); 
    }
    if(password == ""){
        $("#alert").html("Escribe tu Password primero...").slideDown(500);
        $("#pwd").focus();
        return false;
    }else{
        $("#alert").html("").slideUp(300); 
    }
}

function Validar2(){
    var noboleta  = document.getElementById("NoBoleta").value;

    if(noboleta == ""){
    $("#alert2").html("Ingresa el No.Boleta...").slideDown(500);
    $("#NoBoleta").focus();
    return false;
    }else{
    $("#alert2").html("").slideUp(300); 
    }
    if(Validador(noboleta) == false){
    $("#alert2").html("Esta incorrecto...").slideDown(500);
    $("#NoBoleta").focus();
    return false;
    }else{
    $("#alert2").html("").slideUp(300); 
    }
}
function Validador(noboleta){
 var tester =/^([A-Za-z0-9])$/; 
 //var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
return tester.test(noboleta);
}