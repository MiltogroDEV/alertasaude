import { Input } from "@/components/ui/input";

export default function Login() {
	return (
		<div className="flex h-screen w-screen">
			<div className="w-full lg:w-[30%] bg-[var(--custom-red)] flex items-center justify-center">
				<div className="flex-col">
					<div className="flex items-center justify-center">
						<img
							src="Logo.svg"
							alt=""
							width={250}
							height={250}
							className="pb-[10vh]"
						/>
					</div>

					<Input type="email" placeholder="Email" className="bg-[var(--custom-white)] [var(--custom-gray)]"/>
					<Input type="text" placeholder="Senha" className="bg-[var(--custom-white)] [var(--custom-gray)]"/>

					<div className="flex items-center justify-center pt-[5vh]">
						<button className="w-[7vw] h-[5vh] bg-[#4a4a4a] hover:bg-[#3a3a3a] text-white font-semibold rounded-lg transition-colors duration-200">
							Entrar
						</button>
					</div>

					<p className="text-white text-sm text-center mt-4">
						Ainda não possui cadastro?{' '}
						<a href="/register" className="font-semibold underline hover:text-white/90">
							Clique aqui!
						</a>
					</p>
				</div>
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