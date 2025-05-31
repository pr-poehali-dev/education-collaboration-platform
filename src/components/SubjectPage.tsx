import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Subject {
  id: string;
  name: string;
  description: string;
  level: string;
  topicsCount: number;
  activeUsers: number;
}

interface SubjectPageProps {
  scienceId: string;
  onSubjectSelect: (subjectId: string) => void;
  onBack: () => void;
}

const subjectsByScience: Record<string, Subject[]> = {
  math: [
    {
      id: "algebra",
      name: "Алгебра",
      description: "Уравнения, неравенства, функции",
      level: "Средний",
      topicsCount: 15,
      activeUsers: 45,
    },
    {
      id: "geometry",
      name: "Геометрия",
      description: "Планиметрия и стереометрия",
      level: "Средний",
      topicsCount: 12,
      activeUsers: 38,
    },
    {
      id: "calculus",
      name: "Математический анализ",
      description: "Производные, интегралы, пределы",
      level: "Сложный",
      topicsCount: 20,
      activeUsers: 32,
    },
  ],
  programming: [
    {
      id: "javascript",
      name: "JavaScript",
      description: "Основы языка, DOM, асинхронность",
      level: "Начальный",
      topicsCount: 25,
      activeUsers: 78,
    },
    {
      id: "react",
      name: "React",
      description: "Компоненты, hooks, state management",
      level: "Средний",
      topicsCount: 18,
      activeUsers: 55,
    },
    {
      id: "algorithms",
      name: "Алгоритмы",
      description: "Сортировки, поиск, структуры данных",
      level: "Сложный",
      topicsCount: 30,
      activeUsers: 42,
    },
  ],
};

const scienceNames: Record<string, string> = {
  math: "Математика",
  programming: "Программирование",
  physics: "Физика",
  chemistry: "Химия",
  biology: "Биология",
  languages: "Языки",
};

const SubjectPage: React.FC<SubjectPageProps> = ({
  scienceId,
  onSubjectSelect,
  onBack,
}) => {
  const subjects = subjectsByScience[scienceId] || [];
  const scienceName = scienceNames[scienceId] || "Неизвестная наука";

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Начальный":
        return "bg-green-100 text-green-800";
      case "Средний":
        return "bg-yellow-100 text-yellow-800";
      case "Сложный":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Button variant="ghost" onClick={onBack} className="mr-4">
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{scienceName}</h1>
            <p className="text-gray-600 mt-1">Выберите предмет для изучения</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Card
              key={subject.id}
              className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
              onClick={() => onSubjectSelect(subject.id)}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {subject.name}
                  </CardTitle>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(subject.level)}`}
                  >
                    {subject.level}
                  </span>
                </div>
                <CardDescription className="text-gray-600">
                  {subject.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Icon name="MessageSquare" size={16} className="mr-1" />
                    {subject.topicsCount} тем
                  </div>
                  <div className="flex items-center">
                    <Icon name="Users" size={16} className="mr-1" />
                    {subject.activeUsers} онлайн
                  </div>
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Присоединиться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {subjects.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="BookOpen"
              size={64}
              className="mx-auto text-gray-400 mb-4"
            />
            <h3 className="text-xl font-medium text-gray-600 mb-2">
              Предметы скоро появятся
            </h3>
            <p className="text-gray-500">
              Мы работаем над добавлением предметов для этой области
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectPage;
