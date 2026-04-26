/* Shared components for Perlad website */

/* ── Honeycomb SVG Pattern ── */
const HoneycombPattern = ({ color = '#94C11F', opacity = 0.08, id = 'honeycomb' }) => (
  <svg width="0" height="0" style={{ position: 'absolute' }}>
    <defs>
      <pattern id={id} patternUnits="userSpaceOnUse" width="56" height="100" patternTransform="scale(1) rotate(0)">
        <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66ZM28 100L0 84L0 50L28 34L56 50L56 84L28 100Z"
          fill="none" stroke={color} strokeWidth="1" opacity={opacity} />
      </pattern>
    </defs>
  </svg>
);

/* ── Diamond Shape Component ── */
const Diamond = ({ children, size = 120, bg = '#94C11F', className = '', style = {} }) => (
  <div className={className} style={{
    width: size, height: size,
    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    background: bg,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    ...style
  }}>
    {children}
  </div>
);

/* ── Hexagon Clip Image ── */
const HexImage = ({ src, size = 300, style = {} }) => (
  <div style={{
    width: size, height: size * 1.15,
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    overflow: 'hidden',
    ...style
  }}>
    <div style={{
      width: '100%', height: '100%',
      background: src ? `url(${src}) center/cover` : '#C4A265',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', fontFamily: 'monospace', fontSize: 12, textAlign: 'center', padding: 20
    }}>
      {!src && 'product\nphoto'}
    </div>
  </div>
);

/* ── Section Title with diamond accent ── */
const SectionTitle = ({ children, sub, light = false, tweaks }) => (
  <div style={{ textAlign: 'center', marginBottom: 48 }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: sub ? 16 : 0 }}>
      <Diamond size={16} bg={tweaks?.accentColor || '#94C11F'} />
      <h2 style={{
        fontFamily: tweaks?.headingFont || "'Playfair Display', serif",
        fontSize: 'clamp(28px, 4vw, 48px)',
        fontWeight: 700,
        color: light ? '#fff' : '#1A1A1A',
        margin: 0,
        letterSpacing: '-0.02em'
      }}>{children}</h2>
      <Diamond size={16} bg={tweaks?.accentColor || '#94C11F'} />
    </div>
    {sub && <p style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: 'clamp(14px, 1.5vw, 18px)',
      color: light ? 'rgba(255,255,255,0.7)' : '#6B6B6B',
      margin: 0, maxWidth: 600, marginInline: 'auto'
    }}>{sub}</p>}
  </div>
);

