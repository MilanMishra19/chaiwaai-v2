const Footer = () => {
    return (
        <div className="w-full bg-gray-100 border-t border-black py-4">
            <div className="container mx-auto flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col px-4">
                <p className="text-black text-sm md:text-base text-center sm:text-left">
                    Copyright 2025. All rights reserved by Chaiwaai
                </p>

                {/* Social Media Links */}
                <div className="flex gap-5">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="/facebook.svg" width={24} height={24} alt="Facebook" className="hover:opacity-80 transition-opacity"/>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="/twitter.svg" width={24} height={24} alt="Twitter" className="hover:opacity-80 transition-opacity"/>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram.svg" width={24} height={24} alt="Instagram" className="hover:opacity-80 transition-opacity"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
