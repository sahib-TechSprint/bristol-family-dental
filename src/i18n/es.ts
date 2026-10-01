// Spanish content for the full site, written for Santa Ana's Spanish speaking
// community. Usted form throughout, warm and plain, mirroring the English
// content shape for shape so every page renders from the same components.

import type { NavLink } from "../content/nav";
import { practice } from "../content/practice";

// ---------------------------------------------------------------- navigation

export const navLinksEs: NavLink[] = [
  { label: "Inicio", href: "/es" },
  { label: "Servicios", href: "/es/services" },
  { label: "Nosotros", href: "/es/about" },
  { label: "Pacientes Nuevos", href: "/es/new-patients" },
  { label: "Seguro Dental", href: "/es/insurance" },
  { label: "Contacto", href: "/es/contact" },
];

/** Primary action everywhere: a phone call to the front desk. */
export const callLabelEs = `Llame al ${practice.phone.display}`;
export const callShortEs = "Llamar";
export const secondaryLabelEs = "Horario y cómo llegar";
export const secondaryHrefEs = "/es/contact";

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
  termsLabel: "Términos de Uso",
  termsHref: "/es/terms",
  accessibilityLabel: "Accesibilidad",
  accessibilityHref: "/es/accessibility",
  licenseLine: "Pablo Lazaro, D.D.S., dentista con licencia del Dental Board of California.",
  boardNotice: "Aviso para los consumidores: los dentistas tienen licencia y están regulados por el Dental Board of California,",
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
  termsLabel: "Terms of Use",
  termsHref: "/terms",
  accessibilityLabel: "Accessibility",
  accessibilityHref: "/accessibility",
  licenseLine: "Pablo Lazaro, D.D.S., dentist licensed by the Dental Board of California.",
  boardNotice: "Notice to consumers: dentists are licensed and regulated by the Dental Board of California,",
  siteBy: "Site by Carbon Quill Media",
  faxLabel: "Fax",
  callLabel: "Call",
};

// ---------------------------------------------------------------- home page

export const heroEs = {
  supporting:
    "Cuidado completo para cada sonrisa de la familia, desde la primera limpieza hasta restauraciones completas",
  label: "Dentista Familiar en Santa Ana",
  displayLines: ["Bristol Family", "Dental Center"],
  corner: "Atención Bilingüe",
  facts: ["Niños, adolescentes y adultos", "Frenos y alineadores transparentes", "La mayoría de los seguros, incluyendo Denti-Cal"],
  secondaryLabel: "Ver servicios",
  secondaryHref: "/es/services",
  image: {
    src: "/images/family-brushes.webp",
    mobileSrc: "/images/family-brushes-mobile.webp",
    alt: "Ilustración clínica de tres cepillos de dientes de tres tamaños, desde el de un niño hasta el de un adulto, en un vaso esmerilado sobre una superficie azul oscuro",
  },
};

export const heroSrHeadingEs =
  "Bristol Family Dental Center, dentista familiar en Santa Ana";

export const galleryEs = {
  heading: "Odontología Cosmética",
  sub: "Cuatro maneras de mejorar sonrisas",
  tallCard: "Los dientes astillados, manchados o disparejos se pueden corregir. Pregunte por un cambio de sonrisa.",
  display: "Nueva sonrisa",
  imageAlt: "Ilustración clínica de carillas de porcelana y una corona de cerámica sobre una superficie azul oscuro",
  cards: [
    { number: "01", name: "Carillas Dentales", href: "/es/services#veneers", active: true },
    { number: "02", name: "Coronas Dentales", href: "/es/services#crowns", active: false },
    { number: "03", name: "Blanqueamiento", href: "/es/services#whitening", active: false },
    { number: "04", name: "Alineadores Transparentes", href: "/es/services#clear-aligners", active: false },
  ],
};

export const restorativeEs = {
  displayLines: ["Odontología", "Restauradora"],
  subtitle: "Reparar y Reemplazar",
  consultLabel: "Cómo funciona",
  consultHeading: "Coronas, Puentes y Dentaduras",
  overlayCards: [
    { title: "Coronas y puentes", href: "/es/services#crowns", glass: false },
    { title: "Dentaduras y parciales", href: "/es/services#dentures", glass: true },
  ],
  processSteps: [
    {
      number: "1",
      title: "Consulta",
      text: "Un examen, radiografías si hacen falta y una explicación sencilla de lo que se puede salvar y lo que conviene reemplazar.",
    },
    {
      number: "2",
      title: "Preparación",
      text: "Se da forma al diente o se toman impresiones, y un provisional lo protege mientras el laboratorio hace la pieza final.",
    },
    {
      number: "3",
      title: "Colocación",
      text: "Su corona, puente o dentadura se prueba, se ajusta y se revisa hasta que la mordida se sienta bien.",
    },
  ],
  images: {
    first: { src: "/images/restorative-bridge.webp", alt: "Ilustración clínica de un puente dental de cerámica de tres piezas sobre una superficie azul oscuro" },
    second: { src: "/images/restorative-denture.webp", alt: "Ilustración clínica de un modelo de dentadura superior completa con base translúcida sobre una superficie azul oscuro" },
    tall: { src: "/images/restoration-tall.webp", alt: "Modelo dental transparente de enseñanza con las arcadas superior e inferior sobre un pequeño articulador" },
  },
};

