import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X, ArrowRight, ChevronLeft, ChevronRight, Instagram, Facebook, Twitter, Youtube, Check } from "lucide-react";

// ─── Landing Page Images ───────────────────────────────────────────────────
import heroImg from "@/imports/LandingPage/be52d80374a3f76e2fb779bd9b47e25304a3bb0f.png";
import logoEmblem from "@/imports/LandingPage/253559054d0532dd74b1b247e96a52ea9f900099.png";
import avatar1 from "@/imports/LandingPage/3fda30d796243f07b7a4930125fdca2fe3ec76ef.png";
import avatar2 from "@/imports/LandingPage/c041f43a95a7d237af9aadfb77b01841fa6659d0.png";
import avatar3 from "@/imports/LandingPage/24f838eaea90b10c6be9098a3bf5b13734271f52.png";
import landingCard1 from "@/imports/LandingPage/fb25d8f983ea2e776c241974d5ef8eed56b84417.png";
import landingCard2 from "@/imports/LandingPage/f3eb12ac603716fd0ec4e8600b4333d8950c7b89.png";
import landingCard3 from "@/imports/LandingPage/aa4f9ac4cd522222c092125a1ea0a13f2d010316.png";
import landingFeature from "@/imports/LandingPage/ad773759391bb742e64b67ae254c60116828b50b.png";
import landingCard4 from "@/imports/LandingPage/222cc63037460d83213fc820abe67c0bb92fb1cb.png";
import landingCard5 from "@/imports/LandingPage/98eee12176fd0f7948f96d4bb34d57d5a759a05e.png";

// ─── Shop Page Images ──────────────────────────────────────────────────────
import shopHero from "@/imports/Shop/51df4f7dc746e9d8b2a6503a15cdbbc453463ef2.png";
import shopProd1 from "@/imports/Shop/65d68f724f70b8f021d5f479cd5eb6004696c267.png";
import shopProd2 from "@/imports/Shop/44b0aa43a57e23aec207706d7933d9eaa0f3360a.png";
import shopFeatured from "@/imports/Shop/7bed58f01834c825ee0281cd271f995f8b6055a0.png";
import shopCol1 from "@/imports/Shop/27f8542197a23d4c7d9278133fd99ba8561f279e.png";
import shopCol2 from "@/imports/Shop/c792cb438100892496b125897959ab17f25ba4f9.png";

// ─── Product Page Images ───────────────────────────────────────────────────
import prodFront from "@/imports/ProductDetailPage/bf654601fdcf3a4a95d3c29ba3fa558ee62930da.png";
import prodAngled from "@/imports/ProductDetailPage/4eb10bdb728a6ec70ef1ff4229f0672ea1b4dcc4.png";
import prodTop from "@/imports/ProductDetailPage/e67cad7c255f88d5c24f51cb23a24211e2ef9c0a.png";
import prodSide from "@/imports/ProductDetailPage/5339e4dc1e283dd14be35f6d7014f2f50a722c3e.png";
import prodLifestyle1 from "@/imports/ProductDetailPage/86f1ea9f5b0d5a3390dfa6d6c3a8515e603c04b5.png";
import prodLifestyle2 from "@/imports/ProductDetailPage/ee7a844478f5549447097d0c9dcc19d1efe8f49a.png";
import prodInstagram from "@/imports/ProductDetailPage/dc2768de4b504cdf9efad596464a7793841ffb03.png";
import relProd1 from "@/imports/ProductDetailPage/f0adb50fcfaac016ca66e865e846c420af4e1fff.png";
import relProd2 from "@/imports/ProductDetailPage/8998f0e641b77fa9f63d0cea2980f21bfb820c52.png";
import relProd3 from "@/imports/ProductDetailPage/cef3b6e83c5eb97e3ae49516b7f0c436b5136879.png";

// ─── About Page Images ─────────────────────────────────────────────────────
import aboutImg from "@/imports/About/eef36a481a33eb6dc13aa6b624105a5a5e591e72.png";

// ─── Article Page Images ───────────────────────────────────────────────────
import articleHero from "@/imports/Article/9b92834dba5db2760928a8f3f665c5a65b4b8020.png";
import articleImg1 from "@/imports/Article/222cc63037460d83213fc820abe67c0bb92fb1cb.png";
import articleImg2 from "@/imports/Article/f3eb12ac603716fd0ec4e8600b4333d8950c7b89.png";
import articleRelated1 from "@/imports/Article/4737fe1bf44d7342d9605d5c93635abf8a144817.png";
import articleRelated2 from "@/imports/Article/379c0155bc413a61ca41917df832a2e64530e9d7.png";
import articleRelated3 from "@/imports/Article/44b0aa43a57e23aec207706d7933d9eaa0f3360a.png";

