import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/niya-logo.png";

const navLinks = [
  { label: "Ürün", href: "#urun" },
  { label: "Özellikler", href: "#ozellikler" },
  { label: "Tarifler", href: "#tarifler" },
  { label: "Satış Noktaları", href: "#satis-noktalari" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        <a href="https://www.niyafoods.com" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Niya Foods" className="h-8" />
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://www.trendyol.com/PLACEHOLDER"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Satın Al
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menü"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b pb-4">
          <ul className="flex flex-col gap-1 px-5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://www.trendyol.com/PLACEHOLDER"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-2 items-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold"
              >
                Satın Al
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
