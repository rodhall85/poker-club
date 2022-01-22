import React from 'react';
import Link from 'next/link';

const login = () => {
    return (
        <div className="mx-auto w-full sm:w-10/12 md:w-9/12 lg:w-6/12 py-4">

            <div className="text-2xl font-bold">Login</div>
            <div className="flex">
                <p className="mr-1">Don&apos;t have an account?</p>
                <Link href="/signup">
                    <a>Sign Up</a>
                </Link>
            </div>
        </div>
    );
};

export default login;
