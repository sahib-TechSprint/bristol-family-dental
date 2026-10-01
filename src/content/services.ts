// All services offered by the practice, grouped the way the services page presents them.
// Anchor ids are stable: home page cards and in-copy links deep link to /services#<id>.

export interface Service {
  id: string;
  name: string;
  blurb: string;
  whoFor: string;
}

export interface ServiceGroup {
  id: string;
  name: string;
  intro: string;
  services: Service[];
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: "general",
    name: "General Dentistry",
    intro:
      "The everyday care that keeps small problems small. Most visits to our office start here.",
    services: [
      {
        id: "exams",
        name: "Routine Exams",
        blurb:
          "A routine exam is how we catch small problems while they are still small. The dentist checks your teeth, gums, and bite, and explains what he sees in plain language. You leave with a clear picture of your dental health and honest advice about what, if anything, comes next.",
        whoFor: "For every member of the family, from kids to grandparents.",
      },
      {
        id: "cleanings",
        name: "Cleanings",
        blurb:
          "A professional cleaning removes the plaque and tartar a toothbrush cannot reach. Your teeth get polished, your gums get checked, and your smile leaves brighter than it arrived.",
        whoFor: "For everyone, about every six months.",
      },
      {
        id: "fillings",
        name: "Fillings",
        blurb:
          "When a cavity forms, a filling stops the decay and rebuilds the tooth. We offer white composite fillings that match the natural color of your teeth, so the repair blends right in. Most fillings are completed in a single visit.",
        whoFor: "For teeth with cavities or small chips.",
      },
      {
        id: "root-canals",
        name: "Root Canals",
        blurb:
          "A root canal saves a tooth that is badly decayed or infected, and it relieves the pain that comes with it. We clean out the infection, seal the tooth, and usually protect it with a crown. Complicated cases go to a trusted endodontist in our specialist network.",
        whoFor: "For a tooth with deep decay, infection, or lasting pain.",
      },
      {
        id: "extractions",
        name: "Extractions",
        blurb:
          "Sometimes the healthiest choice is to remove a tooth that cannot be saved. We keep the procedure as gentle as possible and talk you through every replacement option, from bridges to partial dentures. Complex cases, including wisdom teeth, are handled with our trusted oral surgery partners.",
        whoFor: "For teeth too damaged to repair, or troublesome wisdom teeth.",
      },
    ],
  },
  {
    id: "restorative",
    name: "Restorative Dentistry",
    intro:
      "Rebuilding damaged and missing teeth with crowns, bridges, inlays and onlays, and dentures, each one fitted carefully and adjusted until it feels right.",
    services: [
      {
        id: "crowns",
        name: "Crowns",
        blurb:
          "A crown is a custom cap that covers a weakened or broken tooth, restoring its strength and shape. Each crown is matched carefully to the color of your smile, so it looks like it has always been there.",
        whoFor: "For cracked, worn, or heavily filled teeth.",
      },
      {
        id: "bridges",
        name: "Bridges",
        blurb:
          "A bridge fills the gap left by a missing tooth with a natural looking replacement anchored to its neighbors. It restores your bite and keeps the surrounding teeth from shifting out of place.",
        whoFor: "For one or more missing teeth in a row.",
      },
      {
        id: "inlays-onlays",
        name: "Inlays and Onlays",
        blurb:
          "Inlays and onlays repair damage that is too big for a filling but does not call for a full crown. They are custom made to fit your tooth precisely, which preserves more of your healthy enamel.",
        whoFor: "For damage that sits between a filling and a crown.",
      },
      {
        id: "dentures",
        name: "Dentures and Partials",
        blurb:
          "Full and partial dentures replace many missing teeth at once, so you can eat, speak, and smile with confidence again. We fit them carefully and keep adjusting until they feel right.",
        whoFor: "For patients missing several teeth or a full arch.",
      },
    ],
  },
  {
    id: "cosmetic",
    name: "Cosmetic Dentistry",
    intro:
      "Small changes to a smile can change how often you use it. These are the treatments behind our smile makeovers.",
    services: [
      {
        id: "veneers",
        name: "Porcelain Veneers",
        blurb:
          "Porcelain veneers are thin, custom shells bonded to the front of your teeth. They correct chips, gaps, stains, and uneven shapes in just a few visits, and they are shaped and shaded to look completely natural.",
        whoFor: "For front teeth you wish looked straighter, whiter, or more even.",
      },
      {
        id: "whitening",
        name: "Teeth Whitening",
        blurb:
          "Professional whitening lifts years of coffee, tea, and everyday stains in a supervised setting, with your gums protected the whole time. Results vary from person to person, and we will tell you what to expect before you start.",
        whoFor: "For a brighter smile before a big event, or just because.",
      },
    ],
  },
  {
    id: "orthodontics",
    name: "Orthodontics",
    intro: "Straighter teeth for kids, teens, and adults, in the style that fits your life. Orthodontic care at this office is provided by Dr. Efrain Chara, orthodontist, of Chara Orthodontics.",
    services: [
      {
        id: "braces",
        name: "Braces",
        blurb:
          "Braces straighten teeth and correct bite problems a little at a time, with steady adjustment visits along the way. Dr. Chara treats both kids and adults here, and we keep the process simple from the first visit to the last retainer check.",
        whoFor: "For crooked teeth or bite problems at any age.",
      },
      {
        id: "clear-aligners",
        name: "Clear Aligners",
        blurb:
          "Clear aligners straighten teeth with a series of nearly invisible trays you can remove to eat and brush. Dr. Chara checks the fit at each visit and hands you the next set. Most people will not even notice you are wearing them.",
        whoFor: "For teens and adults who want straighter teeth without metal.",
      },
    ],
  },
];

