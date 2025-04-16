class Ouvriere extends Femelle{
    #poste

    constructor(poste) {
        this.#poste = poste;
    }

    get poste() {
       return  this.#poste;
    }

    set poste(Post) {
        this.#poste = Post;
    }

    creuserGalerie() {
        return
    }

    nettoyageGallerie() {
        return
    }

    chercherNourriture() {
        return
    }
} 