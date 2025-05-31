import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({
  value,
  onChange,
  onSend,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSend();
    }
  };

  return (
    <div className="border-t p-4">
      <div className="flex space-x-2">
        <Input
          placeholder="Напишите сообщение..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1"
        />
        <Button onClick={onSend} className="bg-purple-600 hover:bg-purple-700">
          <Icon name="Send" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default MessageInput;