export const restorativeAltsEs = {
  first: "Ilustración clínica de un puente dental de cerámica de tres piezas sobre una superficie azul oscuro",
  second: "Ilustración clínica de un modelo de dentadura superior completa con base translúcida sobre una superficie azul oscuro",
  tall: "Modelo dental transparente de enseñanza con las arcadas superior e inferior sobre un pequeño articulador",
};

export const whyEs = {
  label: "Por qué Bristol Family Dental Center",
  heading: "Cuidado en el que toda su familia puede confiar",
  cards: [
    {
      icon: "tooth",
      title: "Ortodoncia bajo este techo",
      text: "Frenos y alineadores transparentes para niños, adolescentes y adultos, con la atención del Dr. Efrain Chara, ortodoncista, aquí mismo en nuestro consultorio. Dientes más derechos sin ir de un consultorio a otro.",
    },
    {
      icon: "globe",
      title: "Hablamos español",
      text: "Nuestro equipo es bilingüe. Haga sus preguntas en inglés o en español y reciba las respuestas en el idioma en el que piensa.",
    },
    {
      icon: "family",
      title: "Un consultorio para toda la familia",
      text: "Primeras limpiezas, frenos, coronas y dentaduras. Cuidamos a niños, papás y abuelos bajo un mismo techo, y coordinamos especialistas de confianza cuando el caso lo requiere.",
    },
  ],
};

export const finalCtaEs = {
  heading: "Listos cuando usted lo esté.",
  sub: "Llame en horario de oficina y le contesta una persona real, en español o en inglés. Le encontramos un horario que le funcione.",
};

// ----------------------------------------------------------------- reviews

export const reviewsSectionEs = {
  label: "Reseñas de Pacientes",
  heading: "Lea lo que dicen nuestros pacientes",
  body: "Las reseñas las escriben los pacientes en plataformas independientes. Léalas todas, en sus propias palabras, en la plataforma que prefiera.",
  ratingAria: "calificación",
  outOf: "de 5",
};

// Keep these counts in step with src/content/reviews.ts.
export const reviewCountLabelsEs: Record<string, string> = {
  Yelp: "51 reseñas",
  Google: "38 reseñas",
  Facebook: "29 reseñas",
};

export const reviewNoteEs = "contadas vía Birdeye";
export const readLabelEs = "Leer reseñas en";

export const homeFaqEs = [
  {
    question: "¿Aceptan mi seguro dental?",
    answer:
      "Aceptamos la mayoría de los planes de seguro dental, incluyendo la mayoría de los planes PPO, planes HMO y Denti-Cal. Díganos su aseguradora al llamar y revisamos su cobertura antes de que se siente en el sillón.",
    linkLabel: "Seguro y formas de pago",
    linkHref: "/es/insurance",
  },
  {
    question: "¿Qué pasa si no tengo seguro?",
    answer:
      "Con gusto le atendemos. Aceptamos efectivo, cheques y todas las tarjetas principales, y el financiamiento CareCredit está disponible para pacientes que califican. Nuestra recepción le explica todas las opciones.",
    linkLabel: "Seguro y formas de pago",
    linkHref: "/es/insurance",
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
      "Sí. Cuidamos a niños, papás y abuelos bajo un mismo techo, desde las primeras limpiezas hasta frenos, coronas y dentaduras, y coordinamos especialistas de confianza cuando el caso lo requiere.",
    linkLabel: "Ver todos los servicios",
    linkHref: "/es/services",
  },
  {
    question: "¿Ofrecen frenos o alineadores transparentes?",
    answer:
      "Sí. Ofrecemos ortodoncia para niños, adolescentes y adultos, incluyendo frenos tradicionales y alineadores transparentes, con revisiones constantes durante el tratamiento. Pida una consulta de ortodoncia al llamar.",
    linkLabel: "Ortodoncia",
    linkHref: "/es/services#group-orthodontics",
  },
];

