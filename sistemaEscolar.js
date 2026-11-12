
//1-Mensagem de Boas vindas

function boasVindas(){
    console.log("Bem-vindo ao Sistema Escolar!")
}

boasVindas();
boasVindas();
console.log("")

//2-Identificação do curso

function mostrarCurso(){
    console.log("Curso: Desenvolvimento de Sistema")
    console.log("Instituição: Escola de Tecnologia")
}

boasVindas();
mostrarCurso();

//Trabalhando com Parâmetros: 3-Saudação personalizada

function saudarAluno(nome){
    console.log("Olá, " + nome + "! Seja bem vindo!")
}

console.log("")
saudarAluno("Carlos");
saudarAluno("Mariana");
saudarAluno("Pedro");
console.log("")

//4-Informações do Aluno

function mostrarAluno(nome, curso){
    console.log("Aluno: " + nome)
    console.log("Curso: " + curso)
}

mostrarAluno("Ana", "Programação");
console.log("")
mostrarAluno("Maria", "Informática para Internet");
console.log("")
mostrarAluno("Pedro", "Programação");
console.log("")

//Funções com cálculos: 5- Calcular médias.

function calcularMedia(nota1, nota2){
    let result = Number((nota1 + nota2)/2)
    console.log("Média do Aluno: " + result);

}

calcularMedia(80, 60);
console.log("")

//6-Pontuação Extra

function adicionarPontos(nota, pontosExtras){
    let Extras = Number(nota + pontosExtras)
    console.log("Nota atualizada: " + Extras);
}

adicionarPontos(65, 10)
console.log("")

//Funções com condicionais: 7-Verificando a aprovação

function verificarAprovacao(media){
    if(media>=60){
        console.log("Aluno Aprovado!")
    }else{
      console.log("Aluno Reprovado")
    }
}

verificarAprovacao(85);
verificarAprovacao(45);
verificarAprovacao(60);
console.log("")

//8-Classificação de desempenho

function classificarAluno(nota){
    if(nota >=90){
        console.log("Desempenho: Excelente!")
    }else if(nota>=70 && nota <=89){
        console.log("Desempenho: Bom!")
    }else if(nota >= 60 && nota <= 69){
        console.log("Desempenho: Regular!")
    }else{
        console.log("Desempenho: Insuficiente")
    }
}

classificarAluno(50);
console.log("")

//Trabalhando com return: 9-Cáculo de mensalidade

function calcularMensalidade(valor){
    let desconto = valor * 0.10
    return valor - desconto
}

let valorFinal = calcularMensalidade(500);
console.log("Mensalidade com desconto: " + valorFinal);
console.log("")

//10-Sistema de aprovação

function calcularMedia(nota1, nota2){
    return (nota1 + nota2)/2;
}

function avaliarAluno(nome, nota1, nota2){

    console.log("Aluno: " + nome)

    let media = calcularMedia(nota1, nota2)
    console.log("A Média é: " + media)

    if(media>=60){
        console.log("Aluno Aprovado!")
    }else{
      console.log("Aluno Reprovado")
    }

   }

let dadosFinais = avaliarAluno("Vitor", 50, 100)

