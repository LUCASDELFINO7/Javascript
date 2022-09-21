do{
    opcao = mostrarmenu ();

}while(opcao != 2)

function mostrarmenu(){
    entrada = "";
    alert("==- Mostras o Menu-==" + "\n1- mostrar Menu" + "\n2- Sair");
    return entrada = prompt(); 
}
