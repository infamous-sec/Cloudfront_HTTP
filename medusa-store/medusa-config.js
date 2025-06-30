// medusa-store/medusa-config.js
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  projectConfig: {
    redis_url: process.env.REDIS_URL,
    database_url:
      process.env.DATABASE_URL ||
      `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@db:5432/${process.env.DB_NAME}`,
    store_cors: process.env.STORE_CORS || "*",
    admin_cors: process.env.ADMIN_CORS || "*",
    jwt_secret: process.env.JWT_SECRET,
    cookie_secret: process.env.COOKIE_SECRET,
  },
  plugins: [
    // Example: Add Stripe, PayPal, OIDC, etc. as needed.
    // {
    //   resolve: `medusa-payment-stripe`,
    //   options: { api_key: process.env.STRIPE_API_KEY },
    // },
  ],
};