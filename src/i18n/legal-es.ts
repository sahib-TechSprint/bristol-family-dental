// Legal pages, Spanish. Mirrors src/content/legal.ts section for section so
// both languages say the same thing. Usted form, plain language. Update the
// effective date here whenever the English wording changes.

import type { LegalSection } from "../components/LegalPage.astro";

export const legalEffectiveDateEs = "8 de septiembre de 2026";

// ------------------------------------------------------------------ privacy

export const privacyEs = {
  label: "Legal",
  heading: "Aviso de privacidad",
  intro: `Vigente desde el ${legalEffectiveDateEs}. En resumen: este sitio web no tiene formularios ni cuentas, no usa rastreadores de publicidad ni de analítica, y el consultorio nunca vende información personal. Lo único que toca su información es la llamada o el correo que usted decida hacer.`,
  ariaLabel: "Detalles del aviso de privacidad",
  newTab: "se abre en una pestaña nueva",
};

export const privacySectionsEs: LegalSection[] = [
  {
    heading: "Quiénes somos",
    body: [
      "Este sitio web se opera para Bristol Family Dental Center, un consultorio dental ubicado en 2618 S. Bristol St., Santa Ana, CA 92704, teléfono (714) 540-7101. El sitio fue diseñado y es mantenido por Carbon Quill Media en nombre del consultorio. Este aviso explica qué información maneja el sitio y qué no.",
    ],
  },
  {
    heading: "Qué recopila este sitio: nada de lo que usted escribe",
    body: [
      "En este sitio no hay formularios, inicios de sesión, chats ni herramientas para citas. Usted no puede escribir su nombre, sus datos de contacto ni información de salud en ninguna parte. Para comunicarse con el consultorio se llama o se escribe un correo, y esas conversaciones ocurren fuera de este sitio web.",
      "Como todo sitio web, este se entrega a través de un proveedor de hosting (Vercel) que guarda registros técnicos estándar para operar y proteger el servicio: la dirección IP de donde viene una solicitud, la página solicitada, la hora y el tipo de navegador. El consultorio no usa esos registros para identificar ni perfilar a los visitantes, y se conservan solo el tiempo que el proveedor los necesita por seguridad y operación.",
    ],
  },
  {
    heading: "Cookies y tecnologías similares",
    body: [
      "Este sitio no coloca cookies propias y no usa rastreadores de analítica, publicidad ni redes sociales. El sitio guarda una pequeña marca en el almacenamiento de sesión de su navegador para recordar que la animación de inicio ya se mostró; no contiene información personal y se borra al cerrar la pestaña.",
      "La página de contacto incluye un mapa de Google Maps. Cuando ese mapa se carga, Google recibe su dirección IP y puede colocar sus propias cookies bajo la política de privacidad de Google, que el consultorio no controla. Si prefiere no cargar el mapa de Google, use el enlace de Cómo llegar, o bloquee las cookies de terceros en su navegador; todo lo demás en el sitio funciona sin él.",
      "Como el sitio no rastrea a los visitantes, no responde a la señal Do Not Track del navegador; no hay nada que apagar.",
    ],
    link: { label: "Política de privacidad de Google", href: "https://policies.google.com/privacy?hl=es", external: true },
  },
  {
    heading: "Cuando nos llama o nos escribe",
    body: [
      "La información que comparte con el consultorio por teléfono, por correo electrónico o en persona forma parte de su relación con el consultorio, no de este sitio web. Se maneja bajo las obligaciones de privacidad de salud del consultorio, incluyendo HIPAA y la Ley de Confidencialidad de la Información Médica de California cuando aplican. El correo electrónico no es un canal seguro, así que le pedimos dejar los detalles de salud para una llamada o para su visita.",
    ],
  },
  {
    heading: "Descargas",
    body: [
      "Los formularios para pacientes nuevos de este sitio son archivos PDF que usted descarga, imprime y llena a mano. Nada de lo que escriba en ellos pasa por este sitio web. Traiga el formulario completo a su visita.",
    ],
  },
  {
    heading: "Enlaces a otros sitios web",
    body: [
      "El sitio enlaza a servicios externos como Google Maps, Yelp, la lista de reseñas de Birdeye, CareCredit y el Dental Board of California. Esos servicios tienen sus propias prácticas de privacidad, que el consultorio no controla. Las cantidades y calificaciones de reseñas que muestra este sitio se leen de esas plataformas en la fecha anotada en los registros del sitio y son opiniones de sus autores.",
    ],
  },
  {
    heading: "Menores de edad",
    body: [
      "Este sitio está escrito para adultos que organizan el cuidado propio o de su familia. No está dirigido a menores de 13 años y, como no recopila información de nadie, tampoco recopila información de menores.",
    ],
  },
  {
    heading: "Sus derechos de privacidad en California",
    body: [
      "El consultorio no vende ni comparte información personal según esos términos se definen en la Ley de Privacidad del Consumidor de California, y no recopila información personal a través de este sitio web, así que no hay nada de qué excluirse. Si usted cree que el consultorio tiene información personal suya proveniente de este sitio, puede preguntar cuál es, pedir que se corrija o pedir que se elimine, y no recibirá un trato distinto por pedirlo. Llame al (714) 540-7101 o escriba a info@bristolfamilydentalcenter.com. Las solicitudes sobre su expediente dental las atiende el consultorio bajo las reglas de privacidad de salud que aplican a los expedientes de pacientes.",
    ],
  },
  {
    heading: "Seguridad",
    body: [
      "El sitio se entrega por HTTPS y está construido como páginas estáticas, sin base de datos y sin procesamiento de información de visitantes en el servidor. Ese diseño mantiene la cantidad de información en riesgo tan cerca de cero como un sitio web puede estar.",
    ],
  },
  {
    heading: "Cambios y contacto",
    body: [
      "Si este aviso cambia, la nueva versión se publicará en esta página con una nueva fecha de vigencia. Las preguntas sobre este aviso pueden dirigirse al consultorio al (714) 540-7101 o a info@bristolfamilydentalcenter.com.",
    ],
  },
];

