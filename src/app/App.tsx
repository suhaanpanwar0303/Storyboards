import { useState, useEffect } from "react";
import {
  ShoppingCart, Menu, X, ArrowRight, ChevronLeft, ChevronRight, Instagram, Facebook, Twitter, Youtube, Check,
  Trash2, Plus, Minus, ShieldCheck, Truck, Lock, CreditCard, ArrowLeft, Sparkles, ShoppingBag, CheckCircle2
} from "lucide-react";

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
type Page = "home" | "shop" | "product" | "about" | "article" | "cart" | "checkout" | "catalogue";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  color?: string;
  img: string;
  quantity: number;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: "vases" | "planters" | "pots" | "tableware";
  price: number;
  formattedPrice: string;
  description: string;
  material: string;
  dimensions: string;
  origin: string;
  quantityInfo: string;
  primaryImg: string;
  gallery: { src: string; label: string }[];
  colors: { name: string; hex: string }[];
}

export const PRODUCTS: Product[] = [
  {
    id: "sama-vase",
    name: "SAMA Terracotta Vase",
    subtitle: "Amphora-style statement vase with pedestal base",
    category: "vases",
    price: 2500,
    formattedPrice: "Rs. 2,500",
    description: "A sculptural amphora-style vase with a pedestal base and tall neck, accented by two curved handles. Finished in a warm matte glaze — a bold statement piece for any space.",
    material: "Natural Terracotta",
    dimensions: "8 × 8 × 12 in",
    origin: "Rajasthan, India",
    quantityInfo: "1 handcrafted vase",
    primaryImg: prodFront,
    gallery: [
      { src: prodFront, label: "Front View" },
      { src: prodAngled, label: "Angled" },
      { src: prodTop, label: "Top Detail" },
      { src: prodSide, label: "Side Profile" },
      { src: prodLifestyle1, label: "In Living Room" },
      { src: prodLifestyle2, label: "Styled Tabletop" },
    ],
    colors: [
      { name: "Maroon", hex: "#6B2737" },
      { name: "Mauve", hex: "#C4A0B0" },
      { name: "Fern Green", hex: "#4F7942" },
      { name: "Midnight Blue", hex: "#1B2A4A" },
      { name: "Deep Copper", hex: "#B87333" },
      { name: "Noir", hex: "#1a1a1a" },
      { name: "Dusty Rose", hex: "#C99A8E" },
      { name: "Yellow", hex: "#F4B14B" },
      { name: "Off-White", hex: "#F0EBE0" },
    ],
  },
  {
    id: "terracotta-planter",
    name: "Terracotta Planter",
    subtitle: "Breathable natural earthenware for indoor plants",
    category: "planters",
    price: 1800,
    formattedPrice: "Rs. 1,800",
    description: "Hand-turned terracotta planter designed with optimal root aeration and natural clay porosity. Ideal for monstera, ficus, or statement indoor greenery.",
    material: "Porous Earthenware",
    dimensions: "10 × 10 × 10 in",
    origin: "Rajasthan, India",
    quantityInfo: "1 planter with drainage tray",
    primaryImg: shopProd1,
    gallery: [
      { src: shopProd1, label: "Front View" },
      { src: relProd1, label: "Side Angle" },
      { src: landingCard1, label: "Plant Styling" },
      { src: shopFeatured, label: "Studio Display" },
    ],
    colors: [
      { name: "Natural Terracotta", hex: "#BE683A" },
      { name: "Matte Charcoal", hex: "#2B2B2B" },
      { name: "Sunbaked Clay", hex: "#D68C5E" },
      { name: "Forest Moss", hex: "#3A5335" },
    ],
  },
  {
    id: "matte-pot",
    name: "Matte Pot Vessel",
    subtitle: "Minimalist low-profile pot with silky matte finish",
    category: "pots",
    price: 1400,
    formattedPrice: "Rs. 1,400",
    description: "A compact grounded pot featuring soft organic curves and a velvety tactile glaze. Fits seamlessly on bookshelves, sideboards, or dining tables.",
    material: "High-Fired Clay",
    dimensions: "7 × 7 × 6 in",
    origin: "Rajasthan, India",
    quantityInfo: "1 matte pot",
    primaryImg: shopProd2,
    gallery: [
      { src: shopProd2, label: "Front View" },
      { src: relProd2, label: "Angled View" },
      { src: landingCard2, label: "Lifestyle Placement" },
    ],
    colors: [
      { name: "Sandstone", hex: "#D9C3B0" },
      { name: "Earthy Terracotta", hex: "#9A2227" },
      { name: "Olive Tint", hex: "#5C6B55" },
      { name: "Chalk White", hex: "#F5F2EC" },
    ],
  },
  {
    id: "studio-vessel",
    name: "Studio Vessel",
    subtitle: "Artisan textured urn inspired by heritage pottery",
    category: "vases",
    price: 2200,
    formattedPrice: "Rs. 2,200",
    description: "An expressive wide-rimmed studio vessel with subtle horizontal ribbing hand-carved by master potters. Brings rich tactile depth to modern interiors.",
    material: "Textured Red Clay",
    dimensions: "9 × 9 × 11 in",
    origin: "Rajasthan, India",
    quantityInfo: "1 studio vessel",
    primaryImg: relProd3,
    gallery: [
      { src: relProd3, label: "Studio View" },
      { src: landingCard4, label: "Artistic Close-up" },
      { src: shopCol1, label: "Collection Context" },
    ],
    colors: [
      { name: "Rustic Amber", hex: "#C87D46" },
      { name: "Raw Umber", hex: "#4A3525" },
      { name: "Soft Clay", hex: "#E0B094" },
    ],
  },
  {
    id: "artisan-tableware",
    name: "Artisan Tableware Set",
    subtitle: "Hand-thrown 4-piece ceramic & terracotta set",
    category: "tableware",
    price: 3200,
    formattedPrice: "Rs. 3,200",
    description: "A thoughtful set for daily dining rituals, comprising 2 serving plates, 1 bowl, and 1 water tumbler. Food-safe, durable, and dishwasher-friendly.",
    material: "Glazed Clay & Stoneware",
    dimensions: "Varied (Plates 10in, Bowl 6in)",
    origin: "Rajasthan, India",
    quantityInfo: "Set of 4 pieces",
    primaryImg: shopCol2,
    gallery: [
      { src: shopCol2, label: "Full Set View" },
      { src: landingCard3, label: "Dining Setup" },
      { src: articleImg2, label: "Crafting Process" },
    ],
    colors: [
      { name: "Warm Terracotta", hex: "#9A2227" },
      { name: "Oatmeal Beige", hex: "#EDE4DA" },
      { name: "Sage Green", hex: "#6A7B66" },
    ],
  },
];

