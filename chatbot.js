/**
 * SAFEFULENCE CHATBOT – MVP CHAT FLOW FOR CURSOR
 *
 * This chatbot is designed for the Safefluence platform.
 * It helps young influencers scan suspicious content, access digital safety resources, and build good online habits.
 * It follows MVP rules, avoids illegal API access, and keeps everything user-driven and safe.
 *
 * CORE FEATURES:
 * - Category selection (Cyberattack, Hate, Links, Wellness, Quiz)
 * - Survey-based recommendation system
 * - Link & message scanner (user-submitted only)
 * - XP/badge system (mocked)
 * - Mental wellness tips
 * - Quiz and leaderboard (static or dummy)
 *
 * Use this logic in Cursor or any JS bot framework (Dialogflow, Botpress, etc.)
 */

const chatbotFlow = {
  welcome: {
    message: "👋 Hi! Welcome to Safefluence.\nI'm your cyber safety assistant. What would you like help with today?",
    options: [
      "1️⃣ Cyberattack Help",
      "2️⃣ Hate Comments",
      "3️⃣ Suspicious Link",
      "4️⃣ Mental Wellness",
      "5️⃣ Learn Through Quiz"
    ],
    next: "chooseCategory"
  },

  chooseCategory: {
    Cyberattack: {
      survey: [
        "Have you experienced unauthorized access recently? (Yes/No)",
        "Do you receive strange DMs or login alerts? (Yes/No)"
      ],
      afterSurvey: "Based on your answers, I suggest:\n✅ Try our message scanner by pasting a suspicious comment.\n🔐 Change your passwords.\n🧠 Learn more: Start Quiz"
    },

    "Hate Comments": {
      survey: [
        "Are you seeing mean or rude comments? (Yes/No)",
        "Are they from strangers or people you know? (Strangers/Known)"
      ],
      afterSurvey: "Thanks! Here’s what you can do:\n✅ Use our Mood Pulse Scanner (paste comment).\n🚫 Block abusive users.\n🎯 Learn about digital kindness in our quiz."
    },

    "Suspicious Link": {
      survey: [
        "Did someone send you a link in a DM or bio? (Yes/No)",
        "Is it shortened (e.g., bit.ly) or clickbait-looking? (Yes/No)"
      ],
      afterSurvey: "Paste the link here and I’ll check it.\n(Note: This is a simulated check using safety keywords.)\nResult:\n✅ Link appears safe OR ⚠️ Suspicious link. Don’t click!"
    },

    "Mental Wellness": {
      survey: [
        "Feeling stressed from online negativity? (Yes/No)",
        "Want self-care tips or to take a quiz? (Tips/Quiz)"
      ],
      afterSurvey: "You’re not alone 💙\n🧘 Breathe. Take a break.\n📵 Don’t engage with trolls.\n📝 Reflect. Reach out to friends.\n🎯 Or relax with a quick quiz!"
    },

    "Learn Through Quiz": {
      message: "🎉 Awesome! Let’s start a fun quiz about digital safety.\nClick here: [Start Quiz Button]\nEarn XP and level up!"
    }
  },

  scanFeature: {
    description: "🧠 Message/Link Scanner\nPaste any suspicious message or link below.\nWe’ll simulate a scan and show whether it’s safe or harmful.",
    sampleInput: [
      "You're a loser.",
      "Hey, click this link now!! bit.ly/fake123"
    ],
    fakeAI: (text) => {
      if (text.toLowerCase().includes("loser") || text.includes("bit.ly")) {
        return "⚠️ Warning: This content looks harmful or unsafe.";
      } else {
        return "✅ This content appears safe.";
      }
    }
  },

  xpSystem: {
    badges: [
      { level: "Beginner", minXP: 0 },
      { level: "Kindness Captain", minXP: 30 },
      { level: "Cyber Guardian", minXP: 60 }
    ],
    earnXP: (currentXP) => {
      const newXP = currentXP + 10;
      let badge = "Beginner";
      if (newXP >= 60) badge = "Cyber Guardian";
      else if (newXP >= 30) badge = "Kindness Captain";
      return { newXP, badge };
    }
  },

  leaderboard: {
    staticData: [
      { name: "Zehra", XP: 80, badge: "Cyber Guardian" },
      { name: "Neha", XP: 60, badge: "Kindness Captain" },
      { name: "Yash", XP: 40, badge: "Kindness Captain" }
    ]
  }
};

module.exports = chatbotFlow;


