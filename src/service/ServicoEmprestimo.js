export class ServicoEmprestimo{
    static autorizarEmprestimo(usuario, livro) {
        return this.validarUsuario(usuario)
    }
    static validarUsuario(usuario){
        if(!usuario.ativo) return false;
        if(usuario.empresetimosAtivos >= Constantes.USUARIO_LIMITE_EMPRESTIMOS) return false;
        if(usuario.multaPendente >= Constantes.USUARIO_LIMITE_MULTA) return false;
        return true;
    }

    static validarLivro(livro){
        if(!livro.disponivel) return false;
        return true;
    }
}

module.exports = ServicoEmprestimo