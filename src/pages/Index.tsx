import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    { icon: 'Scale', title: 'Судебное представительство', description: 'Защита интересов в судах всех инстанций' },
    { icon: 'Building2', title: 'Корпоративное право', description: 'Регистрация и сопровождение бизнеса' },
    { icon: 'Home', title: 'Недвижимость', description: 'Сделки с недвижимостью и оформление' },
    { icon: 'Briefcase', title: 'Трудовое право', description: 'Разрешение трудовых споров' },
    { icon: 'Users', title: 'Семейное право', description: 'Бракоразводные процессы, алименты' },
    { icon: 'FileText', title: 'Договоры', description: 'Составление и проверка документов' }
  ];

  const stats = [
    { number: '500+', label: 'Выигранных дел', icon: 'TrendingUp' },
    { number: '15+', label: 'Лет опыта', icon: 'Award' },
    { number: '98%', label: 'Успешных кейсов', icon: 'Target' },
    { number: '24/7', label: 'Поддержка', icon: 'Clock' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />

      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-secondary/10 text-secondary border-secondary/20 rounded-full px-5 py-2">
                ✓ Профессионально • Надёжно • Конфиденциально
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Защитим ваши права в любой ситуации
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Комплексная юридическая поддержка для бизнеса и частных лиц. 
                Опыт более 15 лет, 500+ выигранных дел.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg h-14 px-8">
                  Бесплатная консультация
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="rounded-full h-14 px-8">
                    Наши услуги
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-white"></div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">4.9/5</span> • 350+ отзывов
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <Card className="relative rounded-3xl border-2 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl hover:scale-105 transition-transform">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Icon name={stat.icon} className="text-white" size={24} />
                        </div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 rounded-full mb-6">
              Наши услуги
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Чем мы можем помочь
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр юридических услуг для защиты ваших интересов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} to="/services">
                <Card className="rounded-2xl border-2 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-2 cursor-pointer group h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon name={service.icon} className="text-white" size={30} />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="rounded-full">
                Все услуги
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-4xl relative">
          <Card className="rounded-3xl border-0 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl lg:text-4xl font-bold mb-3">
                Получить бесплатную консультацию
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Заполните форму и мы свяжемся с вами в течение 15 минут
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Input 
                    placeholder="Ваше имя" 
                    className="rounded-xl border-2 h-14 text-base"
                  />
                  <Input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="rounded-xl border-2 h-14 text-base"
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Email (необязательно)" 
                  className="rounded-xl border-2 h-14 text-base"
                />
                <Textarea 
                  placeholder="Кратко опишите вашу ситуацию" 
                  className="rounded-xl border-2 min-h-36 text-base"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white h-14 text-base font-medium shadow-lg"
                >
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-secondary/10 text-secondary border-secondary/20 rounded-full mb-6">
                Почему выбирают нас
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                Работаем на результат
              </h2>
              <div className="space-y-6">
                {[
                  { icon: 'Shield', title: 'Гарантия результата', text: 'Работаем до победного конца' },
                  { icon: 'Clock', title: 'Быстрый старт', text: 'Начинаем работу в день обращения' },
                  { icon: 'Eye', title: 'Полная прозрачность', text: 'Держим в курсе на каждом этапе' },
                  { icon: 'Wallet', title: 'Честные цены', text: 'Без скрытых комиссий и доплат' }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon name={item.icon} className="text-white" size={26} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="rounded-3xl border-2 shadow-xl p-8">
              <div className="space-y-6">
                <div className="text-center pb-6 border-b">
                  <h3 className="text-2xl font-bold mb-2">Первая консультация</h3>
                  <p className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Бесплатно
                  </p>
                </div>
                <ul className="space-y-4">
                  {[
                    'Анализ вашей ситуации',
                    'План действий',
                    'Оценка перспектив дела',
                    'Расчёт стоимости услуг'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" className="text-white" size={16} />
                      </div>
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-full bg-gradient-to-r from-primary to-secondary h-14 text-base shadow-lg">
                  Записаться на консультацию
                  <Icon name="Calendar" size={20} className="ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
