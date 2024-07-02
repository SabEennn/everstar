const bikes = [
  {
    id: 1,
    name: 'Rockhopper Sport 29',
    price: 750.0,
    description:
      'An affordable and capable trail hardtail for rising skills and bigger trail adventures.',
    variants: [
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/91822-64_ROCKHOPPER-SPORT-29-BLZ-ICEPPYA_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'GLOSS BLAZE / ICE PAPAYA',
        hexCodes: ['#EF7230'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/91822-65_ROCKHOPPER-SPORT-29-WHTMTN-DSTTUR_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'GLOSS WHITE MOUNTAINS / DUSTY TURQUOISE',
        hexCodes: ['#D8D6D4', '#355053'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/91822-66_ROCKHOPPER-SPORT-29-FSTGRN-OIS_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'SATIN FOREST GREEN / OASIS',
        hexCodes: ['#37393D', '#B6E0D2'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/91822-67_ROCKHOPPER-SPORT-29-SLT-CLGRY_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'SATIN SLATE / COOL GREY',
        hexCodes: ['#3E4247'],
      },
    ],
  },
  {
    id: 2,
    name: 'Rockhopper Sport 27.5',
    price: 699.99,
    description:
      'An affordable and capable trail hardtail for rising skills and bigger trail adventures.',
    variants: [
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/91822-65_ROCKHOPPER-SPORT-29-WHTMTN-DSTTUR_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'GLOSS WHITE MOUNTAINS / DUSTY TURQUOISE',
        hexCodes: ['#D8D6D4', '#355053'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/91822-64_ROCKHOPPER-SPORT-29-BLZ-ICEPPYA_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'GLOSS BLAZE / ICE PAPAYA',
        hexCodes: ['#EF7230'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/91822-66_ROCKHOPPER-SPORT-29-FSTGRN-OIS_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'SATIN FOREST GREEN / OASIS',
        hexCodes: ['#37393D', '#B6E0D2'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/91822-67_ROCKHOPPER-SPORT-29-SLT-CLGRY_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'SATIN SLATE / COOL GREY',
        hexCodes: ['#3E4247'],
      },
    ],
  },
  {
    id: 3,
    name: 'Stumpjumper Comp',
    price: 2999.99,
    description: 'A true trail bike that also rips on the rowdiest enduro tracks.',
    variants: [
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/93321-50_SJ-COMP-SMK-CLGRY-CARB_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'SATIN SMOKE / COOL GREY / CARBON',
        hexCodes: ['#5C5A5A', '#A19FA0'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/93321-51_SJ-COMP-WHTMTN-BLK_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'GLOSS WHITE MOUNTAINS / BLACK',
        hexCodes: ['#B8B4A3', '#000000'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/93322-50_SJ-COMP-REDWD-BLK_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'SATIN REDWOOD / BLACK',
        hexCodes: ['#C33C2C', '#000000'],
      },
    ],
  },
  {
    id: 4,
    name: 'Sirrus 2.0',
    price: 619.99,
    description:
      'A comfortable, versatile fitness bike designed for workouts, fun rides, and everything in between.',
    variants: [
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/90922-81_SIRRUS-20-WHTMTN-LMSTN-BLKREFL_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'GLOSS WHITE MOUNTAINS / LIMESTONE / SATIN BLACK REFLECTIVE',
        hexCodes: ['#CFC9B4', '#000000'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/90922-80_SIRRUS-20-ARCTBLU-CLGRY-BLKREFL_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'GLOSS ARCTIC BLUE / COOL GREY / SATIN REFLECTIVE BLACK',
        hexCodes: ['#9FC6D2', '#000000'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/90922-86_SIRRUS-20-CSTBLK-BLK-BLKREFL_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'SATIN CAST BLACK / GLOSS BLACK / SATIN BLACK REFLECTIVE',
        hexCodes: ['#232323'],
      },
    ],
  },
  {
    id: 5,
    name: 'Stumpjumper Expert',
    price: 4649.99,
    description: 'A true trail bike that also rips on the rowdiest enduro tracks.',
    variants: [
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/93322-31_SJ-EXPERT-DOP-DOP-BLK_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'SATIN DOPPIO / GLOSS DOPPIO / SATIN BLACK',
        hexCodes: ['#75605B', '#000000'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/93322-30_SJ-EXPERT-WHTMTN-GUN_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'GLOSS WHITE MOUNTAINS / GUNMETAL',
        hexCodes: ['#CECCC0', '#444444'],
      },
    ],
  },
  {
    id: 6,
    name: 'Sirrus X 4.0',
    price: 1350.0,
    description:
      'A lightweight, durable fitness bike built to smooth out rough roads, paths, and trails.',
    variants: [
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/92422-50_SIRRUS-X-40-LGNBLU-TRPTL-BLKREFL_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'GLOSS LAGOON BLUE / TROPICAL TEAL / SATIN BLACK REFLECTIVE',
        hexCodes: ['#2BABB0'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/92422-51_SIRRUS-X-40-SMK-CLGRY-BLK_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'GLOSS SMOKE / COOL GREY / SATIN BLACK REFLECTIVE',
        hexCodes: ['#3B3A41'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/92422-52_SIRRUS-X-40-WHTMTN-TPE-BLKREFL_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'WHITE MOUNTAINS / TAUPE / SATIN BLACK REFLECTIVE',
        hexCodes: ['#CAC9C6'],
      },
    ],
  },
  {
    id: 7,
    name: 'Diverge E5',
    price: 1300.0,
    description: 'An adventure bike for exploring roads, paths, and trails everywhere.',
    variants: [
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/95423-70_DIVERGE-E5-BRCH-WHTMTN_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'GLOSS BIRCH/WHITE MOUNTAINS',
        hexCodes: ['#EDEBE6', '#76746E'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/95423-71_DIVERGE-E5-REDWD-RSTDRED_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'GLOSS REDWOOD/RUSTED RED',
        hexCodes: ['#C83C23', '#3A231E'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/95423-72_DIVERGE-E5-MNSHDW-VLTPRL_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'SATIN MIDNIGHT SHADOW/VIOLET PEARL',
        hexCodes: ['#19181D', '#625479'],
      },
    ],
  },
  {
    id: 8,
    name: 'RIME 1.0 Mountain Bike Shoes',
    price: 110.0,
    description: 'An affordable and durable mountain bike shoe for all-day trail comfort.',
    variants: [
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/61119-704_SHOE_RIME-10-MTB_BLK_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'Black',
        hexCodes: ['#000000', '#717276'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/61119-724_SHOE_RIME-10-MTB_MNT_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'Oak',
        hexCodes: ['#6D6B59', '#000000'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/61523-514_SHOE_RIME-10-MTB-SHOE-DKMOS-HRVGLD-44_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'Dark Moss Green/Harvest Gold',
        hexCodes: ['#4A4844', '#6D696A'],
      },
    ],
  },
  {
    id: 9,
    name: 'Roubaix SL8 Sport 105',
    price: 3500.0,
    description: 'A smooth and efficient endurance road bike for pushing limits and staying fresh.',
    variants: [
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/94424-60_ROUBAIX-SPORT-105-METOBSD-BRCH_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'SATIN METALLIC OBSIDIAN/BIRCH',
        hexCodes: ['#5C5A5D', '#DBDAD3'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/94424-61_ROUBAIX-SPORT-105-CLY-BLKLQDMET_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'GLOSS BIRCH/WHITE MOUNTAINS/ABALONE',
        hexCodes: ['#DEDBD1', '#DBDAD4'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/94424-62_ROUBAIX-SPORT-105-METSPHR-BLUONYX_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'SATIN METALLIC SAPPHIRE/BLUE ONYX',
        hexCodes: ['#4944A7', '#232931'],
      },
    ],
  },
  {
    id: 10,
    name: 'Sirrus X 5.0',
    price: 2250.0,
    description:
      'A lightweight, durable fitness bike built to smooth out rough roads, paths, and trails.',
    variants: [
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/92422-30_SIRRUS-X-50-REDTNT-CARB-BLK_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'SATIN RED TINT / CARBON / BLACK / BLACK REFLECTIVE',
        hexCodes: ['#462E32'],
      },
      {
        imageLink:
          'https://assets.specialized.com/i/specialized/92422-31_SIRRUS-X-50-WHTMTN-GUN_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
        colorName: 'GLOSS WHITE MOUNTAINS / GUNMETAL / SATIN WHITE MTNS REFLECTIVE',
        hexCodes: ['#ABA39B'],
      },
    ],
  },
]

module.exports = bikes
