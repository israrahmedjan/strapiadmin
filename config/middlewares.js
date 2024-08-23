module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  // {
  //   name: 'strapi::security',
  //   config: {
  //     contentSecurityPolicy: {
  //       useDefaults: true,
  //       directives: {
  //         'connect-src': ["'self'", 'https:'],
  //         'img-src': [
  //           "'self'", 
  //           'data:', 
  //           'blob:', 
  //           'res.cloudinary.com', 
  //           'https://best-trust-c63ee18b56.media.strapiapp.com' // Allow images from this domain
  //         ],
  //         'media-src': [
  //           "'self'",
  //           'data:',
  //           'blob:',
  //           'res.cloudinary.com',
  //           'https://best-trust-c63ee18b56.media.strapiapp.com' // Allow media from this domain
  //         ],
  //         upgradeInsecureRequests: null,
  //       },
  //     },
  //   },
  // },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
