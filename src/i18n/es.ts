// Spanish content for the full site, written for Santa Ana's Spanish speaking
// community. Usted form throughout, warm and plain, mirroring the English
// content shape for shape so every page renders from the same components.

import type { NavLink } from "../content/nav";

// ---------------------------------------------------------------- navigation

export const navLinksEs: NavLink[] = [
  { label: "Inicio", href: "/es/" },
  { label: "Servicios", href: "/es/services" },
  { label: "Nosotros", href: "/es/about" },
  { label: "Pacientes Nuevos", href: "/es/new-patients" },
  { label: "Seguro Dental", href: "/es/insurance" },
  { label: "Contacto", href: "/es/contact" },
];

export const bookLabelEs = "Hacer una Cita";
export const bookHrefEs = "/es/book";

// ------------------------------------------------------------------ site ui

export const uiEs = {
  skipLabel: "Saltar al contenido",
  tagline: "su cuidado es nuestra prioridad",
  langLabel: "EN",
  langAria: "View this site in English",
  menuText: "Menú",
  openMenu: "Abrir menú",
  closeMenu: "Cerrar menú",
  menuPanelTitle: "Menú",
  navAria: "Sitio",
  footerPages: "Páginas",
  footerHours: "Horario",
  footerContact: "Contacto",
  rights: "Todos los derechos reservados.",
  siteBy: "Sitio por Carbon Quill Media",
  faxLabel: "Fax",
  callLabel: "Llame al",
  hours: [
    { label: "Lunes a viernes", value: "9:00 a.m. a 6:00 p.m." },
    { label: "Sábado y domingo", value: "Cerrado" },
  ],
  hoursNote:
    "Con frecuencia hay citas disponibles el mismo día entre semana. Llame y haremos lo posible por atenderle.",
  privacyLabel: "Aviso de Privacidad",
  privacyHref: "/es/privacy",
  accessibilityLabel: "Accesibilidad",
  accessibilityHref: "/es/accessibility",
  landmarks:
    "Estamos en la esquina de Central y Bristol, entre Segerstrom y Warner, en la plaza comercial donde está el KFC, justo enfrente del hospital Coastal Community.",
};

export const uiEn = {
  skipLabel: "Skip to content",
  tagline: "your care is our concern",
  langLabel: "ES",
  langAria: "Ver este sitio en español",
  menuText: "Menu",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  menuPanelTitle: "Menu",
  navAria: "Site",
  footerPages: "Pages",
  footerHours: "Hours",
  footerContact: "Contact",
  rights: "All rights reserved.",
  privacyLabel: "Privacy Policy",
  privacyHref: "/privacy",
  accessibilityLabel: "Accessibility",
  accessibilityHref: "/accessibility",
  siteBy: "Site by Carbon Quill Media",
  faxLabel: "Fax",
  callLabel: "Call",
};

// ---------------------------------------------------------------- home page

export const heroEs = {
  supporting:
    "Cuidado completo para cada sonrisa de la familia, desde la primera limpieza hasta restauraciones completas",
  label: "Su Dentista de Confianza en Santa Ana",
  displayLines: ["Sonrisas", "Bristol"],
  corner: "Atención Bilingüe",
};

export const heroSrHeadingEs =
  "Bristol Family Dental Center, su dentista de confianza en Santa Ana";

export const galleryEs = {
  heading: "Odontología Cosmética",
  sub: "Cuatro maneras de transformar sonrisas",
  tallCard: "Si quiere una sonrisa espectacular, pregunte por un cambio de sonrisa completo.",
  display: "Nueva sonrisa",
  cards: [
    { number: "01", name: "Carillas Dentales", href: "/es/services#veneers", active: true },
    { number: "02", name: "Coronas Dentales", href: "/es/services#crowns", active: false },
    { number: "03", name: "Blanqueamiento", href: "/es/services#whitening", active: false },
    { number: "04", name: "Implantes Dentales", href: "/es/services#implants", active: false },
  ],
};

