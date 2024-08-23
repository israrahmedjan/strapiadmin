module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'default-src': ["'self'"], // Default policy to self
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'res.cloudinary.com',
            'https://best-trust-c63ee18b56.media.strapiapp.com', // Full URL with HTTPS added here
            '*.strapi.io'
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            'res.cloudinary.com',
            'https://best-trust-c63ee18b56.media.strapiapp.com' // Full URL with HTTPS added here
          ],
          'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"], // Allow inline scripts, if needed
          'style-src': ["'self'", "'unsafe-inline'"], // Allow inline styles, if needed
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
