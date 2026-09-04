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
          "A routine exam is how we catch small problems while they are still small. Dr. Begino checks your teeth, gums, and bite, and explains what he sees in plain language. You leave with a clear picture of your dental health and honest advice about what, if anything, comes next.",
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
          "When a cavity forms, a filling stops the decay and rebuilds the tooth. We offer white composite fillings that match the natural color of your teeth, so the repair blends right in. The visit is quick and comfortable.",
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
          "Sometimes the healthiest choice is to remove a tooth that cannot be saved. We keep the procedure as gentle as possible and talk you through every replacement option, from bridges to implants. Complex cases, including wisdom teeth, are handled with our trusted oral surgery partners.",
        whoFor: "For teeth too damaged to repair, or troublesome wisdom teeth.",
      },
    ],
  },
  {
    id: "restorative",
    name: "Restorative Dentistry",
    intro:
      "Rebuilding damaged and missing teeth is the heart of Dr. Begino's training, recognized by the American College of Prosthodontics.",
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
      {
        id: "implants",
        name: "Dental Implants",
        blurb:
          "A dental implant replaces a missing tooth from the root up. A small titanium post anchors a custom crown that looks, feels, and works like a natural tooth. Implants also protect the jawbone and never slip the way removable options can.",
        whoFor: "For a permanent answer to a missing tooth.",
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
          "Professional whitening safely lifts years of coffee, tea, and everyday stains. It works better and more evenly than drugstore kits, and we keep your gums protected the whole time.",
        whoFor: "For a brighter smile before a big event, or just because.",
      },
    ],
  },
  {
    id: "orthodontics",
    name: "Orthodontics",
    intro: "Straighter teeth for kids, teens, and adults, in the style that fits your life.",
    services: [
      {
        id: "braces",
        name: "Braces",
        blurb:
          "Braces straighten teeth and correct bite problems a little at a time, with steady checkups along the way. We treat both kids and adults, and we keep the process simple from the first visit to the last retainer check.",
        whoFor: "For crooked teeth or bite problems at any age.",
      },
      {
        id: "clear-aligners",
        name: "Clear Aligners",
        blurb:
          "Clear aligners straighten teeth with a series of nearly invisible trays you can remove to eat and brush. Most people will not even notice you are wearing them.",
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

// Featured orthodontics band on the services page.
export const orthoHighlight = {
  label: "Orthodontics",
  heading: "Straight teeth, under this roof",
  body: "Braces and clear aligners are part of everyday care at Bristol Family Dental Center. The same team that handles your cleanings and checkups oversees your orthodontic treatment, so every adjustment happens with people who already know your smile.",
  points: [
    "Traditional braces for kids, teens, and adults",
    "Nearly invisible clear aligners you can remove to eat and brush",
    "Steady checkups with the same familiar team",
  ],
};

// Flat list used by the booking form select and anywhere a simple list is needed.
export const allServices: Service[] = serviceGroups.flatMap((g) => g.services);
