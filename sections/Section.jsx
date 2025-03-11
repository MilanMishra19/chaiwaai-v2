
import SectionSvg from "../assets/svg/SectionSvg"; 

const Section = ({
    className,
    id,
    crosses,
    crossesOffset,
    customPaddings,
    children,
    ...rest 
}) => {
    return (
        <div className="flex flex-col min-h-screen"> 
            <main className="flex-grow"> 
                <div
                    id={id}
                    className={`
                        relative 
                        ${customPaddings || `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`} 
                        ${className || ""}
                    `}
                    {...rest} 
                >
                    {children}

                    
                    <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
                    <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

                    
                    {crosses && (
                        <>
                            <div
                                className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${crossesOffset && crossesOffset
                                    } pointer-events-none lg:block xl:left-10 right-10`}
                            />
                            <SectionSvg crossesOffset={crossesOffset} /> 
                        </>
                    )}
                </div>
            </main>
        </div>

    );
};

export default Section;