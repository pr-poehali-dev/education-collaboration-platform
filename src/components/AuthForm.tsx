import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface AuthFormProps {
  onAuthSuccess: (user: { email: string; name: string }) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Имитация успешной авторизации
    onAuthSuccess({
      email: formData.email,
      name: formData.name || "Пользователь",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center">
            <Icon name="GraduationCap" size={32} className="text-purple-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            {isLogin ? "Вход в аккаунт" : "Регистрация"}
          </CardTitle>
          <CardDescription>
            {isLogin
              ? "Добро пожаловать обратно!"
              : "Присоединяйтесь к обучению"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <Icon
                  name="Mail"
                  size={20}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Телефон
              </label>
              <div className="relative">
                <Icon
                  name="Phone"
                  size={20}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <Input
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Имя</label>
                <div className="relative">
                  <Icon
                    name="User"
                    size={20}
                    className="absolute left-3 top-3 text-gray-400"
                  />
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Пароль
              </label>
              <div className="relative">
                <Icon
                  name="Lock"
                  size={20}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              {isLogin ? "Войти" : "Зарегистрироваться"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-purple-600 hover:text-purple-800 text-sm font-medium"
            >
              {isLogin
                ? "Нет аккаунта? Зарегистрироваться"
                : "Есть аккаунт? Войти"}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;
