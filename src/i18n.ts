export type Lang = 'en' | 'ar';

type Dict = {
  common: {
    brand: string;
    andMore: string;
    email: string;
  };
  header: {
    en: string;
    ar: string;
  };
  hero: {
    headline: string;
    cta: string;
  };
  missionVision: {
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
  };
  products: {
    tabs: { oilgas: string; petro: string };
    oilgasItems: string[];
    petroItems: string[];
  };
  why: {
    title: string;
    points: string[];
  };

    industries: {
    title: string;
    items: string[];
  };

  contact: {
    title: string;
    button: string;
  };
  footer: {
    copyright: (year: number) => string;
  };
  moreCta: {
    title: string;
    body: string;
    primary: string;
    close: string;
  };
  capabilities: {
    title: string;
    items: string[];
    descs: string[];
  };
  partner: {
    title: string;
    points: { title: string; desc: string }[];
  };
  process: {
    title: string;
    steps: string[];
    descs: string[];
  };
};

export const translations: Record<Lang, Dict> = {
  en: {
    common: {
      brand: 'MAGHCO',
      andMore: 'And More',
      email: 'Sales@MAGHCO.com',
    },
    header: { en: 'EN', ar: 'AR' },
    hero: {
      headline: 'Bridging the gap between supply and demand in Oil, Gas & Petrochemicals',
      cta: 'Contact Us',
    },
    missionVision: {
      missionTitle: 'Our Mission',
      missionText:
        'Bridging the gap between supply and demand in the oil & gas and petrochemical business.',
      visionTitle: 'Our Vision',
      visionText: 'To add value in the global supply chain.',
    },
    products: {
      tabs: { oilgas: 'Oil & Gas', petro: 'Petrochemicals' },
      oilgasItems: ['Oil & Gas', 'LPG', 'Sulfur'],
      // IMPORTANT: removed "And More" from list because it will appear in the thumbnail card
      petroItems: [
        'LABSA',
        'Caustic Soda',
        'SLES',
        'Sulfuric acid',
        'Epoxy',
        'Calcium Chloride',
        'Vinyl Acetate Monomer (VAM)',
        'Tetrahydrofuran (THF)',
        'Methanol',
        'Acetic Acid',
        'EDC',
        'Glycols',
        'Xylenes',
        'Styrene monomer',
        'Pygas',
        'Phenol',
        'Acetone',
        'Ethylene',
        'Toluene',
        'Ethyl hexene',
      ],
    },
    why: {
      title: 'Why MAGHCO?',
      points: ['Global Supply Network', 'Reliable Sourcing', 'Value-Driven Partnerships'],
    },
    contact: {
      title: 'Contact Us',
      button: 'Email Us',
    },
    footer: {
      copyright: (year: number) => `© ${year} MAGHCO. All Rights Reserved.`,
    },
    moreCta: {
      title: 'Looking for a specific product?',
      body:
        'We can source additional products upon request. Email us with your requirements and we\'ll get back to you.',
      primary: 'Request Product',
      close: 'Close',
    },
    industries: {
      title: 'Industries We Serve',
      items: [
        'Oil & Gas Companies',
        'Petrochemical Manufacturers',
        'Industrial Plants',
        'Trading & Distribution Companies',
        'Energy & Utilities',
      ],
    },
    capabilities: {
      title: 'Our Capabilities',
      items: [
        'Global Sourcing & Procurement',
        'Supply Chain Coordination',
        'Quality & Compliance Assurance',
        'Logistics & Delivery Support',
        'Customized Supply Solutions',
      ],
      descs: [
        'Source globally with vetted suppliers.',
        'Align timelines, suppliers, and delivery.',
        'Meet standards and regulatory requirements.',
        'Plan shipments and handle documentation.',
        'Tailored supply options for your needs.',
      ],
    },
    partner: {
      title: 'Why Partner With MAGHCO?',
      points: [
        { title: 'Global Supply Network', desc: 'Access reliable suppliers worldwide to meet your needs fast.' },
        { title: 'Reliable Sourcing', desc: 'We select vetted suppliers and ensure consistent quality and delivery.' },
        { title: 'Value-Driven Partnerships', desc: 'We focus on tangible outcomes and cost optimization across the supply chain.' },
      ],
    },
    process: {
      title: 'How We Work',
      steps: [
        'Understand Requirements',
        'Source & Verify Products',
        'Coordinate Supply & Logistics',
        'Deliver & Support',
      ],
      descs: [
        'Define specs, quantities, and timelines.',
        'Identify suppliers and validate quality.',
        'Arrange contracts, shipping, and compliance.',
        'Deliver and follow up for ongoing service.',
      ],
    },
  },

  ar: {
    common: {
      brand: 'MAGHCO',
      andMore: 'وغيرها',
      email: 'Sales@MAGHCO.com',
    },
    header: { en: 'EN', ar: 'AR' },
    hero: {
      headline: 'نسد الفجوة بين العرض والطلب في النفط والغاز والبتروكيماويات',
      cta: 'تواصل معنا',
    },
    missionVision: {
      missionTitle: 'مهمتنا',
      missionText: 'نسد الفجوة بين العرض والطلب في قطاع النفط والغاز والبتروكيماويات.',
      visionTitle: 'رؤيتنا',
      visionText: 'إضافة قيمة لسلسلة الإمداد العالمية.',
    },
    products: {
      tabs: { oilgas: 'النفط والغاز', petro: 'البتروكيماويات' },
      oilgasItems: ['النفط والغاز', 'غاز البترول المسال (LPG)', 'الكبريت'],
      // IMPORTANT: removed "وغيرها" from list because it will appear in the thumbnail card
      petroItems: [
        'LABSA',
        'الصودا الكاوية',
        'SLES',
        'حمض الكبريتيك',
        'إيبوكسي',
        'كلوريد الكالسيوم',
        'فينيل أسيتات مونومر (VAM)',
        'تتراهيدروفوران (THF)',
        'ميثانول',
        'حمض الأسيتيك',
        'EDC',
        'جلايكولات',
        'زيلينات',
        'ستايرين مونومر',
        'Pygas',
        'فينول',
        'أسيتون',
        'إيثيلين',
        'تولوين',
        'إيثيل هيكسين',
      ],
    },
    why: {
      title: 'لماذا MAGHCO؟',
      points: ['شبكة إمداد عالمية', 'توريد موثوق', 'شراكات قائمة على القيمة'],
    },
    contact: {
      title: 'تواصل معنا',
      button: 'راسلنا',
    },
    footer: {
      copyright: (year: number) => `© ${year} MAGHCO. جميع الحقوق محفوظة.`,
    },
    moreCta: {
      title: 'تبحث عن منتج محدد؟',
      body:
        'يمكننا توفير منتجات إضافية حسب الطلب. راسلنا بمتطلباتك وسنعود إليك في أقرب وقت.',
      primary: 'طلب منتج',
      close: 'إغلاق',
    },
    industries: {
      title: 'القطاعات التي نخدمها',
      items: [
        'شركات النفط والغاز',
        'مصنّعو البتروكيماويات',
        'المصانع الصناعية',
        'شركات التجارة والتوزيع',
        'الطاقة والمرافق',
      ],
    },
    capabilities: {
      title: 'قدراتنا',
      items: [
        'التوريد والشراء العالمي',
        'تنسيق سلسلة الإمداد',
        'ضمان الجودة والامتثال',
        'الدعم اللوجستي والتسليم',
        'حلول توريد مخصّصة',
      ],
      descs: [
        'توريد موثوق من موردين معتمدين حول العالم.',
        'مواءمة الجداول والموردين والتسليم.',
        'الالتزام بالمعايير والمتطلبات التنظيمية.',
        'تخطيط الشحنات ومعالجة الوثائق.',
        'خيارات توريد مخصصة وفق احتياجاتك.',
      ],
    },
    partner: {
      title: 'لماذا الشراكة مع MAGHCO؟',
      points: [
        { title: 'شبكة إمداد عالمية', desc: 'نصل إلى موردين موثوقين حول العالم لتلبية احتياجاتك بسرعة.' },
        { title: 'توريد موثوق', desc: 'نختار موردين معتمدين ونضمن اتساق الجودة والتسليم.' },
        { title: 'شراكات قائمة على القيمة', desc: 'نركّز على نتائج ملموسة وتحسين التكلفة عبر سلسلة الإمداد.' },
      ],
    },
    process: {
      title: 'كيف نعمل',
      steps: [
        'فهم المتطلبات',
        'توريد والتحقق من المنتجات',
        'تنسيق الإمداد واللوجستيات',
        'التسليم والدعم',
      ],
      descs: [
        'تحديد المواصفات والكميات والجداول الزمنية.',
        'تحديد الموردين والتحقق من الجودة.',
        'ترتيب العقود والشحن والامتثال.',
        'التسليم والمتابعة لضمان الخدمة المستمرة.',
      ],
    },
  },
};

export function isRTL(lang: Lang) {
  return lang === 'ar';
}