function ButtonWhite(props) {
    return (
        <>
            <button
                onClick={props.onclick || null}
                className={`h-10 px-12 mx-2 relative flex justify-center items-center bg-amber-50 text-black rounded-3xl font-semibold text-md uppercase leading-snug 
        before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-[linear-gradient(to_right,_#288ff0,_rgb(222,105,40))] before:rounded-3xl before:-z-10 before:transition-all before:duration-200 hover:before:scale-100 hover:before:blur-sm cursor-pointer
        after:content-[''] after:absolute after:inset-0 after:h-full after:w-full after:bg-[linear-gradient(to_right,_#288ff0,_rgb(222,105,40))] after:rounded-3xl after:-z-10 after:transition-all after:duration-200 hover:after:scale-100 hover:after:blur-sm
        active:before:scale-95 active:before:blur-0 active:after:scale-75 active:after:blur-0
                `}
            >
                {props.label}
            </button>
        </>
    );
}

function ButtonAccent(props) {
    return (
        <button
            onClick={props.onclick || null}
            className="h-12 px-14 mx-2 relative flex justify-center items-center bg-gray-950 text-white rounded-3xl font-semibold text-md uppercase leading-snug cursor-pointer
            before:content-[''] before:absolute before:inset-0 before:-m-1 before:w-[calc(100%+8px)] before:h-[calc(100%+8px)] before:bg-[linear-gradient(270deg,_#288ff0,_rgb(222,105,40))] before:rounded-[2rem] before:-z-10 before:transition-all before:duration-200 
            after:content-[''] after:absolute after:inset-0 after:-m-1 after:w-[calc(100%+8px)] after:h-[calc(100%+8px)] after:bg-[linear-gradient(270deg,_#288ff0,_rgb(222,105,40))] after:rounded-[2rem] after:-z-10 after:transition-all after:duration-200
            hover:before:scale-105 hover:before:blur-sm hover:after:scale-105 hover:after:blur-sm
            active:before:scale-95 active:before:blur-0 active:after:scale-90 active:after:blur-0"
        >
            {props.label}
        </button>
    );
}
export { ButtonWhite, ButtonAccent };