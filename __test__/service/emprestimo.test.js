const ServicoEmprestimo = require ("../../src/service/ServicoEmprestimo");
const Usuario = require ("../../src/model/Usuario");
const Livro = require("../../src/model/Livro");
const { mensagens } = require("../../src/util/mensagens");
const { constantes } = require("../../src/util/Constantes");
const casos = require("../dados/emprestimo.json");

describe("Emprestimo" , () => {    
    test('Testa usuario e livro valido', () => {
        // arrange
        const usuario = new Usuario({id: 1, nome: "teste", ativo: true, emprestimosAtivos, multasPendentes})
        const livro = new Livro({id: 1, titulo: "Livro 1", disponivel: True})
        // act
        const saida = ServicoEmprestimo.autorizarEmprestimo(usuario, livro);
        // assert
        expect(saida).toBe(true);
    });
    
    test('Testa usuario e livro valido', () => {
        // arrange
        const usuario = new Usuario({id: 1, nome: "teste", ativo: true, emprestimosAtivos, multasPendentes})
        const livro = new Livro({id: 1, titulo: "Livro 1", disponivel: true})
        // act
        const saida = ServicoEmprestimo.autorizarEmprestimo(usuario, livro);
        // assert
        expect(saida).toBe(false);
    });

    test('Testa usuario e livro valido', () => {
        // arrange
        const usuario = new Usuario({id: 1, nome: "teste", ativo: false, emprestimosAtivos, multasPendentes})
        const livro = new Livro({id: 1, titulo: "Livro 1", disponivel: true})
        // act
        const saida = ServicoEmprestimo.autorizarEmprestimo(usuario, livro);
        // assert
        expect(saida).toBe(false);
    });

    test('Testa usuario e livro valido', () => {
        // arrange
        const usuario = new Usuario({id: 1, nome: "teste", ativo: false, emprestimosAtivos, multasPendentes})
        const livro = new Livro({id: 1, titulo: "Livro 1", disponivel: true})
        // act
        const saida = ServicoEmprestimo.autorizarEmprestimo(usuario, livro);
        // assert
        expect(saida).toBe(false);
    });

    test('Testa usuario e livro valido', () => {
        // arrange
        const usuario = new Usuario({id: 1, nome: "teste", ativo: false, emprestimosAtivos: constantes.USUARIO_LIMITE_EMPRESTIMOS + 1, multasPendentes})
        const livro = new Livro({id: 1, titulo: "Livro 1", disponivel: true})
        // act
        expect(() => ServicoEmprestimo.autorizarEmprestimo(usuario, livro)).toThrow(mensagens.LIVRO_INDISPONIVEL); // estrutura para lançar uma exceção

        // assert
        
    });

    test.each(casos)('$descricao', (caso)=> { // laço de repetição --> para cada caso de teste ele vai atribuir a variavel caso
        // arrange
        const usuario = new Usuario({id: 1, nome: "teste", ativo: caso.ativo, emprestimosAtivos: caso.emprestimosAtivos, multasPendentes: caso.multasPendentes})
        const livro = new Livro({id: 1, titulo: "Livro 1", disponivel: caso.livroDisponivel})
        // act
        const saida = ServicoEmprestimo.autorizarEmprestimo(usuario, livro);
        // assert
        if(caso.livroDisponivel) {
            expect(caso.saida).toBe(saida);
        }
        else {
            expect(() => ServicoEmprestimo.autorizarEmprestimo(usuario, livro)).toThrow(mensagens.LIVRO_INDISPONIVEL);
        }
    });


});