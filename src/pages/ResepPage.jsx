// src/pages/ResepPage.jsx
import { useState, useEffect, useMemo } from "react";
import { ResepMakanan } from "../data/makanan";
import { ResepMinuman } from "../data/minuman";
import RecipeGrid from "../components/resep/RecipeGrid";
import SearchAndFilter from "../components/resep/SearchAndFilter";
import Pagination from "../components/common/Pagination";

export default function ResepPage({ onRecipeSelect }) {
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredRecipes, setFilteredRecipes] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [recipesPerPage] = useState(6);
	const [filter, setFilter] = useState("all"); // 'all', 'makanan', 'minuman'

	const allRecipes = useMemo(() => {
		const makanan = Object.values(ResepMakanan.resep).map((r) => ({
			...r,
			type: "makanan",
		}));
		const minuman = Object.values(ResepMinuman.resep).map((r) => ({
			...r,
			type: "minuman",
		}));
		return [...makanan, ...minuman];
	}, []);

	useEffect(() => {
		let source = allRecipes;

		if (filter !== "all") {
			source = source.filter((recipe) => recipe.type === filter);
		}

		if (searchQuery.trim() !== "") {
			source = source.filter((recipe) =>
				recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}

		setFilteredRecipes(source);
		setCurrentPage(1);
	}, [searchQuery, filter, allRecipes]);

	const indexOfLastRecipe = currentPage * recipesPerPage;
	const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
	const currentRecipes = filteredRecipes.slice(
		indexOfFirstRecipe,
		indexOfLastRecipe
	);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
		window.scrollTo(0, 0);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pb-20 md:pb-8">
			<main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
				<SearchAndFilter
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
					filter={filter}
					setFilter={setFilter}
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
