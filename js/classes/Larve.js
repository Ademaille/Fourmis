class Larve extends Fourmi{

    #type;

    constructor(type, age, taille) {
    super(age, taille)
        
         this.#type = type;
    }

    get type() {
        return this.#type;
    }

    set type(types) {
        this.#type = types;
    }

    metamorphosis() {
        return ("Les larves en maturité se transforme en fourmis")
        
    }
}

