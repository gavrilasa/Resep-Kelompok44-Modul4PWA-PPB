// src/components/resep/RecipeGrid.jsx
import { Clock, Star, ChefHat } from "lucide-react";

export default function RecipeGrid({ recipes, onRecipeSelect }) {
	return (
		<section>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
				{recipes.map((recipe) => (
					<div
						key={`${recipe.type}-${recipe.id}`}
						onClick={() => onRecipeSelect(recipe)}
						className="group transform transition-all duration-300 hover:scale-105"
					>
						<div
							className={`relative bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl transition-all duration-500 cursor-pointer group-hover:bg-white/20 ${
								recipe.type === "makanan"
									? "shadow-blue-500/5 hover:shadow-blue-500/15"
									: "shadow-green-500/5 hover:shadow-green-500/15"
							}`}
						>
							<div className="relative h-32 md:h-56 overflow-hidden">
								<img
									src={recipe.image_url}
									alt={recipe.name}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
							</div>
							<div className="relative z-10 p-4 md:p-8">
								<div className="flex items-center justify-between mb-3 md:mb-4">
									<span
										className={`text-xs font-semibold px-2 md:px-3 py-1 md:py-1.5 rounded-full ${
											recipe.type === "makanan"
												? "text-blue-700 bg-blue-100/90"
												: "text-green-700 bg-green-100/90"
										}`}
									>
										{recipe.type === "makanan" ? "Makanan" : "Minuman"}
									</span>
									<div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
										<Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-current" />
										<span className="text-xs md:text-sm font-semibold text-slate-700">
											{recipe.type === "makanan" ? "4.8" : "4.7"}
										</span>
									</div>
								</div>
								<h3
									className={`font-bold text-slate-800 mb-3 md:mb-4 text-base md:text-xl transition-colors duration-200 line-clamp-2 ${
										recipe.type === "makanan"
											? "group-hover:text-blue-600"
											: "group-hover:text-green-600"
									}`}
								>
									{recipe.name}
								</h3>
								<div className="flex items-center justify-between text-xs md:text-sm text-slate-600">
									<div className="flex items-center space-x-1 md:space-x-2 bg-white/70 px-2 md:px-3 py-1 md:py-2 rounded-full">
										<Clock className="w-3 h-3 md:w-4 md:h-4" />
										<span className="font-medium">
											{recipe.ingredients.length} bahan
										</span>
									</div>
									<div className="flex items-center space-x-1 md:space-x-2 bg-white/70 px-2 md:px-3 py-1 md:py-2 rounded-full">
										<ChefHat className="w-3 h-3 md:w-4 md:h-4" />
										<span className="font-medium">
											{recipe.steps.length} langkah
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			{recipes.length === 0 && (
				<div className="text-center py-16">
					<p className="text-slate-500">
						Resep tidak ditemukan. Coba kata kunci lain.
					</p>
				</div>
			)}
		</section>
	);
}
