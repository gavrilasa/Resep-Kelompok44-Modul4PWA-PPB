// src/components/common/Pagination.jsx
export default function Pagination({
	recipesPerPage,
	totalRecipes,
	paginate,
	currentPage,
}) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav className="mt-12">
			<ul className="flex justify-center space-x-2">
				{pageNumbers.map((number) => (
					<li key={number}>
						<button
							onClick={() => paginate(number)}
							className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
								currentPage === number
									? "bg-blue-600 text-white shadow-md"
									: "bg-white text-slate-600 hover:bg-blue-100 border border-slate-200"
							}`}
						>
							{number}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
}