export const homeFaqSectionEs = {
  label: "Preguntas Comunes",
  heading: "Antes de llamar",
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
          "Un examen de rutina es la manera de detectar los problemas pequeños mientras siguen siendo pequeños. El dentista revisa sus dientes, encías y mordida, y le explica lo que ve con palabras sencillas. Usted sale con una idea clara de su salud dental y un consejo honesto sobre lo que sigue, si es que algo sigue.",
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
          "Cuando se forma una caries, la resina detiene el daño y reconstruye el diente. Ofrecemos resinas blancas del color natural de sus dientes, para que la reparación no se note. La mayoría de las resinas se completan en una sola visita.",
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
          "A veces lo más sano es retirar un diente que ya no se puede salvar. Hacemos el procedimiento lo más suave posible y le explicamos cada opción de reemplazo, desde puentes hasta dentaduras parciales. Los casos complejos, incluyendo las muelas del juicio, se atienden con nuestros cirujanos orales de confianza.",
        whoFor: "Para dientes demasiado dañados, o muelas del juicio problemáticas.",
      },
    ],
  },
  {
    id: "restorative",
    name: "Odontología Restauradora",
    intro:
      "Reconstruir dientes dañados o perdidos con coronas, puentes, incrustaciones y dentaduras, cada una ajustada con cuidado hasta que se sienta bien.",
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
          "El blanqueamiento profesional aclara años de café, té y manchas del día a día en un entorno supervisado, con sus encías protegidas durante todo el proceso. Los resultados varían de persona a persona, y le decimos qué esperar antes de comenzar.",
        whoFor: "Para una sonrisa más brillante antes de un evento, o simplemente porque sí.",
      },
    ],
  },
  {
    id: "orthodontics",
    name: "Ortodoncia",
    intro: "Dientes más derechos para niños, adolescentes y adultos, en el estilo que va con su vida. La atención de ortodoncia en este consultorio la brinda el Dr. Efrain Chara, ortodoncista, de Chara Orthodontics.",
    services: [
      {
        id: "braces",
        name: "Frenos",
        blurb:
          "Los frenos enderezan los dientes y corrigen problemas de mordida poco a poco, con visitas de ajuste constantes en el camino. El Dr. Chara atiende aquí a niños y adultos, y mantenemos el proceso sencillo desde la primera visita hasta la última revisión del retenedor.",
        whoFor: "Para dientes chuecos o problemas de mordida a cualquier edad.",
      },
      {
        id: "clear-aligners",
        name: "Alineadores Transparentes",
        blurb:
          "Los alineadores transparentes enderezan los dientes con una serie de guardas casi invisibles que puede quitarse para comer y cepillarse. El Dr. Chara revisa el ajuste en cada visita y le entrega el siguiente juego. La mayoría de la gente ni siquiera notará que los trae puestos.",
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

export const orthodontistEs = {
  name: "Dr. Efrain Chara",
  title: "ortodoncista",
  practiceName: "Chara Orthodontics",
  url: "https://charaorthodontics.com/",
  linkLabel: "Visite Chara Orthodontics",
  bio: "El Dr. Efrain Chara obtuvo su título de odontólogo en la Pontificia Universidad Javeriana de Bogotá en 1990 y completó su especialidad en ortodoncia en la Universidad Militar Nueva Granada en 1995. Ejerce en California desde el año 2000, y su consultorio, Chara Orthodontics, brinda atención de ortodoncia en consultorios dentales de todo el sur de California, incluyendo Bristol Family Dental Center.",
};

export const orthoHighlightEs = {
  label: "Ortodoncia con el Dr. Efrain Chara",
  heading: "Dientes derechos, bajo este techo",
  body: "Los frenos y los alineadores transparentes son parte del cuidado diario en Bristol Family Dental Center. El Dr. Efrain Chara, ortodoncista, atiende a sus pacientes de ortodoncia aquí mismo en nuestro consultorio, y el equipo que hace sus limpiezas y revisiones agenda cada visita, así que el tratamiento y el cuidado diario llevan un solo calendario.",
  servicesHeading: "Lo que el Dr. Chara ofrece aquí",
  services: [
    { title: "Consulta", text: "Un examen de sus dientes, su mordida y su mandíbula, y una respuesta clara sobre si el tratamiento le ayudaría y qué opción le conviene." },
    { title: "Frenos", text: "Brackets y arcos para niños, adolescentes y adultos, ajustados en visitas regulares para que los dientes se muevan poco a poco. Los frenos resuelven la mayor variedad de problemas de apiñamiento, espacios y mordida." },
    { title: "Alineadores transparentes", text: "Una serie de guardas removibles casi invisibles para adolescentes y adultos con apiñamiento o espacios leves a moderados. Usted cambia de guarda según un calendario y viene para que se revise el ajuste." },
    { title: "Evaluación temprana", text: "Una primera revisión de ortodoncia para niños alrededor de los 7 años, como recomienda la American Association of Orthodontists, para detectar temprano patrones de crecimiento y de mordida. La mayoría de los niños no necesita tratamiento a esa edad." },
    { title: "Tratamiento para adultos", text: "Dientes que se movieron con los años, apiñamiento que dificulta la limpieza y espacios que ha querido cerrar. Los dientes sanos se pueden mover a cualquier edad." },
    { title: "Retenedores", text: "Un retenedor después del tratamiento conserva el resultado, y el Dr. Chara lo revisa en las visitas de seguimiento." },
  ],
  points: [
    "Frenos tradicionales para niños, adolescentes y adultos",
    "Alineadores casi invisibles que puede quitarse para comer y cepillarse",
    "Tratamiento planificado y ajustado por el Dr. Chara, ortodoncista, en este consultorio",
  ],
};

export const servicesAltsEs = {
  hero: "Instrumentos dentales acomodados en una charola de acero con luz azul",
  aligner: "Ilustración clínica de un alineador dental transparente con luz azul",
  retainer: "Ilustración clínica de un retenedor de ortodoncia transparente con un alambre delgado sobre una superficie azul oscuro",
  specialists: "Ilustración clínica de un espejo dental y un explorador sobre una superficie azul oscuro",
};

// -------------------------------------------------------------- inner pages

export const aboutEs = {
  label: "Nosotros",
  heading: "Un consultorio dental familiar en Bristol Street",
  heroAlt: "Ilustración clínica de cinco instrumentos dentales de mano sobre una superficie azul oscuro",
  intro:
    "Bristol Family Dental Center es un consultorio dental familiar en Bristol Street, en Santa Ana. Un solo consultorio para niños, papás y abuelos, con una recepción bilingüe, odontología general y restauradora con Pablo Lazaro, D.D.S., y atención de ortodoncia con el Dr. Efrain Chara, ortodoncista, bajo el mismo techo.",
  dentistHeading: "Su dentista",
  dentistRole: "Dentista General",
  licenseLine: "Dentista con licencia (D.D.S.), Dental Board of California",
  dentistCopy:
    "Pablo Lazaro, D.D.S., es dentista general con licencia del Dental Board of California. Brinda la odontología general, restauradora y cosmética en Bristol Family Dental Center: exámenes y limpiezas, resinas y endodoncias, coronas, puentes y dentaduras, carillas y blanqueamiento. Su forma de trabajar es sencilla: revisar con cuidado, explicar lo que ve con palabras que usted pueda usar y recomendar solo lo que sus dientes necesitan.",
  dentistImageAlt: "Ilustración clínica de una corona de cerámica y un espejo dental sobre una superficie azul oscuro",
  orthoHeading: "Ortodoncia con el Dr. Efrain Chara",
  orthoCopy:
    "Los frenos y los alineadores transparentes en Bristol Family Dental Center los brinda el Dr. Efrain Chara, ortodoncista, que atiende a sus pacientes en nuestro consultorio. Obtuvo su título de odontólogo en Bogotá en 1990, completó su especialidad en ortodoncia en 1995 y ejerce en California desde el año 2000. Sus limpiezas, revisiones y resinas siguen con Pablo Lazaro, D.D.S., así que el tratamiento de ortodoncia y el cuidado diario llevan un solo calendario en una sola recepción.",
  orthoLink: "Sobre la ortodoncia en nuestro consultorio",
  orthoHref: "/es/services#orthodontics",
  familyHeading: "Un consultorio para toda la familia",
  familyCopy:
    "El consultorio está pensado para las familias. Niños, papás y abuelos se atienden en las mismas salas, la recepción lleva una sola agenda para todos y las preguntas reciben respuestas directas en español o en inglés. Cuando un caso requiere un especialista, coordinamos la referencia y seguimos pendientes.",
  familyPoints: [
    "Niños, adolescentes, adultos y abuelos bajo un mismo techo",
    "Limpiezas, resinas, coronas, puentes y dentaduras aquí mismo",
    "Frenos y alineadores transparentes con el Dr. Chara en el mismo consultorio",
    "Una recepción bilingüe que responde en el idioma en el que usted piensa",
  ],
};

export const bilingualNoteEs =
  "Nuestro equipo es bilingüe. Haga sus preguntas en inglés o en español y reciba las respuestas en el idioma en el que piensa.";

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
    "Aceptamos la mayoría de los planes de seguro dental, y le ayudamos a entender el suyo. Traiga su tarjeta a su primera visita, o díganos su aseguradora al llamar, y revisamos su cobertura antes de que se siente en el sillón.",
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
      text: "CareCredit es una tarjeta de crédito para gastos de salud, de una empresa independiente, que permite a los pacientes que califican dividir su tratamiento en pagos mensuales. La solicitud toma unos minutos y nuestra recepción le ayuda a comenzar.",
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
  promiseAlt: "Ilustración clínica de un modelo transparente de mandíbula inferior con dientes blancos sobre una superficie azul oscuro",
};

export const contactEs = {
  label: "Contacto",
  heading: "Venga a saludarnos",
  findUsHeading: "Cómo encontrarnos",
  hoursHeading: "Horario de oficina",
  mapTitle: "Mapa que muestra Bristol Family Dental Center en 2618 S Bristol St, Santa Ana, CA 92704",
  directionsCta: "Cómo llegar en Google Maps",
  newTab: "(se abre en una pestaña nueva)",
  mapNote:
    "El mapa lo proporciona Google Maps. Google puede colocar sus propias cookies cuando el mapa se carga. Los detalles están en nuestro aviso de privacidad.",
  mapNoteLink: "Aviso de privacidad",
  mapNoteHref: "/es/privacy",
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
      "Dentista familiar en Santa Ana: limpiezas, resinas, coronas, carillas, frenos y alineadores. Equipo bilingüe, la mayoría de los seguros, incluyendo Denti-Cal. Llame al (714) 540-7101.",
  },
  services: {
    title: "Servicios Dentales en Santa Ana | Bristol Family Dental Center",
    description:
      "Cuidado dental completo bajo un mismo techo en Santa Ana: exámenes, limpiezas, resinas, endodoncias, coronas, dentaduras, carillas, blanqueamiento y ortodoncia.",
  },
  about: {
    title: "Sobre Nuestro Consultorio Familiar | Bristol Family Dental Center",
    description:
      "Bristol Family Dental Center en Santa Ana: odontología general y restauradora con Pablo Lazaro, D.D.S., ortodoncia con el Dr. Efrain Chara y un equipo bilingüe para toda la familia.",
  },
  newPatients: {
    title: "Pacientes Nuevos y Preguntas | Bristol Family Dental Center",
    description:
      "¿Nuevo en Bristol Family Dental Center en Santa Ana? Vea qué esperar en su primera visita, descargue los formularios en español o inglés y encuentre respuestas a preguntas comunes.",
  },
  insurance: {
    title: "Seguro Dental y Formas de Pago | Bristol Family Dental Center",
    description:
      "Bristol Family Dental Center en Santa Ana acepta la mayoría de los seguros dentales: PPO, HMO y Denti-Cal, además de CareCredit, efectivo, cheque o tarjeta. Su cobertura explicada antes del tratamiento.",
  },
  contact: {
    title: "Contacto en Santa Ana | Bristol Family Dental Center",
    description:
      "Encuentre Bristol Family Dental Center en 2618 S. Bristol St., Santa Ana, en la esquina de Central y Bristol. Horario, cómo llegar, teléfono y fax de nuestro consultorio dental familiar.",
  },
  privacy: {
    title: "Aviso de Privacidad | Bristol Family Dental Center",
    description:
      "Cómo maneja la información el sitio web de Bristol Family Dental Center: sin formularios ni rastreo, qué recopilan el mapa de Google y el hosting, y sus derechos en California.",
  },
  terms: {
    title: "Términos de Uso y Deslinde | Bristol Family Dental Center",
    description:
      "Los términos que aplican cuando usa el sitio web de Bristol Family Dental Center, incluyendo el deslinde médico, el aviso sobre las imágenes y la limitación de responsabilidad.",
  },
  accessibility: {
    title: "Declaración de Accesibilidad | Bristol Family Dental Center",
    description:
      "Bristol Family Dental Center quiere un sitio web que todos puedan usar. Lea qué hacemos para cumplir con WCAG 2.1 AA, las limitaciones actuales y cómo avisarnos si algo es difícil de usar.",
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
      "Las carillas son láminas delgadas de porcelana que se adhieren al frente de los dientes. Cubren manchas, fracturas, espacios y bordes disparejos, y se moldean y matizan para verse completamente naturales. Con buen cuidado, pueden durar muchos años.",
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
