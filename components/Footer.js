const Footer = () => {
    return (
        <footer className="footer bg-gray-800 h-36 text-text-primary text-sm sm:text-base">
            <div className="container mx-auto px-4 w-full m:w-9/12 lg:w-6/12">
                <div className="p-4">
                    <div className="float-left w-8/12">
                        <div className="float-left w-full h-14">&copy; {(new Date()).getFullYear()} - Ivy Leaf Club</div>
                        <div className="float-left w-full">
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