class Nourrice extends Ouvriere{
    #listesLarves;

    constructor(listesLarves, poste) {
    super(poste)
        this.#listesLarves = listesLarves;
    }

    get listesLarves() {
        return this.#listesLarves;
    }

    set listesLarves(larve) {
        this.#listesLarves = larve;
    }

    nourris() {
        return "La nourrice nourris les larves"
    }
}

