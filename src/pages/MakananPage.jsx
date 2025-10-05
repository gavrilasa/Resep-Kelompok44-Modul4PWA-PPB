// src/pages/MakananPage.jsx
import { useState, useEffect, useMemo } from "react"; // <-- Impor useMemo
import { ResepMakanan } from "../data/makanan";
import RecipeGrid from "../components/makanan/RecipeGrid";
import SearchAndFilter from "../components/makanan/SearchAndFilter";
import Pagination from "../components/common/Pagination";

export default function MakananPage({ onRecipeSelect }) {
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredRecipes, setFilteredRecipes] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [recipesPerPage] = useState(6);

	// Gunakan useMemo agar array ini tidak dibuat ulang setiap render
	const allMakanan = useMemo(() => Object.values(ResepMakanan.resep), []);

	useEffect(() => {
		const source =
			searchQuery.trim() === ""
				? allMakanan
				: allMakanan.filter((recipe) =>
						recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
				  );
		setFilteredRecipes(source);
		setCurrentPage(1); // Reset halaman saat pencarian berubah
	}, [searchQuery, allMakanan]);

	// Logika untuk mendapatkan resep pada halaman saat ini
	const indexOfLastRecipe = currentPage * recipesPerPage;
	const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
	const currentRecipes = filteredRecipes.slice(
		indexOfFirstRecipe,
		indexOfLastRecipe
	);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
		window.scrollTo(0, 0); // <-- Tambahkan baris ini
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pb-20 md:pb-8">
			<main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
				<SearchAndFilter
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
				/>
				<RecipeGrid recipes={currentRecipes} onRecipeSelect={onRecipeSelect} />
				{filteredRecipes.length > recipesPerPage && (
					<Pagination
						recipesPerPage={recipesPerPage}
						totalRecipes={filteredRecipes.length}
						paginate={paginate}
						currentPage={currentPage}
					/>
				)}
			</main>
		</div>
	);
}
