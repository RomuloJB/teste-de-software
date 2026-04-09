import { mensagens } from "../util/mensagens";

export class ServicoEmprestimo{
    static autorizarEmprestimo(usuario, livro) {
        return this.validarUsuario(usuario) & this.validarLivro(livro);
    }
    static validarUsuario(usuario){
        if(!usuario.ativo) return false;
        if(usuario.empresetimosAtivos >= Constantes.USUARIO_LIMITE_EMPRESTIMOS) return false;
        if(usuario.multaPendente >= Constantes.USUARIO_LIMITE_MULTA) return false;
        return true;
    }

    static validarLivro(livro){
        if(!livro.disponivel) throw new Error(mensagens.LIVRO_INDISPONIVEL);
        return true;
    }
}

module.exports = { ServicoEmprestimo };