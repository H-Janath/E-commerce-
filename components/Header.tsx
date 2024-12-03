'use client'

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import Form from 'next/form';
import Link from "next/link";

function Header() {
    const { user } = useUser();



    return (
        <header className="flex flex-wrap justify-between items-center px-4 py-2">
            <div className="flex w-full flex-wrap justify-between items-center">
                {/* Logo */}
                <Link
                    href="/"
                    className="
                        text-2xl
                        font-bold
                        text-blue-500
                        hover:opacity-50
                        cursor-pointer
                        sm:mx-0
                    "
                >
                    Shoper
                </Link>

                {/* Search Form */}
                <Form
                    action='/search'
                    className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-4 sm:mt-0"
                >
                    <input
                        type="text"
                        name="query"
                        placeholder="Search for products"
                        className="
                            bg-gray-100
                            text-gray-800
                            px-4
                            py-2
                            rounded
                            focus:outline-none
                            focus:ring-2
                            focus:ring-blue-500
                            focus:ring-opacity-50
                            border
                            w-full
                        "
                    />
                </Form>

                {/* Navigation Buttons */}
                <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                    <Link
                        href='/basket'
                        className="
                            flex items-center
                            space-x-2
                            bg-blue-500
                            hover:bg-blue-700
                            text-white
                            font-bold
                            py-2
                            px-4
                            rounded
                        "
                    >
                        <TrolleyIcon className="w-6 h-6" />
                        <span>My Basket</span>
                    </Link>

                    <ClerkLoaded>
                        {user && (
                            <Link
                                href="/orders"
                                className="
                                    flex items-center
                                    space-x-2
                                    bg-blue-500
                                    hover:bg-blue-700
                                    text-white
                                    font-bold
                                    py-2
                                    px-4
                                    rounded
                                "
                            >
                                <PackageIcon className="w-6 h-6" />
                                <span>My Orders</span>
                            </Link>
                        )}

                        {user ? (
                            <div className="flex items-center space-x-2">
                                <UserButton />
                                <div className="hidden sm:block text-xs">
                                    <p>Welcome Back</p>
                                    <p className="font-bold">{user.fullName}!</p>
                                </div>
                            </div>
                        ) : (
                            <SignInButton mode="modal" />
                        )}

                       
                    </ClerkLoaded>
                </div>
            </div>
        </header>
    );
}

export default Header;
