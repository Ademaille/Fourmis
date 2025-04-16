class Ouvriere extends Femelle{
    #poste

    constructor(poste, age, taille) {
        super(age, taille)

        this.#poste = poste;
    }

    get poste() {
       return  this.#poste;
    }

    set poste(Post) {
        this.#poste = Post;
    }

    creuserGalerie() {
        return "L'ouvriére creuse une galerie pour sa colonie"
    }

    nettoyageGallerie() {
        return "Ensuite elle nettoie les recoins"
    }
}