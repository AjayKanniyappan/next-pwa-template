/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // 👈 DISABLING PWA IN DEVELOPMENT MODE
  register: true,
  skipWaiting: true,
  runtimeCaching,
});

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = '/';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = withPWA({
  assetPrefix,
  basePath,
  env: {
    BACKEND_URL: basePath,
  },
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
