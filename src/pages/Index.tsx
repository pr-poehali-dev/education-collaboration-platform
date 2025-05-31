import React, { useState } from "react";
import AuthForm from "@/components/AuthForm";
import ScienceGrid from "@/components/ScienceGrid";
import SubjectPage from "@/components/SubjectPage";
import TopicChat from "@/components/TopicChat";

type AppState = "auth" | "sciences" | "subjects" | "chat";

interface User {
  email: string;
  name: string;
}

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>("auth");
  const [user, setUser] = useState<User | null>(null);
  const [selectedScience, setSelectedScience] = useState<string>("");
  const [selectedSubject, setSelectedSubject] = useState<string>("");

  const handleAuthSuccess = (userData: User) => {
    setUser(userData);
    setCurrentState("sciences");
  };

  const handleScienceSelect = (scienceId: string) => {
    setSelectedScience(scienceId);
    setCurrentState("subjects");
  };

  const handleSubjectSelect = (subjectId: string) => {
    setSelectedSubject(subjectId);
    setCurrentState("chat");
  };

  const handleBackToSciences = () => {
    setCurrentState("sciences");
    setSelectedScience("");
  };

  const handleBackToSubjects = () => {
    setCurrentState("subjects");
    setSelectedSubject("");
  };

  switch (currentState) {
    case "auth":
      return <AuthForm onAuthSuccess={handleAuthSuccess} />;

    case "sciences":
      return <ScienceGrid onScienceSelect={handleScienceSelect} />;

    case "subjects":
      return (
        <SubjectPage
          scienceId={selectedScience}
          onSubjectSelect={handleSubjectSelect}
          onBack={handleBackToSciences}
        />
      );

    case "chat":
      return (
        <TopicChat subjectId={selectedSubject} onBack={handleBackToSubjects} />
      );

    default:
      return <AuthForm onAuthSuccess={handleAuthSuccess} />;
  }
};

export default Index;
