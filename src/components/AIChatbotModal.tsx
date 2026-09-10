import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  Download, 
  ExternalLink, 
  Mail, 
  MessageCircle, 
  User,
  ShieldCheck
} from 'lucide-react';
import { 
  ChatMessage, 
  HR_STARTER_PROMPTS, 
  sendChatMessage 
} from '../services/aiChatService';
import { PERSONAL_INFO } from '../data/resumeData';

interface AIChatbotModalProps {
  onDownloadPdf?: () => void;
}

export const AIChatbotModal: React.FC<AIChatbotModalProps> = ({ onDownloadPdf }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: `Hello! I am **Sarthi (सारथी)**, Umashankar's dedicated AI Career Guide and HR Assistant.\n\nI can answer questions regarding his **5+ years of test leadership experience**, his role as the **sole QA Release Sign-Off Gatekeeper for 14+ microservices at Freecharge (Axis Bank)**, his **GenAI / RAG testing harness**, core tech stack, and languages known (**Hindi & English**).\n\nIf you'd like to reach him directly, tap the **'Connect on WhatsApp'** button below to open an immediate chat without needing to save any contact details!`,
      timestamp: new Date(),
      suggestedActions: [
        { label: 'Connect on WhatsApp', actionType: 'whatsapp' },
        { label: 'Download 2-Page Resume', actionType: 'download_pdf' },
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasOpenedBefore(true);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || loading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setLoading(true);

    try {
      const response = await sendChatMessage(
        query,
        messages.map((m) => ({ sender: m.sender, text: m.text }))
      );

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: response.text,
        timestamp: new Date(),
        suggestedActions: response.actions,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (e) {
      console.error('Chat send error:', e);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-err-${Date.now()}`,
          sender: 'assistant',
          text: `I had trouble connecting momentarily, but you can connect directly with Umashankar via WhatsApp or email at ${PERSONAL_INFO.email}. He is actively interviewing for Lead SDET and Staff QA Architect roles.`,
          timestamp: new Date(),
          suggestedActions: [
            { label: 'Connect on WhatsApp', actionType: 'whatsapp' },
            { label: 'Download 2-Page Resume', actionType: 'download_pdf' },
          ],
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleActionClick = (actionType: string) => {
    if (actionType === 'download_pdf') {
      if (onDownloadPdf) {
        onDownloadPdf();
      } else {
        window.open(PERSONAL_INFO.linkedin, '_blank');
      }
    } else if (actionType === 'whatsapp') {
      window.open('https://api.whatsapp.com/send?phone=918299867994&text=Hi%20Umashankar,%20I%20reviewed%20your%20Lead%20SDET%20portfolio%20and%20spoke%20with%20Sarthi.%20Would%20love%20to%20connect%20with%20you.', '_blank');
    } else if (actionType === 'email') {
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Lead%20SDET%20Opportunity%20-%20Interview%20Inquiry`;
    } else if (actionType === 'linkedin') {
      window.open(PERSONAL_INFO.linkedin, '_blank');
    }
  };

  const renderFormattedText = (text: string) => {
    const lines = text.split('\n');
    return (
      <div className="space-y-2 text-[0.88rem] leading-relaxed">
        {lines.map((line, index) => {
          if (!line.trim()) return <div key={index} className="h-1" />;

          const parts = line.split(/(\*\*.*?\*\*)/g);
          const renderedLine = parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={pIdx} className="font-semibold text-[#e8ecef]">{part.slice(2, -2)}</strong>;
            }
            return part;
          });

          if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
            return (
              <div key={index} className="flex items-start gap-2 pl-1">
                <span className="text-[#e3a857] text-xs mt-1">•</span>
                <span className="text-[#cbd5e1]">{renderedLine}</span>
              </div>
            );
          }

          if (/^\d+\./.test(line.trim())) {
            return (
              <div key={index} className="pl-1 text-[#cbd5e1]">
                {renderedLine}
              </div>
            );
          }

          return (
            <p key={index} className="text-[#cbd5e1]">
              {renderedLine}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {/* Floating Chatbot Launcher Button (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 no-print">
        
        {/* Recruiter Callout Badge */}
        {!isOpen && !hasOpenedBefore && (
          <div 
            onClick={() => setIsOpen(true)}
            className="cursor-pointer max-w-xs bg-[#161d27] border border-[#e3a857]/40 shadow-xl rounded-xl p-3 text-xs text-[#e8ecef] animate-bounce duration-1000 flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-full bg-[#e3a857]/15 border border-[#e3a857]/30 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 text-[#e3a857]" />
            </div>
            <div>
              <div className="font-semibold text-[#e3a857] flex items-center gap-1">
                <span>Ask Sarthi (सारथी)</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] inline-block animate-pulse" />
              </div>
              <div className="text-[11px] text-[#9ba7b4]">Have questions for HR? Ask my AI or connect on WhatsApp!</div>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#18202b] hover:bg-[#1e2836] text-[#e8ecef] border border-[#e3a857]/50 shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          title="Open Sarthi (AI Career Guide)"
          aria-label="Ask Sarthi AI Assistant"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-[#e3a857] flex items-center justify-center text-[#12171f] font-bold">
              <Bot className="w-4.5 h-4.5 text-[#12171f]" />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#34D399] border-2 border-[#18202b] rounded-full" />
          </div>
          
          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold text-[#e8ecef] leading-none flex items-center gap-1.5">
              <span>Ask Sarthi</span>
              <span className="text-[10px] font-mono text-[#e3a857] bg-[#e3a857]/15 px-1.5 py-0.2 rounded">सारथी</span>
              <Sparkles className="w-3 h-3 text-[#e3a857]" />
            </div>
            <div className="text-[10px] text-[#9ba7b4] mt-0.5 leading-none">
              Umashankar's AI Career Guide
            </div>
          </div>
        </button>
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div 
          className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[440px] max-h-[82vh] h-[640px] bg-[#161d27] border border-[rgba(227,168,87,0.3)] shadow-2xl rounded-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200 no-print"
        >
          {/* Header */}
          <div className="p-4 bg-[#18202b] border-b border-[rgba(232,236,239,0.12)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-[#e3a857]/20 border border-[#e3a857] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#e3a857]" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#34D399] border-2 border-[#18202b]" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#e8ecef] flex items-center gap-2">
                  <span>Sarthi (सारथी)</span>
                  <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/30">
                    Online
                  </span>
                </div>
                <div className="text-[11px] text-[#9ba7b4]">
                  Umashankar's AI Career Guide &amp; HR Assistant
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg text-[#9ba7b4] hover:text-[#e8ecef] hover:bg-[#202936] flex items-center justify-center transition-colors cursor-pointer"
              title="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-3 py-2 bg-[#12171f] border-b border-[rgba(232,236,239,0.08)] overflow-x-auto no-scrollbar flex items-center gap-2 text-xs">
            <span className="text-[10px] text-[#6b7683] uppercase tracking-wider font-mono shrink-0 pl-1">
              Ask:
            </span>
            {HR_STARTER_PROMPTS.slice(0, 5).map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(prompt)}
                className="shrink-0 px-2.5 py-1 rounded-full bg-[#1e2735] hover:bg-[#e3a857]/15 hover:border-[#e3a857]/40 text-[#cad2db] hover:text-[#e3a857] border border-[rgba(232,236,239,0.1)] text-[11px] transition-colors cursor-pointer whitespace-nowrap"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Message Thread Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#141a23]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-[#e3a857]/15 border border-[#e3a857]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5 text-[#e3a857]" />
                  </div>
                )}

                <div className={`max-w-[85%] space-y-2`}>
                  <div
                    className={`p-3.5 rounded-2xl ${
                      msg.sender === 'user'
                        ? 'bg-[#e3a857] text-[#12171f] font-medium rounded-tr-xs'
                        : 'bg-[#1b2330] border border-[rgba(232,236,239,0.12)] rounded-tl-xs'
                    }`}
                  >
                    {msg.sender === 'user' ? (
                      <p className="text-[0.9rem] leading-relaxed text-[#12171f] font-medium">{msg.text}</p>
                    ) : (
                      renderFormattedText(msg.text)
                    )}
                  </div>

                  {/* Suggested Action Buttons */}
                  {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {msg.suggestedActions.map((act, aIdx) => (
                        <button
                          key={aIdx}
                          onClick={() => handleActionClick(act.actionType)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#202a39] hover:bg-[#e3a857] text-[#e8ecef] hover:text-[#12171f] border border-[rgba(227,168,87,0.3)] hover:border-[#e3a857] font-semibold text-xs transition-all cursor-pointer shadow-xs"
                        >
                          {act.actionType === 'download_pdf' && <Download className="w-3.5 h-3.5" />}
                          {act.actionType === 'whatsapp' && <MessageCircle className="w-3.5 h-3.5 text-[#34D399]" />}
                          {act.actionType === 'email' && <Mail className="w-3.5 h-3.5" />}
                          {act.actionType === 'linkedin' && <ExternalLink className="w-3.5 h-3.5" />}
                          <span>{act.label}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="text-[10px] text-[#6b7683] px-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-[#344253] flex items-center justify-center shrink-0 mt-0.5 text-xs text-[#e8ecef]">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {/* Loading Indicator */}
            {loading && (
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#e3a857]/15 border border-[#e3a857]/30 flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5 text-[#e3a857]" />
                </div>
                <div className="p-3 bg-[#1b2330] border border-[rgba(232,236,239,0.1)] rounded-2xl rounded-tl-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e3a857] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e3a857] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e3a857] animate-bounce [animation-delay:0.4s]" />
                  <span className="text-xs text-[#9ba7b4] ml-1">Sarthi is consulting Umashankar's record...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Form */}
          <div className="p-3 bg-[#18202b] border-t border-[rgba(232,236,239,0.12)]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask Sarthi about notice, microservices, tech stack..."
                className="flex-1 bg-[#12171f] border border-[rgba(232,236,239,0.15)] focus:border-[#e3a857] focus:outline-hidden text-xs sm:text-sm text-[#e8ecef] rounded-xl px-3.5 py-2.5 transition-colors placeholder:text-[#6b7683]"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || loading}
                className="w-10 h-10 rounded-xl bg-[#e3a857] disabled:bg-[#2c3644] text-[#12171f] disabled:text-[#6b7683] flex items-center justify-center transition-colors cursor-pointer disabled:cursor-not-allowed shrink-0"
                title="Send question to Sarthi"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="mt-1.5 flex items-center justify-between text-[10px] text-[#6b7683] px-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#34D399]" />
                Direct WhatsApp &amp; Sarthi AI Sync
              </span>
              <span>Lead SDET Candidate</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