export const implantEs = {
  displayLines: ["Implantes", "Dentales"],
  subtitle: "Recupere Sus Dientes",
  consultLabel: "Consulta",
  consultHeading: "Servicios de Restauración Dental",
  consultCta: "Reserve en Línea",
  overlayCards: [
    { title: "El Proceso de Colocar Implantes", href: "/es/services#implants", glass: false },
    { title: "El Cuidado de los Implantes", href: "/es/services#implants", glass: true },
  ],
  processSteps: [
    {
      number: "1",
      title: "Consulta",
      text: "Un examen y una conversación honesta para confirmar que el implante es adecuado para usted.",
    },
    {
      number: "2",
      title: "Colocación",
      text: "El pequeño poste de titanio se coloca y se deja integrar con el hueso.",
    },
    {
      number: "3",
      title: "Restauración",
      text: "Se coloca su corona hecha a la medida y su sonrisa vuelve a estar completa.",
    },
  ],
};

export const implantAltsEs = {
  implant1:
    "Ilustración en corte de un implante dental con poste de titanio, pilar y corona junto a un diente natural",
  implant2:
    "Modelo transparente de una mandíbula que muestra un implante dental en lugar de una muela",
  clinic: "Sala de tratamiento dental moderna y luminosa con sillón y lámpara de examen",
};

export const whyEs = {
  label: "Por Qué Bristol",
  heading: "Cuidado en el que toda su familia puede confiar",
  cards: [
    {
      icon: "tooth",
      title: "Ortodoncia bajo este techo",
      text: "Frenos y alineadores transparentes para niños, adolescentes y adultos, con el mismo equipo que cuida el resto de su sonrisa. Dientes más derechos sin ir de un consultorio a otro.",
    },
    {
      icon: "globe",
      title: "Todo nuestro equipo habla español",
      text: "Haga sus preguntas en inglés o en español y reciba las respuestas en el idioma en el que piensa.",
    },
    {
      icon: "family",
      title: "Un consultorio para toda la familia",
      text: "Primeras limpiezas, frenos, implantes y dentaduras. Cuidamos a niños, papás y abuelos bajo un mismo techo, y coordinamos especialistas de confianza cuando el caso lo requiere.",
    },
  ],
};

export const finalCtaEs = {
  heading: "Listos cuando usted lo esté.",
  sub: "Reserve en línea en dos minutos, o llame y hable con una persona real. También hablamos inglés.",
};

// ----------------------------------------------------------------- reviews

export const reviewsSectionEs = {
  label: "Reseñas de Pacientes",
  heading: "Lo que dicen nuestros pacientes",
  body: "Reseñas reales de pacientes reales, en sus propias palabras. Puede leerlas todas en la plataforma que prefiera.",
};

export const reviewCountLabelsEs: Record<string, string> = {
  Yelp: "51 reseñas",
  Google: "38 reseñas",
  Facebook: "29 reseñas",
};

export const reviewNoteEs = "contadas vía Birdeye";
export const recommendedEs = "Recomendado";
export const starAriaEs = "reseña de 5 estrellas";
export const onLabelEs = "en";

export const homeFaqEs = [
  {
    question: "¿Aceptan mi seguro dental?",
    answer:
      "Aceptamos casi todos los planes de seguro dental, incluyendo la mayoría de los planes PPO, planes HMO y Denti-Cal. Díganos su aseguradora al hacer su cita y revisamos su cobertura antes de que se siente en el sillón.",
    linkLabel: "Hacer una cita",
    linkHref: "/es/book",
  },
  {
    question: "¿Qué pasa si no tengo seguro?",
    answer:
      "Con gusto le atendemos. Aceptamos efectivo, cheques y todas las tarjetas principales, y el financiamiento CareCredit está disponible para pacientes que califican. Nuestra recepción le explica todas las opciones.",
    linkLabel: "Hacer una cita",
    linkHref: "/es/book",
  },
  {
    question: "¿Qué debo traer a mi primera visita?",
    answer:
      "Una identificación con foto, su tarjeta de seguro dental si la tiene, y una lista de los medicamentos que toma. También puede descargar el formulario para pacientes nuevos y llenarlo en casa.",
    linkLabel: "Prepare su primera visita",
    linkHref: "/es/new-patients",
  },
  {
    question: "¿Atienden a niños y adultos?",
    answer:
      "Sí. Cuidamos a niños, papás y abuelos bajo un mismo techo, desde las primeras limpiezas hasta frenos, implantes y dentaduras, y coordinamos especialistas de confianza cuando el caso lo requiere.",
    linkLabel: "Hacer una cita",
    linkHref: "/es/book",
  },
  {
    question: "¿Ofrecen frenos o alineadores transparentes?",
    answer:
      "Sí. Ofrecemos ortodoncia para niños, adolescentes y adultos, incluyendo frenos tradicionales y alineadores transparentes, con revisiones constantes durante el tratamiento. Pida una consulta de ortodoncia al hacer su cita.",
    linkLabel: "Hacer una cita",
    linkHref: "/es/book",
  },
];

