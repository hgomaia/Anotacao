//Memória (variáveis)
var x
const y 

//Processador (operadores)
+ //cuidado: + pode ser usado para juntar duas características, ou seja, 1 + 1 = 11, para evitar use  algum dos parse
- 
* 
** //potência (funciona em algumas células)
/ 
% //resto de divisão 
Math.pow(x,y) // potência de x^y
Math.sqrt(x) // raiz quadrada de x
Math.pow(x,1/y) // outras raízes; ex: raiz cúbica de x = x^1/3

//Entrada - prompt, confirm
y = prompt("Olá, qual é o seu nome?")

//Saída - alert, console.log, document.write
alert(x)
alert("Olá, mundo!"+x)
console.log("Olá mundo!"+x);
document.write("Olá mundo!"+x)

//Converter tipos de dados
parseInt() //parseInt só aceita número inteiro
parseFloat() //parseFloat só aceita número real
Number() //Number aceita em qualquer formato

//Decisão (if, else if, else)
if (x > 6){
  alert("x é maior que 6")
} else if (x == 6){
  alert("x é igual a 6";
}else{
  alert("x é menor que 6")
}
// if é uma condição, else é o que acontece se a condição não for atendida e else if é uma condição dentro de outra condição 

//Operadores Relacionais
> //maior
< //menor
>= </>//maior ou igual
<= //menor ou igual
== //igual
!= //diferente de

//Operadores Lógicos
&& //e Ex: x > 6 && x < 10
|| //ou
! //não
