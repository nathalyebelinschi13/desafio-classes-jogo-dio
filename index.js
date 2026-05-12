class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque genérico";
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias (objetos) para testar
const heroiMago = new Heroi("Merlin", 100, "mago");
const heroiGuerreiro = new Heroi("Conan", 35, "guerreiro");
const heroiNinja = new Heroi("Hanzo", 25, "ninja");

// Chamando os ataques
heroiMago.atacar();
heroiGuerreiro.atacar();
heroiNinja.atacar();