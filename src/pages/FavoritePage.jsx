// src/pages/FavoritePage.jsx
import { useState, useEffect } from "react";
import RecipeGrid from "../components/favorite/RecipeGrid";

export default function FavoritePage({ onRecipeSelect }) {
	const [favoriteRecipes, setFavoriteRecipes] = useState([]);

	useEffect(() => {
		const favorites = JSON.parse(localStorage.getItem("favoriteRecipes")) || [];
		setFavoriteRecipes(favorites);
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 pb-20 md:pb-8">
			<main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
				<h1 className="text-3xl md:text-5xl font-bold text-slate-800 text-center mb-4">
					Resep Favorit
				</h1>
				<p className="text-center text-slate-500 max-w-2xl mx-auto mb-8">
					Koleksi resep-resep pilihan yang Anda simpan.
				</p>
				{favoriteRecipes.length > 0 ? (
					<RecipeGrid
						recipes={favoriteRecipes}
						onRecipeSelect={onRecipeSelect}
					/>
				) : (
					<div className="text-center py-16">
						<p className="text-slate-500">Anda belum memiliki resep favorit.</p>
					</div>
				)}
			</main>
		</div>
	);
}