// -------------------------------------------------------------------- terms

export const termsEs = {
  label: "Legal",
  heading: "Términos de uso y deslinde",
  intro: `Vigentes desde el ${legalEffectiveDateEs}. Estos términos aplican cuando usa este sitio web. Lo más importante: el sitio es información general, no consejo dental; las ilustraciones clínicas son imágenes digitales, no fotografías del consultorio; y el horario, los servicios y la participación en seguros deben confirmarse por teléfono.`,
  ariaLabel: "Detalles de los términos de uso",
};

export const termsSectionsEs: LegalSection[] = [
  {
    heading: "Aceptación de estos términos",
    body: [
      "Este sitio web se opera para Bristol Family Dental Center, 2618 S. Bristol St., Santa Ana, CA 92704. Al usar el sitio usted acepta estos términos y el aviso de privacidad. Si no está de acuerdo, por favor no use el sitio; siempre puede comunicarse con el consultorio por teléfono al (714) 540-7101.",
    ],
  },
  {
    heading: "Información general, no consejo dental",
    body: [
      "El contenido de este sitio web es información general sobre el consultorio y sobre odontología. No es consejo dental ni médico, no es un diagnóstico y no sustituye un examen con un dentista con licencia. Leer este sitio no crea una relación entre dentista y paciente. Si tiene una emergencia dental, llame al consultorio en horario de oficina; si cree que tiene una emergencia médica, llame al 911.",
    ],
  },
  {
    heading: "Sobre las imágenes de este sitio",
    body: [
      "Las ilustraciones clínicas de este sitio (dientes, implantes, alineadores, modelos dentales e instrumentos) son imágenes digitales creadas para el diseño del sitio. No son fotografías de las instalaciones, el equipo, el personal ni los pacientes del consultorio, y no muestran resultados de tratamientos. Cada paciente es distinto, y ninguna imagen de este sitio promete un resultado en particular.",
    ],
  },
  {
    heading: "Reseñas y calificaciones",
    body: [
      "Cuando el sitio muestra una cantidad de reseñas o una calificación de una plataforma como Yelp, Google o Facebook, ese número se leyó de la plataforma en la fecha registrada en los archivos del sitio y cambiará con el tiempo. Las reseñas las escriben sus autores en plataformas independientes; el consultorio no las escribe, edita ni controla, y el sitio enlaza a las plataformas en lugar de reproducir el texto de las reseñas.",
    ],
  },
  {
    heading: "El horario, los servicios y los seguros pueden cambiar",
    body: [
      "El horario de oficina, los servicios que se ofrecen, los dentistas y el personal del equipo, los planes de seguro aceptados y las formas de pago se describen de buena fe a la fecha de vigencia indicada arriba, pero cambian. Por favor confirme por teléfono cualquier cosa de la que dependa su visita. Si un plan en particular cubre un tratamiento en particular lo decide su aseguradora, no este sitio web.",
    ],
  },
  {
    heading: "Propiedad intelectual",
    body: [
      "El texto, el diseño, la marca tipográfica y las ilustraciones de este sitio pertenecen a Bristol Family Dental Center o se usan con permiso, y el diseño del sitio es obra de Carbon Quill Media. Usted puede ver, imprimir y descargar páginas para uso personal y no comercial. La tipografía del sitio, Open Sauce One, se usa bajo la SIL Open Font License. Los nombres de terceros como Yelp, Google, Facebook, Birdeye, CareCredit y Denti-Cal pertenecen a sus dueños y se usan solo para identificar esos servicios.",
    ],
  },
  {
    heading: "Uso aceptable",
    body: [
      "Por favor use el sitio como fue pensado. No intente interferir con su funcionamiento, sondear o atacar la infraestructura de hosting, ni extraer o republicar su contenido más allá del uso personal permitido arriba.",
    ],
  },
  {
    heading: "Sitios web de terceros",
    body: [
      "Los enlaces a otros sitios web se ofrecen por conveniencia. El consultorio no controla esos sitios y no es responsable de su contenido, sus prácticas de privacidad ni su disponibilidad.",
    ],
  },
  {
    heading: "Sin garantías y limitación de responsabilidad",
    body: [
      "Este sitio web se ofrece tal cual y según esté disponible, sin garantías de ningún tipo, expresas o implícitas, incluyendo que sea exacto, ininterrumpido o libre de errores. En la máxima medida que permita la ley, Bristol Family Dental Center y Carbon Quill Media no son responsables por daños que surjan de su uso, o de la imposibilidad de usar, este sitio web o cualquier sitio al que enlace. Nada en estos términos limita las obligaciones del consultorio hacia sus pacientes bajo las leyes que rigen la atención dental.",
    ],
  },
  {
    heading: "Ley aplicable",
    body: [
      "Estos términos se rigen por las leyes del Estado de California, y cualquier disputa sobre este sitio web se atenderá en los tribunales estatales o federales ubicados en el condado de Orange, California.",
    ],
  },
  {
    heading: "Información del consultorio y licencias",
    body: [
      "Bristol Family Dental Center es un consultorio dental en Santa Ana, California. Sus dentistas tienen licencia del Dental Board of California: Ruben H. Begino, D.D.S., y Pablo Lazaro, D.D.S. Los dentistas tienen licencia y están regulados por el Dental Board of California, 2005 Evergreen Street, Suite 1550, Sacramento, CA 95815, (877) 729-7789.",
    ],
    link: { label: "Dental Board of California", href: "https://www.dbc.ca.gov", external: true },
  },
  {
    heading: "Cambios y contacto",
    body: [
      "Si estos términos cambian, la nueva versión se publicará en esta página con una nueva fecha de vigencia. Las preguntas pueden dirigirse al consultorio al (714) 540-7101 o a info@bristolfamilydentalcenter.com.",
    ],
  },
];

