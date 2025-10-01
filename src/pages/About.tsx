import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: 'Target',
      title: 'Ориентир на результат',
      description: 'Каждое дело – это новый вызов, который мы принимаем с полной ответственностью'
    },
    {
      icon: 'Users',
      title: 'Индивидуальный подход',
      description: 'Нет шаблонных решений – только персональная стратегия для каждого клиента'
    },
    {
      icon: 'Shield',
      title: 'Конфиденциальность',
      description: 'Гарантируем полную защиту ваших данных и коммерческой тайны'
    },
    {
      icon: 'Heart',
      title: 'Честность',
      description: 'Всегда даём реалистичную оценку ситуации без ложных обещаний'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Выигранных дел', icon: 'Award' },
    { number: '15', label: 'Лет на рынке', icon: 'TrendingUp' },
    { number: '98%', label: 'Положительных решений', icon: 'Target' },
    { number: '350+', label: 'Довольных клиентов', icon: 'Users' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-secondary/10 text-secondary border-secondary/20 rounded-full px-5 py-2 mb-6">
                О компании
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Надёжный партнёр в мире права
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">ЮрПрофи</strong> — это команда профессиональных юристов с опытом работы более 15 лет. 
                  Мы специализируемся на защите прав и интересов как частных лиц, так и бизнеса.
                </p>
                <p>
                  За годы работы мы выиграли более 500 судебных дел и помогли сотням клиентов 
                  решить самые сложные правовые вопросы.
                </p>
                <p>
                  Наша миссия — делать юридическую помощь доступной, понятной и эффективной для каждого.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <Link to="/contacts">
                  <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-secondary h-14 px-8">
                    Связаться с нами
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </Link>
                <Link to="/team">
                  <Button size="lg" variant="outline" className="rounded-full h-14 px-8">
                    Наша команда
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <Card className="relative rounded-3xl border-2 shadow-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((item, index) => (
                      <div key={index} className="text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Icon name={item.icon} className="text-white" size={28} />
                        </div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                          {item.number}
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">{item.label}</div>
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
              Наши ценности
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              На чём строится наша работа
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Принципы, которые определяют наш подход к каждому делу
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="rounded-3xl border-2 hover:border-primary/50 transition-all hover:shadow-xl group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon name={value.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 rounded-full mb-6">
              Наш опыт
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Практика в цифрах
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'Briefcase',
                title: 'Корпоративные споры',
                number: '150+',
                description: 'Споров разрешено в пользу клиентов'
              },
              {
                icon: 'Home',
                title: 'Недвижимость',
                number: '200+',
                description: 'Сделок успешно проведено'
              },
              {
                icon: 'Scale',
                title: 'Судебная практика',
                number: '500+',
                description: 'Дел выиграно в судах всех инстанций'
              }
            ].map((item, index) => (
              <Card key={index} className="rounded-3xl border-2 text-center hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon name={item.icon} className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                    {item.number}
                  </p>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Начните с бесплатной консультации
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Расскажите о своей ситуации, и мы предложим оптимальное решение
          </p>
          <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 h-14 px-8 shadow-xl">
            <Icon name="Phone" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
