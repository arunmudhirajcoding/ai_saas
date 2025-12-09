import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import {
	SignInButton,
	SignUpButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
	return (
		<nav className="navbar">
			<Link href="/">
				<div className="flex items-center gap-2.5 cursor-pointer">
					<Image
						src="/images/logo.png"
						alt="logo"
						width={70}
						height={70}
						className="rounded-4xl absolute w-28 top-0 brightness-[1.1] saturate-0 contrast-[1.2]"
					/>
				</div>
			</Link>
			<div className="flex items-center gap-8">
				<NavItems />
				<SignedOut>
					<SignInButton>
						<button className="btn-signin">Sign In</button>
					</SignInButton>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</nav>
	);
};

export default Navbar;
