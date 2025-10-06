// src/App.jsx
import { useState } from "react";
import SplashScreen from "./pages/SplashScreen";
import HomePage from "./pages/HomePage";
import ResepPage from "./pages/ResepPage";
import FavoritePage from "./pages/FavoritePage";
import ProfilePage from "./pages/ProfilePage";
import DetailPage from "./pages/DetailPage";
import DesktopNavbar from "./components/navbar/DesktopNavbar";
import MobileNavbar from "./components/navbar/MobileNavbar";
import PWABadge from "./PWABadge";

export default function App() {
	const [showSplash, setShowSplash] = useState(true);
	const [currentPage, setCurrentPage] = useState("home");
	const [selectedRecipe, setSelectedRecipe] = useState(null);

	const handleSplashComplete = () => {
		setShowSplash(false);
	};

	const handleNavigation = (page) => {
		setSelectedRecipe(null);
		setCurrentPage(page);
	};

	const handleRecipeSelect = (recipe) => {
		setSelectedRecipe(recipe);
	};

	const handleBackToList = () => {
		setSelectedRecipe(null);
	};

	const renderCurrentPage = () => {
		if (selectedRecipe) {
			return <DetailPage recipe={selectedRecipe} onBack={handleBackToList} />;
		}
		switch (currentPage) {
			case "home":
				return <HomePage onRecipeSelect={handleRecipeSelect} />;
			case "resep":
				return <ResepPage onRecipeSelect={handleRecipeSelect} />;
			case "favorite":
				return <FavoritePage onRecipeSelect={handleRecipeSelect} />;
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
