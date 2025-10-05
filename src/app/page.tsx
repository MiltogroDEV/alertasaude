export default function Login() {
    return (
        <div className="flex h-screen w-screen">
            <div className="w-full lg:w-[30%] bg-[var(--custom-red)] flex items-center justify-center">
                <img 
                    src="Logo.svg" 
                    alt="" 
                    width={250} 
                    height={250}
                />
            </div>

            <div className="hidden lg:flex lg:w-[70%] bg-[var(--custom-white)] relative">
                <img 
                    src="imagem1.svg" 
                    alt="" 
                    width={800} 
                    height={800} 
                    className="absolute bottom-0 right-[30vw]"
                />
                <img 
                    src="LogoAberta.svg" 
                    alt="" 
                    width={400} 
                    height={400} 
                    className="absolute bottom-[70vh] right-[10vw]"
                />
            </div>
        </div>
    );
}