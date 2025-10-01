import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: 'Scale',
      title: 'Судебное представительство',
      description: 'Защита интересов в судах всех инстанций'
    },
    {
      icon: 'FileText',
      title: 'Юридическое сопровождение',
      description: 'Комплексная правовая поддержка бизнеса'
    },
    {
      icon: 'Users',
      title: 'Консультации',
      description: 'Профессиональная правовая помощь'
    },
    {
      icon: 'Building2',
      title: 'Корпоративное право',
      description: 'Регистрация и сопровождение компаний'
    },
    {
      icon: 'Home',
      title: 'Недвижимость',
      description: 'Сделки с недвижимостью и оформление'
    },
    {
      icon: 'Briefcase',
      title: 'Трудовое право',
      description: 'Разрешение трудовых споров'
    }
  ];

  const stats = [
    { number: '500+', label: 'Выигранных дел' },
    { number: '15+', label: 'Лет опыта' },
    { number: '98%', label: 'Успешных кейсов' },
    { number: '24/7', label: 'Поддержка клиентов' }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="Scale" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-foreground">ЮрПрофи</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              {['Главная', 'Услуги', 'Практика', 'Специалисты', 'Цены', 'Новости', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            <Button className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              <Icon name="Phone" size={16} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-secondary/10 text-secondary border-secondary/20 rounded-full px-4 py-1">
                Профессиональная юридическая помощь
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Защитим ваши права в любой ситуации
              </h1>
              <p className="text-lg text-muted-foreground">
                Комплексная юридическая поддержка для бизнеса и частных лиц. Опыт более 15 лет, 500+ выигранных дел.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Получить консультацию
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  Наши услуги
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <Card className="relative rounded-3xl border-2 shadow-2xl">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl">
                        <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 rounded-full mb-4">
              Наши услуги
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Чем мы можем помочь
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Предоставляем полный спектр юридических услуг для защиты ваших интересов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="rounded-2xl border-2 hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="практика" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 rounded-full mb-4">
              Практика
            </Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Наш опыт работы
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Арбитраж', cases: '200+', icon: 'Gavel' },
              { title: 'Гражданские дела', cases: '150+', icon: 'Users' },
              { title: 'Корпоративные споры', cases: '100+', icon: 'Building2' }
            ].map((practice, index) => (
              <Card key={index} className="rounded-2xl border-2 text-center p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={practice.icon} className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{practice.title}</h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {practice.cases}
                </p>
                <p className="text-muted-foreground">успешных дел</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="консультация" className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto max-w-4xl">
          <Card className="rounded-3xl border-0 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold mb-2">Получить консультацию</CardTitle>
              <CardDescription className="text-base">
                Заполните форму и мы свяжемся с вами в течение 15 минут
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Ваше имя" 
                    className="rounded-xl border-2 h-12"
                  />
                  <Input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="rounded-xl border-2 h-12"
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="rounded-xl border-2 h-12"
                />
                <Textarea 
                  placeholder="Опишите вашу ситуацию" 
                  className="rounded-xl border-2 min-h-32"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white h-12"
                >
                  Отправить заявку
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Scale" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">ЮрПрофи</span>
              </div>
              <p className="text-sm text-white/70">
                Профессиональная юридическая помощь с 2009 года
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Судебное представительство</li>
                <li>Консультации</li>
                <li>Корпоративное право</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>О нас</li>
                <li>Специалисты</li>
                <li>Новости</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@urprofi.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50">
            © 2024 ЮрПрофи. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
