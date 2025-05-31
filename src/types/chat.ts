export interface Message {
  id: string;
  user: string;
  text: string;
  time: string;
  avatar: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  messagesCount: number;
}

export interface TopicChatProps {
  subjectId: string;
  onBack: () => void;
}
