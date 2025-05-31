import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Topic } from "@/types/chat";

interface TopicListProps {
  topics: Topic[];
  onTopicSelect: (topicId: string) => void;
  onBack: () => void;
}

const TopicList: React.FC<TopicListProps> = ({
  topics,
  onTopicSelect,
  onBack,
}) => {
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
          {topics.map((topic) => (
            <Card
              key={topic.id}
              className="cursor-pointer transition-all duration-300 hover:shadow-lg"
              onClick={() => onTopicSelect(topic.id)}
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
};

export default TopicList;
