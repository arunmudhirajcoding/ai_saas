"use client";
import React, { useEffect, useRef, useState } from "react";
import * as Sentry from "@sentry/nextjs";
import { useUser } from "@clerk/nextjs";
import toast, { Toaster } from "react-hot-toast";
const FeedbackButton = () => {
	const [feedback, setFeedback] = useState<any>();
	const { isSignedIn } = useUser();
	// Read `getFeedback` on the client only, to avoid hydration errors during server rendering
	useEffect(() => {
		setFeedback(Sentry.getFeedback());
	}, [isSignedIn]);

	const buttonRef = useRef<any>(null);
	useEffect(() => {
		if (feedback) {
			const unsubscribe = feedback.attachTo(buttonRef.current);
			return unsubscribe;
		}
		return () => {};
	}, [feedback]);

	const showToaster = () => {
		if (!isSignedIn) {
			toast("please sign-in for feedback", {
				duration: 2000,
			});
		}
	};
	return (
		<div>
			<div className="fixed bottom-6 right-6 rounded-full px-4 py-2 w-44 h-14 z-50"  onMouseEnter={showToaster}>
			<button
				type="button"
				ref={buttonRef}
				className={`fixed bottom-6 right-6 z-40 rounded-full px-4 py-2 shadow bg-indigo-600 text-white hover:bg-indigo-700 ${
					isSignedIn
						? "hover:cursor-pointer"
						: "hover:cursor-not-allowed"
				}`}
				disabled={!isSignedIn}
			>
				Give me feedback
			</button>
			</div>
			<Toaster />
		</div>
	);
};

export default FeedbackButton;
