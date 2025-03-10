# Publier une nouvelle version de l'extension

## 1. Augmenter le n° de version

Avant de construire la build, n'oubliez pas de changer la version de
l'application dans `package.json` et `manifest.json`.

## 2. Taguer

N'oubliez pas de taguer, sur master, l'état de l'application avec le nouveau n°
de version.

## 3. Construire la build

À la racine du projet, lancez

```sh
./bin/build --api-key CLE --api-secret SECRET
```

Cette commande fait plusieurs choses :

- elle construit une branche locale `publication`
- elle ajoute en _staging_ dans le dossier `/dist` les sources buildées : js,
  css, svg
- elle ajoute en _staging_ dans le dossier `/artifacts` un fichier `.zip`
  contenant l'extension, pouvant être uploadé sur le store Chrome pour
  publication. Il peut aussi être utilisé pour installer l'extension à la main
  en local, sur Chrome et Firefox.
- **si les clés d'API sont renseignées**, elle ajoute en _staging_ dans le
  dossier `/artifacts` un fichier `.xpi` contenant l'extension. Ce fichier peut
  être uploadé sur le store Firefox pour publication.

Les paramètres `--api-key` et `--api-secret` renseignent les clés publiques et
privées associées au compte qui publie l'extension (voir
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/web-ext_command_reference#web-ext_sign).

**La commande ne commit et ne push rien, c'est à vous de le faire**. Quand tout
est vérifié, commitez les fichiers buildés sur votre branche publication locale,
et remplacez celle distante par la votre :

```sh
git commit -m "New build"
git push -f origin publication
```
