# 🚀 Portfolio - Masihullah



## 📋 À propos du projet

Ce projet est le portfolio professionnel de **Masihullah**, développeur Full Stack.  
Il met en avant ses compétences, ses projets réalisés et intègre un assistant IA permettant aux visiteurs d’interagir facilement et d’obtenir des informations pertinentes.

## ✨ Fonctionnalités

- 🎯 Page d’accueil dynamique avec animations de texte
- 🤖 Assistant IA intégré (Google Gemini AI)
- 📬 Formulaire de contact avec envoi d’e-mails (Resend)
- 🔐 Authentification sécurisée via Clerk
- 🗄️ Base de données PostgreSQL avec Drizzle ORM
- 📱 Design responsive (mobile-first)
- 🎨 UI moderne avec Tailwind CSS
- 🎬 Animations fluides avec Framer Motion
- 🌐 Interface en français

## 🛠️ Technologies utilisées

| Catégorie        | Technologies |
|------------------|-------------|
| Framework        | Next.js 15 (App Router) |
| Langage          | TypeScript |
| Styling          | Tailwind CSS, Framer Motion |
| Base de données  | PostgreSQL, Drizzle ORM |
| Authentification | Clerk |
| Intelligence IA  | Google Gemini AI |
| Emails           | Resend |
| Déploiement      | Vercel |

## 🚀 Installation et configuration

### 🔧 Prérequis

- Node.js (v18 ou supérieur)
- npm ou yarn
- Une base de données PostgreSQL
- Comptes pour les services externes :
  - Clerk
  - Google AI Studio (Gemini)
  - Resend

### 📦 Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/Masihullah37/my-portfolio.git
cd portfolio

2. Installer les dépendances :
npm install
# ou
yarn install

3. Configurer les variables d’environnement :
cp .env.example .env.local

4. Générer les migrations :
npm run db:generate

5. Appliquer les migrations :
npm run db:migrate

6. (Optionnel) Lancer Drizzle Studio :
npm run db:studio

7. Démarrer le projet :
npm run dev


8. Variables d'environnement

Créer un fichier .env.local et ajouter les variables suivantes :

Variable	Description
DATABASE_URL	URL de connexion PostgreSQL
GOOGLE_GENERATIVE_AI_API_KEY	Clé API Google Gemini
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY	Clé publique Clerk
RESEND_API_KEY	Clé API Resend
NEXT_PUBLIC_APP_URL	URL de l'application

9.
src/
├── app/                    # Routes Next.js (App Router)
├── components/
│   ├── ui/                 # Composants UI réutilisables
│   │   ├── AiChat.tsx      # Assistant IA
│   │   ├── ClientShell.tsx # Wrapper client
│   │   ├── Footer.tsx      # Pied de page
│   │   └── Navbar.tsx      # Barre de navigation
│   ├── db/                 # Configuration base de données
│   │   ├── index.ts        # Connexion DB
│   │   └── schema.ts       # Schémas Drizzle
│   └── sections/           # Sections de la page d'accueil
├── lib/                    # Utilitaires et fonctions
├── types/                  # Types TypeScript
└── styles/                 # Styles globaux


10. Scripts disponibles
Commande	Description
npm run dev	Lance le serveur de développement
npm run build	Compile l'application pour la production
npm run start	Démarre l'application en mode production
npm run lint	Vérifie la qualité du code
npm run db:generate	Génère les migrations Drizzle
npm run db:migrate	Applique les migrations
npm run db:studio	Lance Drizzle Studio

11. Formulaire de contact

Les messages envoyés via le formulaire sont traités via l’API Resend.
Les e-mails sont envoyés à l’adresse configurée dans les variables d’environnement.

🚢 Déploiement

Le projet est optimisé pour un déploiement sur Vercel :

Connecter le dépôt GitHub à Vercel
Ajouter les variables d’environnement dans le dashboard Vercel
Déployer automatiquement à chaque push sur la branche principale

12. Contribution

Les contributions sont les bienvenues !

Fork le projet
Créer une branche :
git checkout -b feature/ma-fonctionnalite
Commit les modifications :
git commit -m "Ajout d'une nouvelle fonctionnalité"
Push la branche :
git push origin feature/ma-fonctionnalite
Ouvrir une Pull Request

13. 📞 Contact

Masihullah
📧 Email : masihullah37@gmail.com

🐙 GitHub : @Masihullah37

🙏 Remerciements
Next.js
Tailwind CSS
Drizzle ORM
Google Gemini AI
Resend
Framer Motion

