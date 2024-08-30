/* faça um algoritimo que leia um nome de usuario e a sua senha.
A senha não pode ser igual ao nome de usuario, mostrando uma
mensagem de erro e voltando a pedir as informações*/
let nome_de_usuario = prompt("informe um nome de usuario:");
let senha = prompt("informe uma senha");
if ((nome_de_usuario) == (senha)) {
    alert("a senha não pode conter o nome de usuario, insira novamente");
    let = nome_de_usuario = prompt("informe um nome de usuario:");
    let = senha = prompt("informe uma senha");
}
while ((nome_de_usuario) != (senha)) {
    alert("usuario e senha aceitos");
    break;
}
