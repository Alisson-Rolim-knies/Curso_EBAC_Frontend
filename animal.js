class Animal {
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
        }

    somDoAnimal() {
        console.log(" O " +this.nome + " tem " +this.idade + " anos.");
    }
};

class Cachorro extends Animal{
    constructor (nome, idade, raca){
        super(nome, idade, raca)
        this.raca = raca;
        }

    somDoAnimal() {
        console.log(" A  " +this.nome + " tem " +this.idade + " ano, e é da raça " +this.raca + "." );
    }
};

class Gato extends Animal{
    constructor (nome, idade, pais){
        super(nome, idade, pais)
        this.pais = pais;
        }

    somDoAnimal() {
        console.log(" O  " +this.nome + " tem " +this.idade + " anos, e é do " +this.pais + "." );
    }
};

class Passaro extends Animal{
    constructor (nome, idade, cor){
        super(nome, idade, cor)
        this.cor = cor;
        }

    somDoAnimal() {
        console.log(" O  " +this.nome + " tem " +this.idade + " ano, e é " +this.cor + "." );
    }
};




const animal = new Animal ("Rex", 10);
const cachorro = new Cachorro ("Dora", 1, "Lulu");
const gato = new Gato ("Dino", 5, "Brasil");
const passaro = new Passaro ("Chico", 1, "vermelho e branco");


animal.somDoAnimal();
cachorro.somDoAnimal();
gato.somDoAnimal();
passaro.somDoAnimal();
