// import {withSentryConfig} from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	allowedDevOrigins:['sentry-vercel-ng.sentry.io'],
	
	images: {
		remotePatterns: [
			
			{
				protocol: "https",
				hostname: "img.clerk.com",
				pathname: "/**",
			},
			// add your other domains here
		],
	},
};

module.exports = nextConfig;

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(module.exports, {
	

	org: process.env.SENTRY_ORG,
	project: process.env.SENTRY_PROJECT,

	silent: !process.env.CI,

	tunnelRoute: "/monitoring",

	disableLogger: true,

	automaticVercelMonitors: true,
});
