import { navigation } from "../constants";
import { useState } from "react";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm font-semibold flex justify-center items-center h-16 w-full">
            <div className="flex justify-center items-center w-full space-x-2 lg:space-x-2"> {/* Added lg:space-x-2 */}
                <div className="hidden lg:flex space-x-2"> {/* Hide on mobile */}
                    {navigation.slice(0, 2).map((item) => (
                        <a key={item.id} href={item.url} className={'block relative uppercase transition-colors hover:bg-green-400'}>
                            {item.title}
                        </a>
                    ))}
                </div>

                <a className="block w-[12rem]" href="/">
                    <img src="/chaiwaailogo3.png" width={190} height={40} alt="chaiwaai_logo" />
                </a>

                <div className="hidden lg:flex space-x-2"> {/* Hide on mobile */}
                    {navigation.slice(2, 4).map((item) => (
                        <a key={item.id} href={item.url} className={'block relative uppercase transition-colors hover:bg-green-400'}>
                            {item.title}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center "> {/* Show only on mobile */}
                    <button className="text-black right-0 " onClick={toggleMobileMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-16 left-0 w-full bg-n-8/90 backdrop-blur-sm bg-neutral-500 rounded-b-lg shadow-lg">
                        <div className="flex flex-col p-4 space-y-2">
                            {navigation.map((item) => (
                                <a key={item.id} href={item.url} className={'block relative uppercase transition-colors hover:bg-green-400 py-2 px-4 rounded'}>
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;