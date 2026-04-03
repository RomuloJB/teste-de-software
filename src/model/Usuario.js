export class Usuario {
    constructor(
        {id, nome, ativo, emprestimosAtivos, multasPendentes}
    ) {
        this.id = id;
        this.nome = nome;
        this.ativo = ativo;
        this. emprestimosAtivos = emprestimosAtivos;
        this.multasPendentes = multasPendentes;
    };
}
module.exports = Usuario;