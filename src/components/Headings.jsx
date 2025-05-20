function HeadingLarge(props) {
    return (
        <h1 className={`gradient-heading text-6xl sm:text-6xl md:text-6xl lg:text-7xl text-transparent bg-[linear-gradient(190deg,_white_30%,_transparent_100%)] bg-clip-text font-semibold leading-tight ${props.className}`}>
            {props.label}
        </h1>
    );
}

function HeadingSmall(props) {
    return (
        <h2 className={`text-md sm:text-lg md:text-xl  font-normal leading-snug ${props.className}`}>
            {props.label}
        </h2>
    );
}

export {HeadingLarge, HeadingSmall};