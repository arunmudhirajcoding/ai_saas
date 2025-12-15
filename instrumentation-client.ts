import * as Sentry from "@sentry/nextjs";

const isProd = process.env.NODE_ENV === "production";

Sentry.init({
	dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
	sendDefaultPii: true, // includes IP/headers; set false if you prefer
	tracesSampleRate: isProd ? 0.1 : 1.0,
	replaysSessionSampleRate: isProd ? 0.02 : 0.1,
	replaysOnErrorSampleRate: 1.0,
	enableLogs: true,

	integrations: [
		Sentry.replayIntegration(),
		Sentry.consoleLoggingIntegration({ levels: ["log", "warn", "error"] }),
		Sentry.feedbackIntegration({
			showName:false,
			showEmail:false,
			formTitle:"Report or Feedback",
			submitButtonLabel:"Submit",
			showBranding:false,
			autoInject: false,
		}),
	],
});


// Use metrics in both server and client code
Sentry.metrics.count("user_action", 1);
Sentry.metrics.distribution("api_response_time", 150);
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
