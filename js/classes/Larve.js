class Larve extends Fourmi{

    #type;

    constructor(type, age, taille) {
        super(age, taille)
        
         this.#type = type;
    }

    get type() {
        return this.#type;
    }

    set type(tupe) {
        this.#type = tupe;
    }

    metamorphosis() {
        return
    }
}