export const homeFaqSectionEs = {
  label: "Preguntas Comunes",
  heading: "Antes de hacer su cita",
  moreLabel: "Más preguntas que nos hacen los pacientes",
  moreHref: "/es/new-patients#faq-heading",
};

// ---------------------------------------------------------------- services

export const serviceGroupsEs = [
  {
    id: "general",
    name: "Odontología General",
    intro:
      "El cuidado de todos los días que evita que los problemas pequeños crezcan. La mayoría de las visitas a nuestro consultorio comienzan aquí.",
    services: [
      {
        id: "exams",
        name: "Exámenes de Rutina",
        blurb:
          "Un examen de rutina es la manera de detectar los problemas pequeños mientras siguen siendo pequeños. El Dr. Begino revisa sus dientes, encías y mordida, y le explica lo que ve con palabras sencillas. Usted sale con una idea clara de su salud dental y un consejo honesto sobre lo que sigue, si es que algo sigue.",
        whoFor: "Para cada miembro de la familia, desde los niños hasta los abuelos.",
      },
      {
        id: "cleanings",
        name: "Limpiezas",
        blurb:
          "Una limpieza profesional quita la placa y el sarro que el cepillo no alcanza. Sus dientes quedan pulidos, sus encías revisadas, y su sonrisa sale más brillante de lo que llegó.",
        whoFor: "Para todos, más o menos cada seis meses.",
      },
      {
        id: "fillings",
        name: "Resinas",
        blurb:
          "Cuando se forma una caries, la resina detiene el daño y reconstruye el diente. Ofrecemos resinas blancas del color natural de sus dientes, para que la reparación no se note. La visita es rápida y cómoda.",
        whoFor: "Para dientes con caries o pequeñas fracturas.",
      },
      {
        id: "root-canals",
        name: "Endodoncias",
        blurb:
          "Una endodoncia salva un diente muy dañado o infectado, y quita el dolor que lo acompaña. Limpiamos la infección, sellamos el diente y normalmente lo protegemos con una corona. Los casos complicados van con un endodoncista de confianza de nuestra red de especialistas.",
        whoFor: "Para un diente con caries profunda, infección o dolor constante.",
      },
      {
        id: "extractions",
        name: "Extracciones",
        blurb:
          "A veces lo más sano es retirar un diente que ya no se puede salvar. Hacemos el procedimiento lo más suave posible y le explicamos cada opción de reemplazo, desde puentes hasta implantes. Los casos complejos, incluyendo las muelas del juicio, se atienden con nuestros cirujanos orales de confianza.",
        whoFor: "Para dientes demasiado dañados, o muelas del juicio problemáticas.",
      },
    ],
  },
  {
    id: "restorative",
    name: "Odontología Restauradora",
    intro:
      "Reconstruir dientes dañados o perdidos es el corazón de la formación del Dr. Begino, reconocida por el American College of Prosthodontics.",
    services: [
      {
        id: "crowns",
        name: "Coronas",
        blurb:
          "Una corona es una funda hecha a la medida que cubre un diente debilitado o roto, y le devuelve su fuerza y su forma. Cada corona se iguala con cuidado al color de su sonrisa, para que parezca que siempre estuvo ahí.",
        whoFor: "Para dientes fracturados, desgastados o con muchas resinas.",
      },
      {
        id: "bridges",
        name: "Puentes",
        blurb:
          "Un puente llena el espacio de un diente perdido con un reemplazo de aspecto natural, anclado a los dientes vecinos. Restaura su mordida y evita que los dientes de alrededor se muevan de su lugar.",
        whoFor: "Para uno o más dientes perdidos en fila.",
      },
      {
        id: "inlays-onlays",
        name: "Incrustaciones",
        blurb:
          "Las incrustaciones reparan daños demasiado grandes para una resina pero que no necesitan una corona completa. Se fabrican a la medida exacta de su diente, lo que conserva más de su esmalte sano.",
        whoFor: "Para daños que quedan entre una resina y una corona.",
      },
      {
        id: "dentures",
        name: "Dentaduras y Parciales",
        blurb:
          "Las dentaduras completas y parciales reemplazan varios dientes a la vez, para que pueda comer, hablar y sonreír con confianza otra vez. Las ajustamos con cuidado y seguimos afinándolas hasta que se sientan bien.",
        whoFor: "Para pacientes a los que les faltan varios dientes o una arcada completa.",
      },
      {
        id: "implants",
        name: "Implantes Dentales",
        blurb:
          "Un implante dental reemplaza un diente perdido desde la raíz. Un pequeño poste de titanio sostiene una corona a la medida que se ve, se siente y funciona como un diente natural. Los implantes también protegen el hueso y nunca se mueven como las opciones removibles.",
        whoFor: "Para una solución permanente a un diente perdido.",
      },
    ],
  },
  {
    id: "cosmetic",
    name: "Odontología Cosmética",
    intro:
      "Un cambio pequeño en una sonrisa puede cambiar cuántas veces la usa. Estos son los tratamientos detrás de nuestros cambios de sonrisa.",
    services: [
      {
        id: "veneers",
        name: "Carillas de Porcelana",
        blurb:
          "Las carillas de porcelana son láminas delgadas hechas a la medida que se adhieren al frente de sus dientes. Corrigen fracturas, espacios, manchas y formas disparejas en pocas visitas, y se moldean y matizan para verse completamente naturales.",
        whoFor: "Para dientes frontales que quisiera ver más derechos, blancos o parejos.",
      },
      {
        id: "whitening",
        name: "Blanqueamiento Dental",
        blurb:
          "El blanqueamiento profesional aclara de forma segura años de café, té y manchas del día a día. Funciona mejor y más parejo que los kits de farmacia, y protegemos sus encías durante todo el proceso.",
        whoFor: "Para una sonrisa más brillante antes de un evento, o simplemente porque sí.",
      },
    ],
  },
  {
    id: "orthodontics",
    name: "Ortodoncia",
    intro: "Dientes más derechos para niños, adolescentes y adultos, en el estilo que va con su vida.",
    services: [
      {
        id: "braces",
        name: "Frenos",
        blurb:
          "Los frenos enderezan los dientes y corrigen problemas de mordida poco a poco, con revisiones constantes en el camino. Atendemos a niños y adultos, y mantenemos el proceso sencillo desde la primera visita hasta la última revisión del retenedor.",
        whoFor: "Para dientes chuecos o problemas de mordida a cualquier edad.",
      },
      {
        id: "clear-aligners",
        name: "Alineadores Transparentes",
        blurb:
          "Los alineadores transparentes enderezan los dientes con una serie de guardas casi invisibles que puede quitarse para comer y cepillarse. La mayoría de la gente ni siquiera notará que los trae puestos.",
        whoFor: "Para adolescentes y adultos que quieren dientes derechos sin metal.",
      },
    ],
  },
];

