class Eclaireuse extends Femelle{
    
    #rayonAction;

    constructor(rayonAction) {

        this.#rayonAction = rayonAction;
    }

    get rayonAction() {
        return this.#rayonAction;
    }

    set rayonAction(Ray) {
        this.#rayonAction = Ray;
    }

    explorer() {

        return "l'éclaireuse explore les alentours pour alerter la colonie, si besoin"  
    }
}