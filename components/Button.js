import React from 'react';
import Link from 'next/link';

const Button = ({text, link, right}) => {
    const buttonText = right ? text + " >" : "< " + text;

    return (
        <button className="bg-secondary hover:bg-primary text-white font-bold rounded-xl p-4 float-right">
            <Link href={link} className="text-white">
                {buttonText}
            </Link>
        </button>
    );
};

export default Button;