// ─── Shared: Navbar ────────────────────────────────────────────────────────
function Navbar({
  page,
  setPage,
  cartCount,
  goBack,
  canGoBack,
}: {
  page: Page;
  setPage: (p: Page) => void;
  cartCount: number;
  goBack: () => void;
  canGoBack: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
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
    cart: "bg-[#ede4da]",
    checkout: "bg-[#ede4da]",
    catalogue: "bg-[#ede4da]",
  };

  const textColor: Record<Page, string> = {
    home: "text-[#ede4da]",
    shop: "text-[#ede4da]",
    product: "text-[#141211]",
    about: "text-[#ede4da]",
    article: "text-[#ede4da]",
    cart: "text-[#141211]",
    checkout: "text-[#141211]",
    catalogue: "text-[#141211]",
  };

  const shopBtnStyle: Record<Page, string> = {
    home: "bg-[#141211] text-[#ede4da]",
    shop: "border-2 border-[#ede4da] text-[#ede4da] bg-transparent",
    product: "bg-[#141211] text-[#ede4da]",
    about: "bg-[#141211] text-[#ede4da]",
    article: "bg-[#141211] text-[#ede4da]",
    cart: "bg-[#141211] text-[#ede4da]",
    checkout: "bg-[#141211] text-[#ede4da]",
    catalogue: "bg-[#141211] text-[#ede4da]",
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
        {/* Logo & Back button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => { setPage("home"); window.scrollTo(0, 0); }}
            className="flex items-center gap-3 group"
          >
            <img src={logoEmblem} alt="Storyboard" className="h-12 w-12 object-contain" />
            <span className={`font-['Inter',sans-serif] font-medium text-lg tracking-widest ${tc} transition-colors duration-300`}>
              STORYBOARD
            </span>
          </button>

          {canGoBack && (
            <button
              onClick={goBack}
              className={`flex items-center gap-1.5 font-['Inter',sans-serif] font-medium text-xs tracking-wider uppercase border border-current/30 px-3 py-1.5 rounded-full ${tc} hover:bg-black/5 transition-all`}
              title="Go back to previous page"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Back</span>
            </button>
          )}
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "CATALOGUE", page: "catalogue" as Page },
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
          
          {/* Shopping Cart Icon Button */}
          <button
            onClick={() => { setPage("cart"); window.scrollTo(0, 0); }}
            className="relative p-2 rounded-full hover:bg-black/5 transition-colors focus:outline-none"
            title="View Bag"
          >
            <ShoppingCart className={`w-6 h-6 ${tc} transition-colors duration-300`} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#9a2227] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </button>
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <h2 className="font-['Inter',sans-serif] font-semibold text-4xl sm:text-5xl text-black tracking-tight">
              Why Storyboard
            </h2>
            <button
              onClick={() => { setPage("catalogue"); window.scrollTo(0, 0); }}
              className="bg-[#141211] hover:bg-[#9a2227] text-[#ede4da] font-['Inter',sans-serif] font-medium text-base px-6 py-3 rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <span>Explore Full Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

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
function ProductPage({
  productId,
  setPage,
  setSelectedProductId,
  onAddToCart,
  goBack,
}: {
  productId: string;
  setPage: (p: Page) => void;
  setSelectedProductId: (id: string) => void;
  onAddToCart: (item: CartItem) => void;
  goBack: () => void;
}) {
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const [activeImg, setActiveImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "Natural");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<"details" | "care" | "shipping">("details");

  useEffect(() => {
    setActiveImg(0);
    if (product.colors[0]) {
      setSelectedColor(product.colors[0].name);
    }
  }, [productId]);

  const handleAddToCart = () => {
    onAddToCart({
      id: `${product.id}-${selectedColor.toLowerCase().replace(/\s+/g, "-")}`,
      name: product.name,
      price: product.price,
      formattedPrice: product.formattedPrice,
      color: selectedColor,
      img: product.primaryImg,
      quantity: qty,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setPage("cart");
    window.scrollTo(0, 0);
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-[#ede4da]">
      {/* Product section */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-28 pb-20">
        {/* Back link */}
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-[#9a2227] font-['Inter',sans-serif] text-xs font-semibold tracking-wider uppercase mb-8 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Previous Page
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-sm">
              <img
                src={product.gallery[activeImg]?.src || product.primaryImg}
                alt={product.gallery[activeImg]?.label || product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              {product.gallery.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImg((activeImg - 1 + product.gallery.length) % product.gallery.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveImg((activeImg + 1) % product.gallery.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
            {product.gallery.length > 1 && (
              <div className="grid grid-cols-6 gap-2">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${activeImg === i ? "border-[#9a2227]" : "border-transparent"}`}
                  >
                    <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-['Lancelot',serif] text-[#9a2227] text-6xl leading-tight mb-2">STORYBOARD</p>
              <h1 className="font-['Roboto',sans-serif] font-bold text-4xl text-[#141211] mb-2">{product.name}</h1>
              <p className="font-['Inter',sans-serif] font-semibold text-3xl text-[#9a2227]">{product.formattedPrice}</p>
            </div>

            <p className="font-['Inter',sans-serif] text-[#141211]/90 text-lg leading-relaxed bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/60">
              {product.description}
            </p>

            {/* Color selection */}
            <div>
              <p className="font-['Inter',sans-serif] font-medium text-base text-[#141211] mb-3">
                Colour Finish: <span className="text-[#9a2227] font-semibold">{selectedColor}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    title={c.name}
                    className={`w-9 h-9 rounded-full border-2 transition-all ${selectedColor === c.name ? "border-[#9a2227] scale-110 shadow-sm" : "border-white/80"}`}
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex gap-4 items-center pt-2">
              <div className="flex items-center border border-black/20 rounded-xl overflow-hidden bg-white">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3 text-lg font-medium hover:bg-black/5 transition-colors">−</button>
                <span className="px-5 py-3 font-['Inter',sans-serif] font-semibold text-base text-[#141211] min-w-[48px] text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-3 text-lg font-medium hover:bg-black/5 transition-colors">+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 rounded-xl font-['Roboto',sans-serif] text-lg font-medium transition-all flex items-center justify-center gap-3 shadow-md ${
                  added ? "bg-[#4F7942] text-white" : "bg-[#141211] text-white hover:bg-[#9a2227]"
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" />
                    Added to Bag
                  </>
                ) : (
                  "Add to Bag"
                )}
              </button>
              <button
                onClick={handleBuyNow}
                className="py-4 px-6 rounded-xl font-['Roboto',sans-serif] text-lg font-medium bg-[#9a2227] text-white hover:bg-[#7d1c20] transition-colors shadow-md"
              >
                Buy Now
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
              <div className="font-['Inter',sans-serif] text-[#141211]/80 text-sm leading-relaxed">
                {activeTab === "details" && (
                  <div className="space-y-1">
                    <p>• Net Quantity: {product.quantityInfo}</p>
                    <p>• Material: {product.material}</p>
                    <p>• Makers: Artisans of Rajasthan</p>
                    <p>• Made in: {product.origin}</p>
                    <p className="mt-2 text-xs text-[#828282]">Each piece is handmade and may carry natural variations in texture and tone — a mark of its authentic craft origins.</p>
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

// ─── Cart Page ──────────────────────────────────────────────────────────────
function CartPage({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  setPage,
}: {
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  setPage: (p: Page) => void;
}) {
  const [promoCode, setPromoCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState("");

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = subtotal > 0 ? (subtotal >= 3000 ? 0 : 250) : 0;
  const discountAmount = Math.round((subtotal * appliedDiscount) / 100);
  const total = Math.max(0, subtotal - discountAmount + shippingCost);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError("");
    setPromoSuccess("");
    const code = promoCode.trim().toUpperCase();
    if (code === "STORYBOARD10" || code === "WELCOME10") {
      setAppliedDiscount(10);
      setPromoSuccess("10% discount applied!");
    } else if (code === "CRAFT20") {
      setAppliedDiscount(20);
      setPromoSuccess("20% artisan discount applied!");
    } else {
      setPromoError("Invalid promo code. Try STORYBOARD10");
    }
  };

  return (
    <div className="bg-[#ede4da] min-h-screen pt-28 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Header Breadcrumb */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10">
          <div>
            <span className="text-[#9a2227] font-['Inter',sans-serif] text-xs font-semibold tracking-wider uppercase">
              Shopping Experience
            </span>
            <h1 className="font-['Inter',sans-serif] font-bold text-4xl md:text-5xl text-[#141211] tracking-tight mt-1">
              Your Bag
            </h1>
          </div>
          <button
            onClick={() => { setPage("shop"); window.scrollTo(0, 0); }}
            className="flex items-center gap-2 font-['Inter',sans-serif] font-medium text-sm text-[#141211] hover:text-[#9a2227] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Continue Shopping
          </button>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-12 text-center max-w-xl mx-auto my-12 border border-white/50 shadow-sm">
            <div className="w-20 h-20 bg-[#9a2227]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-[#9a2227]" />
            </div>
            <h2 className="font-['Inter',sans-serif] font-semibold text-2xl text-[#141211] mb-2">
              Your bag is currently empty
            </h2>
            <p className="font-['Inter',sans-serif] text-[#828282] text-base mb-8">
              Explore our handcrafted terracotta collections to find the perfect piece for your space.
            </p>
            <button
              onClick={() => { setPage("shop"); window.scrollTo(0, 0); }}
              className="bg-[#141211] hover:bg-[#9a2227] text-[#ede4da] font-['Inter',sans-serif] font-medium text-lg px-8 py-4 rounded-xl transition-all shadow-md"
            >
              Explore Collections
            </button>
          </div>
        ) : (
          /* Main Cart Content */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Left: Items List (2 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/50 shadow-sm flex flex-col gap-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-black/10 last:border-b-0 last:pb-0"
                  >
                    {/* Item info */}
                    <div className="flex items-center gap-5">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-[#ede4da] flex-shrink-0">
                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-['Inter',sans-serif] font-semibold text-lg sm:text-xl text-[#141211] mb-1">
                          {item.name}
                        </h3>
                        {item.color && (
                          <p className="font-['Inter',sans-serif] text-xs text-[#828282] mb-2">
                            Finish: <span className="text-[#9a2227] font-medium">{item.color}</span>
                          </p>
                        )}
                        <p className="font-['Inter',sans-serif] font-semibold text-lg text-[#141211]">
                          Rs. {item.price.toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>

                    {/* Quantity and Actions */}
                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
                      <div className="flex items-center border border-black/20 rounded-lg overflow-hidden bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="px-3 py-1.5 text-base font-semibold hover:bg-black/5 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5 text-[#141211]" />
                        </button>
                        <span className="px-4 py-1.5 font-['Inter',sans-serif] font-medium text-sm text-[#141211] min-w-[36px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="px-3 py-1.5 text-base font-semibold hover:bg-black/5 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5 text-[#141211]" />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="font-['Inter',sans-serif] font-semibold text-lg text-[#141211]">
                          Rs. {(item.price * item.quantity).toLocaleString("en-IN")}
                        </p>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-2 text-[#828282] hover:text-[#9a2227] transition-colors rounded-lg hover:bg-red-50"
                        title="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Artisan guarantee banner */}
              <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-white/40 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#9a2227]/10 flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-[#9a2227]" />
                  </div>
                  <div>
                    <h4 className="font-['Inter',sans-serif] font-medium text-sm text-[#141211]">Free Express Delivery</h4>
                    <p className="font-['Inter',sans-serif] text-xs text-[#828282]">On orders over Rs. 3,000</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#9a2227]/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#9a2227]" />
                  </div>
                  <div>
                    <h4 className="font-['Inter',sans-serif] font-medium text-sm text-[#141211]">Artisan Guarantee</h4>
                    <p className="font-['Inter',sans-serif] text-xs text-[#828282]">100% handcrafted in Rajasthan</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#9a2227]/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-[#9a2227]" />
                  </div>
                  <div>
                    <h4 className="font-['Inter',sans-serif] font-medium text-sm text-[#141211]">Secure Payment</h4>
                    <p className="font-['Inter',sans-serif] text-xs text-[#828282]">256-bit SSL encrypted</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Summary Card (1 col) */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/60 shadow-md sticky top-28 flex flex-col gap-6">
              <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-[#141211] pb-4 border-b border-black/10">
                Order Summary
              </h2>

              {/* Promo code form */}
              <form onSubmit={handleApplyPromo} className="flex flex-col gap-2">
                <label className="font-['Inter',sans-serif] font-medium text-xs text-[#828282] uppercase tracking-wider">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Try STORYBOARD10"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-lg border border-black/20 bg-white text-sm font-['Inter',sans-serif] text-[#141211] focus:outline-none focus:border-[#9a2227]"
                  />
                  <button
                    type="submit"
                    className="bg-[#141211] hover:bg-[#9a2227] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoError && <p className="text-xs text-red-600 font-['Inter',sans-serif] mt-1">{promoError}</p>}
                {promoSuccess && <p className="text-xs text-green-700 font-medium font-['Inter',sans-serif] mt-1">{promoSuccess}</p>}
              </form>

              {/* Calculations */}
              <div className="flex flex-col gap-3 text-sm font-['Inter',sans-serif] py-4 border-y border-black/10">
                <div className="flex justify-between text-[#141211]">
                  <span>Subtotal</span>
                  <span className="font-medium">Rs. {subtotal.toLocaleString("en-IN")}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-[#9a2227]">
                    <span>Discount ({appliedDiscount}%)</span>
                    <span className="font-medium">- Rs. {discountAmount.toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#141211]">
                  <span>Estimated Shipping</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? <span className="text-green-700">FREE</span> : `Rs. ${shippingCost}`}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-baseline font-['Inter',sans-serif]">
                <span className="font-bold text-xl text-[#141211]">Total</span>
                <span className="font-bold text-2xl text-[#141211]">
                  Rs. {total.toLocaleString("en-IN")}
                </span>
              </div>

              <button
                onClick={() => { setPage("checkout"); window.scrollTo(0, 0); }}
                className="w-full bg-[#141211] hover:bg-[#9a2227] text-[#ede4da] font-['Inter',sans-serif] font-medium text-lg py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-3 group"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Checkout Page ──────────────────────────────────────────────────────────
function CheckoutPage({
  cartItems,
  onClearCart,
  setPage,
}: {
  cartItems: CartItem[];
  onClearCart: () => void;
  setPage: (p: Page) => void;
}) {
  const [isOrdered, setIsOrdered] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi" | "cod">("upi");
  const [formData, setFormData] = useState({
    firstName: "Priya",
    lastName: "Sharma",
    email: "priya.sharma@example.com",
    phone: "+91 98765 43210",
    address: "42 Heritage Enclave, Civil Lines",
    city: "Jaipur",
    state: "Rajasthan",
    pincode: "302006",
    upiId: "priya@upi",
    cardNumber: "4532 •••• •••• 8924",
    cardExp: "08/28",
    cardCvv: "•••",
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = subtotal >= 3000 ? 0 : 250;
  const total = subtotal + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
  };

  if (isOrdered) {
    return (
      <div className="bg-[#ede4da] min-h-screen pt-28 pb-20 flex items-center justify-center px-6">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/60 shadow-xl max-w-2xl w-full text-center flex flex-col items-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-700">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <span className="text-[#9a2227] font-['Inter',sans-serif] text-xs font-semibold tracking-widest uppercase mb-2">
            Order Confirmation
          </span>
          <h1 className="font-['Inter',sans-serif] font-bold text-3xl sm:text-4xl text-[#141211] mb-2">
            Thank you for your order!
          </h1>
          <p className="font-['Inter',sans-serif] text-[#828282] text-base mb-6">
            Order <span className="font-semibold text-[#141211]">#SB-2026-8942</span> has been placed successfully. A confirmation email has been sent to <span className="font-medium text-[#141211]">{formData.email}</span>.
          </p>

          {/* Delivery Card */}
          <div className="w-full bg-[#ede4da]/50 rounded-xl p-5 mb-8 text-left border border-black/5 flex flex-col gap-3 font-['Inter',sans-serif]">
            <div className="flex justify-between items-center text-sm border-b border-black/10 pb-3">
              <span className="text-[#828282]">Estimated Arrival:</span>
              <span className="font-semibold text-[#141211]">4 – 6 Business Days</span>
            </div>
            <div className="flex justify-between items-center text-sm border-b border-black/10 pb-3">
              <span className="text-[#828282]">Shipping To:</span>
              <span className="font-medium text-[#141211]">{formData.firstName} {formData.lastName}, {formData.city}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#828282]">Amount Paid:</span>
              <span className="font-bold text-base text-[#9a2227]">Rs. {total.toLocaleString("en-IN")}</span>
            </div>
          </div>

          <button
            onClick={() => {
              onClearCart();
              setPage("shop");
              window.scrollTo(0, 0);
            }}
            className="bg-[#141211] hover:bg-[#9a2227] text-[#ede4da] font-['Inter',sans-serif] font-medium text-lg px-8 py-4 rounded-xl transition-all shadow-md"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#ede4da] min-h-screen pt-28 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        {/* Header Breadcrumb */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10">
          <div>
            <span className="text-[#9a2227] font-['Inter',sans-serif] text-xs font-semibold tracking-wider uppercase">
              Secure Checkout
            </span>
            <h1 className="font-['Inter',sans-serif] font-bold text-4xl md:text-5xl text-[#141211] tracking-tight mt-1">
              Checkout
            </h1>
          </div>
          <button
            onClick={() => { setPage("cart"); window.scrollTo(0, 0); }}
            className="flex items-center gap-2 font-['Inter',sans-serif] font-medium text-sm text-[#141211] hover:text-[#9a2227] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Bag
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left: Form (2 cols) */}
          <form onSubmit={handlePlaceOrder} className="lg:col-span-2 flex flex-col gap-8">
            {/* Contact Details */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/60 shadow-sm flex flex-col gap-6">
              <h2 className="font-['Inter',sans-serif] font-semibold text-xl text-[#141211] flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#141211] text-white text-xs font-bold flex items-center justify-center">1</span>
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-['Inter',sans-serif] font-medium text-[#828282] uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-black/20 bg-white text-sm font-['Inter',sans-serif] text-[#141211] focus:outline-none focus:border-[#9a2227]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-['Inter',sans-serif] font-medium text-[#828282] uppercase mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-black/20 bg-white text-sm font-['Inter',sans-serif] text-[#141211] focus:outline-none focus:border-[#9a2227]"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/60 shadow-sm flex flex-col gap-6">
              <h2 className="font-['Inter',sans-serif] font-semibold text-xl text-[#141211] flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#141211] text-white text-xs font-bold flex items-center justify-center">2</span>
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-['Inter',sans-serif] font-medium text-[#828282] uppercase mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-black/20 bg-white text-sm font-['Inter',sans-serif] text-[#141211] focus:outline-none focus:border-[#9a2227]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-['Inter',sans-serif] font-medium text-[#828282] uppercase mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-black/20 bg-white text-sm font-['Inter',sans-serif] text-[#141211] focus:outline-none focus:border-[#9a2227]"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-['Inter',sans-serif] font-medium text-[#828282] uppercase mb-1">Street Address</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-black/20 bg-white text-sm font-['Inter',sans-serif] text-[#141211] focus:outline-none focus:border-[#9a2227]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-['Inter',sans-serif] font-medium text-[#828282] uppercase mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-black/20 bg-white text-sm font-['Inter',sans-serif] text-[#141211] focus:outline-none focus:border-[#9a2227]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-['Inter',sans-serif] font-medium text-[#828282] uppercase mb-1">PIN Code</label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-black/20 bg-white text-sm font-['Inter',sans-serif] text-[#141211] focus:outline-none focus:border-[#9a2227]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/60 shadow-sm flex flex-col gap-6">
              <h2 className="font-['Inter',sans-serif] font-semibold text-xl text-[#141211] flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#141211] text-white text-xs font-bold flex items-center justify-center">3</span>
                Payment Options
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("upi")}
                  className={`p-4 rounded-xl border-2 text-left flex flex-col gap-2 transition-all ${paymentMethod === "upi" ? "border-[#9a2227] bg-[#9a2227]/5" : "border-black/10 bg-white"}`}
                >
                  <Sparkles className="w-5 h-5 text-[#9a2227]" />
                  <span className="font-['Inter',sans-serif] font-semibold text-sm text-[#141211]">UPI / GPay / PhonePe</span>
                  <span className="font-['Inter',sans-serif] text-xs text-[#828282]">Instant & Zero fee</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`p-4 rounded-xl border-2 text-left flex flex-col gap-2 transition-all ${paymentMethod === "card" ? "border-[#9a2227] bg-[#9a2227]/5" : "border-black/10 bg-white"}`}
                >
                  <CreditCard className="w-5 h-5 text-[#9a2227]" />
                  <span className="font-['Inter',sans-serif] font-semibold text-sm text-[#141211]">Credit / Debit Card</span>
                  <span className="font-['Inter',sans-serif] text-xs text-[#828282]">Visa, Mastercard, Amex</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("cod")}
                  className={`p-4 rounded-xl border-2 text-left flex flex-col gap-2 transition-all ${paymentMethod === "cod" ? "border-[#9a2227] bg-[#9a2227]/5" : "border-black/10 bg-white"}`}
                >
                  <Truck className="w-5 h-5 text-[#9a2227]" />
                  <span className="font-['Inter',sans-serif] font-semibold text-sm text-[#141211]">Cash on Delivery</span>
                  <span className="font-['Inter',sans-serif] text-xs text-[#828282]">Pay at doorstep</span>
                </button>
              </div>

              {/* Dynamic input for payment */}
              {paymentMethod === "upi" && (
                <div>
                  <label className="block text-xs font-['Inter',sans-serif] font-medium text-[#828282] uppercase mb-1">Enter UPI ID</label>
                  <input
                    type="text"
                    name="upiId"
                    value={formData.upiId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-black/20 bg-white text-sm font-['Inter',sans-serif] text-[#141211] focus:outline-none focus:border-[#9a2227]"
                  />
                </div>
              )}

              {paymentMethod === "card" && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-xs font-['Inter',sans-serif] font-medium text-[#828282] uppercase mb-1">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-black/20 bg-white text-sm font-['Inter',sans-serif] text-[#141211] focus:outline-none focus:border-[#9a2227]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-['Inter',sans-serif] font-medium text-[#828282] uppercase mb-1">Expiry Date</label>
                    <input
                      type="text"
                      name="cardExp"
                      value={formData.cardExp}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-black/20 bg-white text-sm font-['Inter',sans-serif] text-[#141211] focus:outline-none focus:border-[#9a2227]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-['Inter',sans-serif] font-medium text-[#828282] uppercase mb-1">CVV</label>
                    <input
                      type="text"
                      name="cardCvv"
                      value={formData.cardCvv}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-black/20 bg-white text-sm font-['Inter',sans-serif] text-[#141211] focus:outline-none focus:border-[#9a2227]"
                    />
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#9a2227] hover:bg-[#7d1c20] text-white font-['Inter',sans-serif] font-medium text-xl py-5 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3"
            >
              <Lock className="w-5 h-5" />
              <span>Complete Order — Rs. {total.toLocaleString("en-IN")}</span>
            </button>
          </form>

          {/* Right: Summary Card (1 col) */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/60 shadow-md sticky top-28 flex flex-col gap-6">
            <h2 className="font-['Inter',sans-serif] font-bold text-2xl text-[#141211] pb-4 border-b border-black/10">
              In Your Bag ({cartItems.reduce((a, b) => a + b.quantity, 0)})
            </h2>

            {/* Compact items list */}
            <div className="flex flex-col gap-4 max-h-72 overflow-y-auto pr-1">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-[#ede4da] overflow-hidden flex-shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-['Inter',sans-serif] font-medium text-sm text-[#141211] truncate">{item.name}</h4>
                    <p className="font-['Inter',sans-serif] text-xs text-[#828282]">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-['Inter',sans-serif] font-semibold text-sm text-[#141211]">
                    Rs. {(item.price * item.quantity).toLocaleString("en-IN")}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="flex flex-col gap-3 text-sm font-['Inter',sans-serif] py-4 border-y border-black/10">
              <div className="flex justify-between text-[#141211]">
                <span>Subtotal</span>
                <span className="font-medium">Rs. {subtotal.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-[#141211]">
                <span>Insured Shipping</span>
                <span className="font-medium">{shippingCost === 0 ? <span className="text-green-700">FREE</span> : `Rs. ${shippingCost}`}</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline font-['Inter',sans-serif]">
              <span className="font-bold text-xl text-[#141211]">Total</span>
              <span className="font-bold text-2xl text-[#9a2227]">
                Rs. {total.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [selectedProductId, setSelectedProductId] = useState<string>("sama-vase");
  const [historyStack, setHistoryStack] = useState<Page[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: "sama-vase-maroon", name: "SAMA Terracotta Vase", price: 2500, formattedPrice: "Rs. 2,500", color: "Maroon", img: prodFront, quantity: 1 },
    { id: "terracotta-planter-natural", name: "Terracotta Planter", price: 1800, formattedPrice: "Rs. 1,800", color: "Natural Terracotta", img: shopProd1, quantity: 2 },
  ]);

  const navigateTo = (newPage: Page) => {
    setHistoryStack((prev) => [...prev, page]);
    setPage(newPage);
  };

  const goBack = () => {
    setHistoryStack((prev) => {
      if (prev.length === 0) {
        setPage("home");
        return [];
      }
      const newStack = [...prev];
      const previousPage = newStack.pop()!;
      setPage(previousPage);
      return newStack;
    });
  };

  const handleAddToCart = (newItem: CartItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === newItem.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      }
      return [...prev, newItem];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        page={page}
        setPage={navigateTo}
        cartCount={cartCount}
        goBack={goBack}
        canGoBack={historyStack.length > 0}
      />
      <main className="flex-1">
        {page === "home" && <HomePage setPage={navigateTo} />}
        {page === "shop" && <ShopPage setPage={navigateTo} />}
        {page === "catalogue" && (
          <CataloguePage
            setPage={navigateTo}
            setSelectedProductId={setSelectedProductId}
            onAddToCart={handleAddToCart}
            goBack={goBack}
          />
        )}
        {page === "product" && (
          <ProductPage
            productId={selectedProductId}
            setPage={navigateTo}
            setSelectedProductId={setSelectedProductId}
            onAddToCart={handleAddToCart}
            goBack={goBack}
          />
        )}
        {page === "about" && <AboutPage />}
        {page === "article" && <ArticlePage setPage={navigateTo} />}
        {page === "cart" && (
          <CartPage
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            setPage={navigateTo}
          />
        )}
        {page === "checkout" && (
          <CheckoutPage
            cartItems={cartItems}
            onClearCart={handleClearCart}
            setPage={navigateTo}
          />
        )}
      </main>
      <Footer setPage={navigateTo} />
    </div>
  );
}
