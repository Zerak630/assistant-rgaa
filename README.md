# Assistant RGAA

Assistant RGAA est une extension de navigateur pour Firefox et Chrome.

L'extension propose la liste complète des critères et tests des référentiels
RGAA 3.0 2016 & 2017 ainsi que des référentiels 4.0 & 4.1, le référentiel
général d'accessibilité pour les administrations de l'État français. Ce
référentiel est une adaptation opérationnelle des règles internationales
d'accessibilité (WCAG 2.0 pour le RGAA 3 et WCAG 2.1 pour le RGAA 4).

Tous les tests du référentiel sont repris et accompagnés d'instructions pour
guider l'évaluation de la conformité. La majeure partie des tests disposent
d'une fonctionnalité d'aide à l'évaluation qui met en évidence les éléments
concernés par les tests.

## Fonctionnalités

Pour chaque test du RGAA, l'extension présente :

- une liste d'instructions permettant de conclure sur le statut conforme ou non
  d'un test
- la liste des modifications appliquées à la page par la fonctionnalité de test
  de l'assistant.

L'extension dispose d'une page d'aide expliquant plus en détail sa construction
et son fonctionnement.

L'extension peut être positionnée à différents endroits du navigateur (à droite,
à gauche, en bas) ou ouverte dans une fenêtre séparée.

## À propos

L'assistant RGAA, initialement développé pour le compte de la
<abbr title="Direction interministérielle du numérique">DINUM</abbr>
(anciennement
<abbr title="Direction interministérielle du numérique et du système d'information et de communication de l'État français">DINSIC</abbr>),
est maintenu et mis à jour par [Boscop](https://boscop.fr/). Cette extension est
placée sous [licence MIT](./LICENSE).

## Documentation

- [Installation](doc/installation.md) : comment installer l'extension sur un
  navigateur pour auditer des sites
- [Installation pour développer](doc/installation-dev.md) : comment installer
  l'extension dans un environnement de développement pour contribuer au projet
- [Architecture](doc/architecture.md) : description de la structure globale du
  code pour commencer à contribuer au projet
- [Helpers](doc/helpers.md) : description de la partie _helpers_ du code
- [Données](doc/donnees.md) : description des fichiers de données et mapping
  pour que l'extension fonctionne avec les différentes versions du RGAA
  disponibles
- [Publication](doc/publication.md) : comment publier une nouvelle version de
  l'extension
