/* NavBar Component for Perlad */

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
        <img src="assets/logo-perlad.png" alt="Perlad" style={{ height: 36, filter: scrolled ? 'brightness(0) invert(1)' : 'brightness(0) invert(1)', cursor: 'pointer' }}
          onClick={() => scrollTo('hero')} />
        
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="nav-links-desktop">
          {links.map(l => (
            <div key={l.label} style={{ position: 'relative' }}
              onMouseEnter={() => l.hasDropdown && setProdOpen(true)}
              onMouseLeave={() => l.hasDropdown && setProdOpen(false)}>
              <a onClick={() => { if(l.url) window.location.href = l.url; else { scrollTo(l.id); setMenuOpen(false); } }}
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
            <a key={l.label} onClick={() => { if(l.url) window.location.href = l.url; else { scrollTo(l.id); setMenuOpen(false); } }}
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

window.NavBar = NavBar;
