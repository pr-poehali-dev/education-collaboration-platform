import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Message {
  id: string;
  user: string;
  text: string;
  time: string;
  avatar: string;
}

interface Topic {
  id: string;
  title: string;
  description: string;
  messagesCount: number;
}

interface TopicChatProps {
  subjectId: string;
  onBack: () => void;
}

const mockTopics: Topic[] = [
  {
    id: "1",
    title: "Основы переменных",
    description: "Разбираем let, const, var",
    messagesCount: 23,
  },
  {
    id: "2",
    title: "Функции и области видимости",
    description: "Hoisting, closures, стрелочные функции",
    messagesCount: 45,
  },
  {
    id: "3",
    title: "Асинхронный JavaScript",
    description: "Promises, async/await, fetch API",
    messagesCount: 67,
  },
];

const mockMessages: Message[] = [
  {
    id: "1",
    user: "Алексей",
    text: "Привет! Кто-нибудь может объяснить разницу между let и var?",
    time: "14:30",
    avatar: "👨‍💻",
  },
  {
    id: "2",
    user: "Мария",
    text: "let имеет блочную область видимости, а var - функциональную",
    time: "14:32",
    avatar: "👩‍🎓",
  },
  {
    id: "3",
    user: "Дмитрий",
    text: "Да, и еще let нельзя переобъявлять в одной области видимости",
    time: "14:33",
    avatar: "🧑‍💼",
  },
  {
    id: "4",
    user: "Анна",
    text: "А const вообще нельзя изменять после объявления",
    time: "14:35",
    avatar: "👩‍🔬",
  },
];

const TopicChat: React.FC<TopicChatProps> = ({ subjectId, onBack }) => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>(mockMessages);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        user: "Вы",
        text: newMessage,
        time: new Date().toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        avatar: "👤",
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  if (!selectedTopic) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Button variant="ghost" onClick={onBack} className="mr-4">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад к предметам
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">
              Темы для обсуждения
            </h1>
          </div>

          <div className="grid gap-4">
            {mockTopics.map((topic) => (
              <Card
                key={topic.id}
                className="cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => setSelectedTopic(topic.id)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                        {topic.title}
                      </CardTitle>
                      <p className="text-gray-600">{topic.description}</p>
                    </div>
                    <div className="flex items-center text-gray-500 ml-4">
                      <Icon name="MessageSquare" size={16} className="mr-1" />
                      <span className="text-sm">{topic.messagesCount}</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const currentTopic = mockTopics.find((t) => t.id === selectedTopic);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-white shadow-sm border-b p-4">
        <div className="max-w-6xl mx-auto flex items-center">
          <Button
            variant="ghost"
            onClick={() => setSelectedTopic(null)}
            className="mr-4"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад к темам
          </Button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              {currentTopic?.title}
            </h1>
            <p className="text-gray-600 text-sm">{currentTopic?.description}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-6xl mx-auto w-full p-4 flex flex-col">
        <div className="flex-1 bg-white rounded-lg shadow-sm mb-4 flex flex-col">
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
                      <span className="text-sm text-gray-500">
                        {message.time}
                      </span>
                    </div>
                    <p className="text-gray-700">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input
                placeholder="Напишите сообщение..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicChat;
