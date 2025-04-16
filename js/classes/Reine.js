class Reine extends Fourmi{
    #nbOeufsPondus;

   constructor(nbOeufsPondus, age, taille) {
    super(age, taille)
    
        this.#nbOeufsPondus = nbOeufsPondus;
    } 

    get nbOeufsPondus() {
        return this.#nbOeufsPondus;
    }

    set nbOeufsPondus(Oeufs) {
        this.#nbOeufsPondus = Oeufs;
    }

    pondre() {
        return "La reine fourmis pond en moyenne 30 oeufs par jour"
    }
}

    