export const specialistNetworkEs = {
  id: "specialists",
  name: "Nuestra Red de Especialistas",
  blurb:
    "Algunos casos necesitan un especialista, y llevamos años construyendo una red en la que confiamos. Coordinamos endodoncia para casos complicados, periodoncia para limpiezas profundas, odontopediatría para niños con necesidades especiales, y cirugía oral para extracciones complejas como las muelas del juicio. Nosotros hacemos la referencia, compartimos su expediente y seguimos pendientes de su cuidado de principio a fin.",
};

export const orthoHighlightEs = {
  label: "Ortodoncia",
  heading: "Dientes derechos, bajo este techo",
  body: "Los frenos y los alineadores transparentes son parte del cuidado diario en Bristol Family Dental Center. El mismo equipo que hace sus limpiezas y revisiones supervisa su tratamiento de ortodoncia, así que cada ajuste sucede con gente que ya conoce su sonrisa.",
  points: [
    "Frenos tradicionales para niños, adolescentes y adultos",
    "Alineadores casi invisibles que puede quitarse para comer y cepillarse",
    "Revisiones constantes con el mismo equipo de siempre",
  ],
};

export const servicesAltsEs = {
  hero: "Instrumentos dentales estériles acomodados en una charola de acero con luz azul",
  aligner: "Ilustración clínica de un alineador dental transparente con luz azul",
  specialists: "Sala de consulta luminosa con una mesa redonda y dos sillas",
};

// -------------------------------------------------------------- inner pages

export const aboutEs = {
  label: "Nosotros",
  heading: "El dentista en el que confían las familias de Santa Ana",
  teamHeading: "El equipo que le va a atender",
  volunteerHeading: "Cuidado que viaja",
  educationHeading: "Formación y reconocimientos",
  heroAlt: "Sala de espera soleada de una clínica dental moderna",
  teamPhotoAlt: "Recepción de un consultorio dental moderno con pared azul marino y mostrador de madera",
};

