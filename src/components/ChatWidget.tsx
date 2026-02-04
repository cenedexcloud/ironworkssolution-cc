"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot } from "lucide-react"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello! I'm the Iron Works AI assistant. How can I help you with your project today?"
    }
  ])

  const quickReplies = [
    "Get a quote",
    "View services",
    "Schedule consultation",
    "Service areas"
  ]

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#C41E3A] to-[#A71930] rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] flex flex-col shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#3c3c3c] text-white p-4 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#C41E3A] rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">Iron Works AI</h3>
                <p className="text-xs text-white/70">Mon-Fri 8AM-5PM, Sat 8AM-1PM</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-[#C41E3A] text-white'
                      : 'bg-[#f8f6f3] text-[#1a1a1a]'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="p-4 border-t border-[#e5e5e5]">
            <div className="flex flex-wrap gap-2 mb-3">
              {quickReplies.map((reply) => (
                <button
                  key={reply}
                  className="px-3 py-1.5 bg-white border border-[#e5e5e5] rounded-full text-xs font-medium hover:border-[#C41E3A] hover:text-[#C41E3A] transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#e5e5e5]">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button size="icon" className="flex-shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}
