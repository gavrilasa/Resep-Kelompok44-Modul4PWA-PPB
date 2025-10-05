// src/pages/ProfilePage.jsx
import { User, MapPin } from "lucide-react";

export default function ProfilePage() {
	const user = {
		name: "Gavrila Samana Ahmad",
		location: "Semarang, Indonesia",
		avatar: "https://avatars.githubusercontent.com/u/100271186?v=4",
		bio: "Cuma Anak Kos yang pengen Nyoba Resep Makanan",
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4 md:p-8 pb-20 md:pb-8">
			<div className="max-w-2xl mx-auto">
				<div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 text-center">
					<div className="relative w-32 h-32 mx-auto mb-6">
						<img
							src={user.avatar}
							alt="User Avatar"
							className="rounded-full w-full h-full object-cover border-4 border-blue-200 shadow-lg"
						/>
						<div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white"></div>
					</div>

					<h1 className="text-3xl font-bold text-slate-800 flex items-center justify-center">
						<User className="w-8 h-8 mr-3 text-blue-500" />
						{user.name}
					</h1>

					<p className="text-slate-500 mt-4 mb-6 leading-relaxed">{user.bio}</p>

					<div className="border-t border-gray-200 my-6"></div>

					<div className="space-y-4 text-left">
						<div className="flex items-center text-slate-600">
							<MapPin className="w-5 h-5 mr-4 text-gray-400" />
							<span>{user.location}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
