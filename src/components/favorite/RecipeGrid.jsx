// src/components/favorite/RecipeGrid.jsx
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
						<div className="relative bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
							<div className="relative h-48 overflow-hidden">
								<img
									src={recipe.image_url}
									alt={recipe.name}
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
							</div>
							<div className="p-4">
								<span
									className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
										recipe.type === "makanan"
											? "bg-blue-100 text-blue-800"
											: "bg-green-100 text-green-800"
									}`}
								>
									{recipe.type === "makanan" ? "Makanan" : "Minuman"}
								</span>
								<h3 className="font-bold text-slate-800 mt-2 text-lg group-hover:text-blue-600 transition-colors duration-200">
									{recipe.name}
								</h3>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
