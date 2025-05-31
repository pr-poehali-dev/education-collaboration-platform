import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Topic } from "@/types/chat";

interface ChatHeaderProps {
  topic: Topic;
  onBackToTopics: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ topic, onBackToTopics }) => {
  return (
    <div className="bg-white shadow-sm border-b p-4">
      <div className="max-w-6xl mx-auto flex items-center">
        <Button variant="ghost" onClick={onBackToTopics} className="mr-4">
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Назад к темам
        </Button>
        <div>
          <h1 className="text-xl font-bold text-gray-900">{topic.title}</h1>
          <p className="text-gray-600 text-sm">{topic.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
