const { withSentryConfig } = require('@sentry/nextjs');

const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  sentry: {
    hideSourceMaps: true,
    autoInstrumentServerFunctions: false
  },

  env: {
    RECAPTCHA_SITE_KEY: "6Le1WecZAAAAAJHHNtF0A1yOx642M8M0Us5HoJn7",
    RECAPTCHA_ENABLED: false,
    ALLOWED_PARTY_SECRET: "ALL",
    FRESHSALES_API_KEY: "fPjGQStTY1ffGqtyAj9RVw",
    FRESHSALES_BASE_URL: "https://railflow.myfreshworks.com",
    PIPEDRIVE_API_KEY: "86ee7b82f93c86542f262415ee6b29222c8d06cf",
    PIPEDRIVE_BASE_URL: "https://railflow.pipedrive.com",
    ALLOWED_DOMAINS: [
      "http://localhost",
      "http://localhost:3000",
      "https://railflow.io",
      "https://www.railflow.io",
      "https://railflow.myfreshworks.com",
      "https://api.mailgun.net/",
    ],
    CRYPTOLENS_BASE_URL: "https://app.cryptolens.io",
    CRYPTOLENS_API_KEY:
      "WyI1NTkwNTYzIiwidE1WQ1NjaUlwR05adHhZK1BaaEZlamVpUEZ5RElJQ3ZBZGlPVzFkUCJd",
    MAILGUN_KEY: "d90b998fbe1f8454ae7196ade6216a21-20ebde82-093b4516",
    HIVEAGE_DOMAIN: "railflow",
    HIVEAGE_BASE_URL: "https://railflow.hiveage.com/",
    HIVEAGE_API_KEY: "TQcCm6QAzYgCcgzrNqs7",
    SLACK_API_BASE_URL:
      "https://hooks.slack.com/services/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",
    SLACK_SLASH_COMMAND_TOKEN: "kBWbldLF6g11eDX5rpyRQUY4",
    SLACK_MESSAGE_ENABLED: true,
    CRYPTOLENS_LICENSE_EXTENSION_KEY:
      "WyI1NTkwNTYzIiwidE1WQ1NjaUlwR05adHhZK1BaaEZlamVpUEZ5RElJQ3ZBZGlPVzFkUCJd",
    CRYPTOLENS_RSA_PUB_KEY:
      "<RSAKeyValue><Modulus>5TFzvx1Ygenf7BJYxliBFkcKSDebrxVTUteai/xjHP/Tmrx2z5h5vJRkQlg6vxecbLDj7g+TAvZssEVj5D1VVtur2Od1Fdqs49m0dA+QdGBv5DXt9YeqJLW/JpciMom79HcOeIvJDTHJcQssCXKLxGnQkTpMIpB22hTOuJTcj1bmLManR6mQYX2k/BZ/XkC2l61TbKaOnKww3BrX8+b2ImT89VeN0znxIEwBUla78C6pDJTkKDPZPeHItHk9gTBx9CkCCfMdzidVxwiMFvXM7PSBWSFKn2JPO5+gawJbV+0nH95890EL80dl/OH/K5O+CYTaHrKJ+zUcY7MxLqsmCw==</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>",
    ALLOWED_PARTY_SECRET: "ALL",
    SPACES_KEY: "Q532IXKKF2WUGFCEMKRS",
    SPACES_SECRET: "UZv5uxItW7OZquGBlGWGEsGUdS7H1GUz/OucXWDOFiw",
    SPACE_NAME: "railflow",
    SPACE_ENDPOINT: "sfo3.digitaloceanspaces.com",
    PRODUCT_ID: 8245,
    CONTACT_STATUS_ID: 16000052147,
    EXTENSION_PERIOD: 14,
    DOMAIN: "mail.railflow.io",
    SALESPANEL_API_KEY: "4cab75dab8852f0fe87cbc4e6821fe352e660650",
    SALESPANEL_BASE_URL: "https://salespanel.io",
    LOG_RESPONSE: true,
    STRIPE_SECRET_TEST_KEY:
      "sk_test_51JSOmHDhvP6DurKSDkjAvTFevDpMxKU2lEUe1IeM3NFACU4d60Ri0dOv7SwaPOEpfqsxeBUOUZmo5veR06ImbCoo00glQVFsmB",
    STRIPE_SECRET_LIVE_KEY:
      "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",
    STRIPE_PUBLIC_KEY:
      "pk_test_51JSOmHDhvP6DurKSsGw6QBpRN9zmuFKeJ3RzvnvGMy2GoVnKlVUBj49jQjhb8xFL6pMugawFeZYkYDAWMGk3bJlA00bI135spV",
    MIXPANEL_KEY: "97d58733e64400bf0e1a0b23ce3c488b",
    STRIPE_LIVE_LICENSE_PRODUCT: "prod_LkYOTh3gWcc2ma",
    STRIPE_LIVE_SUPPORT_PRICE: "price_1LH6FjDhvP6DurKSQ1S7QS9b",
    STRIPE_TEST_LICENSE_PRODUCT: "prod_LsWxQNfMecr3gh",
    STRIPE_TEST_SUPPORT_PRICE: "price_1LGTZqDhvP6DurKSlZtcMrfa",
    POST_HOG_API_KEY: "phc_FtJftK2TrWqi9kbAqPeVolXtQ1FZ3JIXu7AjMPhj3Dx",
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: 'https://railflow.atlassian.net/servicedesk/customer/portal/1',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: 'https://docs.railflow.io/docs/legal/privacy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: 'https://docs.railflow.io/docs/legal/terms',
        permanent: true,
      },
      
    ]
  },
};


/**
 * Sentry webpack plugin options.
 */

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
