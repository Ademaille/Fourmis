class Soldat extends Femelle{
    #endurance;

    constructor(endurance) {

        this.#endurance = endurance;
    }

    get endurance() {
        return this.#endurance;
    }

    set endurance(rando) {
        this.#endurance = rando;
    }

    attaquer() {
        return "Pour proteger la colonie des envahisseurs, les soldats attaquent"
    }
}