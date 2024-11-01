class Edificacao {
    constructor(metragem, orcamento) {
        this.metragem = metragem;
        this.orcamento = orcamento;
    }

    resumo() {
        console.log("Esta edificação possui uma metrgaem de " + this.metragem + " e um orçamento de " + this.orcamento + ".")
    }
}

class Casa extends Edificacao {
    constructor(metragem, orcamento, cor) {
        super (metragem, orcamento);
        this.cor = cor;
    }

    resumo() {
        console.log("Esta edificação possui uma metrgaem de " + this.metragem + " e um orçamento de " + this.orcamento + " e é pintada de "+ this.cor + ".")
    }
}

class Apartamento extends Edificacao {
    constructor(metragem, orcamento, andar) {
        super (metragem, orcamento);
        this.andar = andar;
    }

    resumo() {
        console.log("Esta edificação possui uma metrgaem de " + this.metragem + " e um orçamento de " + this.orcamento + " e fica no "+ this.andar + "andar.")
    }
}

class Quiosque extends Edificacao {
    constructor(metragem, orcamento, banheiros) {
        super (metragem, orcamento);
        this.banheiros = banheiros;
    }

    resumo() {
        console.log("Esta edificação possui uma metrgaem de " + this.metragem + " e um orçamento de " + this.orcamento + " e conta com  "+ this.banheiros + " banheiros.")
    }
}


const casa = new Casa("180m²", "R$550.000", "larajan");
const apartamento = new Apartamento("120m²", "R$350.000", "5º");
const quiosque = new Quiosque("120m²", "R$350.000", "2");


casa.resumo();
apartamento.resumo();
quiosque.resumo();