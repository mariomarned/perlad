/* Footer Component for Perlad */

const Footer = ({ tweaks }) => (
  <footer style={{
    background: '#111', padding: '60px 40px 32px', borderTop: `2px solid ${tweaks.accentColor}`
  }}>
    <div style={{
      maxWidth: 1280, margin: '0 auto',
      display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48
    }}>
      <div>
        <img src="assets/logo-perlad.png" style={{ height: 32, filter: 'brightness(0) invert(1)', marginBottom: 16 }} alt="Perlad" />
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 300 }}>
          Innovación sostenible en soluciones de empaque. Protegemos tu producto y el planeta.
        </p>
      </div>
      {[
        { title: 'Productos', links: ['Empaques', 'Estibas', 'Esquinas', 'Rollos', 'Bolsa Bio'] },
        { title: 'Empresa', links: ['Nosotros', 'Sostenibilidad', 'Blog', 'Contacto'] },
        { title: 'Legal', links: ['Privacidad', 'Términos', 'Cookies'] }
      ].map((col, i) => (
        <div key={i}>
          <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>{col.title}</h4>
          {col.links.map((l, j) => (
            <a key={j} href="#" style={{ display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', marginBottom: 10, transition: 'color 0.3s' }}
              onMouseEnter={e => e.target.style.color = tweaks.accentColor}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
            >{l}</a>
          ))}
        </div>
      ))}
    </div>
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, textAlign: 'center' }}>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
        © 2026 Perlad. Innovación Sostenible. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

window.Footer = Footer;