/* ── Nav Component ── */
const NavBar = ({ tweaks, activeSection, scrollTo }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [prodOpen, setProdOpen] = React.useState(false);

  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    background: scrolled ? 'rgba(26,26,26,0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    transition: 'all 0.4s ease',
    borderBottom: scrolled ? '1px solid rgba(148,193,31,0.2)' : '1px solid transparent'
  };

  const products = [
    { name: 'Empaques y embalajes', sub: ['Contenedores (Octabines, Guacales)', 'Estibas de cartón', 'Relleno cartón panal', 'Esquinas y punteras'] },
    { name: 'Tablero industria gráfica' },
    { name: 'Rollo de papel panal' },
    { name: 'Bolsa bio' }
  ];

  const links = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Productos', id: 'productos', hasDropdown: true },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Sostenibilidad', id: 'sostenibilidad' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contacto', id: 'contacto' }
  ];

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={window.__resources?.logo || 'assets/logo-perlad.png'} alt="Perlad" style={{ height: 36, filter: scrolled ? 'brightness(0) invert(1)' : 'brightness(0) invert(1)', cursor: 'pointer' }}
          onClick={() => scrollTo('hero')} />
        
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="nav-links-desktop">
          {links.map(l => (
            <div key={l.id} style={{ position: 'relative' }}
              onMouseEnter={() => l.hasDropdown && setProdOpen(true)}
              onMouseLeave={() => l.hasDropdown && setProdOpen(false)}>
              <a onClick={() => { scrollTo(l.id); setMenuOpen(false); }}
                style={{
                  color: activeSection === l.id ? (tweaks?.accentColor || '#94C11F') : '#fff',
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
                  textDecoration: 'none', cursor: 'pointer', letterSpacing: '0.03em',
                  textTransform: 'uppercase', transition: 'color 0.3s',
                  display: 'flex', alignItems: 'center', gap: 4
                }}>
                {l.label}
                {l.hasDropdown && <span style={{ fontSize: 10 }}>▼</span>}
              </a>
              {l.hasDropdown && prodOpen && (
                <div style={{
                  position: 'absolute', top: '100%', left: -20, paddingTop: 12,
                  minWidth: 280
                }}>
                  <div style={{
                    background: 'rgba(26,26,26,0.97)', borderRadius: 12,
                    padding: 16, backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(148,193,31,0.15)'
                  }}>
                    {products.map((p, i) => (
                      <div key={i} style={{ marginBottom: p.sub ? 12 : 4 }}>
                        <div style={{
                          color: '#fff', fontFamily: "'DM Sans', sans-serif",
                          fontSize: 14, fontWeight: 600, padding: '6px 8px',
                          cursor: 'pointer', borderRadius: 6,
                          transition: 'background 0.2s'
                        }} className="nav-dropdown-item">
                          <Diamond size={8} bg={tweaks?.accentColor || '#94C11F'} style={{ display: 'inline-block', marginRight: 8 }} />
                          {p.name}
                        </div>
                        {p.sub && p.sub.map((s, j) => (
                          <div key={j} style={{
                            color: 'rgba(255,255,255,0.6)', fontFamily: "'DM Sans', sans-serif",
                            fontSize: 13, padding: '4px 8px 4px 28px', cursor: 'pointer',
                            transition: 'color 0.2s'
                          }} className="nav-dropdown-sub">{s}</div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <a onClick={() => scrollTo('contacto')} style={{
            background: tweaks?.accentColor || '#94C11F', color: '#1A1A1A',
            padding: '10px 24px', borderRadius: 0,
            clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
            fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.05em',
            cursor: 'pointer', textDecoration: 'none', transition: 'transform 0.2s'
          }} className="nav-cta">Ver Catálogo</a>
        </div>

        {/* Mobile hamburger */}
        <div className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', cursor: 'pointer', padding: 8 }}>
          <div style={{ width: 24, height: 2, background: '#fff', marginBottom: 6, transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
          <div style={{ width: 24, height: 2, background: '#fff', marginBottom: 6,
            opacity: menuOpen ? 0 : 1, transition: 'opacity 0.3s' }}></div>
          <div style={{ width: 24, height: 2, background: '#fff', transition: 'all 0.3s',
            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
        </div>
      </div>

      {menuOpen && (
        <div style={{
          background: 'rgba(26,26,26,0.98)', padding: '24px 32px',
          borderTop: '1px solid rgba(148,193,31,0.2)'
        }} className="nav-mobile-menu">
          {links.map(l => (
            <a key={l.id} onClick={() => { scrollTo(l.id); setMenuOpen(false); }}
              style={{
                display: 'block', color: '#fff', fontFamily: "'DM Sans', sans-serif",
                fontSize: 18, padding: '12px 0', textDecoration: 'none', cursor: 'pointer'
              }}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

/* ── Animated Counter ── */
const AnimCounter = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const animate = (now) => {
          const p = Math.min((now - start) / duration, 1);
          setCount(Math.floor(p * end));
          if (p < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

/* ── Scroll reveal hook ── */
const useReveal = (threshold = 0.15) => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

/* ── Product Card ── */
const ProductCard = ({ name, desc, tweaks, delay = 0 }) => {
  const [ref, vis] = useReveal();
  const [hovered, setHovered] = React.useState(false);
  return (
    <div ref={ref}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: '1px solid #e8e0d4',
        padding: 0, overflow: 'hidden',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
        opacity: vis ? 1 : 0,
        transform: vis ? (hovered ? 'translateY(-8px)' : 'translateY(0)') : 'translateY(40px)',
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.12)' : '0 2px 12px rgba(0,0,0,0.04)',
        cursor: 'pointer',
        clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
      }}>
      <div style={{
        height: 220,
        background: `linear-gradient(135deg, #C4A265 0%, #8B6914 100%)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.15,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='56' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34L28 66zm0 34L0 84V50l28-16 28 16v34L28 100z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '56px 100px'
        }}></div>
        <span style={{ fontFamily: 'monospace', color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>product photo</span>
      </div>
      <div style={{ padding: '28px 24px' }}>
        <h3 style={{
          fontFamily: tweaks?.headingFont || "'Playfair Display', serif",
          fontSize: 20, fontWeight: 700, color: '#1A1A1A', margin: '0 0 8px'
        }}>{name}</h3>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 14,
          color: '#6B6B6B', margin: '0 0 16px', lineHeight: 1.6
        }}>{desc}</p>
        <span style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700,
          color: tweaks?.accentColor || '#94C11F', textTransform: 'uppercase',
          letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: 8
        }}>
          Ver más
          <span style={{ transition: 'transform 0.3s', transform: hovered ? 'translateX(4px)' : 'none' }}>→</span>
        </span>
      </div>
    </div>
  );
};

Object.assign(window, {
  HoneycombPattern, Diamond, HexImage, SectionTitle, NavBar,
  AnimCounter, useReveal, ProductCard
});
