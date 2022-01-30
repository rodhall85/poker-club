import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer bg-gray-800 text-white text-sm sm:text-base">
            <div className="container mx-auto px-4 w-full m:w-9/12 lg:w-6/12">
                <div className="p-4 text-center max-w-lg mx-auto">
                    <p>
                        The Ivy Leaf Poker Club games are licensed by the Gambling&nbsp;Commision strictly for Ivy Leaf Club members&nbsp;only.
                    </p>
                    <p className="py-4">
                        Anyone that registers to play that is not a member will be refused&nbsp;entry.
                    </p>
                    <p>
                        This website is soley for the entertainment of the club members, for upcoming games and for the&nbsp;results.
                    </p>
                </div>
                <div className="flex w-64 mx-auto">
                     <div className="underline p-2 flex-1"><Link href="/"><a>Home</a></Link></div>
                     <div className="underline p-2 flex-1 text-left"><Link href="/results"><a>Results</a></Link></div>
                     <div className="underline p-2 flex-1 text-right"><Link href="/structures"><a>Structures</a></Link></div>
                     <div className="underline p-2 flex-1 text-right"><Link href="/rules"><a>Rules</a></Link></div>
                </div>
                <div className="p-4 w-full">
                    <div className="w-full flex">
                        <div className="flex-1">&copy; {(new Date()).getFullYear()} - Ivy Leaf Club</div>
                        <div className="flex-1 text-right underline">
                            <a href="mailto:rodhall@hotmail.co.uk">rodhall@hotmail.co.uk</a>
                        </div>
                    </div>
                    <div className="float-right w-4/12 text-right">
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;