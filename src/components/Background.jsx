function Background() {
    return (
        <div className="absolute h-full w-full">
            {[...Array(100)].map((_, i) => {
                const colors = ["gold"];
                const background = colors[Math.floor(Math.random() * colors.length)];
                const duration = 3 + Math.random() * 1; // 3s to 7s
                const delay = Math.random() * 0.1; 
                const scale = 0.8 + Math.random() * 1; // 0.8 to 1.4
                return (
                    <span
                        key={i}
                        className="absolute rounded-full -z-10"
                        style={{
                            width: "5px",
                            height: "5px",
                            background,
                            opacity: 0.65,
                            top: `${10 + Math.random() * 80}%`,
                            left: `${10 + Math.random() * 80}%`,
                            filter: "blur(1px)",
                            animation: `floatY ${duration}s ease-in-out ${delay}s infinite alternate, floatX ${duration + 1}s ease-in-out ${delay}s infinite alternate`,
                            transform: `scale(${scale})`
                        }}
                    />
                );
            })}
            <style>
                {`
                @keyframes floatY {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-30px); }
                }
                @keyframes floatX {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(30px); }
                }
                `}
            </style>
        </div>
    );
}
export default Background;