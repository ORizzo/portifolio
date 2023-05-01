const {
  PHASE_PRODUCTION_BUILD,
  PHASE_DEVELOPMENT_SERVER,
} = require("next/constants");

/** @type {import('next').NextConfig} */

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  const isProd = phase === PHASE_PRODUCTION_BUILD && !process.env["IS_STAGING"];

  const isStaging =
    !!process.env["IS_STAGING"] && phase != PHASE_DEVELOPMENT_SERVER;

  console.log("IS_DEV=", isDev);

  console.log("IS_STAGING=", isStaging);

  console.log("IS_PROD=", isProd);

  return {
    swcMinify: false,
    trailingSlash: true,
    experimental: {
      appDir: true,
    },
    env: {
      HOST_API_URL: (() => {
        if (isProd) return "https://portifolio-tau-nine.vercel.app";
        if (isStaging) return "http://localhost:3000";
        return "http://localhost:3000";
      })(),
    },
  };
};
