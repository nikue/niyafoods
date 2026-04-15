const Footer = () => (
  <footer id="iletisim" className="py-12 border-t">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        <div>
          <p className="font-heading text-xl text-foreground mb-2">Niya Foods</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Bitkisel mutfağı herkes için pratik ve lezzetli hale getiriyoruz.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Hızlı Bağlantılar</h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li><a href="#urun" className="hover:text-foreground transition-colors">Ürün</a></li>
            <li><a href="#ozellikler" className="hover:text-foreground transition-colors">Özellikler</a></li>
            <li><a href="#tarifler" className="hover:text-foreground transition-colors">Tarifler</a></li>
            <li><a href="#satis-noktalari" className="hover:text-foreground transition-colors">Satış Noktaları</a></li>
            <li><a href="#sss" className="hover:text-foreground transition-colors">SSS</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">İletişim</h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>
              <a href="mailto:info@niyafoods.com" className="hover:text-foreground transition-colors">
                info@niyafoods.com
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/niyafoods_tr/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Niya Foods. Tüm hakları saklıdır.</p>
        <p>VEGANZZA YEMEK A.Ş.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
