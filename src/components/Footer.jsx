import React from 'react';
import { Coffee, MapPin, Phone, Mail, Globe, Share2 } from 'lucide-react';
import { footerInfo, navLinks } from '../data/mockData';

export default function Footer() {
  return (
    <footer className="bg-coffee-950 text-cream-200 border-t border-coffee-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-500 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-gold-400" />
              </div>
              <span className="font-serif font-bold text-lg tracking-wider text-cream-50 uppercase">
                {footerInfo.brand}
              </span>
            </div>
            <p className="text-xs text-coffee-300 italic font-serif">
              "{footerInfo.slogan}"
            </p>
            <p className="text-xs text-coffee-400 leading-relaxed">
              Thương hiệu cà phê Việt Nam tiên phong đem hương vị cà phê năng lượng chinh phục thế giới.
            </p>
            {/* Social Icons with SVG */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#hero"
                className="w-8 h-8 rounded-full bg-coffee-900 border border-coffee-800 hover:border-gold-500 flex items-center justify-center text-cream-300 hover:text-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z"/>
                </svg>
              </a>
              <a
                href="#hero"
                className="w-8 h-8 rounded-full bg-coffee-900 border border-coffee-800 hover:border-gold-500 flex items-center justify-center text-cream-300 hover:text-gold-400 transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#hero"
                className="w-8 h-8 rounded-full bg-coffee-900 border border-coffee-800 hover:border-gold-500 flex items-center justify-center text-cream-300 hover:text-gold-400 transition-colors"
                aria-label="Chia sẻ"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400 mb-4">
              Khám Phá
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="hover:text-gold-400 text-coffee-300 transition-colors flex items-center space-x-1.5"
                  >
                    <span>›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Branches */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400 mb-4">
              Không Gian Tiêu Biểu
            </h4>
            <ul className="space-y-2.5 text-xs text-coffee-300">
              {footerInfo.branches.map((b, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-400 mb-4">
              Trụ Sở Chính
            </h4>
            <div className="space-y-2.5 text-xs text-coffee-300">
              <p className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                <span>{footerInfo.address}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                <span>{footerInfo.phone}</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                <span>{footerInfo.email}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-coffee-900 text-center text-[11px] text-coffee-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>{footerInfo.copyright}</p>
          <div className="flex space-x-4">
            <a href="#hero" className="hover:text-cream-200">Điều khoản sử dụng</a>
            <a href="#hero" className="hover:text-cream-200">Chính sách bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