export const doctorEs = {
  role: "Dentista Principal, Jefe de Odontología desde 2006",
  intro:
    "El Dr. Ruben H. Begino dirige la odontología de Bristol Family Dental Center desde 2006. Sus pacientes lo conocen por sus manos suaves, sus respuestas directas y una práctica construida alrededor de las familias, no de las ventas. Habla español con fluidez y trata a cada paciente como quisiera que trataran a su propia familia.",
  educationCopy:
    "El Dr. Begino obtuvo su licenciatura en Biología con honores en UC Irvine en 1996, y su doctorado en cirugía dental en la escuela de odontología de UC San Francisco en 2001. Ese mismo año, su trabajo fue reconocido por el American College of Prosthodontics y por la American Academy of Esthetic Dentistry, dos de las organizaciones más respetadas en odontología restauradora y cosmética. Dirige la odontología de Bristol Family Dental Center desde 2006.",
  volunteerCopy:
    "Para el Dr. Begino, la odontología nunca ha terminado en la puerta del consultorio. Ha llevado cuidado dental gratuito a familias en México, Guatemala y Belice, ha servido en iniciativas como Puente a la Salud y La Amistad, ha promovido la odontología pediátrica en todo el condado de Orange, ha atendido a pacientes sin hogar y ha trabajado en ferias de salud locales. La misma convicción que guía todo eso también da forma a esta práctica: el buen cuidado dental es de todos.",
  volunteerItems: [
    "Viajes de cuidado dental gratuito a México, Guatemala y Belice",
    "Servicio con Puente a la Salud y La Amistad",
    "Promoción de la odontología pediátrica en el condado de Orange",
    "Atención a pacientes sin hogar y ferias de salud locales",
  ],
};

export const teamEs = [
  {
    name: "Dr. Pablo Lazaro",
    role: "Dentista",
    note: "Ofrece toda la gama de cuidado general y restaurador junto al Dr. Begino.",
  },
  {
    name: "Jacquelin Magaña",
    role: "Gerente de Oficina",
    note: "Mantiene el consultorio funcionando sin problemas y le ayuda con citas, seguros y planes de pago.",
  },
  {
    name: "Roxana Rojas",
    role: "Recepción",
    note: "La voz amable del teléfono. Le encontrará un horario que le funcione y responderá sus preguntas.",
  },
  {
    name: "Elizabeth Camberos",
    role: "Asistente Dental",
    note: "Hace que cada visita sea cómoda, puntual y bien preparada, al lado de los doctores.",
  },
];

export const bilingualNoteEs =
  "Todo nuestro equipo es bilingüe. Haga sus preguntas en inglés o en español y reciba las respuestas en el idioma en el que piensa.";

export const newPatientsEs = {
  label: "Pacientes Nuevos",
  heading: "Su primera visita, sin misterios",
  expectHeading: "Qué esperar",
  expect:
    "Revisaremos su historial de salud y haremos un examen completo. Antes de irse, el doctor le explicará lo que encontró y lo que recomienda, con palabras sencillas. Sin sorpresas y sin presión.",
  bringHeading: "Qué traer",
  bring: [
    "Una identificación con foto",
    "Su tarjeta de seguro dental, si la tiene",
    "Una lista de los medicamentos que toma",
    "Su formulario de paciente nuevo, si lo llenó en casa",
  ],
  formsHeading: "Formularios para pacientes nuevos",
  formsCopy:
    "Ahorre tiempo en la sala de espera. Descargue el formulario de paciente nuevo, llénelo en casa y tráigalo a su primera visita. El formulario está disponible en español y en inglés.",
  formEn: { label: "Download Form (English)", href: "/forms/new-patient-en.pdf" },
  formEs: { label: "Descargar Formulario (Español)", href: "/forms/new-patient-es.pdf" },
  faqHeading: "Preguntas que nos hacen los pacientes",
};

