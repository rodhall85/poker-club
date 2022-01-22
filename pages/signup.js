import React from 'react';
import Link from 'next/link';

const signup = () => {
    return (
        <div className="mx-auto w-full sm:w-10/12 md:w-9/12 lg:w-6/12 py-4">
            <h2 className="text-2xl font-bold">Create Account</h2>
            <p>Create an account to register for tournaments</p>
            <div className="flex">
                <p className="mr-1">Already have an account?</p>
                <Link href="/login">
                    <a>Login</a>
                </Link>
            </div>
        </div>
    );
};

export default signup;
