import React, { useState } from "react";
import { TopicChatProps, Message } from "@/types/chat";
import { mockTopics, mockMessages } from "@/data/mockChatData";
import TopicList from "@/components/chat/TopicList";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatMessages from "@/components/chat/ChatMessages";
import MessageInput from "@/components/chat/MessageInput";

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
      <TopicList
        topics={mockTopics}
        onTopicSelect={setSelectedTopic}
        onBack={onBack}
      />
    );
  }

  const currentTopic = mockTopics.find((t) => t.id === selectedTopic);

  if (!currentTopic) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ChatHeader
        topic={currentTopic}
        onBackToTopics={() => setSelectedTopic(null)}
      />

      <div className="flex-1 max-w-6xl mx-auto w-full p-4 flex flex-col">
        <div className="flex-1 bg-white rounded-lg shadow-sm mb-4 flex flex-col">
          <ChatMessages messages={messages} />
          <MessageInput
            value={newMessage}
            onChange={setNewMessage}
            onSend={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default TopicChat;