// ─── Types ─────────────────────────────────────────────────────────────────
type Page = "home" | "shop" | "product" | "about" | "article";

// ─── Shared: Navbar ────────────────────────────────────────────────────────
function Navbar({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(0);
  const [added, setAdded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg: Record<Page, string> = {
    home: "bg-[#9a2227]",
    shop: "bg-transparent",
    product: "bg-[#ede4da]",
    about: "bg-[#be683a]",
    article: "bg-[#296027]",
  };

  const textColor: Record<Page, string> = {
    home: "text-[#ede4da]",
    shop: "text-[#ede4da]",
    product: "text-[#141211]",
    about: "text-[#ede4da]",
    article: "text-[#ede4da]",
  };

  const shopBtnStyle: Record<Page, string> = {
    home: "bg-[#141211] text-[#ede4da]",
    shop: "border-2 border-[#ede4da] text-[#ede4da] bg-transparent",
    product: "bg-[#141211] text-[#ede4da]",
    about: "bg-[#141211] text-[#ede4da]",
    article: "bg-[#141211] text-[#ede4da]",
  };

  const isShop = page === "shop";
  const nav = isShop
    ? (isScrolled ? "bg-[#ede4da]/95 backdrop-blur-md shadow-sm" : "bg-transparent")
    : navBg[page];

  const tc = isShop
    ? (isScrolled ? "text-[#141211]" : "text-[#ede4da]")
    : textColor[page];

  const shopBtn = isShop
    ? (isScrolled ? "bg-[#141211] text-[#ede4da] border-transparent" : "border-2 border-[#ede4da] text-[#ede4da] bg-transparent")
    : shopBtnStyle[page];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${nav} transition-all duration-300`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => { setPage("home"); window.scrollTo(0, 0); }}
          className="flex items-center gap-3 group"
        >
          <img src={logoEmblem} alt="Storyboard" className="h-12 w-12 object-contain" />
          <span className={`font-['Inter',sans-serif] font-medium text-lg tracking-widest ${tc} transition-colors duration-300`}>
            STORYBOARD
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "CUSTOMIZE", page: "home" as Page },
            { label: "IDEAS", page: "article" as Page },
            { label: "ABOUT US", page: "about" as Page },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => { setPage(item.page); window.scrollTo(0, 0); }}
              className={`font-['Inter',sans-serif] font-medium text-base tracking-wide ${tc} opacity-90 hover:opacity-100 transition-all duration-300`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { setPage("shop"); window.scrollTo(0, 0); }}
            className={`font-['Inter',sans-serif] font-medium text-base px-6 py-2.5 rounded-lg transition-all duration-300 ${shopBtn} hover:opacity-90`}
          >
            SHOP
          </button>
          {cartCount > 0 && (
            <div className="relative">
              <ShoppingCart className={`w-6 h-6 ${tc} transition-colors duration-300`} />
              <span className="absolute -top-2 -right-2 bg-[#9a2227] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{cartCount}</span>
            </div>
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden ${tc} transition-colors duration-300`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#141211] px-6 py-6 flex flex-col gap-5">
          {[
            { label: "HOME", page: "home" as Page },
            { label: "SHOP", page: "shop" as Page },
            { label: "CUSTOMIZE", page: "home" as Page },
            { label: "IDEAS", page: "article" as Page },
            { label: "ABOUT US", page: "about" as Page },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => { setPage(item.page); setMenuOpen(false); window.scrollTo(0, 0); }}
              className="font-['Inter',sans-serif] font-medium text-lg text-[#ede4da] text-left"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

// ─── Shared: Footer ────────────────────────────────────────────────────────
function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer className="bg-[#141211] text-[#ede4da] pt-14 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <button onClick={() => { setPage("home"); window.scrollTo(0, 0); }} className="flex items-center gap-3 mb-4">
              <img src={logoEmblem} alt="Storyboard" className="h-10 w-10 object-contain" />
              <span className="font-['Inter',sans-serif] text-xl">STORYBOARD</span>
            </button>
            <p className="text-[#828282] text-sm font-['Inter',sans-serif] mb-4">storyboard.admin@gmail.com</p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <button key={i} className="w-9 h-9 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Icon className="w-5 h-5 text-[#828282]" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[#a42a31] font-['Inter',sans-serif] font-medium text-sm mb-4">MENU</p>
            {["Shop All", "Pots", "Tableware"].map((item) => (
              <button key={item} onClick={() => { setPage("shop"); window.scrollTo(0, 0); }} className="block text-[#828282] text-sm font-['Inter',sans-serif] mb-3 hover:text-[#ede4da] transition-colors">
                {item}
              </button>
            ))}
          </div>

          <div>
            <p className="text-[#a42a31] font-['Inter',sans-serif] font-medium text-sm mb-4">ABOUT US</p>
            {["Our Story", "Work With Us", "Contact Us"].map((item) => (
              <button key={item} onClick={() => { setPage("about"); window.scrollTo(0, 0); }} className="block text-[#828282] text-sm font-['Inter',sans-serif] mb-3 hover:text-[#ede4da] transition-colors">
                {item}
              </button>
            ))}
          </div>

          <div>
            <p className="text-[#a42a31] font-['Inter',sans-serif] font-medium text-sm mb-4">QUICK LINKS</p>
            {["Shipping & Returns", "FAQs", "Terms & Conditions"].map((item) => (
              <p key={item} className="text-[#828282] text-sm font-['Inter',sans-serif] mb-3">{item}</p>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-[#828282] text-sm font-['Inter',sans-serif]">
          © 2026 STORYBOARD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ─── Home Page ─────────────────────────────────────────────────────────────
function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div className="bg-[#ede4da]">
      {/* Hero */}
      <div className="relative h-screen min-h-[600px] overflow-hidden">
        <img src={heroImg} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex flex-col items-start justify-end pb-24 px-10 md:px-24">
          <h1 className="font-['Sansita',sans-serif] text-[#ede4da] text-7xl md:text-[110px] leading-none tracking-tight mb-4">
            StoryBoard
          </h1>
          <p className="font-['Roboto',sans-serif] font-medium text-[#9a2227] text-2xl md:text-3xl mb-10">
            Craftsmanship with a touch of personality...
          </p>
          <button
            onClick={() => { setPage("shop"); window.scrollTo(0, 0); }}
            className="bg-[#9a2227] text-[#ede4da] font-['Inter',sans-serif] font-medium text-xl px-10 py-5 rounded-lg hover:bg-[#7d1c20] transition-colors"
          >
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Section: Featured Collections */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20">
        <h2 className="font-['Inter',sans-serif] font-semibold text-4xl text-black mb-12 tracking-tight">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: landingCard1, title: "Terracotta Vases", desc: "Amphora-style statement pieces for any space" },
            { img: landingCard2, title: "Handcrafted Pots", desc: "Traditional forms with modern sensibility" },
            { img: landingCard3, title: "Tableware", desc: "Artisan pieces that bring warmth to the table" },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => { setPage("shop"); window.scrollTo(0, 0); }}
              className="group text-left"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-xl mb-5">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-['Inter',sans-serif] font-medium text-xl text-black mb-1">{item.title}</h3>
              <p className="font-['Inter',sans-serif] text-[#828282] text-base">{item.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Section: Dark feature */}
      <div className="bg-[#141211] py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <h2 className="font-['Inter',sans-serif] font-semibold text-[#ede4da] text-4xl mb-12 tracking-tight">
            Made in Rajasthan, India
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-10">
              {[
                { head: "Material Honesty", body: "We believe in the quiet power of traditional, contextual materials like terracotta, brass, and wood — consciously sourced and built to endure." },
                { head: "Generational Craft", body: "We honor ancestral expertise, treating our relationship with artisans as a true partnership of modern design and ancient skill." },
                { head: "Spatial Relevance", body: "We reject mass-produced uniformity to create versatile elements that bring depth and character to diverse architectural styles." },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-['Inter',sans-serif] font-medium text-[#9a2227] text-xl mb-2">{item.head}</h3>
                  <p className="font-['Inter',sans-serif] text-[#828282] text-base leading-relaxed">{item.body}</p>
                </div>
              ))}
              <div className="flex gap-4">
                <button onClick={() => { setPage("shop"); window.scrollTo(0, 0); }} className="bg-black border border-white/20 text-white font-['Inter',sans-serif] font-medium text-base px-7 py-3 rounded-lg hover:bg-white/10 transition-colors">
                  Shop Now
                </button>
                <button onClick={() => { setPage("about"); window.scrollTo(0, 0); }} className="bg-[#e6e6e6] text-black font-['Inter',sans-serif] font-medium text-base px-7 py-3 rounded-lg hover:bg-white transition-colors">
                  Our Story
                </button>
              </div>
            </div>
            <div className="relative">
              <img src={landingFeature} alt="Craftsmanship" className="w-full h-[500px] object-cover rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Section: More pieces */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20">
        <h2 className="font-['Inter',sans-serif] font-semibold text-4xl text-black mb-12 tracking-tight">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { img: landingCard4, title: "Sculptural Forms", desc: "Expressive pieces that serve as conversation starters" },
            { img: landingCard5, title: "Earthy Tones", desc: "A palette drawn from the soil — warm, grounded, alive" },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => { setPage("product"); window.scrollTo(0, 0); }}
              className="group text-left"
            >
              <div className="aspect-[3/2] overflow-hidden rounded-xl mb-5">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="font-['Inter',sans-serif] font-medium text-2xl text-black mb-1">{item.title}</h3>
              <p className="font-['Inter',sans-serif] text-[#828282] text-lg">{item.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Section: Testimonials */}
      <div className="bg-[#9a2227] py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <h2 className="font-['Inter',sans-serif] font-semibold text-[#ede4da] text-4xl mb-12 tracking-tight">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "A terrific piece of praise — these vases transformed our living room entirely.", avatar: avatar1, name: "Priya Sharma", role: "Interior Designer" },
              { quote: "A fantastic bit of feedback — the craftsmanship is unlike anything I've seen from a contemporary brand.", avatar: avatar2, name: "Rohan Mehta", role: "Architecture Studio" },
              { quote: "A genuinely glowing review — every piece feels like it has a soul. I keep coming back.", avatar: avatar3, name: "Kavya Nair", role: "Homeowner" },
            ].map((item, i) => (
              <div key={i} className="bg-[#f7f7f7] rounded-2xl p-8 flex flex-col justify-between gap-10">
                <p className="font-['Inter',sans-serif] font-medium text-xl text-black leading-relaxed">"{item.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-['Inter',sans-serif] font-medium text-base text-black">{item.name}</p>
                    <p className="font-['Inter',sans-serif] text-sm text-[#828282]">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA: Work with us */}
      <div className="bg-[#f7f7f7] py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-['Inter',sans-serif] font-semibold text-4xl text-black tracking-tight">
            Want to work with us?
          </h2>
          <div className="flex gap-4">
            <button onClick={() => { setPage("about"); window.scrollTo(0, 0); }} className="bg-black text-white font-['Inter',sans-serif] font-medium text-lg px-8 py-4 rounded-lg hover:bg-[#9a2227] transition-colors">
              Get in Touch
            </button>
            <button onClick={() => { setPage("about"); window.scrollTo(0, 0); }} className="bg-[#e6e6e6] text-black font-['Inter',sans-serif] font-medium text-lg px-8 py-4 rounded-lg hover:bg-[#d5d5d5] transition-colors">
              Our Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Shop Page ─────────────────────────────────────────────────────────────
function ShopPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div className="bg-[#ede4da]">
      {/* Hero */}
      <div className="relative h-[520px] overflow-hidden">
        <img src={shopHero} alt="Shop hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/38" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-['Inter',sans-serif] font-bold text-white text-5xl md:text-7xl tracking-tight mb-4">
            STORYBOARD
          </h1>
          <p className="font-['Inter',sans-serif] font-medium text-white/90 text-xl md:text-2xl mb-10">
            Handcrafted terracotta for soulful spaces
          </p>
          <button className="bg-black text-white font-['Inter',sans-serif] font-medium text-xl px-10 py-5 rounded-lg hover:bg-[#9a2227] transition-colors">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Collections */}
      <div className="bg-[#cf9088] py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="font-['Inter',sans-serif] font-semibold text-[#ede4da] text-4xl mb-4">Collection 1 — Vases</h2>
              <p className="font-['Inter',sans-serif] text-[#828282] text-lg mb-8">Amphora-style forms, matte finishes, bold presence</p>
              <div className="flex gap-4">
                <button onClick={() => { setPage("product"); window.scrollTo(0, 0); }} className="bg-black text-white font-['Inter',sans-serif] font-medium text-base px-6 py-3 rounded-lg hover:bg-[#9a2227] transition-colors">
                  Shop Vases
                </button>
                <button className="bg-[#e6e6e6] text-black font-['Inter',sans-serif] font-medium text-base px-6 py-3 rounded-lg hover:bg-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img src={shopCol1} alt="Collection 1" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 aspect-[4/3] overflow-hidden rounded-xl">
              <img src={shopCol2} alt="Collection 2" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-['Inter',sans-serif] font-semibold text-[#ede4da] text-4xl mb-4">Collection 2 — Tableware</h2>
              <p className="font-['Inter',sans-serif] text-[#141211] text-lg mb-8">Coming soon — artisan pieces for daily ritual</p>
              <div className="flex gap-4">
                <button className="bg-black text-white font-['Inter',sans-serif] font-medium text-base px-6 py-3 rounded-lg opacity-60 cursor-not-allowed">
                  Coming Soon
                </button>
                <button className="bg-[#e6e6e6] text-black font-['Inter',sans-serif] font-medium text-base px-6 py-3 rounded-lg hover:bg-white transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Best Sellers */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20">
        <h2 className="font-['Inter',sans-serif] font-semibold text-5xl text-black mb-12 tracking-tight">Best Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <button
            onClick={() => { setPage("product"); window.scrollTo(0, 0); }}
            className="group text-left md:col-span-2"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-xl mb-5">
              <img src={shopFeatured} alt="Featured product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <p className="font-['Inter',sans-serif] font-medium text-2xl text-black mb-1">Featured product — SAMA Vase</p>
            <p className="font-['Inter',sans-serif] text-[#828282] text-lg mb-1">Amphora-style terracotta in 9 colourways</p>
            <p className="font-['Inter',sans-serif] font-medium text-xl text-black">Rs. 2500</p>
          </button>

          <div className="flex flex-col gap-6">
            {[
              { img: shopProd1, name: "Terracotta Planter", price: "Rs. 1800" },
              { img: shopProd2, name: "Matte Pot", price: "Rs. 1400" },
            ].map((item, i) => (
              <button key={i} onClick={() => { setPage("product"); window.scrollTo(0, 0); }} className="group text-left">
                <div className="aspect-[4/3] overflow-hidden rounded-xl mb-3">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="font-['Inter',sans-serif] font-medium text-xl text-black mb-0.5">{item.name}</p>
                <p className="font-['Inter',sans-serif] font-medium text-lg text-black">{item.price}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Features strip */}
      <div className="bg-[#f4b14b] py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <h2 className="font-['Inter',sans-serif] font-semibold text-5xl text-black mb-12 tracking-tight">Why Storyboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { icon: "🌍", head: "Made in India", body: "Every piece is handcrafted by artisans in Rajasthan using generational techniques passed down over centuries." },
              { icon: "🔒", head: "Securely Shipped", body: "Careful packaging and insured delivery ensure your piece arrives in perfect condition, wherever you are." },
              { icon: "👤", head: "Made to Order", body: "Each vase is made to order — personalised colour, finish, and size to suit your exact space and taste." },
              { icon: "📅", head: "4–6 Week Turnaround", body: "From kiln to your doorstep in 4–6 weeks. Worth every day of the wait." },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <span className="text-3xl mt-1">{item.icon}</span>
                <div>
                  <h3 className="font-['Inter',sans-serif] font-medium text-2xl text-black mb-2">{item.head}</h3>
                  <p className="font-['Inter',sans-serif] text-[#828282] text-lg leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Product Detail Page ───────────────────────────────────────────────────
function ProductPage({ setPage }: { setPage: (p: Page) => void }) {
  const [activeImg, setActiveImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Yellow");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<"details" | "care" | "shipping">("details");

  const images = [
    { src: prodFront, label: "Front" },
    { src: prodAngled, label: "Angled" },
    { src: prodTop, label: "Top" },
    { src: prodSide, label: "Side" },
    { src: prodLifestyle1, label: "Lifestyle" },
    { src: prodLifestyle2, label: "Styled" },
  ];

  const colors: { name: string; hex: string }[] = [
    { name: "Maroon", hex: "#6B2737" },
    { name: "Mauve", hex: "#C4A0B0" },
    { name: "Fern Green", hex: "#4F7942" },
    { name: "Midnight Blue", hex: "#1B2A4A" },
    { name: "Deep Copper", hex: "#B87333" },
    { name: "Noir", hex: "#1a1a1a" },
    { name: "Dusty Rose", hex: "#C99A8E" },
    { name: "Yellow", hex: "#F4B14B" },
    { name: "Off-White", hex: "#F0EBE0" },
  ];

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const relatedProducts = [
    { img: relProd1, name: "Terracotta Pot", price: "Rs. 1800" },
    { img: relProd2, name: "Matte Planter", price: "Rs. 1400" },
    { img: relProd3, name: "Studio Vessel", price: "Rs. 2200" },
  ];

  return (
    <div className="bg-[#ede4da]">
      {/* Product section */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
              <img
                src={images[activeImg].src}
                alt={images[activeImg].label}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <button
                onClick={() => setActiveImg((activeImg - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveImg((activeImg + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${activeImg === i ? "border-[#9a2227]" : "border-transparent"}`}
                >
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-['Lancelot',serif] text-[#9a2227] text-6xl leading-tight mb-2">SAMA</p>
              <h1 className="font-['Roboto',sans-serif] font-medium text-3xl text-[#e7d0d0] mb-1">Terracotta Vase</h1>
              <p className="font-['Inter',sans-serif] font-medium text-3xl text-black">Rs. 2,500</p>
            </div>

            <p className="font-['Cantarell',sans-serif] text-white/90 text-lg leading-relaxed bg-[#143565] p-5 rounded-xl">
              A sculptural amphora-style vase with a pedestal base and tall neck, accented by two curved handles. Finished in a warm matte glaze — a bold statement piece for any space.
            </p>

            {/* Color selection */}
            <div>
              <p className="font-['Inter',sans-serif] font-medium text-base text-black mb-3">
                Colour: <span className="text-[#9a2227]">{selectedColor}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    title={c.name}
                    className={`w-8 h-8 rounded-full border-2 transition-transform ${selectedColor === c.name ? "border-[#9a2227] scale-110" : "border-white/60"}`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-3 text-sm font-['Inter',sans-serif]">
              <div className="bg-white/50 rounded-lg px-4 py-3">
                <p className="text-[#828282] text-xs mb-0.5">Material</p>
                <p className="font-medium text-black">Terracotta</p>
              </div>
              <div className="bg-white/50 rounded-lg px-4 py-3">
                <p className="text-[#828282] text-xs mb-0.5">Size</p>
                <p className="font-medium text-black">8 × 8 × 12 in</p>
              </div>
              <div className="bg-white/50 rounded-lg px-4 py-3">
                <p className="text-[#828282] text-xs mb-0.5">Origin</p>
                <p className="font-medium text-black">Rajasthan, India</p>
              </div>
              <div className="bg-white/50 rounded-lg px-4 py-3">
                <p className="text-[#828282] text-xs mb-0.5">Quantity</p>
                <p className="font-medium text-black">1 vase</p>
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex gap-4 items-center">
              <div className="flex items-center border border-black/20 rounded-lg overflow-hidden">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3 text-lg font-medium hover:bg-black/5 transition-colors">−</button>
                <span className="px-5 py-3 font-['Inter',sans-serif] font-medium text-base text-black min-w-[48px] text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-3 text-lg font-medium hover:bg-black/5 transition-colors">+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 rounded-lg font-['Roboto',sans-serif] text-xl transition-all flex items-center justify-center gap-3 ${
                  added ? "bg-[#4F7942] text-white" : "bg-[#141211] text-white hover:bg-[#9a2227]"
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added to Cart
                  </>
                ) : (
                  "Add to cart"
                )}
              </button>
            </div>

            {/* Tabs */}
            <div className="border-t border-black/10 pt-6">
              <div className="flex gap-6 mb-5 border-b border-black/10 pb-3">
                {(["details", "care", "shipping"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`font-['Inter',sans-serif] font-medium text-sm capitalize pb-1 border-b-2 transition-colors ${activeTab === tab ? "border-[#9a2227] text-[#9a2227]" : "border-transparent text-[#828282] hover:text-black"}`}
                  >
                    {tab === "details" ? "Product Details" : tab === "care" ? "Care Instructions" : "Shipping & Returns"}
                  </button>
                ))}
              </div>
              <div className="font-['Cantarell',sans-serif] text-black/80 text-base leading-relaxed">
                {activeTab === "details" && (
                  <div>
                    <p>Net Quantity: 1 vase</p>
                    <p>Materials: Terracotta, Paint</p>
                    <p>Makers: Artisans of Rajasthan</p>
                    <p>Made in: Rajasthan, India</p>
                    <p className="mt-2">Each piece is handmade and may carry natural variations in texture and tone — a mark of its authentic craft origins.</p>
                  </div>
                )}
                {activeTab === "care" && (
                  <div>
                    <p>• Wipe with a soft, dry cloth.</p>
                    <p>• Avoid prolonged exposure to water or moisture.</p>
                    <p>• Do not place in dishwasher.</p>
                    <p>• Keep away from direct sunlight for extended periods.</p>
                    <p className="mt-2">The natural terracotta finish may develop a patina over time — this is a beautiful sign of a living material.</p>
                  </div>
                )}
                {activeTab === "shipping" && (
                  <div>
                    <p>• Each piece is made to order. Allow 4–6 weeks for production.</p>
                    <p>• Shipping within India: 5–7 business days post-production.</p>
                    <p>• International shipping available on request.</p>
                    <p>• All pieces are carefully packed with protective materials.</p>
                    <p className="mt-2">Returns accepted within 7 days of delivery for damaged goods only. Each piece is unique — variations are not defects.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lifestyle imagery */}
      <div className="bg-[#143565] py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <h2 className="font-['Inter',sans-serif] font-semibold text-[#ede4da] text-3xl mb-10">In the Space</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img src={prodInstagram} alt="In situ" className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[prodLifestyle1, prodLifestyle2, prodAngled, prodTop].map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-xl">
                  <img src={src} alt="Detail" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-20">
        <h2 className="font-['Inter',sans-serif] font-semibold text-3xl text-black mb-10">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProducts.map((item, i) => (
            <button key={i} className="group text-left bg-white rounded-2xl p-4 hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden rounded-xl mb-4">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="font-['Inter',sans-serif] font-medium text-xl text-black mb-1">{item.name}</p>
              <p className="font-['Inter',sans-serif] font-medium text-lg text-black">{item.price}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── About Page ────────────────────────────────────────────────────────────
function AboutPage() {
  const [form, setForm] = useState({ first: "", last: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ first: "", last: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="bg-[#ede4da]">
      {/* Hero */}
      <div className="bg-[#be683a] pt-28 pb-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-['Inter',sans-serif] font-bold text-black text-6xl md:text-7xl tracking-tight mb-6">
                About Us
              </h1>
              <p className="font-['Roboto',sans-serif] text-[#ede4da] text-3xl mb-8">Our Story</p>
              <div className="font-['Inter',sans-serif] font-medium text-lg text-black leading-relaxed space-y-4">
                <p>After fifteen years of practicing interior design, we repeatedly hit the same frustration — a major lack of soulful, versatile elements to complete our projects.</p>
                <p>In an era of mass production where everything looked identical, we craved elements with a rooted, living presence that could adapt across diverse aesthetics.</p>
                <p>Driven by a deep respect for craftsmanship, we took it upon ourselves to step into the gap.</p>
                <p>Every piece we create is a direct collaboration between thoughtful design and craft expertise honed over generations.</p>
              </div>
            </div>
            <div className="relative">
              <img src={aboutImg} alt="About Storyboard" className="w-full h-[480px] object-cover rounded-2xl shadow-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Our Focus */}
      <div className="bg-[#ede4da] py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <p className="font-['Roboto',sans-serif] text-[#be683a] text-3xl mb-12">Our Focus</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                head: "Material Honesty & Sustainability",
                body: "We believe in the quiet power of traditional, contextual materials like terracotta, brass, and wood, consciously sourced and built to endure.",
              },
              {
                head: "Generational Craft",
                body: "We honor ancestral expertise, treating our relationship with traditional artisans as a true partnership of modern design and ancient skill.",
              },
              {
                head: "Spatial Relevance",
                body: "We reject mass-produced uniformity to create versatile elements that bring depth and distinct character to diverse architectural styles.",
              },
              {
                head: "Uncompromised Authenticity",
                body: "We protect the human element in design, ensuring every object carries the distinct, artistic soul of the hands that shaped it.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-1.5 bg-[#be683a] rounded-full flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-['Roboto',sans-serif] font-medium text-[#be683a] text-2xl mb-3">{item.head}</h3>
                  <p className="font-['Inter',sans-serif] font-medium text-xl text-black leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-[#be683a] py-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <h2 className="font-['Inter',sans-serif] font-semibold text-3xl text-black mb-10">Contact Us</h2>
          {submitted ? (
            <div className="bg-white rounded-2xl p-12 text-center max-w-lg mx-auto">
              <div className="w-16 h-16 bg-[#4F7942] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Inter',sans-serif] font-semibold text-2xl text-black mb-3">Message Sent!</h3>
              <p className="font-['Inter',sans-serif] text-[#828282] text-lg">We'll be in touch within 2–3 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl">
              <div className="grid grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block font-['Inter',sans-serif] font-medium text-sm text-black mb-2">First name</label>
                  <input
                    value={form.first}
                    onChange={(e) => setForm({ ...form, first: e.target.value })}
                    placeholder="Jane"
                    required
                    className="w-full bg-white border border-[#e0e0e0] rounded-lg px-4 py-3 font-['Inter',sans-serif] text-base focus:outline-none focus:ring-2 focus:ring-[#9a2227]"
                  />
                </div>
                <div>
                  <label className="block font-['Inter',sans-serif] font-medium text-sm text-black mb-2">Last name</label>
                  <input
                    value={form.last}
                    onChange={(e) => setForm({ ...form, last: e.target.value })}
                    placeholder="Smith"
                    required
                    className="w-full bg-white border border-[#e0e0e0] rounded-lg px-4 py-3 font-['Inter',sans-serif] text-base focus:outline-none focus:ring-2 focus:ring-[#9a2227]"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label className="block font-['Inter',sans-serif] font-medium text-sm text-black mb-2">Email address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="email@domain.com"
                  required
                  className="w-full bg-white border border-[#e0e0e0] rounded-lg px-4 py-3 font-['Inter',sans-serif] text-base focus:outline-none focus:ring-2 focus:ring-[#9a2227]"
                />
              </div>
              <div className="mb-6">
                <label className="block font-['Inter',sans-serif] font-medium text-sm text-black mb-2">Your message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Enter your question or message"
                  required
                  rows={5}
                  className="w-full bg-white border border-[#e0e0e0] rounded-lg px-4 py-3 font-['Inter',sans-serif] text-base focus:outline-none focus:ring-2 focus:ring-[#9a2227] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white font-['Inter',sans-serif] font-medium text-lg py-4 rounded-lg hover:bg-[#9a2227] transition-colors"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Article Page ──────────────────────────────────────────────────────────
function ArticlePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div className="bg-[#ede4da]">
      {/* Nav colour strip */}
      <div className="bg-[#296027] h-20" />

      {/* Article Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-12 pb-8">
        <div className="max-w-[800px]">
          <h1 className="font-['Inter',sans-serif] font-bold text-black text-5xl md:text-6xl tracking-tight mb-5">
            The Living Material: Terracotta and Its Place in Modern Spaces
          </h1>
          <p className="font-['Inter',sans-serif] text-black/75 text-2xl leading-relaxed">
            How an ancient craft language is finding its way back into our homes — and why that matters
          </p>
          <p className="font-['Inter',sans-serif] text-[#828282] text-sm mt-4">By Storyboard Studio · June 2026</p>
        </div>
      </div>

      {/* Hero image */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 mb-12">
        <div className="w-full h-[520px] overflow-hidden rounded-2xl">
          <img src={articleHero} alt="Article hero" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[800px] mx-auto px-6 md:px-10 pb-16">
        <div className="font-['Inter',sans-serif] font-medium text-xl text-black leading-relaxed space-y-6">
          <p>
            Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:
          </p>
          <p>
            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure.
          </p>
          <p>
            Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
          </p>
          <p>
            Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.
          </p>
        </div>
      </div>

      {/* Inline images */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <img src={articleImg1} alt="Article image" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl">
            <img src={articleImg2} alt="Article image 2" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Second body section */}
      <div className="max-w-[800px] mx-auto px-6 md:px-10 pb-20">
        <div className="font-['Inter',sans-serif] font-medium text-xl text-black leading-relaxed space-y-6">
          <p>
            Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gauche. Espresso exquisite perfect nostrud nisi intricate. Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure.
          </p>
          <p>
            Exclusive izakaya charming Quezon City impeccable aute quality of life soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus rock opera.
          </p>
          <p>
            Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute wifey id. Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.
          </p>
        </div>
      </div>

      {/* Related articles */}
      <div className="bg-[#296027] py-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <h2 className="font-['Inter',sans-serif] font-semibold text-[#ede4da] text-4xl mb-10">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: articleRelated1, title: "The Artisans of Rajasthan", author: "Storyboard Studio" },
              { img: articleRelated2, title: "Colour as Language in Space", author: "Storyboard Studio" },
              { img: articleRelated3, title: "Handmade in a Machine Age", author: "Storyboard Studio" },
            ].map((item, i) => (
              <button key={i} className="group text-left">
                <div className="aspect-square overflow-hidden rounded-xl mb-4">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-['Inter',sans-serif] font-medium text-xl text-[#ede4da] mb-1">{item.title}</h3>
                <p className="font-['Inter',sans-serif] text-[#ede4da]/60 text-base">{item.author}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar page={page} setPage={setPage} />
      <main className="flex-1">
        {page === "home" && <HomePage setPage={setPage} />}
        {page === "shop" && <ShopPage setPage={setPage} />}
        {page === "product" && <ProductPage setPage={setPage} />}
        {page === "about" && <AboutPage />}
        {page === "article" && <ArticlePage setPage={setPage} />}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
}