export const insuranceEs = {
  label: "Seguro y Formas de Pago",
  heading: "Hacemos simple la parte del dinero",
  intro:
    "Aceptamos casi todos los planes de seguro dental, y le ayudamos a entender el suyo. Traiga su tarjeta a su primera visita, o díganos su aseguradora al hacer su cita, y revisamos su cobertura antes de que se siente en el sillón.",
  plans: [
    {
      id: "ppo",
      badge: "PPO",
      name: "Planes PPO",
      text: "Somos proveedor preferido de la mayoría de los planes PPO. Eso significa que su aseguradora ya trabaja directamente con nuestro consultorio, así que sus beneficios se aplican sin complicaciones desde la primera visita.",
    },
    {
      id: "hmo",
      badge: "HMO",
      name: "Planes HMO",
      text: "Recibimos con gusto a pacientes con HMO, con un detalle importante: su plan debe asignarlo o transferirlo a nuestro consultorio antes de su visita. Una llamada rápida al número de su tarjeta de seguro normalmente lo resuelve, y nuestra recepción le guía paso a paso.",
    },
    {
      id: "denti-cal",
      badge: "Denti-Cal",
      name: "Denti-Cal",
      text: "Aceptamos con orgullo Denti-Cal, la cobertura dental de California para miembros de Medi-Cal. Si no está seguro de lo que cubre su plan, pregúntenos y le ayudamos a averiguarlo.",
    },
  ],
  paymentHeading: "¿Sin seguro? Igual le atendemos.",
  payment: [
    {
      id: "cash-cards",
      badge: "Efectivo y Tarjetas",
      name: "Efectivo, Cheque y Tarjetas",
      text: "Aceptamos efectivo, cheques personales y todas las tarjetas principales. Pague de la forma que mejor le funcione.",
    },
    {
      id: "carecredit",
      badge: "CareCredit",
      name: "Financiamiento CareCredit",
      text: "CareCredit permite a los pacientes que califican dividir su tratamiento en pagos mensuales manejables. La solicitud toma unos minutos y la aprobación suele ser inmediata.",
    },
    {
      id: "in-house",
      badge: "Financiamiento Propio",
      name: "Financiamiento del Consultorio",
      text: "También ofrecemos una opción limitada de financiamiento propio para pacientes seleccionados. Se requiere un depósito, y nuestra gerente de oficina puede decirle si su tratamiento califica.",
    },
  ],
  promiseEyebrow: "Trabajando Con Usted",
  promiseHeading: "Nuestra promesa para usted",
  promise:
    "Antes de comenzar cualquier tratamiento, usted sabrá exactamente qué recomendamos, por qué lo recomendamos y cómo se aplica su cobertura. Le explicamos todo con palabras sencillas, y nunca le presionamos hacia un tratamiento que no necesita.",
  promiseAlt: "Mostrador de recepción de un consultorio dental con un fólder y una plantita",
};

export const contactEs = {
  label: "Contacto",
  heading: "Venga a saludarnos",
  findUsHeading: "Cómo encontrarnos",
  hoursHeading: "Horario de oficina",
  mapTitle: "Mapa que muestra Bristol Family Dental Center en 2618 S Bristol St, Santa Ana, CA 92704",
  directionsCta: "Cómo Llegar",
};

export const bookEs = {
  label: "Haga una Cita",
  heading: "Encontremos su horario",
  sub: "Cuéntenos un poco de lo que necesita y qué días le funcionan mejor. Le llamaremos para confirmar su cita. ¿Prefiere hablar con una persona ahora mismo? Llámenos en horario de oficina.",
  formHeading: "Solicite una cita",
  confirmHeading: "¡Solicitud recibida!",
  confirm:
    "Gracias. Nuestra recepción le llamará para confirmar un horario que le funcione. Si nos necesita antes, llame al (714) 540-7101 en horario de oficina y con gusto le contestamos.",
  privacyNote: "Solo usamos su información para contactarle sobre su cita.",
  ratherCallHeading: "¿Prefiere llamar?",
  ratherCallText:
    "La mayoría de nuestros pacientes hacen su cita por teléfono. Llame en horario de oficina y le contesta una persona real, en español o en inglés.",
  officeHoursHeading: "Horario de oficina",
};

