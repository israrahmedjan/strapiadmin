module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'default-src': ["'self'"],
          'connect-src': ["'self'", 'https:', 'https://api.cloudinary.com'], // Allow connections to Cloudinary API
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'res.cloudinary.com', // Allow images from Cloudinary
            'https://best-trust-c63ee18b56.media.strapiapp.com', // Allow images from Strapi media domain
            '*.strapi.io'
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'res.cloudinary.com', // Allow media from Cloudinary
            'https://best-trust-c63ee18b56.media.strapiapp.com' // Allow media from Strapi media domain
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
