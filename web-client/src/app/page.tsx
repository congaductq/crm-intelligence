"use client";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Send, Download, Sparkles, Bot, User, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  toolsUsed?: string[];
}

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || loading) return;

    const userMessage = content.trim();
    const newMsgs: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(newMsgs);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMsgs.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to fetch response");
      }

      const data = await res.json();
      const assistantMessage: Message = {
        role: "assistant",
        content: data.choices[0].message.content || "",
        toolsUsed: data.toolsUsed,
      };
      setMessages([...newMsgs, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...newMsgs,
        {
          role: "assistant",
          content: `Sorry, I encountered an error: ${error instanceof Error ? error.message : "Unknown error"}. Please check that all services are configured correctly.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendMessage(input);
  };

  const handleExport = () => {
    const text = messages
      .map((m) => `## ${m.role === "user" ? "You" : "Assistant"}\n\n${m.content}\n`)
      .join("\n---\n\n");
    const blob = new Blob([text], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `crm-chat-${new Date().toISOString().split("T")[0]}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const suggestedPrompts = [
    "What are the top 5 winter products?",
    "Show me summer sales analytics",
  ];

  return (
    <div className="min-h-screen bg-[#0a0a14] selection:bg-white selection:text-[rgb(76,72,251)]">
      {/* Glassmorphism background effects - Subtler as requested */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[rgb(76,72,251)]/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-900/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto p-4 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center py-6 px-2">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-[rgb(76,72,251)] to-blue-500 rounded-xl shadow-lg shadow-[rgb(76,72,251)]/25">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Breadstack Intelligence</h1>
              <p className="text-sm text-slate-400">AI-powered sales analytics</p>
            </div>
          </div>
          <button
            onClick={handleExport}
            disabled={messages.length === 0}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg backdrop-blur-sm border border-white/10 transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            Export
          </button>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-4 px-2">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-20">
              <div className="p-4 bg-gradient-to-br from-[rgb(76,72,251)]/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-white/10 mb-6">
                <Bot className="w-12 h-12 text-[rgb(76,72,251)]" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Welcome to Breadstack Intelligence
              </h2>
              <p className="text-slate-400 text-center max-w-md mb-8">
                Ask me about sales analytics, product searches, or add new products to your knowledge base.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {suggestedPrompts.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(prompt)}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 text-slate-300 text-sm rounded-full backdrop-blur-sm border border-white/10 transition-all duration-200"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${m.role === "user"
                    ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                    : "bg-gradient-to-br from-[rgb(76,72,251)] to-blue-500"
                    }`}
                >
                  {m.role === "user" ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] p-5 rounded-2xl backdrop-blur-md border shadow-xl ${m.role === "user"
                    ? "bg-[rgb(76,72,251)]/90 border-white/10 text-white shadow-blue-900/10"
                    : "bg-[#161625]/95 border-white/5 text-slate-100"
                    }`}
                >
                  {m.toolsUsed && m.toolsUsed.length > 0 && (
                    <div className="flex gap-1 mb-2 flex-wrap">
                      {m.toolsUsed.map((tool, ti) => (
                        <span
                          key={ti}
                          className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 bg-white/5 text-blue-400 border border-blue-500/20 rounded-lg shadow-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="prose prose-sm prose-invert max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content}</ReactMarkdown>
                  </div>
                </div>
              </div>
            ))
          )}
          {loading && (
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[rgb(76,72,251)] to-blue-500">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2 text-slate-300">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Analyzing data...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="flex gap-3 p-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
        >
          <input
            className="flex-1 p-4 bg-transparent text-white placeholder-slate-400 focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about sales, products, or analytics..."
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="px-6 py-4 bg-gradient-to-r from-[rgb(76,72,251)] to-blue-500 hover:from-[rgb(76,72,251)] hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all duration-200 flex items-center gap-2"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
