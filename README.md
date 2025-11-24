# 🎮 Syriacdle

Un jeu Wordle éducatif pour apprendre le syriaque/araméen avec une analyse grammaticale complète.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Langue](https://img.shields.io/badge/langue-Syriaque%20(Serto)-orange)
![License](https://img.shields.io/badge/license-MIT-green)

## 📖 Description

Wordle Araméen est un jeu de devinettes de mots inspiré du célèbre Wordle, spécialement conçu pour l'apprentissage du syriaque (araméen). Chaque mot découvert dévoile une analyse grammaticale complète avec la terminologie syriaque traditionnelle.

### ✨ Caractéristiques principales

- 🎯 **Jeu Wordle classique** adapté à l'alphabet syriaque
- 📚 **Analyse grammaticale complète** avec 16+ catégories
- 🔤 **Terminologie syriaque** authentique (ܡܠܬܐ, ܫܪܫܐ, ܐܘܟܝܬܐ, etc.)
- 📖 **Exemples bibliques** pour chaque mot (Peshitta)
- 🎨 **Grille colorée** pour visualiser votre progression
- 📱 **Design responsive** - fonctionne sur tous les appareils
- 🌐 **Support Serto** - écriture syriaque occidentale

## 🎮 Comment jouer

1. **Devinez le mot** en syriaque (4-5 lettres)
2. Tapez votre proposition et validez
3. Les couleurs vous guident :
   - 🟩 **Vert** : Lettre correcte au bon emplacement
   - 🟨 **Jaune** : Lettre correcte mais mauvais emplacement
   - ⬜ **Gris** : Lettre absente du mot
4. Vous avez **6 tentatives** pour trouver le mot
5. Une fois trouvé, découvrez l'**analyse grammaticale complète** !

## 📊 Structure du projet

```
wordle-arameen/
├── src/
│   ├── components/
│   │   ├── Game/
│   │   │   ├── WordleGrid.jsx         # Grille de jeu
│   │   │   ├── Keyboard.jsx           # Clavier virtuel syriaque
│   │   │   └── GameLogic.jsx          # Logique du jeu
│   │   ├── Result/
│   │   │   ├── ResultPage.jsx         # Page de résultat avec grille
│   │   │   └── ShareButton.jsx        # Bouton de partage
│   │   └── Detail/
│   │       ├── DetailPage.jsx         # Page d'analyse détaillée
│   │       ├── GrammarTab.jsx         # Tableau grammatical
│   │       ├── LettersTab.jsx         # Décomposition lettres
│   │       └── ExampleTab.jsx         # Exemple biblique
│   ├── data/
│   │   ├── words/
│   │   │   ├── index.js               # Export de tous les mots
│   │   │   ├── tnappes.js             # ܬܢܲܦܸܨ (Pa'ʿel)
│   │   │   ├── nethage.js             # ܢܸܬܗܲܓܸܐ (Etpʿal)
│   │   │   └── rgasho.js              # ܪܓܰܫܘ (Pʿal)
│   │   └── categories.js              # Catégories thématiques
│   ├── utils/
│   │   ├── syriacUtils.js             # Fonctions utilitaires syriaque
│   │   └── gameLogic.js               # Logique de validation
│   └── App.jsx
├── public/
│   └── fonts/
│       └── serto.woff2                 # Police Serto
├── package.json
└── README.md
```

## 🗂️ Structure des données

Chaque mot est structuré avec toutes les informations grammaticales :

```javascript
{
  id: "nethage_001",
  word: "ܢܬܗܓܐ",                    // Sans vocalisation (pour le jeu)
  wordVocalized: "ܢܸܬܗܲܓܸܐ",        // Avec vocalisation complète
  
  basic: {
    transliteration: "nethaggē",
    translation: "il se comportera",
    // ...
  },
  
  grammarTable: [
    {
      category: "Nature",
      syriacTerm: "ܡܠܬܐ ܕܥܒܕܐ",
      value: "Verbe",
      explanation: "...",
      // ...
    },
    // ... 15+ autres catégories
  ],
  
  biblicalExample: {
    reference: "Psaume 1:1",
    syriac: "...",
    french: "...",
    // ...
  }
}
```

## 📚 Catégories grammaticales

Le jeu analyse chaque mot selon **16+ catégories** :

| Catégorie | Terme syriaque | Exemple |
|-----------|----------------|---------|
| **Nature** | ܡܠܬܐ ܕܥܒܕܐ | Verbe |
| **Structure** | ܡܠܬܐ ܥܦܝܦܬܐ | Mot simple |
| **Racine** | ܫܪܫܐ | ܗ-ܓ-ܐ |
| **Type de racine** | ܫܪܫܐ ܬܠܝܬܝܐ | Trilitère forte |
| **Conjugaison** | ܐܘܟܝܬܐ / ܒܢܝܢܐ | ܐܶܬܦܥܰܠ (Etpʿal) |
| **Temps** | ܙܒܢܐ | ܥܗܢ (Imparfait) |
| **Aspect** | ܣܘܟܠܐ | Imperfectif |
| **Personne** | ܦܪܨܘܦܐ | 3m singulier |
| **Nombre** | ܟܝܠܐ / ܡܢܝܢܐ | ܚܕܝܐ (Singulier) |
| **Genre** | ܓܢܣܐ | Masculin |
| **Voix** | ܩܠܐ | Passif/Réflexif |
| **Intensité** | ܚܝܠܐ ܕܫܡܗܐ | Simple/Intensif |
| **Lettres** | ܐܬܘܬܐ | 5 lettres |
| **Voyelles** | ܙܘܥܐ ܕܩܠܐ | Ḥḇāṣā + Zqāfā |
| **Gémination** | ܟܦܠܘܬܐ | Oui/Non |
| **Transitivité** | ܡܬܚܡܢܘܬܐ | Transitif |
| **Régularité** | ܨܒܘܬܐ | Régulier |

## 🎨 Conjugaisons supportées

Le jeu couvre les **7 conjugaisons principales** du syriaque :

1. **Pʿal** (ܦܥܰܠ) - Simple actif
   - Exemple : ܪܓܰܫܘ (rgašaw) - "ils ont senti"
   
2. **Pa'ʿel** (ܦܰܥܶܠ) - Intensif
   - Exemple : ܬܢܲܦܸܨ (tnappeṣ) - "elle secoue violemment"
   
3. **Afʿel** (ܐܰܦܥܶܠ) - Causatif
   - Exemple : ܐܰܢܦܶܨ (anpeṣ) - "il a fait secouer"
   
4. **Etpʿal** (ܐܶܬܦܥܰܠ) - Passif de Pʿal
   - Exemple : ܢܸܬܗܲܓܸܐ (nethaggē) - "il se comportera"
   
5. **Etpa'ʿal** (ܐܶܬܦܰܥܰܠ) - Passif de Pa'ʿel
   
6. **Ettafʿal** (ܐܶܬܬܰܦܥܰܠ) - Passif de Afʿel
   
7. **Šafʿel** (ܫܰܦܥܶܠ) - Intensif spécial

## 📖 Exemples bibliques

Chaque mot inclut un **exemple de la Peshitta** (Bible syriaque) :

- **Référence précise** (livre, chapitre, verset)
- **Texte syriaque vocalisé**
- **Traduction française**
- **Contexte théologique/historique**
- **Notes linguistiques**

## 🎯 Catégories thématiques

Les mots sont organisés par thèmes :

1. 🏗️ **Matériaux** - Objets et matières
2. ✨ **Spirituels/Qualités** - Vertus et concepts abstraits
3. 👤 **Prénoms** - Noms bibliques
4. 🌿 **Plantes** - Flore et végétation
5. 🔧 **Technologies** - Outils et techniques
6. 🦁 **Animaux** - Faune biblique
7. 🌅 **Nature** - Éléments naturels (lumière, etc.)
8. 👨‍👩‍👧‍👦 **Famille** - Relations familiales

## 🚀 Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/wordle-arameen.git

# Installer les dépendances
cd wordle-arameen
npm install

# Lancer en mode développement
npm run dev

# Build pour production
npm run build
```

## 🛠️ Technologies utilisées

- **React** 18+ - Framework UI
- **Tailwind CSS** - Styling
- **Lucide React** - Icônes
- **Vite** - Build tool
- **Police Serto** - Typographie syriaque

## 📝 Ajouter de nouveaux mots

Pour ajouter un nouveau mot au jeu :

1. Créez un fichier dans `src/data/words/votre-mot.js`
2. Utilisez la structure de données complète
3. Incluez toutes les catégories grammaticales
4. Ajoutez un exemple biblique si possible
5. Exportez dans `src/data/words/index.js`

### Template de mot

```javascript
export const votreMotData = {
  id: "votre_mot_001",
  word: "ܡܠܬܐ",
  wordVocalized: "ܡܶܠܬܳܐ",
  
  basic: {
    transliteration: "meltā",
    translation: "mot, parole",
    translationShort: "mot"
  },
  
  grammarTable: [
    // ... toutes les catégories
  ],
  
  morphology: {
    letters: [/* ... */],
    vowels: [/* ... */]
  },
  
  biblicalExample: {
    reference: "Jean 1:1",
    syriac: "ܒܪܫܝܬ ܐܝܬܘܗܝ ܗܘܐ ܡܠܬܐ",
    french: "Au commencement était la Parole",
    // ...
  },
  
  gameMetadata: {
    difficulty: "débutant",
    category: "spirituel",
    letterCount: 4
  }
};
```

## 🎓 Ressources pédagogiques

Le jeu s'appuie sur :

- **Terminologie grammaticale syriaque traditionnelle**
- **Peshitta** - Bible syriaque (traduction du 2ème siècle)
- **Script Serto** - Écriture occidentale standard
- **Grammaires de référence** :
  - Nöldeke's Compendious Syriac Grammar
  - Muraoka's Classical Syriac
  - Coakley's Robinson's Paradigms

## 📱 Fonctionnalités futures

- [ ] Mode multijoueur
- [ ] Statistiques détaillées
- [ ] Streak (jours consécutifs)
- [ ] Mode "Challenge quotidien"
- [ ] Support Estrangelo et Madnḥāyā
- [ ] Clavier virtuel syriaque intégré
- [ ] Mode audio (prononciation)
- [ ] Flashcards d'apprentissage
- [ ] Comparaison avec l'arabe et l'hébreu
- [ ] Mode "Construire un verbe"

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

### Domaines de contribution

- 📝 **Ajouter des mots** - Élargir la base de données
- 🐛 **Corriger des bugs** - Améliorer la stabilité
- 🎨 **Design** - Améliorer l'UI/UX
- 📚 **Documentation** - Enrichir les explications
- 🌍 **Traductions** - Ajouter d'autres langues d'interface
- 🎓 **Contenu pédagogique** - Tutoriels et guides

## 📧 Contact

- **Créateur** : [Votre Nom]
- **Email** : votre.email@example.com
- **Twitter** : [@VotreHandle]

## 📄 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- **Communauté syriaque** pour la préservation de la langue
- **Projet Peshitta** pour les textes bibliques
- **Beth Mardutho** - The Syriac Institute
- **CAL (Comprehensive Aramaic Lexicon)** pour les ressources lexicales
- **Tous les contributeurs** qui enrichissent ce projet

## 🌟 Soutenez le projet

Si ce projet vous aide à apprendre le syriaque :

- ⭐ Donnez une étoile sur GitHub
- 🐦 Partagez sur les réseaux sociaux
- 📚 Contribuez avec de nouveaux mots
- 💬 Rejoignez les discussions
- ☕ [Buy me a coffee](https://www.buymeacoffee.com/votre-nom)

---

<div align="center">

**ܫܠܡܐ ܥܠܝܟܘܢ** (Šlāmā ʿalaykōn - Paix sur vous)

Fait avec ❤️ pour la communauté syriaque

[Website](#) • [Documentation](#) • [Communauté](#)

</div>
