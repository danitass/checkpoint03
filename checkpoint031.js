function alunos(nome, quantidadedeFaltas, notas) {
   return { 
       nome: nome,
       quantidadedeFaltas: quantidadedeFaltas,
       notas: notas,
       calcularMedia() {
           let media = 0;
           for (let i = 0; i < this.notas.length; i++) {
               media += this.notas[i];
           }
           return media / this.notas.length;
       },
       faltas() {
         this.quantidadedeFaltas +=1;
     },
 };
}
let alunos1 = aluno1 (Andre, 1, [10, 8, 6, 0]);
let alunos2 = aluno2 (Luis, 0, [8, 2, 5, 7]);
let alunos3 = aluno3 (Lina, 2, [6, 3, 4, 1]);


let curso = {
   nomeCurso: 'matematica',
   notadeAprovacao: 6,
   faltasMaximas: 3,
   listadeEstudantes: [aluno1, aluno2, aluno3],

 
   alunoNovo(aluno) {
    this.listaEstudantes.push(aluno);
},


aprovacao(nAluno) {
    if (nAluno > this.listaEstudantes.length - 1) 
    return 'Numero invalido';
    let aluno = this.listaEstudantes[nAluno];
    return aluno.qtFaltas < this.maxFaltas && aluno.calcularMedia() >= this.notaAprovacao
        ? true
        : aluno.calcularMedia() >= this.notaAprovacao * 1.1
        ? true
        : false;
},

listaAprovacao() {
    let aprovacao = [];
    for (let i = 0; i < this.listaEstudantes.length; i++) {
        aprovacao.push(this.aprovacao(i));
    }
    return aprovacao;
},
};


let aluno4 = new alunos('Andrea', 0, [4, 8, 0, 9]);
curso.alunoNovo(aluno4);

console.log(curso.listaAprovacao());
console.log(listaEstudantes)
