// src/pages/DetailPage.jsx
import { ArrowLeft, ChefHat, Clock } from "lucide-react";

export default function DetailPage({ recipe, onBack }) {
	const isMakanan = recipe.image_url.includes("unsplash") || recipe.id <= 10;

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pb-20 md:pb-8 animate-fade-in">
			<main className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
				<button
					onClick={onBack}
					className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 font-medium mb-6 transition-colors duration-200"
				>
					<ArrowLeft size={20} />
					<span>Kembali</span>
				</button>

				<div className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl md:rounded-3xl shadow-xl shadow-blue-500/5 overflow-hidden">
					<div className="relative h-56 md:h-96">
						<img
							src={recipe.image_url}
							alt={recipe.name}
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
						<div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
							<span
								className={`text-xs font-semibold text-white px-3 py-1.5 rounded-full ${
									isMakanan ? "bg-blue-500/80" : "bg-green-500/80"
								}`}
							>
								{isMakanan ? "Makanan" : "Minuman"}
							</span>
							<h1 className="text-white text-3xl md:text-5xl font-bold mt-2 shadow-text">
								{recipe.name}
							</h1>
						</div>
					</div>

					<div className="p-6 md:p-10">
						{/* Ingredients Section */}
						<div className="mb-8">
							<h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
								<Clock className="w-6 h-6 mr-3 text-blue-500" />
								Bahan-Bahan
							</h2>
							<ul className="list-disc list-inside space-y-2 text-slate-700">
								{recipe.ingredients.map((ingredient, index) => (
									<li key={index} className="pl-2">
										{ingredient}
									</li>
								))}
							</ul>
						</div>

						{/* Steps Section */}
						<div>
							<h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
								<ChefHat className="w-6 h-6 mr-3 text-blue-500" />
								Langkah-Langkah
							</h2>
							<ol className="list-decimal list-inside space-y-4 text-slate-700">
								{recipe.steps.map((step, index) => (
									<li key={index} className="pl-2 leading-relaxed">
										{step}
									</li>
								))}
							</ol>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
