'use client';

import { useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Calculator,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
  Youtube,
} from 'lucide-react';

const images = {
  hero: 'https://images.pexels.com/photos/18207334/pexels-photo-18207334.jpeg?auto=compress&cs=tinysrgb&w=1800',
  suv: 'https://images.pexels.com/photos/10845342/pexels-photo-10845342.jpeg?auto=compress&cs=tinysrgb&w=1000',
  showroom: 'https://images.pexels.com/photos/18108314/pexels-photo-18108314.jpeg?auto=compress&cs=tinysrgb&w=1200',
  // consultant: 'https://images.pexels.com/photos/7144183/pexels-photo-7144183.jpeg?auto=compress&cs=tinysrgb&w=900',
  consultant: '/images/profil-alya.png',
  suv_xforce : '/images/mobil/mobil-xforce.png',
  pajero_sport : '/images/mobil/pajero.png',
  expander : '/images/mobil/expander.png',
  xforce : '/images/mobil/xforce.jpg',
  triton : '/images/mobil/triton.png',
  service: 'https://images.pexels.com/photos/4895417/pexels-photo-4895417.jpeg?auto=compress&cs=tinysrgb&w=1000',
  location: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1400',
};

const models = [
  { name: 'XFORCE', type: 'SUV 5 SEATER', price: 'Rp 399 Juta', image: images.xforce, tag: 'PALING DICARI' },
  { name: 'PAJERO SPORT', type: 'SUV 7 SEATER', price: 'Rp 571 Juta', image: images.pajero_sport, tag: 'FAVORIT' },
  { name: 'XPANDER', type: 'MPV 7 SEATER', price: 'Rp 283 Juta', image: images.expander, tag: 'KELUARGA' },
  { name: 'TRITON', type: 'DOUBLE CABIN', price: 'Rp 287 Juta', image: images.triton, tag: 'ADVENTURE' },
];

