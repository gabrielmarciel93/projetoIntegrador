function formulario(){
    var nome = document.getElementById("nomeCliente)").value;
    var emailCliente = document.getElementById("emailCliente)").value;
    var mensagemCliente = document.getElementById("mensagemCliente)").value;
    var mensagem = document.getElementById("mensagemConfirmacao");
       
    
    mensagem.innerHTML = nome + " , <br>sua mensagem foi enviada com sucesso!"
    


}