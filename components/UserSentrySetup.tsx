"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

export function UserSentrySetup() {
	const { user, isSignedIn } = useUser();

	useEffect(() => {
		if (isSignedIn && user) {
			Sentry.setUser({
				id: user.id,
				email: user.primaryEmailAddress?.emailAddress,
				username: user.fullName || user.username || undefined,
			});
		} else {
			Sentry.setUser(null); // guest/anonymous
		}
	}, [isSignedIn, user]);

	return null; // renders nothing
}
