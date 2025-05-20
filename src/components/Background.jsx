function Background() {
    return (
        <div className="absolute h-full w-full">
            {[...Array(50)].map((_, i) => {
                const colors = ["#ffbf00", "#a259ff", "#00c2cb", "#ff6f61", "gold"];
                const background = colors[Math.floor(Math.random() * colors.length)];
                const duration = 3 + Math.random() * 2; // 3s to 7s
                const delay = Math.random() * 0.5; 
                const scale = 0.8 + Math.random() * 0.6; // 0.8 to 1.4
                return (
                    <span
                        key={i}
                        className="absolute rounded-full -z-10"
                        style={{
                            width: "25px",
                            height: "25px",
                            background,
                            opacity: 0.65,
                            top: `${10 + Math.random() * 80}%`,
                            left: `${10 + Math.random() * 80}%`,
                            filter: "blur(10px)",
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