const Heading = ({className,title,text}) => {
    return (
        <div className={'${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 '}>
            {title && <h2 className="text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight text-black font-semibold font-serif">{title}</h2>}
            {text && <p className="body-2 mt-4 text-black">{text}</p>}
        </div>
        
    )
}

export default Heading;