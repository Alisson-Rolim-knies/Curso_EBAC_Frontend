// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: "João", nota: 8 },
    { nome: "Maria", nota: 5 },
    { nome: "Pedro", nota: 7 },
    { nome: "Ana", nota: 4 },
    { nome: "Carlos", nota: 6 }
];

// Função para retornar os alunos com nota >= 6
function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Chama a função e armazena o resultado em uma variável com nome diferente
const resultado = alunosAprovados(alunos);
console.log(resultado);
