# optimisation-back

## Contexte :
    On a un fichier csv ou json de 100 numéro de carte de crédit que l'on doit vérifier
    l'algo utilisé pour vérifier c'est celui de luhn. Il y a deux implémentation une en python et une
    en js. Une implémentation en go est faisable.

## Piste d'amélioration
    Morceler le fichier en 4 et le traiter dans des threads différents
    Pipeline pattern
    memoïsation : ça fonctionne que si la personne est déjà passé.
    voir pour compiler du python
    éviter de load le fichier et utiliser le reader.
    Essayer sur un serveur web une montée en charge
    hashage rapide en crc 32

# outil de mesure :
    hyperfine : https://github.com/sharkdp/hyperfine
# Bibliothèque utilisée:
    En python : [luhn](https://pypi.org/project/luhn/)
    En JS : [luhn-js](https://www.npmjs.com/package/luhn-js)