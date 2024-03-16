const bikes = [
  {
    id: 1,
    name: 'Rockhopper Sport 29',
    price: 750.0,
    imageLinks: [
      'https://assets.specialized.com/i/specialized/91822-64_ROCKHOPPER-SPORT-29-BLZ-ICEPPYA_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/91822-65_ROCKHOPPER-SPORT-29-WHTMTN-DSTTUR_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/91822-66_ROCKHOPPER-SPORT-29-FSTGRN-OIS_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/91822-67_ROCKHOPPER-SPORT-29-SLT-CLGRY_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
    ],
  },
  {
    id: 2,
    name: 'Rockhopper Sport 27.5',
    price: 699.99,
    imageLinks: [
      'https://assets.specialized.com/i/specialized/91822-65_ROCKHOPPER-SPORT-29-WHTMTN-DSTTUR_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/91822-64_ROCKHOPPER-SPORT-29-BLZ-ICEPPYA_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/91822-66_ROCKHOPPER-SPORT-29-FSTGRN-OIS_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/91822-67_ROCKHOPPER-SPORT-29-SLT-CLGRY_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
    ],
  },
  {
    id: 3,
    name: 'Stumpjumper Comp',
    price: 2999.99,
    imageLinks: [
      'https://assets.specialized.com/i/specialized/93321-50_SJ-COMP-SMK-CLGRY-CARB_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/93321-51_SJ-COMP-WHTMTN-BLK_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/93322-50_SJ-COMP-REDWD-BLK_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
    ],
  },
  {
    id: 4,
    name: 'Sirrus 2.0',
    price: 619.99,
    imageLinks: [
      'https://assets.specialized.com/i/specialized/90922-81_SIRRUS-20-WHTMTN-LMSTN-BLKREFL_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/90922-80_SIRRUS-20-ARCTBLU-CLGRY-BLKREFL_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/90922-86_SIRRUS-20-CSTBLK-BLK-BLKREFL_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
    ],
  },
  {
    id: 5,
    name: 'Stumpjumper Expert',
    price: 4649.99,
    imageLinks: [
      'https://assets.specialized.com/i/specialized/93322-31_SJ-EXPERT-DOP-DOP-BLK_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/93322-30_SJ-EXPERT-WHTMTN-GUN_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
    ],
  },
  {
    id: 6,
    name: 'Sirrus X 4.0',
    price: 1350.0,
    imageLinks: [
      'https://assets.specialized.com/i/specialized/92422-50_SIRRUS-X-40-LGNBLU-TRPTL-BLKREFL_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/92422-51_SIRRUS-X-40-SMK-CLGRY-BLK_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/92422-52_SIRRUS-X-40-WHTMTN-TPE-BLKREFL_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
    ],
  },
  {
    id: 7,
    name: 'Diverge E5',
    price: 1300.0,
    imageLinks: [
      'https://assets.specialized.com/i/specialized/95423-70_DIVERGE-E5-BRCH-WHTMTN_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/95423-71_DIVERGE-E5-REDWD-RSTDRED_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/95423-72_DIVERGE-E5-MNSHDW-VLTPRL_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
    ],
  },
  {
    id: 8,
    name: 'Roubaix SL8 Sport 105',
    price: 3500.0,
    imageLinks: [
      'https://assets.specialized.com/i/specialized/94424-60_ROUBAIX-SPORT-105-METOBSD-BRCH_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/94424-61_ROUBAIX-SPORT-105-CLY-BLKLQDMET_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/94424-62_ROUBAIX-SPORT-105-METSPHR-BLUONYX_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
    ],
  },
  {
    id: 9,
    name: 'Sirrus X 5.0',
    price: 2250.0,
    imageLinks: [
      'https://assets.specialized.com/i/specialized/92422-30_SIRRUS-X-50-REDTNT-CARB-BLK_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/92422-31_SIRRUS-X-50-WHTMTN-GUN_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
    ],
  },
  {
    id: 10,
    name: 'Sirrus X 4.0',
    price: 1350.0,
    imageLinks: [
      'https://assets.specialized.com/i/specialized/92423-50_SIRRUS-X-40-SMK-BLKREFL_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/92423-51_SIRRUS-X-40-WHTMTN-TPE-BLKREFL_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
    ],
  },
  {
    id: 11,
    name: 'Rockhopper Sport',
    price: 800.0,
    imageLinks: [
      'https://assets.specialized.com/i/specialized/91520-68_ROCKHOPPER-SPORT-29-FSTGRN-OIS_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/91520-65_ROCKHOPPER-SPORT-29-BLZ-ICEPPYA_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/91520-66_ROCKHOPPER-SPORT-29-CBLT-CSTBLU_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/91520-67_ROCKHOPPER-SPORT-29-WHTMTN-DSTTUR_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/91520-69_ROCKHOPPER-SPORT-29-SLT-CLGRY_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
    ],
  },
  {
    id: 12,
    name: 'Rockhopper Elite',
    price: 1000.0,
    imageLinks: [
      'https://assets.specialized.com/i/specialized/91520-68_ROCKHOPPER-SPORT-29-FSTGRN-OIS_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/91520-65_ROCKHOPPER-SPORT-29-BLZ-ICEPPYA_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/91520-66_ROCKHOPPER-SPORT-29-CBLT-CSTBLU_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/91520-67_ROCKHOPPER-SPORT-29-WHTMTN-DSTTUR_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
      'https://assets.specialized.com/i/specialized/91520-69_ROCKHOPPER-SPORT-29-SLT-CLGRY_HERO-SQUARE?$scom-plp-product-image-square$&fmt=auto',
    ],
  },
];

module.exports = bikes;
