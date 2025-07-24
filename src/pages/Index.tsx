import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [loanAmount, setLoanAmount] = useState([14000]);
  const [loanDays, setLoanDays] = useState([15]);
  
  const maxAmount = 20000;
  const maxDays = 15;
  const interestRate = 0.01; // 1% per day
  
  const calculateTotal = () => {
    const amount = loanAmount[0];
    const days = loanDays[0];
    const interest = amount * interestRate * days;
    return amount + interest;
  };

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('ru-RU').format(amount);
  };

  const getReturnDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + loanDays[0]);
    return date.toLocaleDateString('ru-RU', { 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const faqData = [
    {
      question: "Какие документы нужны для получения займа?",
      answer: "Для получения займа достаточно паспорта РФ и номера мобильного телефона. Дополнительные документы не требуются."
    },
    {
      question: "Как быстро можно получить деньги?",
      answer: "После одобрения заявки деньги поступают на карту в течение 15 минут в любое время суток."
    },
    {
      question: "Можно ли продлить срок займа?",
      answer: "Да, вы можете продлить займ на срок до 30 дней. Условия продления уточняйте в личном кабинете."
    },
    {
      question: "Есть ли скрытые комиссии?",
      answer: "Нет, мы работаем полностью прозрачно. Все условия и проценты указаны в договоре займа."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-purple-500">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Icon name="Zap" className="text-blue-600" size={20} />
            </div>
            <span className="text-white text-xl font-bold">SnapCredit</span>
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Icon name="Menu" size={24} />
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Первый займ под <span className="text-yellow-300">0%</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            При возврате суммы в срок и сроке займа 7 дней
          </p>
        </div>

        {/* 3D Illustration */}
        <div className="flex justify-center mb-12">
          <img 
            src="/img/62a01ada-b22c-491e-916b-46de8567a857.jpg" 
            alt="Financial illustration" 
            className="w-64 h-48 object-cover rounded-2xl shadow-2xl"
          />
        </div>

        {/* Main Calculator Card */}
        <div className="max-w-2xl mx-auto px-4">
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-4 md:p-8">
              {/* Action Button */}
              <div className="mb-8">
                <Card className="bg-blue-50 border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Взять быстрый заем</h3>
                    <Icon name="CreditCard" className="text-blue-600 mx-auto" size={32} />
                  </CardContent>
                </Card>
              </div>

              {/* Calculator */}
              <div className="space-y-8">
                {/* Amount Slider */}
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                    <span className="text-2xl md:text-3xl font-bold text-gray-800">
                      {formatMoney(loanAmount[0])} ₽
                    </span>
                    <span className="text-sm md:text-base text-gray-500">
                      Максимум - {formatMoney(maxAmount)} ₽
                    </span>
                  </div>
                  <Slider
                    value={loanAmount}
                    onValueChange={setLoanAmount}
                    max={maxAmount}
                    min={1000}
                    step={1000}
                    className="w-full"
                  />
                </div>

                {/* Days Slider */}
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                    <span className="text-2xl md:text-3xl font-bold text-gray-800">
                      {loanDays[0]} дней
                    </span>
                    <span className="text-sm md:text-base text-gray-500">
                      Максимум - {maxDays} дней
                    </span>
                  </div>
                  <Slider
                    value={loanDays}
                    onValueChange={setLoanDays}
                    max={maxDays}
                    min={7}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Get Money Button */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg md:text-xl py-4 md:py-6 rounded-2xl font-semibold shadow-lg">
                  Получить {formatMoney(loanAmount[0])} ₽
                </Button>

                {/* Repayment Info */}
                <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-600">Вы возвращаете:</span>
                    <span className="font-bold text-gray-800">
                      {formatMoney(calculateTotal())} ₽
                    </span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-600">Дата возврата:</span>
                    <span className="font-bold text-gray-800">
                      {getReturnDate()}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
            <CardContent className="p-6">
              <Icon name="Clock" className="mx-auto mb-4 text-yellow-300" size={48} />
              <h3 className="text-xl font-semibold mb-2">Быстро</h3>
              <p className="opacity-90">Решение за 5 минут, деньги за 15 минут</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
            <CardContent className="p-6">
              <Icon name="Shield" className="mx-auto mb-4 text-yellow-300" size={48} />
              <h3 className="text-xl font-semibold mb-2">Надежно</h3>
              <p className="opacity-90">Лицензия ЦБ РФ, защита данных</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center">
            <CardContent className="p-6">
              <Icon name="Users" className="mx-auto mb-4 text-yellow-300" size={48} />
              <h3 className="text-xl font-semibold mb-2">Просто</h3>
              <p className="opacity-90">Минимум документов, максимум удобства</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Частые вопросы
          </h2>
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-blue-600">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/10 backdrop-blur-sm border-t border-white/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Icon name="Zap" className="text-blue-600" size={20} />
                </div>
                <span className="text-xl font-bold">SnapCredit</span>
              </div>
              <p className="opacity-75">Быстрые займы онлайн</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 opacity-75">
                <li>Займы до зарплаты</li>
                <li>Микрозаймы</li>
                <li>Экспресс займы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 opacity-75">
                <li>О компании</li>
                <li>Условия займа</li>
                <li>Безопасность</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 opacity-75">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>8 (800) 555-0123</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@snapcredit.ru</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>© 2025 SnapCredit. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;