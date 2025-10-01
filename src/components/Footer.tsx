import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="Scale" className="text-white" size={26} />
              </div>
              <div>
                <span className="text-xl font-bold block">ЮрПрофи</span>
                <span className="text-xs text-white/60">С 2009 года</span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Профессиональная юридическая помощь для защиты ваших прав и интересов
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Icon name="MessageCircle" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Icon name="Mail" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Icon name="Phone" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Услуги</h4>
            <ul className="space-y-3">
              {['Судебное представительство', 'Корпоративное право', 'Недвижимость', 'Трудовое право', 'Семейное право'].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
                    <Icon name="ChevronRight" size={14} />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Компания</h4>
            <ul className="space-y-3">
              {[
                { label: 'О нас', path: '/about' },
                { label: 'Наша команда', path: '/team' },
                { label: 'Практика', path: '/services' },
                { label: 'Контакты', path: '/contacts' }
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2">
                    <Icon name="ChevronRight" size={14} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={18} />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Телефон</p>
                  <a href="tel:+74951234567" className="text-sm font-medium hover:text-primary transition-colors">
                    +7 (495) 123-45-67
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={18} />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Email</p>
                  <a href="mailto:info@urprofi.ru" className="text-sm font-medium hover:text-primary transition-colors">
                    info@urprofi.ru
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={18} />
                </div>
                <div>
                  <p className="text-sm text-white/50 mb-1">Адрес</p>
                  <p className="text-sm font-medium">
                    Москва, ул. Тверская, 1<br/>офис 501
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © 2024 ЮрПрофи. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
