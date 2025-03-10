# Données et mappings

L'extension permet de travailler avec plusieurs versions du référentiel RGAA.
L'idée est de pouvoir choisir dans les options le référentiel à utiliser à un
instant T. Pour que tout fonctionne correctement, nous avons donc besoin de
multiples fichiers JSON :

## Référentiels

Dans `data/references/`, on trouve des fichiers décrivant un référentiel dans
une version donnée.

Le fichier est nommé en suivant la version. Dans ce fichier est décrit la
version du référentiel, et les thématiques, critères et tests du référentiel.
Chaque thématique, critère et test a un identifiant unique.

Actuellement, on peut générer les fichiers via des utilitaires qui _scrapent_
des page web de référentiel, ou les écrire à la main... À l'avenir, à voir si
des fichiers "officiels" seront fournis.

## Instructions

Dans `data/instructions`, on trouve des fichiers décrivant des instructions de
test pour une version de référentiel donnée. Les instructions sont propres à
l'extension, c'est pourquoi elles ne sont pas décrites directement dans les
fichiers de référentiels.

Le fichier est nommé en suivant la version.

## Helpers

Dans `data/helpers/`, on trouve des fichiers décrivant les helpers à utiliser
pour chaque test d'un référentiel d'une version donnée. Voir la documentation
des [helpers](helpers.md) pour plus de détails.

Le fichier est nommé en suivant la version.
