function Background() {
    return (
        <div className="absolute h-full w-full animate-pulse">
            {[...Array(20)].map((_, i) => (
                <span
                    key={i}
                    className="absolute rounded-full -z-10"
                    style={{
                        width: "15px",
                        height: "15px",
                        background: "#ffbf00",
                        opacity: 0.65,
                        top: `${10 + Math.random() * 80}%`,
                        left: `${10 + Math.random() * 80}%`,
                        filter: "blur(5px)"
                    }}
                />
            ))}
        </div>
    );
}
export default Background;