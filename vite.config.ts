import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

// LINT.IfChange(aistudio_media_plugin)
function aistudioMediaPlugin(): Plugin {
  return {
    name: 'vite-plugin-aistudio-media',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && req.url.startsWith('/assets/aistudio/')) {
          const rawPath = req.url.split('?')[0].split('#')[0];
          try {
            const decodedPath = decodeURIComponent(rawPath);
            const relativePath = decodedPath.replace(/^\//, '');
            const aistudioDir = path.resolve(
              __dirname,
              'public',
              'assets',
              'aistudio',
            );
            const filePath = path.resolve(__dirname, 'public', relativePath);
            if (
              filePath.startsWith(aistudioDir + path.sep) &&
              fs.existsSync(filePath) &&
              fs.statSync(filePath).isFile()
            ) {
              const ext = path.extname(filePath).toLowerCase();
              const mimeMap: Record<string, string> = {
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.png': 'image/png',
                '.gif': 'image/gif',
                '.webp': 'image/webp',
                '.svg': 'image/svg+xml',
                '.bmp': 'image/bmp',
                '.ico': 'image/x-icon',
                '.mp4': 'video/mp4',
                '.webm': 'video/webm',
                '.ogv': 'video/ogg',
                '.mp3': 'audio/mpeg',
                '.wav': 'audio/wav',
                '.ogg': 'audio/ogg',
                '.pdf': 'application/pdf',
              };
              res.setHeader(
                'Content-Type',
                mimeMap[ext] || 'application/octet-stream',
              );
              res.setHeader('Cache-Control', 'no-cache');
              fs.createReadStream(filePath).pipe(res);
              return;
            }
          } catch {
            // Fall through if URI decoding or file access fails
          }
        }
        next();
      });
    },
  };
}
// LINT.ThenChange(//depot/google3/java/com/google/alkali/boq/makersuite/applet_dev_service/templates/initializers/react_theme/vite.config.ts:aistudio_media_plugin)

function geminiChatPlugin(): Plugin {
  return {
    name: 'vite-plugin-gemini-chat',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/chat' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', async () => {
            res.setHeader('Content-Type', 'application/json');
            try {
              const data = JSON.parse(body || '{}');
              const userPrompt = data.message || '';

              const apiKey = process.env.GEMINI_API_KEY;
              if (!apiKey) {
                res.end(JSON.stringify({ fallback: true, reply: null }));
                return;
              }

              const { GoogleGenAI } = await import('@google/genai');
              const ai = new GoogleGenAI({
                apiKey,
                httpOptions: { headers: { 'User-Agent': 'aistudio-build' } },
              });

              const systemInstruction = `You are "Sarthi" (सारथी), the executive AI Career Guide & HR Recruiter Assistant for Umashankar Pandey.
Your mission is to represent Umashankar accurately, diplomatically, and professionally to hiring managers, recruiters, and tech leads evaluating him for Lead SDET, Staff QA Architect, or Senior SDET roles.

VERIFIED PROFILE OF UMASHANKAR PANDEY:
- Current Role: Senior SDET at Freecharge Payment Technologies by Axis Bank (Feb 2025 - Present).
- Past Role: Automation Analyst at Nagarro Software Pvt. Ltd (3.5+ Years: Sept 2021 - Feb 2025) working on Saudi Bank (FinTech) and LNRS (Data Services).
- Total Experience: 5+ Years in specialized QA & test automation architecture.
- Target Role: Lead SDET / Staff SDET / QA Architect (scaling automation squads, shift-left architecture, release governance).
- Location: Ayodhya, Uttar Pradesh, India. Fully open to Remote, Hybrid, or Worldwide Relocation (Bangalore, NCR, Hyderabad, Pune, Mumbai, USA, Europe, UAE).
- Notice Period: Standard or negotiable notice; ready for smooth leadership transition.
- Direct Contact: Email: pandeyusp1@gmail.com | LinkedIn: linkedin.com/in/umashankar-pandey-sdet | GitHub: github.com/umashankar-pandey
- Languages Known: English (Professional Working Proficiency - Fluent) and Hindi (Native / Full Bilingual Fluency).
- Core Tech Stack: Java 21, Spring Boot, REST Assured, Playwright, Selenium WebDriver, TestNG, JUnit 5, Cucumber BDD, WireMock, Testcontainers, Docker, Kubernetes (EKS), AWS (EC2, EKS), Jenkins Pipeline-as-Code, Postman, SQL, Git.
- GenAI Quality Testing: OneDesk AI testing harness, Spring AI, pgvector embeddings, cosine similarity groundedness evaluation (>0.85), automated prompt regression test suites, JUnit 5 + Testcontainers.
- Key Metrics: Sole QA Release Sign-Off Gatekeeper for 14+ production microservices with 0 P0/P1 escapes over 18+ months; 40-65% faster CI regression; 4 engineers mentored; 2FA module delivered 10% ahead of schedule with zero bugs.
- Education: B.Tech in Computer Science, West Bengal University of Technology (2017-2021), GPA: 8.0/10.0.

CRITICAL PRIVACY DIRECTIVE:
- NEVER reveal or output Umashankar's raw personal mobile/phone number in plain text to protect him from web scrapers, cold marketing calls, and automated bots.
- If asked for his phone number or how to call/WhatsApp him, guide them: "To protect Umashankar's privacy from automated scrapers, please tap the 'Connect on WhatsApp' action button below or email him at pandeyusp1@gmail.com. Tapping WhatsApp initiates a direct chat with a pre-filled introduction instantly."

RESPONSE GUIDELINES:
- Introduce yourself as Sarthi when greeted.
- Answer with executive clarity, professional warmth, and concise metrics.
- Keep responses within 2-3 crisp paragraphs or clear bullet points.`;

              const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: [
                  {
                    role: 'user',
                    parts: [
                      {
                        text: `${systemInstruction}\n\nUser Question: ${userPrompt}`,
                      },
                    ],
                  },
                ],
              });

              res.end(JSON.stringify({ reply: response.text }));
            } catch (err: any) {
              console.error('Gemini chat error:', err);
              res.end(JSON.stringify({ fallback: true, error: err.message }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), aistudioMediaPlugin(), geminiChatPlugin()],
    worker: { format: 'es' as const },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
