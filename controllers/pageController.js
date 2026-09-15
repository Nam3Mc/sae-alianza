// Datos de la organización (Modelo de datos centralizado)
const datosONG = {
  nombre: 'Corporación SAE Crecer en Bienestar',
  eslogan: 'me cuido, te cuido, nos cuidamos.',
  naturalezaJuridica: 'Entidad Sin Ánimo de Lucro – ESAL',
  anioConstitucion: 2026,
  ciudad: 'Bogotá D.C., Cundinamarca, Colombia',
  correo: 'saecrecer@gmail.com',
  whatsapp: '3133648767',
  instagram: 'https://instagram.com/saecrecer',
  principios: [
    { icono: '🌱', titulo: 'Reconocimiento de capacidades', descripcion: 'Creemos en las fortalezas, recursos y potencialidades de cada persona, familia y comunidad.' },
    { icono: '🤝', titulo: 'Autonomía y protagonismo', descripcion: 'Acompañamos procesos para que las personas sean protagonistas de su propio bienestar.' },
    { icono: '💜', titulo: 'Bienestar integral', descripcion: 'Promovemos el equilibrio emocional, mental, social, familiar y comunitario.' },
    { icono: '🌿', titulo: 'Autocuidado y coocuidado', descripcion: 'Fomentamos el cuidado de sí mismo, de los demás y de los entornos que compartimos.' },
    { icono: '🧩', titulo: 'Inclusión y respeto', descripcion: 'Valoramos la diversidad y promovemos relaciones basadas en la dignidad, los derechos y el respeto.' },
    { icono: '🌍', titulo: 'Participación y construcción conjunta', descripcion: 'Promovemos la escucha, el diálogo y la construcción consciente de soluciones con las personas y comunidades.' },
    { icono: '✨', titulo: 'Transformación consciente', descripcion: 'Fortalecemos capacidades y habilidades que permanezcan en el tiempo.' }
  ],
  valores: [
    { icono: '💜', nombre: 'Empatía', descripcion: 'Reconocemos y respetamos las emociones, experiencias y realidades de los demás.' },
    { icono: '🌿', nombre: 'Presencia', descripcion: 'Escuchamos y acompañamos con atención, respeto y disposición genuina.' },
    { icono: '🤍', nombre: 'Ética', descripcion: 'Actuamos con integridad, responsabilidad, transparencia y respeto por la dignidad humana.' },
    { icono: '🤝', nombre: 'Sororidad', descripcion: 'Promovemos el apoyo, la solidaridad y el fortalecimiento entre mujeres, reconociendo nuestras experiencias y capacidades.' },
    { icono: '✨', nombre: 'Conciencia', descripcion: 'Invitamos a reconocer lo que sentimos, pensamos y hacemos para tomar decisiones más responsables y saludables.' },
    { icono: '🕊️', nombre: 'Paz', descripcion: 'Construimos relaciones y entornos basados en el diálogo, el respeto, la convivencia y la resolución pacífica de conflictos.' }
  ],
  programas: [
    { nombre: 'Jóvenes que Inspiran Bienestar', descripcion: 'Fortalecimiento de capacidades juveniles y formación de multiplicadores.' },
    { nombre: 'Comunidades que Crecen en Bienestar', descripcion: 'Procesos comunitarios de bienestar, autocuidado, coocuidado y fortalecimiento de redes.' },
    { nombre: 'Escuelas que Crecen en Bienestar', descripcion: 'Acompañamiento a comunidades educativas.' },
    { nombre: 'Familias que Crecen en Bienestar', descripcion: 'Fortalecimiento de capacidades familiares y redes de apoyo.' }
  ],
  metodologia: ['Escuchamos', 'Diagnosticamos', 'Construimos', 'Implementamos', 'Fortalecemos', 'Multiplicamos', 'Sostenemos'],
  mision: 'Promover el desarrollo integral del ser humano a lo largo de sus diferentes ciclos de vida, mediante procesos de acompañamiento psicosocial con enfoque preventivo.',
  vision: 'Para el año 2030, ser una organización reconocida a nivel local y nacional por su impacto en la promoción del bienestar emocional y mental, destacándose por la implementación de estrategias innovadoras, humanas y sostenibles que contribuyan a la transformación positiva de individuos, familias y comunidades.'
};

exports.getInicio = (req, res) => {
  res.render('index', { title: 'Inicio', datos: datosONG, paginaActiva: 'inicio' });
};

exports.getQuienesSomos = (req, res) => {
  res.render('quienes-somos', { title: 'Quiénes Somos', datos: datosONG, paginaActiva: 'quienes-somos' });
};

exports.getQueHacemos = (req, res) => {
  res.render('que-hacemos', { title: 'Qué Hacemos', datos: datosONG, paginaActiva: 'que-hacemos' });
};

exports.getProgramas = (req, res) => {
  res.render('programas', { title: 'Programas', datos: datosONG, paginaActiva: 'programas' });
};

exports.getTransparencia = (req, res) => {
  res.render('transparencia', { title: 'Transparencia', datos: datosONG, paginaActiva: 'transparencia' });
};

exports.getAlianzas = (req, res) => {
  res.render('alianzas', { title: 'Alianzas', datos: datosONG, paginaActiva: 'alianzas' });
};

exports.getParticipa = (req, res) => {
  res.render('participa', { title: 'Participa', datos: datosONG, paginaActiva: 'participa' });
};

exports.getContacto = (req, res) => {
  res.render('contacto', { title: 'Contáctanos', datos: datosONG, paginaActiva: 'contacto' });
};