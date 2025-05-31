import { Topic, Message } from "@/types/chat";

export const mockTopics: Topic[] = [
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

export const mockMessages: Message[] = [
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
