// POO em javaScript
// Classes são modelos utilizados para criar objetos
// A classe define as propriedades e métodos de um objeto
class Pessoa {
    constructor(nome, sobrenome, cpf, email, saldo){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
    }
    exibirNomeCompleto(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`);
    }
    depositar(valor){
        this.saldo += valor;
    }
}
// Uma classe pode herdar características de outra classe
class Programador extends Pessoa{
    constructor(nome, sobrenome, cpf, email, linguagem){
        super(nome, sobrenome, cpf, email);
        this.linguagem = linguagem;
    }
}
// Um objeto é a instância de uma classe
const pessoa = new Pessoa("Paulo","Soares","1234567890","paulo123@gmail.com",300);
// Adicionando 200 ao saldo Atual
pessoa.depositar(200);
