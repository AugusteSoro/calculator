# CALCULATOR - Exercice simple Test-Driven Devlopment

Je vous présente Calculator, un exercice simple pour intégrer rapidement la notion de Test-Driven Development (TDD).

## Présentation

Calulator est une application de calculatrice (suprise!) en ligne de commande (CLI) qui a pour ambition d'offrir les features suivantes:

- Addition de deux nombres,
- Soustraction de deux nombres,
- Multiplication de deux nombres,
- Division de deux nombres.

## Exercice

Actuellement, Calculator fourni les fonctions d'additions et de soustraction. Votre mission, si vous l'accepter est de terminer l'application en intégrant les features suivantes en suivant les principes du TDD:

- Multiplication de deux nombres,
- Division de deux nombres,
- Validation des nombres entrez pour s'assurer qu'on entre pas autre chose qu'un nombre

Vous serez considérer comme ayant valider l'exercise lorsque vous aurez écrit

- un test par operation qui reussit quand le calcul est bon,
- un test qui reussit quand une des valeurs entrées n'est pas un nombre,
- un test qui reussit quand les deux valeurs entrées sont des nombres.

Point bonus si vous modifier l'application pour afficher les operations que vous avez entré et que vous afficher une erreur quand une ou toutes les valeurs entrées ne sont pas des nombres.

## Guide

### Fichiers

- **calc.js:** Ce fichier gère l'affichage et l'entrée de valeur en CLI.
- **operation.js:** Ce fichier contient toute les fonctions du programme.
- **test.js:** Ce fichier contient les tests pour évaluer le programme.

### Installation

**NodeJS** est la seule dépendance fonctionnelle. Si vous ne disposez pas de NodeJS, suivez les instructions sur la [documentation officielle](https://nodejs.org/en/download/).

Une fois que vous avez NodeJS, clonez le dépôt et installez les dépendances comme indiqué ci dessous et c'est parti.

```bash
git clone git@github.com:adeielevate/calculator-tdd-exercise.git
cd calculator-tdd-exercise
npm install
```

Pour lancer vos tests, exécuter la commande

```bash
npm test
```

Pour executer le programme en CLI, executer le programme CLI, exécuter la commande

```bash
npm calc.js
```
