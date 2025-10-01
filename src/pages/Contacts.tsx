import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contacts = () => {
  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      items: [
        { label: 'Основной', value: '+7 (495) 123-45-67' },
        { label: 'Горячая линия', value: '+7 (800) 555-35-35' }
      ]
    },
    {
      icon: 'Mail',
      title: 'Email',
      items: [
        { label: 'Общие вопросы', value: 'info@urprofi.ru' },
        { label: 'Новые клиенты', value: 'hello@urprofi.ru' }
      ]
    },
    {
      icon: 'MapPin',
      title: 'Адрес офиса',
      items: [
        { label: '', value: 'г. Москва, ул. Тверская, д. 1' },
        { label: '', value: 'офис 501, 5 этаж' }
      ]
    },
    {
      icon: 'Clock',
      title: 'График работы',
      items: [
        { label: 'Пн-Пт', value: '9:00 - 20:00' },
        { label: 'Сб-Вс', value: '10:00 - 18:00' }
      ]
    }
  ];

  const socialLinks = [
    { icon: 'MessageCircle', name: 'WhatsApp', link: '#' },
    { icon: 'Send', name: 'Telegram', link: '#' },
    { icon: 'Mail', name: 'Email', link: 'mailto:info@urprofi.ru' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Header />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="bg-secondary/10 text-secondary border-secondary/20 rounded-full px-5 py-2 mb-6">
            Контакты
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Свяжитесь с нами
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы всегда на связи и готовы ответить на ваши вопросы
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contacts.map((contact, index) => (
              <Card key={index} className="rounded-3xl border-2 hover:shadow-xl transition-all">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon name={contact.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{contact.title}</h3>
                  <div className="space-y-2">
                    {contact.items.map((item, idx) => (
                      <div key={idx}>
                        {item.label && (
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                        )}
                        <p className="font-medium">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="rounded-3xl border-2 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl">Напишите нам</CardTitle>
                <CardDescription className="text-base">
                  Заполните форму и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <Input 
                        placeholder="Иван Иванов" 
                        className="rounded-xl border-2 h-12"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input 
                        type="tel" 
                        placeholder="+7 (___) ___-__-__" 
                        className="rounded-xl border-2 h-12"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input 
                      type="email" 
                      placeholder="example@mail.ru" 
                      className="rounded-xl border-2 h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Тема обращения</label>
                    <Input 
                      placeholder="Например: Консультация по трудовому спору" 
                      className="rounded-xl border-2 h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea 
                      placeholder="Опишите вашу ситуацию подробнее" 
                      className="rounded-xl border-2 min-h-36"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full rounded-full bg-gradient-to-r from-primary to-secondary h-14"
                  >
                    Отправить сообщение
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="rounded-3xl border-2 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Как нас найти</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Москва, ул. Тверская, д. 1</p>
                        <p className="text-sm text-muted-foreground">офис 501, 5 этаж</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Train" className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Метро</p>
                        <p className="text-sm text-muted-foreground">Тверская, Пушкинская (5 мин пешком)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Car" className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium">Парковка</p>
                        <p className="text-sm text-muted-foreground">Подземная парковка для клиентов</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-64 bg-muted rounded-2xl flex items-center justify-center">
                    <Icon name="Map" size={64} className="text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-2 shadow-xl bg-gradient-to-br from-primary to-secondary text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Свяжитесь с нами удобным способом</h3>
                  <p className="mb-6 opacity-90">Выберите предпочитаемый мессенджер</p>
                  <div className="flex gap-4 justify-center">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors"
                        title={social.name}
                      >
                        <Icon name={social.icon} className="text-white" size={28} />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Первая консультация — бесплатно
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Позвоните нам или оставьте заявку, и мы подберём удобное время для встречи
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-secondary h-14 px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8">
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

export default Contacts;