// ------------------------------------------------------------ accessibility

export const accessibilityEs = {
  label: "Accesibilidad",
  heading: "Un sitio que todos pueden usar",
  intro: `Declaración revisada por última vez el ${legalEffectiveDateEs}. Si algo en este sitio le resulta difícil de leer o de usar, llámenos: le ayudamos directamente y lo corregimos para la siguiente persona.`,
  ariaLabel: "Detalles de la declaración de accesibilidad",
};

export const accessibilitySectionsEs: LegalSection[] = [
  {
    heading: "Nuestro compromiso",
    body: [
      "Queremos que cada paciente y cada familiar pueda leer este sitio, encontrar nuestro teléfono y encontrar nuestra puerta, sin importar su capacidad o la tecnología que use. El sitio está construido para cumplir con las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1 en el nivel AA.",
    ],
  },
  {
    heading: "Qué hace el sitio",
    body: [
      "Los colores del texto se verifican por contraste contra sus fondos, incluyendo el texto que va sobre imágenes. Cada página se puede recorrer solo con el teclado, incluyendo el menú y el cambio de idioma, y un enlace para saltar lleva directo al contenido. Las imágenes que aportan significado tienen texto alternativo, las imágenes decorativas se ocultan a la tecnología de asistencia, y el sitio respeta su preferencia de movimiento reducido apagando todas las animaciones. Las versiones en inglés y en español llevan las etiquetas de idioma correctas para que los lectores de pantalla las pronuncien bien. Los enlaces que abren una pestaña nueva lo indican.",
    ],
  },
  {
    heading: "Cómo lo verificamos",
    body: [
      "Cada página se prueba con herramientas automáticas de accesibilidad contra el conjunto de reglas WCAG 2.1 AA en cinco tamaños de pantalla, junto con revisiones manuales de teclado, zoom y lector de pantalla. La accesibilidad se vuelve a verificar cada vez que el sitio cambia de forma significativa.",
    ],
  },
  {
    heading: "Limitaciones conocidas",
    body: [
      "Los formularios descargables para pacientes nuevos son escaneos de los formularios en papel del consultorio, así que todavía no se pueden llenar en pantalla ni son amigables con los lectores de pantalla. Si los formularios le resultan difíciles, sáltelos: llámenos y tomamos su información por teléfono o le ayudamos en la recepción. El mapa de la página de contacto lo proporciona Google y sus controles son de Google; la dirección y un enlace de Cómo llegar están junto al mapa en texto sencillo.",
    ],
  },
  {
    heading: "Díganos si algo es difícil de usar",
    body: [
      "Si alguna parte de este sitio le resulta difícil, queremos saberlo para corregirlo. Llámenos al (714) 540-7101 o escriba a info@bristolfamilydentalcenter.com y cuéntenos qué pasó y qué intentaba hacer. Tomamos estos reportes en serio y respondemos lo más pronto posible.",
    ],
  },
];