export const bookFormEs = {
  fields: {
    name: {
      label: "Nombre completo",
      placeholder: "Su nombre completo",
      error: "Por favor díganos su nombre.",
    },
    phone: {
      label: "Número de teléfono",
      placeholder: "(714) 555-0123",
      error: "Necesitamos un número de teléfono para confirmar su cita.",
    },
    email: {
      label: "Correo electrónico (opcional)",
      placeholder: "usted@ejemplo.com",
      error: "Ese correo no se ve bien.",
    },
    preferred: {
      label: "Días y horarios preferidos",
      placeholder: "Entre semana por la mañana o por la tarde",
      error: "Díganos qué días u horarios le funcionan en general.",
    },
    service: {
      label: "¿Qué necesita?",
      error: "Por favor elija la opción más cercana.",
    },
    newPatient: {
      label: "¿Es usted paciente nuevo?",
      yes: "Sí, es mi primera visita",
      no: "No, ya he venido antes",
    },
    insurance: {
      label: "Aseguradora (opcional)",
      placeholder: "Delta Dental, MetLife, Denti-Cal...",
    },
    message: {
      label: "¿Algo más? (opcional)",
      placeholder: "Dolor, preguntas o cualquier cosa que debamos saber antes de su visita.",
    },
  },
  notSure: "Aún no estoy seguro",
  submit: "Enviar Solicitud de Cita",
  submitting: "Enviando...",
  errorGeneric:
    "Algo salió mal al enviar su solicitud. Inténtelo de nuevo en un momento, o llámenos al (714) 540-7101.",
  errorTooFast: "¡Qué rapidez! Tómese un momento para revisar sus datos y envíelo de nuevo.",
  errorRate:
    "Hemos recibido varias solicitudes desde esta conexión. Llámenos al (714) 540-7101 y le ayudamos directamente.",
  checkFields: "Por favor revise los campos marcados abajo.",
};

export const notFoundEs = {
  heading: "Esta página se movió, o nunca existió.",
  sub: "No hay problema. Todo el consultorio está a un clic de distancia.",
  homeCta: "Volver al Inicio",
};

// ------------------------------------------------------------------ seo

export const seoEs: Record<string, { title: string; description: string }> = {
  home: {
    title: "Dentista en Santa Ana, CA | Bristol Family Dental Center",
    description:
      "Odontología familiar en Santa Ana, desde limpiezas y resinas hasta implantes, carillas, frenos y alineadores transparentes. Equipo bilingüe y casi todos los seguros aceptados, incluyendo Denti-Cal. Llame al (714) 540-7101.",
  },
  services: {
    title: "Servicios Dentales en Santa Ana | Bristol Family Dental Center",
    description:
      "Cuidado dental completo bajo un mismo techo en Santa Ana: exámenes, limpiezas, resinas, endodoncias, coronas, dentaduras, implantes, carillas, blanqueamiento y ortodoncia.",
  },
  about: {
    title: "Conozca al Dr. Ruben Begino, D.D.S. | Bristol Family Dental Center",
    description:
      "El Dr. Ruben Begino, formado en UCSF, dirige Bristol Family Dental Center en Santa Ana desde 2006. Conozca al equipo bilingüe detrás de nuestro cálido cuidado familiar.",
  },
  newPatients: {
    title: "Pacientes Nuevos y Preguntas | Bristol Family Dental Center",
    description:
      "¿Nuevo en Bristol Family Dental Center en Santa Ana? Vea qué esperar en su primera visita, descargue los formularios en español o inglés y encuentre respuestas a preguntas comunes.",
  },
  insurance: {
    title: "Seguro Dental y Formas de Pago | Bristol Family Dental Center",
    description:
      "Aceptamos casi todos los seguros dentales en Santa Ana: PPO, HMO y Denti-Cal, además de financiamiento CareCredit y efectivo, cheque o tarjeta. Su cobertura explicada antes del tratamiento.",
  },
  book: {
    title: "Haga una Cita | Bristol Family Dental Center",
    description:
      "Solicite una cita dental en Bristol Family Dental Center en Santa Ana. Cuéntenos qué necesita y cuándo le funciona, y nuestra recepción bilingüe le llamará para confirmar.",
  },
  contact: {
    title: "Contacto en Santa Ana | Bristol Family Dental Center",
    description:
      "Encuentre Bristol Family Dental Center en 2618 S. Bristol St., Santa Ana, en la esquina de Central y Bristol. Horario, cómo llegar, teléfono y fax de nuestro consultorio dental familiar.",
  },
};

// ------------------------------------------------------------------ faq

