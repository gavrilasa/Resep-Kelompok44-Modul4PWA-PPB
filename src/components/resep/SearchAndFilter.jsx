// src/components/resep/SearchAndFilter.jsx
import { Search } from "lucide-react";

export default function SearchAndFilter({
	searchQuery,
	setSearchQuery,
	filter,
	setFilter,
}) {
	return (
		<section className="mb-8 md:mb-12">
			<h1 className="text-3xl md:text-5xl font-bold text-slate-800 text-center mb-4">
				Jelajahi Semua Resep
			</h1>
			<p className="text-center text-slate-500 max-w-2xl mx-auto mb-8">
				Temukan inspirasi masakan dan minuman Nusantara favoritmu.
			</p>
			<div className="relative max-w-lg mx-auto mb-4">
				<input
					type="text"
					placeholder="Cari nama resep..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="w-full pl-12 pr-4 py-3 md:py-4 bg-white/80 backdrop-blur-sm border border-slate-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
				/>
				<div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
					<Search className="w-5 h-5" />
				</div>
			</div>
			<div className="flex justify-center space-x-2">
				<button
					onClick={() => setFilter("all")}
					className={`px-4 py-2 rounded-full text-sm font-medium ${
						filter === "all"
							? "bg-blue-600 text-white"
							: "bg-white text-slate-600"
					}`}
				>
					Semua
				</button>
				<button
					onClick={() => setFilter("makanan")}
					className={`px-4 py-2 rounded-full text-sm font-medium ${
						filter === "makanan"
							? "bg-blue-600 text-white"
							: "bg-white text-slate-600"
					}`}
				>
					Makanan
				</button>
				<button
					onClick={() => setFilter("minuman")}
					className={`px-4 py-2 rounded-full text-sm font-medium ${
						filter === "minuman"
							? "bg-blue-600 text-white"
							: "bg-white text-slate-600"
					}`}
				>
					Minuman
				</button>
			</div>
		</section>
	);
}
