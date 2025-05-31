import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Science {
  id: string;
  name: string;
  description: string;
  icon: string;
  subjectsCount: number;
  studentsCount: number;
}

interface ScienceGridProps {
  onScienceSelect: (scienceId: string) => void;
}

const sciences: Science[] = [
  {
    id: "math",
    name: "Математика",
    description: "Алгебра, геометрия, анализ и статистика",
    icon: "Calculator",
    subjectsCount: 12,
    studentsCount: 340,
  },
  {
    id: "physics",
    name: "Физика",
    description: "Механика, электричество, оптика и квантовая физика",
    icon: "Zap",
    subjectsCount: 8,
    studentsCount: 225,
  },
  {
    id: "chemistry",
    name: "Химия",
    description: "Органическая, неорганическая и физическая химия",
    icon: "FlaskConical",
    subjectsCount: 10,
    studentsCount: 180,
  },
  {
    id: "biology",
    name: "Биология",
    description: "Анатомия, генетика, экология и эволюция",
    icon: "Leaf",
    subjectsCount: 15,
    studentsCount: 290,
  },
  {
    id: "programming",
    name: "Программирование",
    description: "Web-разработка, алгоритмы, базы данных",
    icon: "Code",
    subjectsCount: 20,
    studentsCount: 450,
  },
  {
    id: "languages",
    name: "Языки",
    description: "Английский, немецкий, французский, китайский",
    icon: "Globe",
    subjectsCount: 25,
    studentsCount: 380,
  },
];

const ScienceGrid: React.FC<ScienceGridProps> = ({ onScienceSelect }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Выберите область изучения
          </h1>
          <p className="text-xl text-gray-600">
            Найдите партнёров для совместного обучения
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sciences.map((science) => (
            <Card
              key={science.id}
              className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-0 shadow-md"
              onClick={() => onScienceSelect(science.id)}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <Icon
                    name={science.icon as any}
                    size={32}
                    className="text-purple-600"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">
                  {science.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {science.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Icon name="BookOpen" size={16} className="mr-1" />
                    {science.subjectsCount} предметов
                  </div>
                  <div className="flex items-center">
                    <Icon name="Users" size={16} className="mr-1" />
                    {science.studentsCount} студентов
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScienceGrid;
