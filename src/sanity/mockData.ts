import { BlogPost, Category } from './types';

export const mockCategories: Category[] = [
  {
    _id: 'cat-1',
    title: 'Innovación',
    slug: { current: 'innovacion' },
    description: 'Nuevas tecnologías y desarrollos en cartón panal y empaque industrial.',
  },
  {
    _id: 'cat-2',
    title: 'Sostenibilidad',
    slug: { current: 'sostenibilidad' },
    description: 'Estrategias de economía circular y reducción de huella de carbono.',
  },
  {
    _id: 'cat-3',
    title: 'Productos',
    slug: { current: 'productos' },
    description: 'Guías técnicas y aplicaciones prácticas de nuestros productos.',
  },
  {
    _id: 'cat-4',
    title: 'Industria Gráfica',
    slug: { current: 'industria-grafica' },
    description: 'Soluciones ecológicas para impresión digital, POP y señalización.',
  },
];

export const mockPosts: BlogPost[] = [
  {
    _id: 'mock-1',
    title: '¿Por qué el cartón panal es el futuro del empaque industrial y de exportación?',
    slug: { current: 'por-que-el-carton-panal-es-el-futuro-del-empaque' },
    excerpt: 'Descubre cómo la estructura hexagonal inspirada en la naturaleza ofrece resistencia superior con una fracción del peso de la madera y el plástico.',
    publishedAt: '2026-03-15T10:00:00Z',
    readTime: '4 min lectura',
    featured: true,
    mainImage: {
      asset: {
        url: '/assets/imgcategorias/packingboard.jpg',
      },
      alt: 'Estructura de cartón panal Packingboard de Perlad',
    },
    category: {
      title: 'Innovación',
      slug: { current: 'innovacion' },
    },
    author: {
      name: 'Equipo Técnico Perlad',
      role: 'Ingeniería de Empaques',
      bio: 'Especialistas en desarrollo de soluciones sostenibles de cartón panal.',
    },
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'En un mundo donde la eficiencia logística y la responsabilidad ambiental son imperativos comerciales, el ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'cartón panal (honeycomb)',
          },
          {
            _type: 'span',
            text: ' se ha consolidado como la alternativa más avanzada frente a materiales tradicionales como la madera tratada o el poliestireno expandido.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: 'La genialidad de la geometría hexagonal',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'La estructura celular hexagonal distribuye la carga vertical y transversal de forma homogénea. Esto permite soportar compresiones de toneladas con un peso propio mínimo, lo que representa un ahorro inmediato en fletes aéreos y terrestres calculados por peso volumétrico.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'blockquote',
        children: [
          {
            _type: 'span',
            text: 'El empaque del futuro no solo protege el producto: protege la rentabilidad del negocio y el equilibrio ecológico del planeta.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h3',
        children: [
          {
            _type: 'span',
            text: 'Beneficios clave para exportadores e industrias',
          },
        ],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Cero trámites fitosanitarios (NIMF-15): ',
          },
          {
            _type: 'span',
            text: 'Al ser 100% celulosa procesada térmicamente, no requiere fumigaciones ni sellos para ingresar a aduanas internacionales.',
          },
        ],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: '100% Reciclable y Biodegradable: ',
          },
          {
            _type: 'span',
            text: 'Se incorpora directamente a la cadena de reciclaje convencional de papel y cartón.',
          },
        ],
      },
      {
        _type: 'block',
        listItem: 'bullet',
        style: 'normal',
        children: [
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Seguridad en planta: ',
          },
          {
            _type: 'span',
            text: 'Sin astillas, clavos ni grapas que puedan lesionar a operarios o perforar la mercancía.',
          },
        ],
      },
    ],
  },
  {
    _id: 'mock-2',
    title: '5 formas prácticas de reducir el plástico en tu cadena de suministro',
    slug: { current: '5-formas-de-reducir-plastico-cadena-suministro' },
    excerpt: 'Estrategias accionables para empresas que buscan cumplir normativas ambientales y responder a clientes conscientes.',
    publishedAt: '2026-02-28T14:30:00Z',
    readTime: '3 min lectura',
    featured: false,
    mainImage: {
      asset: {
        url: '/assets/imgcategorias/papelpanalysususos.jpg',
      },
      alt: 'Papel panal de amortiguación para protección',
    },
    category: {
      title: 'Sostenibilidad',
      slug: { current: 'sostenibilidad' },
    },
    author: {
      name: 'Comité de Sostenibilidad',
      role: 'Perlad',
      bio: 'Promotores de economía circular y manufactura limpia.',
    },
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Reemplazar los polímeros plásticos de un solo uso ya no es una opción de imagen corporativa, sino un estándar regulatorio indispensable en los principales mercados globales.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: '1. Sustituye el plástico de burbujas por papel panal expandible',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'El papel panal expandible ofrece un entrelazado mecánico que envuelve y amortigua productos frágiles sin necesidad de cinta adhesiva plástica.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: '2. Emplea esquineros y separadores de cartón de alta densidad',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'En lugar de foams de polietileno o porexpan, los esquineros de cartón panal estabilizan las estibas con la misma rigidez estructural y total reciclabilidad.',
          },
        ],
      },
    ],
  },
  {
    _id: 'mock-3',
    title: 'Graphicboard vs. Foam Board y PVC: El cambio ecológico en puntos de venta (POP)',
    slug: { current: 'graphicboard-vs-foam-board-y-pvc-ecologia-en-pop' },
    excerpt: 'Cómo las marcas líderes están cambiando materiales sintéticos por tableros de cartón panal de alta imprimibilidad.',
    publishedAt: '2026-02-12T09:15:00Z',
    readTime: '5 min lectura',
    featured: false,
    mainImage: {
      asset: {
        url: '/assets/imgcategorias/GRAPHICBOARD2.jpg',
      },
      alt: 'Graphicboard de Perlad para impresión digital y display',
    },
    category: {
      title: 'Industria Gráfica',
      slug: { current: 'industria-grafica' },
    },
    author: {
      name: 'Equipo Técnico Perlad',
      role: 'Ingeniería de Empaques',
      bio: 'Especialistas en desarrollo de soluciones sostenibles de cartón panal.',
    },
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'La industria publicitaria y del retail enfrenta el reto de eventos temporales y exhibidores que duran semanas pero cuyos materiales plásticos tardan siglos en degradarse. ',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Graphicboard',
          },
          {
            _type: 'span',
            text: ' ofrece superficies lisas aptas para cama plana UV y troquel digital de alta precisión.',
          },
        ],
      },
    ],
  },
  {
    _id: 'mock-4',
    title: 'Rellenos de puertas en nido de abeja: Resistencia, ligereza y aislamiento acústico',
    slug: { current: 'rellenos-puertas-nido-abeja-resistencia-ligereza' },
    excerpt: 'Conoce las propiedades de ligereza y estabilidad dimensional que el cartón panal aporta a la carpintería industrial moderna.',
    publishedAt: '2026-01-20T16:00:00Z',
    readTime: '4 min lectura',
    featured: false,
    mainImage: {
      asset: {
        url: '/assets/imgcategorias/rellenodepuertas.jpg',
      },
      alt: 'Relleno de puertas en panal de cartón Perlad',
    },
    category: {
      title: 'Productos',
      slug: { current: 'productos' },
    },
    author: {
      name: 'Equipo Técnico Perlad',
      role: 'Ingeniería de Empaques',
      bio: 'Especialistas en desarrollo de soluciones sostenibles de cartón panal.',
    },
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'El núcleo de panal para puertas y divisiones arquitectónicas permite fabricar hojas sólidas, fáciles de transportar e instalar, con óptimo desempeño acústico y un costo altamente competitivo.',
          },
        ],
      },
    ],
  },
];