export const specialistNetwork = {
  id: "specialists",
  name: "Our Specialist Network",
  blurb:
    "Some cases call for a specialist, and we have spent years building a network we trust. We coordinate endodontics for complicated root canals, periodontics for deep cleanings, pedodontics for children with special needs, and oral surgery for complex extractions such as wisdom teeth. We handle the referral, share your records, and stay involved in your care from start to finish.",
};

// The orthodontist who provides orthodontic care at the office. Chara
// Orthodontics lists Bristol Family Dental among its locations; the office
// confirmed in October 2026 that he is to be named as an orthodontist. The
// biography states only what his own site states.
export const orthodontist = {
  name: "Dr. Efrain Chara",
  title: "orthodontist",
  practiceName: "Chara Orthodontics",
  url: "https://charaorthodontics.com/",
  linkLabel: "Visit Chara Orthodontics",
  bio: "Dr. Efrain Chara earned his dental degree at the Pontificia Universidad Javeriana in Bogotá in 1990 and completed his specialty training in orthodontics at the Universidad Militar Nueva Granada in 1995. He has practiced in California since 2000, and his practice, Chara Orthodontics, provides orthodontic care at dental offices across Southern California, including Bristol Family Dental Center.",
};

// Featured orthodontics band on the services page.
export const orthoHighlight = {
  label: "Orthodontics with Dr. Efrain Chara",
  heading: "Straight teeth, under this roof",
  body: "Braces and clear aligners are part of everyday care at Bristol Family Dental Center. Dr. Efrain Chara, orthodontist, sees his orthodontic patients right here in our office, and the team that handles your cleanings and checkups books every visit, so treatment and everyday care run on one schedule.",
  servicesHeading: "What Dr. Chara provides here",
  services: [
    { title: "Consultation", text: "An exam of your teeth, bite, and jaw, and a plain answer about whether treatment would help and which option fits." },
    { title: "Braces", text: "Brackets and wires for kids, teens, and adults, adjusted at regular visits so the teeth move a little at a time. Braces handle the widest range of crowding, spacing, and bite problems." },
    { title: "Clear aligners", text: "A series of nearly invisible removable trays for teens and adults with mild to moderate crowding or spacing. You change trays on a schedule and come in so the fit can be checked." },
    { title: "Early evaluation", text: "A first orthodontic check for children around age 7, as the American Association of Orthodontists recommends, to spot growth and bite patterns early. Most children do not need treatment at that age." },
    { title: "Adult treatment", text: "Teeth that shifted over the years, crowding that makes cleaning difficult, and spaces you have wanted to close. Healthy teeth can be moved at any age." },
    { title: "Retainers", text: "A retainer after treatment holds the result, and Dr. Chara checks it at follow up visits." },
  ],
  points: [
    "Traditional braces for kids, teens, and adults",
    "Nearly invisible clear aligners you can remove to eat and brush",
    "Treatment planned and adjusted by Dr. Chara, orthodontist, in this office",
  ],
};

// Flat list used by the booking form select and anywhere a simple list is needed.
export const allServices: Service[] = serviceGroups.flatMap((g) => g.services);
