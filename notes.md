### Librairie

La librairie est le tableau qui contient l'ensemble des `Book` instanciés.

### Livres

Chaque livre sera un objet `Book` instancié avec les propriétés suivantes:

- id : identifiant unique pour chaque livre. Généré a la creation de l'objet
- author : nom et prénom de l'auteur
- title : titre du livre
- status : statut de lecture du livre

### addBookToLibrary()

Fonction pour ajouter un livre à la librairie qui prend comme arguments
`author, title, status`.

### La Page Web

Pour présenter la librairie sur la page web, on itère à travers les livres du
tableau. Pour chaque objet `Book`, on créer un élément html (une carte) avec:

1. Nom de l'auteur
2. Titre
3. Statut de lecture

### Formulaire

Sert à ajouter un livre à la collection.

- Créer le formulaire dans le html.
- Écouter le boutton d'envoi du formulaire pour ajouter la nouvelle entrée à la
  librairie.

Le formulaire contient :

- Un champ pour le nom de l'auteur.
- Un champ pour le titre.
- 3 boutons radio pour le statut. `[read] [reading] [not read yet]`

### Delete Book

Ajouter un boutton à chaque livre pour l'enlever de la librairie. On ajoute un
attribut data qui correspond à l'id du livre. On pourra récuperer plus tard
cette info avec `element.dataset.id`
