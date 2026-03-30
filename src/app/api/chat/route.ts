


import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import type { ChatMessage } from "@/types";

// Réponses de secours (en cas d'échec de Gemini)
function getSmartResponse(message: string): string {
  const query = message.toLowerCase();
  
  if (query.includes("compétence") || query.includes("techno") || query.includes("stack") || query.includes("sais") || query.includes("maîtrise")) {
    return "Masihullah est un Développeur Full Stack avec de solides compétences :\n\n• React.js, Next.js, TypeScript, Tailwind CSS\n• Laravel/PHP, Node.js\n• MySQL, MongoDB, PostgreSQL\n• Git, GitHub Actions, Vercel\n\nSes compétences frontend sont particulièrement solides, avec 80-85% de maîtrise en React et Next.js !";
  } 
  else if (query.includes("projet") || query.includes("réalisé") || query.includes("créé") || query.includes("développé")) {
    return "Masihullah a développé plusieurs projets impressionnants :\n\n1. **Plateforme E-Commerce** - Site de vente en ligne full-stack avec Next.js, Laravel, MySQL et authentification Clerk\n2. **Gestionnaire de Tâches IA** - Application de tâches intelligente avec React, Node.js et Google Gemini AI\n3. **API REST** - API Laravel prête pour la production avec authentification JWT et tests\n4. **Tableau de Bord Analytique** - Dashboard React avec graphiques et tableaux de données\n\nConsultez la section Projets de ce portfolio pour des démos en direct !";
  }
  else if (query.includes("disponible") || query.includes("embaucher") || query.includes("travailler") || query.includes("emploi") || query.includes("poste")) {
    return "Oui ! Masihullah recherche activement des opportunités. Il est ouvert à :\n\n• Postes à temps plein\n• Rôles à temps partiel\n• Missions freelance\n• Travail à distance ou sur site\n\nN'hésitez pas à utiliser le formulaire de contact pour entrer en relation !";
  }
  else if (query.includes("expérience") || query.includes("parcours") || query.includes("à propos") || query.includes("formation")) {
    return "Masihullah est un Développeur Full Stack autodidacte avec environ 12 mois d'apprentissage intensif. Il a réalisé des projets concrets et déployés et cherche actuellement son premier poste professionnel. Son approche se concentre sur des applications pratiques et fonctionnelles plutôt que sur de simples tutoriels. Il apprend extrêmement vite et est très dévoué à devenir un développeur professionnel !";
  }
  else if (query.includes("localisation") || query.includes("où") || query.includes("paris") || query.includes("ville")) {
    return "Masihullah est basé à Tours, France 🇫🇷 et est ouvert aux opportunités à distance et sur site dans la région.";
  }
  else if (query.includes("contact") || query.includes("email") || query.includes("joindre") || query.includes("contacter")) {
    return "Vous pouvez contacter Masihullah via le formulaire de contact sur ce portfolio, ou directement par email à masihullah37@gmail.com. Il répond généralement dans les 24 heures !";
  }
  else {
    return "Merci pour votre intérêt ! Je suis l'assistant IA du portfolio de Masihullah. Je peux vous parler de ses compétences, projets, expérience ou disponibilité. N'hésitez pas à me poser des questions, ou utilisez le formulaire de contact pour joindre Masihullah directement ! Que souhaitez-vous savoir ?";
  }
}

export async function POST(request: NextRequest) {
  console.log("\n📨 API Chat appelée");
  
  try {
    const body = await request.json() as { messages?: ChatMessage[] };
    const { messages } = body;
    
    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: "messages requis" }, { status: 400 });
    }
    
    const lastMessage = messages[messages.length - 1];
    console.log("Message utilisateur:", lastMessage?.content);
    
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    console.log("Clé API existe:", !!apiKey);
    
    let response = "";
    let usedGemini = false;
    
    // Essayer d'utiliser Gemini si la clé API existe
    if (apiKey && apiKey.trim() !== "") {
      try {
        console.log("Tentative d'utilisation de l'API Gemini avec le modèle: gemini-2.0-flash...");
        const genAI = new GoogleGenerativeAI(apiKey);
        // Utiliser gemini-2.0-flash parmi les modèles disponibles
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        
        const context = `Vous êtes un assistant IA utile pour le portfolio développeur de Masihullah.
        
À propos de Masihullah:
- Développeur Full Stack compétent en React, Next.js, TypeScript, Tailwind CSS, Laravel, Node.js
- Basé à Tours, France
- Ouvert aux opportunités professionnelles (temps plein, temps partiel, freelance, à distance)
- A réalisé : Plateforme E-Commerce, Gestionnaire de Tâches IA, API REST, Tableau de Bord Analytique
- Email: masihullah37@gmail.com
- GitHub: github.com/Masihullah37

Gardez les réponses amicales, concises (moins de 100 mots) et utiles. Utilisez occasionnellement des emojis pour être amical.`;
        
        const prompt = `${context}\n\nQuestion de l'utilisateur: ${lastMessage.content}\n\nAssistant:`;
        const result = await model.generateContent(prompt);
        response = result.response.text();
        usedGemini = true;
        console.log("✅ API Gemini utilisée avec succès !");
        console.log("Aperçu de la réponse:", response.substring(0, 100));
      } catch (geminiError) {
        console.log("⚠️ Échec de l'API Gemini:", geminiError instanceof Error ? geminiError.message : String(geminiError));
        console.log("Utilisation d'une réponse de secours à la place");
      }
    } else {
      console.log("Aucune clé API trouvée, utilisation des réponses de secours");
    }
    
    // Utiliser les réponses de secours si Gemini n'a pas fonctionné
    if (!usedGemini) {
      console.log("Utilisation du système de réponses de secours");
      await new Promise(resolve => setTimeout(resolve, 500));
      response = getSmartResponse(lastMessage.content);
      console.log("Réponse de secours envoyée");
    }
    
    return NextResponse.json({ content: response });
    
  } catch (error) {
    console.error("❌ Erreur dans l'API chat:", error);
    return NextResponse.json({
      content: "Bonjour ! J'ai un petit problème technique. N'hésitez pas à utiliser le formulaire de contact pour me joindre, ou essayez de demander à nouveau ! 😊"
    });
  }
}