import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import type { ChatMessage } from "@/types";

// Mock responses as fallback (in case Gemini fails)
function getSmartResponse(message: string): string {
  const query = message.toLowerCase();
  
  if (query.includes("skill") || query.includes("tech") || query.includes("stack") || query.includes("know")) {
    return "Masihullah is a Full Stack Developer with strong skills in:\n\n• React.js, Next.js, TypeScript, Tailwind CSS\n• Laravel/PHP, Node.js\n• MySQL, MongoDB, PostgreSQL\n• Git, GitHub Actions, Vercel\n\nTheir frontend skills are particularly strong, with 80-85% proficiency in React and Next.js!";
  } 
  else if (query.includes("project") || query.includes("build") || query.includes("create")) {
    return "Masihullah has built several impressive projects:\n\n1. **E-Commerce Platform** - Full-stack online store with Next.js, Laravel, MySQL, and Clerk auth\n2. **AI Task Manager** - Smart task app using React, Node.js, and Google Gemini AI\n3. **REST API** - Production-ready Laravel API with JWT auth and testing\n4. **Analytics Dashboard** - React dashboard with charts and data tables\n\nCheck out the Projects section on this portfolio for live demos!";
  }
  else if (query.includes("available") || query.includes("hire") || query.includes("work") || query.includes("job")) {
    return "Yes! Masihullah is actively seeking opportunities. They're open to:\n\n• Full-time positions\n• Part-time roles\n• Freelance work\n• Remote or on-site\n\nFeel free to use the contact form to get in touch!";
  }
  else if (query.includes("experience") || query.includes("background") || query.includes("about")) {
    return "Masihullah is a self-taught Full Stack Developer with about 12 months of focused learning. They've built real, deployed projects and are now seeking their first professional role. Their approach focuses on practical, working applications rather than just tutorials. They learn extremely quickly and are very dedicated to becoming a professional developer!";
  }
  else if (query.includes("location") || query.includes("where") || query.includes("paris")) {
    return "Masihullah is based in Paris, France 🇫🇷 and is open to both remote and on-site opportunities in the area.";
  }
  else if (query.includes("contact") || query.includes("email") || query.includes("reach")) {
    return "You can reach Masihullah through the contact form on this portfolio, or directly via email at masihullah37@gmail.com. They typically respond within 24 hours!";
  }
  else {
    return "Thanks for your interest! I'm the AI assistant for Masihullah's portfolio. I can tell you about their skills, projects, experience, or availability. Feel free to ask me anything, or use the contact form to reach Masihullah directly! What would you like to know?";
  }
}

export async function POST(request: NextRequest) {
  console.log("\n📨 Chat API called");
  
  try {
    const body = await request.json() as { messages?: ChatMessage[] };
    const { messages } = body;
    
    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: "messages required" }, { status: 400 });
    }
    
    const lastMessage = messages[messages.length - 1];
    console.log("User message:", lastMessage?.content);
    
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    console.log("API Key exists:", !!apiKey);
    
    let response = "";
    let usedGemini = false;
    
    // Try to use Gemini if API key exists
    if (apiKey && apiKey.trim() !== "") {
      try {
        console.log("Attempting to use Gemini API with model: gemini-2.0-flash...");
        const genAI = new GoogleGenerativeAI(apiKey);
        // Use gemini-2.0-flash from the available models list
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        
        const context = `You are a helpful AI assistant for Masihullah's developer portfolio.
        
About Masihullah:
- Full Stack Developer skilled in React, Next.js, TypeScript, Tailwind CSS, Laravel, Node.js
- Based in tour, France
- Open to job opportunities (full-time, part-time, freelance, remote)
- Has built: E-Commerce Platform, AI Task Manager, REST API, Analytics Dashboard
- Email: masihullah37@gmail.com
- GitHub: github.com/Masihullah37

Keep responses friendly, concise (under 100 words), and helpful. Use emojis occasionally to be friendly.`;
        
        const prompt = `${context}\n\nUser question: ${lastMessage.content}\n\nAssistant:`;
        const result = await model.generateContent(prompt);
        response = result.response.text();
        usedGemini = true;
        console.log("✅ Used Gemini API successfully!");
        console.log("Response preview:", response.substring(0, 100));
      } catch (geminiError) {
        console.log("⚠️ Gemini API failed:", geminiError instanceof Error ? geminiError.message : String(geminiError));
        console.log("Using mock response instead");
      }
    } else {
      console.log("No API key found, using mock responses");
    }
    
    // Fall back to mock if Gemini didn't work
    if (!usedGemini) {
      console.log("Using mock response system");
      await new Promise(resolve => setTimeout(resolve, 500));
      response = getSmartResponse(lastMessage.content);
      console.log("Mock response sent");
    }
    
    return NextResponse.json({ content: response });
    
  } catch (error) {
    console.error("❌ Error in chat API:", error);
    return NextResponse.json({
      content: "Hi! I'm having a quick technical moment. Please feel free to use the contact form to reach out, or try asking again! 😊"
    });
  }
}