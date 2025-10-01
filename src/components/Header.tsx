import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Главная', path: '/' },
    { label: 'Услуги', path: '/services' },
    { label: 'О компании', path: '/about' },
    { label: 'Команда', path: '/team' },
    { label: 'Контакты', path: '/contacts' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <Icon name="Scale" className="text-white" size={26} />
            </div>
            <div>
              <span className="text-xl font-bold text-foreground block">ЮрПрофи</span>
              <span className="text-xs text-muted-foreground">Ваш правовой партнёр</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors relative ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button className="hidden md:flex rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg">
              <Icon name="Phone" size={16} className="mr-2" />
              Бесплатная консультация
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg mb-2 ${
                  isActive(item.path)
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'text-muted-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full mt-4 rounded-full bg-gradient-to-r from-primary to-secondary">
              <Icon name="Phone" size={16} className="mr-2" />
              Консультация
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