export const faqEs = [
  {
    question: "¿Con qué frecuencia debo cepillarme y usar hilo dental?",
    answer:
      "Cepíllese por lo menos dos veces al día con un cepillo suave y pasta con flúor, y use hilo dental una vez al día. El cepillo limpia las superficies de los dientes, y el hilo alcanza la placa que se esconde entre ellos. Juntos toman unos cinco minutos al día, y son el cuidado dental más barato que va a encontrar.",
  },
  {
    question: "¿Son seguras las amalgamas (rellenos plateados)?",
    answer:
      "Las amalgamas se han usado por más de un siglo, y las principales organizaciones de salud, incluyendo la American Dental Association, las consideran seguras para la mayoría de las personas. Aun así, muchos de nuestros pacientes prefieren las resinas blancas, que no contienen metal y se confunden con el diente natural. Si quiere que revisemos o cambiemos una amalgama vieja, con gusto le explicamos sus opciones.",
  },
  {
    question: "¿Cada cuánto debo hacerme un examen y una limpieza?",
    answer:
      "Para la mayoría de las personas, cada seis meses está bien. Las visitas regulares nos permiten quitar el sarro antes de que cause problemas y detectar lo pequeño antes de que se vuelva grande. Si tiene enfermedad de las encías u otra condición, puede que le sugiramos venir un poco más seguido.",
  },
  {
    question: "¿Por qué siento sensibilidad al cepillarme?",
    answer:
      "La sensibilidad normalmente significa que la capa interna más suave del diente está expuesta, muchas veces por encías retraídas, esmalte desgastado o por cepillarse demasiado fuerte. Un cepillo más suave, una pasta desensibilizante y una mano más ligera suelen ayudar. Si un diente en particular está muy sensible, hay que revisarlo, porque puede ser señal de caries o de una fractura.",
  },
  {
    question: "¿Qué causa el mal aliento y qué puedo hacer?",
    answer:
      "La mayoría del mal aliento empieza en la boca: comida atrapada entre los dientes, placa, enfermedad de las encías o boca seca. Cepillarse, usar hilo dental, limpiarse la lengua y tomar suficiente agua resuelve la mayoría de los casos. Si no mejora, venga a vernos, porque el mal aliento persistente puede señalar una enfermedad de las encías que necesita tratamiento.",
  },
  {
    question: "Me sangran las encías al cepillarme. ¿Es gingivitis?",
    answer:
      "Las encías que sangran suelen ser la primera señal de gingivitis, una etapa temprana de la enfermedad de las encías causada por la placa. La buena noticia es que la gingivitis normalmente es reversible con una limpieza profesional y con cepillado e hilo dental constantes en casa. No la ignore, porque la enfermedad de las encías sin tratar puede llegar a aflojar los dientes.",
  },
  {
    question: "¿De verdad necesito usar hilo dental?",
    answer:
      "Sí. El cepillo no alcanza los espacios apretados entre los dientes, y justo ahí es donde empiezan las caries y la enfermedad de las encías. Si el hilo tradicional se le dificulta, pregúntenos por los arcos de hilo y los cepillos interdentales que hacen el mismo trabajo.",
  },
  {
    question: "¿Qué puede hacer por mí la odontología cosmética?",
    answer:
      "La odontología cosmética moderna puede blanquear dientes manchados, reparar fracturas, cerrar espacios y darle nueva forma a una sonrisa que ha estado escondiendo. Los tratamientos van desde una sola visita de blanqueamiento hasta un cambio de sonrisa completo con carillas. Si hay algo de su sonrisa que cambiaría, pregúntenos qué es posible.",
  },
  {
    question: "¿Qué son las carillas de porcelana?",
    answer:
      "Las carillas son láminas delgadas de porcelana que se adhieren al frente de los dientes. Cubren manchas, fracturas, espacios y bordes disparejos, y se moldean y matizan para verse completamente naturales. Con buen cuidado, duran muchos años.",
  },
  {
    question: "¿Qué puedo hacer con los dientes manchados?",
    answer:
      "Depende de la mancha. Las manchas superficiales de café, té o tabaco normalmente responden bien a una limpieza y a un blanqueamiento profesional. Las manchas profundas dentro del diente pueden necesitar carillas o resina estética. Nosotros le decimos qué tipo tiene y qué va a funcionar de verdad, para que no gaste en productos que no ayudan.",
  },
  {
    question: "¿Qué alimentos son buenos para mis dientes y encías?",
    answer:
      "Las frutas y verduras crujientes, el queso, el yogur, las nueces y suficiente agua son amigos de su sonrisa. Ayudan a limpiar los dientes, fortalecen el esmalte y equilibran los ácidos de la boca. Lo que hay que limitar son las bebidas azucaradas, los dulces pegajosos y estar comiendo a cada rato, porque le dan a las caries un suministro constante de comida.",
  },
];
