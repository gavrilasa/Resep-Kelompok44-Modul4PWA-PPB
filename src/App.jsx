// src/App.jsx
import { useState } from "react";
import SplashScreen from "./pages/SplashScreen";
import HomePage from "./pages/HomePage";
import MakananPage from "./pages/MakananPage";
import MinumanPage from "./pages/MinumanPage";
import ProfilePage from "./pages/ProfilePage";
import DetailPage from "./pages/DetailPage"; // <-- Tambahkan import ini
import DesktopNavbar from "./components/navbar/DesktopNavbar";
import MobileNavbar from "./components/navbar/MobileNavbar";
import PWABadge from "./PWABadge";

export default function App() {
	const [showSplash, setShowSplash] = useState(true);
	const [currentPage, setCurrentPage] = useState("home");
	const [selectedRecipe, setSelectedRecipe] = useState(null); // <-- Tambahkan state ini

	const handleSplashComplete = () => {
		setShowSplash(false);
	};

	const handleNavigation = (page) => {
		setSelectedRecipe(null); // Reset resep saat pindah halaman
		setCurrentPage(page);
	};

	const handleRecipeSelect = (recipe) => {
		setSelectedRecipe(recipe); // Set resep yang dipilih
	};

	const handleBackToList = () => {
		setSelectedRecipe(null); // Kembali ke daftar resep
	};

	const renderCurrentPage = () => {
		// Jika ada resep yang dipilih, tampilkan halaman detail
		if (selectedRecipe) {
			return <DetailPage recipe={selectedRecipe} onBack={handleBackToList} />;
		}
		// Jika tidak, tampilkan halaman sesuai navigasi
		switch (currentPage) {
			case "home":
				return <HomePage onRecipeSelect={handleRecipeSelect} />;
			case "makanan":
				return <MakananPage onRecipeSelect={handleRecipeSelect} />;
			case "minuman":
				return <MinumanPage onRecipeSelect={handleRecipeSelect} />;
			case "profile":
				return <ProfilePage />;
			default:
				return <HomePage onRecipeSelect={handleRecipeSelect} />;
		}
	};

	if (showSplash) {
		return <SplashScreen onComplete={handleSplashComplete} />;
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<DesktopNavbar currentPage={currentPage} onNavigate={handleNavigation} />
			<main className="min-h-screen">{renderCurrentPage()}</main>
			<MobileNavbar currentPage={currentPage} onNavigate={handleNavigation} />
			<PWABadge />
		</div>
	);
}
