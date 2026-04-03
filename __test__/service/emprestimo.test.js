const ServicoEmprestimo = require ("../../src/service/ServicoEmprestimo");
const Usuario = require ("../../src/model/Usuario");
const Livro = require("../../src/model/Livro");

test('Testa usuario e livro valido', () => {
    // arrange
    const usuario = new Usuario({id: 1, nome: "teste", ativo: true, emprestimosAtivos, multasPendentes})
    const livro = new Livro({id: 1, titulo: "Livro 1", disponivel: True})
    // act
    const saida = ServicoEmprestimo.autorizarEmprestimo(usuario, livro);
    // assert
    expect(true).toBe(r);
});