const news = [
  { title: '5 Persiapan Mudik Nyaman Bersama Mitsubishi', date: '08 Apr 2025', image: images.service },
  { title: 'Dapatkan Penawaran Terbaik Bulan Ini', date: '02 Apr 2025', image: images.location },
  { title: 'XPANDER: Teman Perjalanan Keluarga', date: '28 Mar 2025', image: images.suv },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeModel, setActiveModel] = useState(0);
  const [tenor, setTenor] = useState(5);
  const [downPayment, setDownPayment] = useState(30);
  const [testimonial, setTestimonial] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const monthlyPayment = useMemo(() => {
    const base = 399000000 * (1 - downPayment / 100);
    return Math.round(base / (tenor * 12) * 1.08);
  }, [downPayment, tenor]);

  const formatRupiah = (amount: number) => `Rp ${(amount / 1000000).toFixed(1).replace('.', ',')} Juta`;

  return (
    <main className="site-shell">
      <div className="topline"><span>Dealer Resmi Mitsubishi Motors</span><span>Medan & Sumatera Utara</span></div>
      <header className="navbar">
        <a href="#home" className="brand" aria-label="Dipo Mitsubishi Medan"><span className="brand-mark">DIPO</span><span className="brand-divider" /> <span>MITSUBISHI<br /><b>MEDAN</b></span></a>
        <nav className={menuOpen ? 'main-nav mobile-open' : 'main-nav'}>
          <a href="#models" onClick={() => setMenuOpen(false)}>Mobil Mitsubishi</a>
          <div className="nav-dropdown-wrap">
            <button className="nav-dropdown" onClick={() => setShowDropdown(!showDropdown)}>Layanan <ChevronDown size={14} /></button>
            {showDropdown && <div className="nav-dropdown-menu"><a href="#finance">Simulasi Kredit</a><a href="#consultant">Sales Consultant</a><a href="#location">Lokasi Dealer</a></div>}
          </div>
          <a href="#news" onClick={() => setMenuOpen(false)}>Berita</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Tentang Kami</a>
          <a href="#location" onClick={() => setMenuOpen(false)}>Kontak</a>
          <a className="nav-cta" href="#consultant" onClick={() => setMenuOpen(false)}><Phone size={15} /> Hubungi Kami</a>
        </nav>
        <button className="menu-toggle" aria-label="Buka menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="home" style={{ backgroundImage: `linear-gradient(90deg, rgba(4,7,17,.88) 0%, rgba(4,7,17,.34) 55%, rgba(4,7,17,.1) 100%), url(${images.hero})` }}>
        <div className="hero-content page-width">
          <div className="eyebrow light"><span /> EXPERIENCE THE NEW DRIVE</div>
          <h1>Move Your<br /><em>Ambition.</em></h1>
          <p>Rasakan pengalaman berkendara yang lebih berani bersama Mitsubishi. Dirancang untuk menemani setiap cerita perjalanan Anda.</p>
          <div className="hero-actions"><a className="button button-red" href="#models">Lihat Pilihan Mobil <ArrowRight size={17} /></a><a className="video-link" href="#about"><span className="play-circle"><Play size={13} fill="currentColor" /></span> Lihat video kami</a></div>
          <div className="hero-stats"><div><strong>30+</strong><span>Tahun melayani</span></div><div><strong>4.9/5</strong><span>Rating pelanggan</span></div><div><strong>10K+</strong><span>Pelanggan puas</span></div></div>
        </div>
        <div className="hero-badge"><Sparkles size={17} /><span>Promo spesial<br /><b>hingga Rp 30 Juta*</b></span></div>
      </section>

      <section className="section white-section" id="models">
        <div className="page-width">
          <div className="section-heading"><div><div className="eyebrow"><span /> PILIHAN TERBAIK</div><h2>Model Mitsubishi <em>pilihan Anda.</em></h2></div><a href="#consultant" className="text-link">Lihat semua model <ArrowUpRight size={17} /></a></div>
          <div className="model-tabs">{['Semua model', 'SUV', 'MPV', 'Pick Up'].map((tab, index) => <button key={tab} className={activeModel === index ? 'active' : ''} onClick={() => setActiveModel(index)}>{tab}</button>)}</div>
          <div className="model-grid">{models.map((model, index) => <article className={activeModel !== 0 && index !== activeModel - 1 ? 'model-card faded' : 'model-card'} key={model.name}>
            <div className="model-image"><img src={model.image} alt={model.name} /><span className="model-tag">{model.tag}</span><button className="card-arrow" aria-label={`Lihat ${model.name}`}><ArrowUpRight size={18} /></button></div>
            <div className="model-copy"><div><h3>{model.name}</h3><p>{model.type}</p></div><div className="price">Mulai dari <strong>{model.price}</strong></div></div>
            <a href="#consultant" className="card-link">Dapatkan penawaran <ArrowRight size={15} /></a>
          </article>)}</div>
        </div>
      </section>

      <section className="promo-strip"><div className="page-width promo-inner"><div><div className="eyebrow light"><span /> LIMITED OFFER</div><h2>Upgrade perjalananmu.<br /><em>Bonusnya sampai 30 jutaan.</em></h2></div><a href="#consultant" className="button button-red">Klaim promonya <ArrowRight size={16} /></a></div></section>

      <section className="section cream-section" id="finance"><div className="page-width finance-layout"><div className="finance-intro"><div className="eyebrow"><span /> SIMULASI KREDIT</div><h2>Rencanakan<br /><em>perjalananmu.</em></h2><p>Atur skema kredit yang sesuai dengan kebutuhan dan kemampuan Anda. Transparan, mudah, tanpa ribet.</p><div className="finance-perks"><span><Check size={15} /> Proses cepat</span><span><Check size={15} /> Bunga kompetitif</span><span><Check size={15} /> Konsultasi gratis</span></div></div><div className="calculator-card"><div className="calc-top"><span>SIMULASI KREDIT XFORCE</span><Calculator size={19} /></div><div className="calc-row"><label>Harga kendaraan <strong>Rp 399.000.000</strong></label><div className="fake-input">XFORCE Ultimate CVT <ChevronDown size={15} /></div></div><div className="calc-row"><label>Uang muka <strong>{downPayment}%</strong></label><input type="range" min="10" max="70" value={downPayment} onChange={(event) => setDownPayment(Number(event.target.value))} /></div><div className="calc-row"><label>Tenor cicilan <strong>{tenor} Tahun</strong></label><div className="tenor-options">{[3, 5, 7].map((year) => <button key={year} className={tenor === year ? 'selected' : ''} onClick={() => setTenor(year)}>{year} Tahun</button>)}</div></div><div className="calc-result"><span>Estimasi cicilan per bulan</span><strong>{formatRupiah(monthlyPayment)} <small>/ bulan</small></strong></div><a href="#consultant" className="button button-red full-width">Ajukan sekarang <ArrowRight size={16} /></a><small className="calc-note">*Estimasi dapat berubah sesuai persetujuan leasing.</small></div></div></section>

      <section className="section dark-section" id="consultant"><div className="page-width consultant-layout"><div className="consultant-photo"><img src={images.consultant} alt="Sales consultant Mitsubishi" /><span className="photo-label">SALES CONSULTANT</span></div><div className="consultant-copy"><div className="eyebrow light"><span /> YOUR TRUSTED PARTNER</div><h2>Kenalan dengan<br /><em>sales consultant kami.</em></h2><p>Butuh rekomendasi mobil yang tepat? Tim kami siap membantu Anda menemukan kendaraan yang sesuai dengan gaya hidup dan kebutuhan.</p><div className="consultant-details"><div className="avatar">PJ</div><div><strong>Alya Muni</strong><span>Senior Sales Consultant</span></div><div className="rating"><Star size={14} fill="currentColor" /> 4.9</div></div><div className="consultant-actions"><a href="tel:+6282379649991" className="button button-red"><Phone size={16} /> Hubungi Alya</a><a href="#location" className="button button-outline">Lihat profil <ArrowRight size={16} /></a></div></div></div></section>

      {/* <section className="section white-section testimonials"><div className="page-width"><div className="section-heading"><div><div className="eyebrow"><span /> CERITA MEREKA</div><h2>Dipilih oleh mereka<br /><em>yang ingin melaju.</em></h2></div><div className="slider-controls"><button onClick={() => setTestimonial((testimonial + 2) % 3)} aria-label="Sebelumnya"><ChevronLeft /></button><button onClick={() => setTestimonial((testimonial + 1) % 3)} aria-label="Berikutnya"><ChevronRight /></button></div></div><div className="testimonial-track">{[['“Pelayanannya sangat cepat dan ramah. Saya dibantu dari awal sampai mobil diantar ke rumah.”', 'Rizky Pratama', 'Pemilik XFORCE Ultimate'], ['“Proses kreditnya transparan, sales-nya responsif. Pilihan terbaik untuk keluarga kami.”', 'Dina Marlina', 'Pemilik XPANDER Ultimate'], ['“Setelah servis di sini, mobil terasa seperti baru lagi. Fasilitasnya juga sangat nyaman.”', 'Andi Kurniawan', 'Pemilik PAJERO SPORT']].map((item, index) => <div className={testimonial === index ? 'testimonial active' : 'testimonial'} key={item[1]}><div className="quote-mark">“</div><p>{item[0]}</p><div className="testimonial-footer"><span className="tiny-avatar">{item[1].slice(0, 2)}</span><div><strong>{item[1]}</strong><small>{item[2]}</small></div><div className="stars"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></div></div></div>)}</div><div className="dots">{[0, 1, 2].map((dot) => <button key={dot} className={testimonial === dot ? 'active' : ''} onClick={() => setTestimonial(dot)} aria-label={`Testimoni ${dot + 1}`} />)}</div></div></section> */}


<section className="section white-section testimonials">
  <div className="page-width">
    <div className="section-heading">
      <div>
        <div className="eyebrow">
          <span /> CERITA MEREKA
        </div>
        <h2>
          Dipilih oleh mereka
          <br />
          <em>yang ingin melaju.</em>
        </h2>
      </div>

      <div className="slider-controls">
        <button
          onClick={() => setTestimonial((testimonial + 2) % 3)}
          aria-label="Sebelumnya"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => setTestimonial((testimonial + 1) % 3)}
          aria-label="Berikutnya"
        >
          <ChevronRight />
        </button>
      </div>
    </div>

    <div className="testimonial-track">
      {[
        {
          quote:
            '“Pelayanannya sangat cepat dan ramah. Saya dibantu dari awal sampai mobil diantar ke rumah.”',
          name: 'Rizky Pratama',
          detail: 'Pemilik XFORCE Ultimate',
          image: '/images/testimoni/rizky.jpg',
        },
        {
          quote:
            '“Proses kreditnya transparan, sales-nya responsif. Pilihan terbaik untuk keluarga kami.”',
          name: 'Dina Marlina',
          detail: 'Pemilik XPANDER Ultimate',
          image: '/images/testimoni/dina.jpg',
        },
        {
          quote:
            '“Setelah servis di sini, mobil terasa seperti baru lagi. Fasilitasnya juga sangat nyaman.”',
          name: 'Andi Kurniawan',
          detail: 'Pemilik PAJERO SPORT',
          image: '/images/testimoni/andi.jpg',
        },
      ].map((item, index) => (
        <div
          className={
            testimonial === index
              ? 'testimonial active'
              : 'testimonial'
          }
          key={item.name}
        >
          <div className="testimonial-cover">
            <img src={item.image} alt={item.name} />
          </div>

          <div className="testimonial-content">
            <div className="quote-mark">“</div>
            <p>{item.quote}</p>

            <div className="testimonial-footer">
              <span className="tiny-avatar">
                {item.name.slice(0, 2)}
              </span>

              <div>
                <strong>{item.name}</strong>
                <small>{item.detail}</small>
              </div>

              <div className="stars">
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
                <Star size={13} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="dots">
      {[0, 1, 2].map((dot) => (
        <button
          key={dot}
          className={testimonial === dot ? 'active' : ''}
          onClick={() => setTestimonial(dot)}
          aria-label={`Testimoni ${dot + 1}`}
        />
      ))}
    </div>
  </div>
</section>

      <section className="section cream-section" id="news"><div className="page-width"><div className="section-heading"><div><div className="eyebrow"><span /> INSIGHT & INFORMASI</div><h2>Berita <em>terbaru.</em></h2></div><a href="#news" className="text-link">Lihat semua berita <ArrowUpRight size={17} /></a></div><div className="news-grid">{news.map((item) => <article className="news-card" key={item.title}><div className="news-image"><img src={item.image} alt={item.title} /><span>NEWS</span></div><div className="news-copy"><small>{item.date}</small><h3>{item.title}</h3><a href="#news">Baca selengkapnya <ArrowRight size={15} /></a></div></article>)}</div></div></section>

      <section className="section location-section" id="location"><div className="page-width"><div className="location-card" style={{ backgroundImage: `linear-gradient(90deg, rgba(4,7,17,.97), rgba(4,7,17,.72)), url(${images.location})` }}><div><div className="eyebrow light"><span /> KUNJUNGI KAMI</div><h2>Temukan showroom<br /><em>terdekatmu.</em></h2><p>Datang dan rasakan langsung pengalaman berkendara Mitsubishi di Dipo Medan.</p><a href="#location" className="button button-red">Buka Google Maps <MapPin size={16} /></a></div><div className="location-info"><div><MapPin size={19} /><span><strong>Dipo Mitsubishi Medan</strong>Jl. Sisingamangaraja No. 19, Medan</span></div><div><Clock3 size={19} /><span><strong>Jam operasional</strong>Senin - Sabtu, 08.00 - 17.00</span></div></div></div></div></section>

      <footer className="footer" id="about"><div className="page-width"><div className="footer-main"><div className="footer-brand"><div className="brand"><span className="brand-mark">DIPO</span><span className="brand-divider" /> <span>MITSUBISHI<br /><b>MEDAN</b></span></div><p>Dealer resmi Mitsubishi Motors untuk wilayah Banda Aceh dan Sumatera Utara.</p><div className="socials"><a href="#about"><Instagram size={16} /></a><a href="#about"><Facebook size={16} /></a><a href="#about"><Youtube size={16} /></a></div></div><div className="footer-links"><div><strong>Menu utama</strong><a href="#models">Mobil Mitsubishi</a><a href="#finance">Simulasi Kredit</a><a href="#news">Berita terbaru</a><a href="#about">Tentang kami</a></div><div><strong>Layanan</strong><a href="#consultant">Booking service</a><a href="#consultant">Test drive</a><a href="#consultant">Konsultasi mobil</a><a href="#location">Lokasi dealer</a></div><div><strong>Hubungi kami</strong><a href="tel:+6282379649991">0823-7964-9991</a><a href="mailto:alya@gmail.com">alya@gmail.com</a><a href="#location">Banda Aceh, Aceh</a></div></div></div><div className="footer-bottom"><span>© 2026 Dipo Mitsubishi Medan. All rights reserved.</span><span>Privacy Policy &nbsp; Terms of Use</span></div></div></footer>
      <a className="whatsapp" href="https://wa.me/6282379649991" aria-label="Chat WhatsApp"><MessageCircle size={23} /></a>
    </main>
  );
}
