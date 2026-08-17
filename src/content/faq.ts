// New patient FAQ. Subjects carried over from the practice's long standing patient questions,
// answers written in plain language at a comfortable reading level.

export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: "How often should I brush and floss?",
    answer:
      "Brush at least twice a day with a soft brush and fluoride toothpaste, and floss once a day. Brushing cleans the surfaces of your teeth, and floss reaches the plaque hiding between them. Together they take about five minutes a day, and they are the cheapest dental care you will ever get.",
  },
  {
    question: "Are silver (amalgam) fillings safe?",
    answer:
      "Silver fillings have been used for more than a century, and major health organizations, including the American Dental Association, consider them safe for most people. That said, many of our patients prefer white composite fillings, which contain no metal and blend in with the natural tooth. If you would like an old silver filling looked at or replaced, we are happy to talk through your options.",
  },
  {
    question: "How often should I have an exam and cleaning?",
    answer:
      "For most people, every six months is right. Regular visits let us remove tartar before it causes trouble and catch small problems before they become big ones. If you have gum disease or another ongoing concern, we may suggest coming in a little more often.",
  },
  {
    question: "Why are my teeth sensitive when I brush?",
    answer:
      "Sensitivity usually means the softer inner layer of the tooth is exposed, often from receding gums, worn enamel, or brushing too hard. A softer brush, a desensitizing toothpaste, and a lighter touch often help. If one tooth is especially sensitive, have it checked, since that can be a sign of decay or a crack.",
  },
  {
    question: "What causes bad breath, and what can I do about it?",
    answer:
      "Most bad breath starts in the mouth, from food trapped between teeth, plaque, gum disease, or a dry mouth. Brushing, flossing, cleaning your tongue, and drinking plenty of water solve most cases. If it does not improve, come see us, because stubborn bad breath can point to gum disease that needs treatment.",
  },
  {
    question: "My gums bleed when I brush. Is that gingivitis?",
    answer:
      "Bleeding gums are often the first sign of gingivitis, an early stage of gum disease caused by plaque along the gum line. The good news is that gingivitis is usually reversible with a professional cleaning and steady brushing and flossing at home. Do not ignore it, since gum disease that goes untreated can eventually loosen teeth.",
  },
  {
    question: "Do I really need to floss?",
    answer:
      "Yes. A toothbrush cannot reach the tight spaces between teeth, and that is exactly where cavities and gum disease like to start. If regular floss is hard for you to use, ask us about floss picks and small brushes that do the same job.",
  },
  {
    question: "What can cosmetic dentistry do for me?",
    answer:
      "Modern cosmetic dentistry can whiten stained teeth, repair chips, close gaps, and reshape a smile you have been hiding. Treatments range from a single whitening visit to a full smile makeover with veneers. If there is something about your smile you would change, ask us what is possible.",
  },
  {
    question: "What are porcelain veneers?",
    answer:
      "Veneers are thin porcelain shells bonded to the front of your teeth. They cover stains, chips, gaps, and uneven edges, and they are shaped and shaded to look completely natural. With good care, they last for many years.",
  },
  {
    question: "What can I do about stained teeth?",
    answer:
      "It depends on the stain. Surface stains from coffee, tea, or tobacco usually respond well to a cleaning and professional whitening. Deeper stains inside the tooth may call for veneers or bonding instead. We can tell you which kind you have and what will actually work, so you do not waste money on products that will not help.",
  },
  {
    question: "Which foods are good for my teeth and gums?",
    answer:
      "Crunchy fruits and vegetables, cheese, yogurt, nuts, and plenty of water are all friends of your smile. They help scrub your teeth, strengthen enamel, and balance acids in the mouth. The main things to limit are sugary drinks, sticky sweets, and constant snacking, which give cavities a steady food supply.",
  },
];
