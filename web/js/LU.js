function Validar(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if(username == ""){
        $("#alert").html("Escribe tu UserName primero...").slideDown(500);
        $("#username").focus();
        return false;
    }else{
        $("#alert").html("").slideUp(300); 
    }
    if(password == ""){
        $("#alert").html("Escribe tu Password primero...").slideDown(500);
        $("#password").focus();
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





function Validar3(){
    var nombre = document.getElementById("nombre").value;
    var apellidopaterno = document.getElementById("apellidopaterno").value;
    var apellidomaterno = document.getElementById("apellidomaterno").value;
    var partidopolitico = document.getElementById("partidopolitico").value;
    var telefono = document.getElementById("telefono").value;
    
    if(nombre == ""){
        $("#alert3").html("Escribe tu nombre primero...").slideDown(500);
        $("#nombre").focus();
        return false;
    }else{
        $("#alert").html("").slideUp(300); 
    }
    if(apellidopaterno == ""){
        $("#alert3").html("Escribe tu Apellido Paterno primero...").slideDown(500);
        $("#apellidopaterno").focus();
        return false;
    }else{
        $("#alert").html("").slideUp(300); 
    }
    if(apellidomaterno == ""){
        $("#alert3").html("Escribe tu Apellido Materno primero...").slideDown(500);
        $("#apellidomaterno").focus();
        return false;
    }else{
        $("#alert").html("").slideUp(300); 
    }
    if(partidopolitico == ""){
        $("#alert3").html("Escribe tu Partido Politico primero...").slideDown(500);
        $("#partidopolitico").focus();
        return false;
    }else{
        $("#alert").html("").slideUp(300); 
    }
     if(telefono == ""){
        $("#alert3").html("Escribe tu Telefono primero...").slideDown(500);
        $("#telefono").focus();
        return false;
    }else{
        $("#alert").html("").slideUp(300); 
    }
}




function Validar4(){
    var nombreu = document.getElementById("nombreu").value;
    var apellidopaternou = document.getElementById("apellidopaternou").value;
    var apellidomaternou = document.getElementById("apellidomaternou").value;
    var direccion = document.getElementById("direccion").value;
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;
    var contraseñaconf = document.getElementById("contraseñaconf").value;
    
    
    
    if(nombreu == ""){
        $("#alert4").html("Escribe tu Nombre primero...").slideDown(500);
        $("#nombreu").focus();
        return false;
    }else{
        $("#alert4").html("").slideUp(300); 
    }
    if(apellidopaternou == ""){
        $("#alert4").html("Escribe tu Apellido Paterno primero...").slideDown(500);
        $("#apellidopaternou").focus();
        return false;
    }else{
        $("#alert4").html("").slideUp(300); 
    }
    if(apellidomaternou == ""){
        $("#alert4").html("Escribe tu Apellido Materno primero...").slideDown(500);
        $("#apellidomaternou").focus();
        return false;
    }else{
        $("#alert4").html("").slideUp(300); 
    }
    if(direccion == ""){
        $("#alert4").html("Escribe tu Direccion primero...").slideDown(500);
        $("#direccion").focus();
        return false;
    }else{
        $("#alert4").html("").slideUp(300); 
    }
    if(email == ""){
        $("#alert4").html("Escribe tu Email primero...").slideDown(500);
        $("#email").focus();
        return false;
    }else{
        $("#alert4").html("").slideUp(300); 
    }
    if(Validador2(email) == false){
    $("#alert4").html("Esta incorrecto...").slideDown(500);
    $("#email").focus();
    return false;
    }else{
    $("#alert4").html("").slideUp(300); 
    }
    if(contraseña == ""){
        $("#alert4").html("Escribe tu Contraseña primero...").slideDown(500);
        $("#contraseña").focus();
        return false;
    }else{
        $("#alert4").html("").slideUp(300); 
    }
    if(contraseñaconf == ""){
        $("#alert4").html("Rectifica tu Contraseña primero...").slideDown(500);
        $("#contraseñaconf").focus();
        return false;
    }else{
        $("#alert4").html("").slideUp(300); 
    }
}
function Validador2(email){
 var tester2 =/^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/; 
 //var expr = /^([A-Za-z0-9])$/;
return tester2.test(email);
}