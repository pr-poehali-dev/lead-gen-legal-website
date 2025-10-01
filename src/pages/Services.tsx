import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      icon: 'Scale',
      title: 'Судебное представительство',
      description: 'Представление интересов в арбитражных и гражданских судах',
      features: ['Арбитражные споры', 'Гражданские дела', 'Апелляции', 'Кассации'],
      price: 'от 50 000 ₽'
    },
    {
      icon: 'Building2',
      title: 'Корпоративное право',
      description: 'Юридическое сопровождение бизнеса на всех этапах',
      features: ['Регистрация компаний', 'Реорганизация', 'M&A сделки', 'Корпоративные споры'],
      price: 'от 30 000 ₽'
    },
    {
      icon: 'Home',
      title: 'Недвижимость',
      description: 'Сопровождение сделок с недвижимым имуществом',
      features: ['Купля-продажа', 'Аренда', 'Приватизация', 'Споры по недвижимости'],
      price: 'от 25 000 ₽'
    },
    {
      icon: 'Briefcase',
      title: 'Трудовое право',
      description: 'Защита прав работников и работодателей',
      features: ['Трудовые споры', 'Увольнения', 'Взыскание зарплаты', 'Кадровый аудит'],
      price: 'от 20 000 ₽'
    },
    {
      icon: 'Users',
      title: 'Семейное право',
      description: 'Решение семейных споров цивилизованным путём',
      features: ['Разводы', 'Раздел имущества', 'Алименты', 'Опека и усыновление'],
      price: 'от 15 000 ₽'
    },
    {
      icon: 'FileText',
      title: 'Договоры и документы',
      description: 'Составление и проверка юридических документов',
      features: ['Договоры любой сложности', 'Исковые заявления', 'Претензии', 'Правовая экспертиза'],
      price: 'от 10 000 ₽'
    },
    {
      icon: 'ShieldCheck',
      title: 'Банкротство',
      description: 'Сопровождение процедур банкротства физлиц и компаний',
      features: ['Физических лиц', 'Юридических лиц', 'Реструктуризация долгов', 'Защита от кредиторов'],
      price: 'от 40 000 ₽'
    },
    {
      icon: 'Landmark',
      title: 'Административное право',
      description: 'Защита от административных правонарушений',
      features: ['ГИБДД и штрафы', 'Административные дела', 'Лишение прав', 'Обжалование постановлений'],
      price: 'от 15 000 ₽'
    },
    {
      icon: 'BookOpen',
      title: 'Интеллектуальная собственность',
      description: 'Защита авторских и смежных прав',
      features: ['Регистрация товарных знаков', 'Патенты', 'Авторские права', 'Споры по IP'],
      price: 'от 35 000 ₽'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="bg-secondary/10 text-secondary border-secondary/20 rounded-full px-5 py-2 mb-6">
            Наши услуги
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Полный спектр юридических услуг
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Защитим ваши права и интересы в любой правовой ситуации. 
            Индивидуальный подход к каждому клиенту.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="rounded-3xl border-2 hover:border-primary/50 transition-all hover:shadow-xl group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon name={service.icon} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-5 h-5 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Check" className="text-green-600" size={14} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button className="rounded-full bg-gradient-to-r from-primary to-secondary">
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Как мы работаем
            </h2>
            <p className="text-xl text-muted-foreground">
              Простой и прозрачный процесс сотрудничества
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'MessageSquare', title: 'Консультация', text: 'Обсуждаем ситуацию и варианты решения' },
              { icon: 'FileText', title: 'Анализ', text: 'Изучаем документы и оцениваем перспективы' },
              { icon: 'Scale', title: 'Работа', text: 'Представляем ваши интересы' },
              { icon: 'CheckCircle2', title: 'Результат', text: 'Добиваемся нужного решения' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                    <Icon name={step.icon} className="text-white" size={36} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Нужна юридическая помощь?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Запишитесь на бесплатную консультацию и получите экспертную оценку вашей ситуации
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 h-14 px-8 shadow-xl">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить нам
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 border-2 border-white text-white hover:bg-white/10">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
