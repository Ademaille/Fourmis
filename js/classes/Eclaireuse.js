class Eclaireuse extends Femelle{

    #rayonAction;

    constructor(rayonAction, age, taille) {
    super (age, taille)
        this.#rayonAction = rayonAction;
    }

    get rayonAction() {
        return this.#rayonAction;
    }

    set rayonAction(Ray) {
        this.#rayonAction = Ray;
    }

    explorer() {

        return "L'éclaireuse explore les alentours pour alerter la colonie, si besoin"  
    }
}