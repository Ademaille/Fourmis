class Fourmi {
    #age;
    #taille;

    constructor(age, taille) {

        this.#age = age;
        this.#taille = taille;
    }

    get age() {
        return this.#age;
    }

    set age(birth) {
        this.#age = birth;
    }

    get taille() {
        return this.#taille;
    }

    set taille(Low) {
        this.#taille = Low;
    }

    dormir() {
        return "La Fourmi va dormir";
    }

    manger() {
        return "La Fourmi va manger";
    }
}

