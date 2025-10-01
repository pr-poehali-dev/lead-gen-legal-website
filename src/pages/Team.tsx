import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Team = () => {
  const team = [
    {
      name: 'Александр Петров',
      position: 'Управляющий партнёр',
      specialization: 'Арбитражные споры, корпоративное право',
      experience: '18 лет',
      education: 'МГУ им. Ломоносова',
      cases: '200+',
      description: 'Специализируется на сложных корпоративных спорах и представительстве в арбитражных судах'
    },
    {
      name: 'Елена Смирнова',
      position: 'Партнёр',
      specialization: 'Недвижимость, гражданское право',
      experience: '15 лет',
      education: 'МГЮА им. Кутафина',
      cases: '180+',
      description: 'Эксперт в области сделок с недвижимостью и разрешении гражданских споров'
    },
    {
      name: 'Дмитрий Кузнецов',
      position: 'Старший юрист',
      specialization: 'Трудовое право, банкротство',
      experience: '12 лет',
      education: 'СПбГУ',
      cases: '150+',
      description: 'Ведёт дела по трудовым спорам и банкротству физических и юридических лиц'
    },
    {
      name: 'Мария Волкова',
      position: 'Юрист',
      specialization: 'Семейное право, наследство',
      experience: '8 лет',
      education: 'РАНХиГС',
      cases: '120+',
      description: 'Помогает решать семейные споры и вопросы наследования деликатно и эффективно'
    },
    {
      name: 'Игорь Морозов',
      position: 'Юрист',
      specialization: 'Административное право, ГИБДД',
      experience: '10 лет',
      education: 'МГЮА им. Кутафина',
      cases: '250+',
      description: 'Специалист по административным делам и обжалованию постановлений ГИБДД'
    },
    {
      name: 'Анна Соколова',
      position: 'Юрист',
      specialization: 'Интеллектуальная собственность',
      experience: '7 лет',
      education: 'МГУ им. Ломоносова',
      cases: '80+',
      description: 'Защищает права на товарные знаки, патенты и авторские права'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="bg-secondary/10 text-secondary border-secondary/20 rounded-full px-5 py-2 mb-6">
            Наша команда
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Профессионалы своего дела
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Опытные юристы с глубокими знаниями и успешной практикой в различных отраслях права
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="rounded-3xl border-2 hover:border-primary/50 transition-all hover:shadow-xl group">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon name="User" className="text-white" size={48} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-2">{member.name}</h3>
                  <p className="text-center text-primary font-semibold mb-4">{member.position}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <Icon name="Briefcase" size={18} className="text-muted-foreground flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-medium">Специализация</p>
                        <p className="text-sm text-muted-foreground">{member.specialization}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Icon name="Clock" size={18} className="text-muted-foreground flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-medium">Опыт работы</p>
                        <p className="text-sm text-muted-foreground">{member.experience}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Icon name="GraduationCap" size={18} className="text-muted-foreground flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-medium">Образование</p>
                        <p className="text-sm text-muted-foreground">{member.education}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Icon name="Scale" size={18} className="text-muted-foreground flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm font-medium">Выиграно дел</p>
                        <p className="text-sm text-primary font-semibold">{member.cases}</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {member.description}
                  </p>
                  
                  <Button className="w-full rounded-full bg-gradient-to-r from-primary to-secondary">
                    <Icon name="MessageSquare" size={18} className="mr-2" />
                    Консультация
                  </Button>
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
              Почему нашей команде доверяют
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Award',
                title: 'Высокая квалификация',
                description: 'Все специалисты имеют профильное образование и регулярно повышают квалификацию'
              },
              {
                icon: 'Users',
                title: 'Командная работа',
                description: 'К сложным делам привлекаем несколько специалистов для лучшего результата'
              },
              {
                icon: 'Target',
                title: 'Фокус на результат',
                description: 'Работаем на победу и добиваемся максимально выгодных условий для клиентов'
              }
            ].map((item, index) => (
              <Card key={index} className="rounded-3xl border-2 text-center hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon name={item.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Доверьте своё дело профессионалам
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Запишитесь на консультацию к нужному специалисту
          </p>
          <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 h-14 px-8 shadow-xl">
            <Icon name="Calendar" size={20} className="mr-2" />
            Записаться на консультацию
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
