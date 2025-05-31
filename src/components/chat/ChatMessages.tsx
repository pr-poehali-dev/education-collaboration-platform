import React from "react";
import { Message } from "@/types/chat";

interface ChatMessagesProps {
  messages: Message[];
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start space-x-3">
            <div className="text-2xl">{message.avatar}</div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium text-gray-900">
                  {message.user}
                </span>
                <span className="text-sm text-gray-500">{message.time}</span>
              </div>
              <p className="text-gray-700">{message.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatMessages;
