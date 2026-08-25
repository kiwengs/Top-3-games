// Data game utama.
// Struktur setiap item:
// {
//   slug: "nama-game-dalam-url",
//   cover: "../Image/list game pict/nama-file.jpg",
//   name: "Nama Game Lengkap",
//   genre: "RPG",
//   bio: "Deskripsi singkat game",
//   device: ["PC", "PlayStation 5"],
//   peakPlayers: "500.000",
//   rating: "4.8/5"
// }
//
// Genre yang boleh:
// Action, Adventure, RPG, FPS, Racing, Strategy, Sports, Horror

const ALLOWED_GENRES = [
  "Action",
  "Adventure",
  "RPG",
  "FPS",
  "Racing",
  "Strategy",
  "Sports",
  "Horror"
];

function normalizeGameSlug(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

window.normalizeSlug = normalizeGameSlug;

const ListGameAll = [
  {
    slug: "apex-legends",
    cover: "../Image/list game pict/APEX.jpg",
    name: "Apex Legends",
    genre: "FPS",
    bio: "Battle royale berbasis tim dengan karakter unik, pergerakan cepat, dan rotasi strategi yang intens.",
    device: ["PC", "PlayStation 5", "Xbox Series X|S"],
    peakPlayers: "500.000",
    peakPlayNow: "310.000",
    peakPlayWeek: "420.000",
    rating: "4.6/5"
  },
  {
    slug: "black-myth-wukong",
    cover: "../Image/list game pict/Black Myth Wukong.jpeg",
    name: "Black Myth: Wukong",
    genre: "Action",
    bio: "Action RPG bertema mitologi yang menonjolkan pertarungan cepat, eksplorasi, dan boss fight yang epik.",
    device: ["PC", "PlayStation 5", "Xbox Series X|S"],
    peakPlayers: "250.000",
    peakPlayNow: "140.000",
    peakPlayWeek: "210.000",
    rating: "4.8/5"
  },
  {
    slug: "call-of-duty-modern-warfare-4",
    cover: "../Image/list game pict/CODMW4.jpeg",
    name: "Call of Duty: Modern Warfare 4",
    genre: "FPS",
    bio: "Game tembak-menembak yang menekankan taktik, mode multiplayer, dan kampanye modern dengan intensitas tinggi.",
    device: ["PC", "PlayStation 5", "Xbox Series X|S"],
    peakPlayers: "620.000",
    peakPlayNow: "430.000",
    peakPlayWeek: "540.000",
    rating: "4.7/5"
  },
  {
    slug: "counter-strike-2",
    cover: "../Image/list game pict/CS2.jpg",
    name: "Counter-Strike 2",
    genre: "FPS",
    bio: "Shooter taktis klasik yang fokus pada teamwork, timing, dan eksekusi tim yang presisi.",
    device: ["PC"],
    peakPlayers: "1.000.000",
    peakPlayNow: "680.000",
    peakPlayWeek: "860.000",
    rating: "4.9/5"
  },
  {
    slug: "dota-2",
    cover: "../Image/list game pict/DOTA.jpg",
    name: "Dota 2",
    genre: "Strategy",
    bio: "MOBA dengan tingkat kompleksitas tinggi, rotasi tim, dan strategi skala besar yang sangat kompetitif.",
    device: ["PC"],
    peakPlayers: "800.000",
    peakPlayNow: "520.000",
    peakPlayWeek: "690.000",
    rating: "4.8/5"
  },
  {
    slug: "elden-ring",
    cover: "../Image/list game pict/Elden ring.jpg",
    name: "Elden Ring",
    genre: "RPG",
    bio: "Open-world action RPG yang menghadirkan dunia besar, eksplorasi bebas, dan pertarungan brutal melawan bos legendaris.",
    device: ["PC", "PlayStation 5", "Xbox Series X|S"],
    peakPlayers: "400.000",
    peakPlayNow: "220.000",
    peakPlayWeek: "310.000",
    rating: "4.9/5"
  },
  {
    slug: "forza-horizon",
    cover: "../Image/list game pict/forzan.png",
    name: "Forza Horizon",
    genre: "Racing",
    bio: "Game balap arcade dengan dunia terbuka, festival mobil, dan pengalaman mengemudi yang sangat memanjakan.",
    device: ["PC", "Xbox Series X|S"],
    peakPlayers: "180.000",
    peakPlayNow: "90.000",
    peakPlayWeek: "140.000",
    rating: "4.5/5"
  },
  {
    slug: "genshin-impact",
    cover: "../Image/list game pict/GI.jpg",
    name: "Genshin Impact",
    genre: "RPG",
    bio: "Action RPG open-world yang menggabungkan eksplorasi, elemental combat, dan progression karakter yang sangat menarik.",
    device: ["PC", "PlayStation 5", "Mobile", "Xbox Series X|S"],
    peakPlayers: "1.200.000",
    peakPlayNow: "820.000",
    peakPlayWeek: "1.050.000",
    rating: "4.8/5"
  },
  {
    slug: "how-to-fish",
    cover: "../Image/list game pict/How To Fish.webp",
    name: "How To Fish",
    genre: "Adventure",
    bio: "Game santai yang menonjolkan pengalaman memancing, eksplorasi lingkungan, dan keseimbangan hidup yang tenang.",
    device: ["PC", "PlayStation 5", "Xbox Series X|S"],
    peakPlayers: "35.000",
    peakPlayNow: "18.000",
    peakPlayWeek: "29.000",
    rating: "4.2/5"
  },
  {
    slug: "in-take-two",
    cover: "../Image/list game pict/in take two.jpg",
    name: "In Take Two",
    genre: "Adventure",
    bio: "Game petualangan ringan dengan seni visual unik, humor, dan eksplorasi interaktif yang santai.",
    device: ["PC", "PlayStation 5", "Xbox Series X|S"],
    peakPlayers: "42.000",
    peakPlayNow: "21.000",
    peakPlayWeek: "33.000",
    rating: "4.1/5"
  },
  {
    slug: "jurassic-world",
    cover: "../Image/list game pict/jurassic world.webp",
    name: "Jurassic World",
    genre: "Adventure",
    bio: "Petualangan berbasis dinosaurus yang mengeksplorasi survival, habitat, dan tantangan ekosistem purba.",
    device: ["PC", "PlayStation 5", "Xbox Series X|S"],
    peakPlayers: "110.000",
    peakPlayNow: "58.000",
    peakPlayWeek: "90.000",
    rating: "4.3/5"
  },
  {
    slug: "killing-floor-2",
    cover: "../Image/list game pict/killing floor 2.jpg",
    name: "Killing Floor 2",
    genre: "Action",
    bio: "Game survival co-op berbasis zombie dengan aksi brutal, wave survival, dan loadout yang sangat variatif.",
    device: ["PC"],
    peakPlayers: "170.000",
    peakPlayNow: "96.000",
    peakPlayWeek: "140.000",
    rating: "4.4/5"
  },
  {
    slug: "little-nightmares",
    cover: "../Image/list game pict/little nightmare.jpg",
    name: "Little Nightmares",
    genre: "Horror",
    bio: "Horror platformer yang penuh dengan suasana mencekam, teka-teki, dan penggambaran lingkungan yang sangat menegangkan.",
    device: ["PC", "PlayStation 5", "Xbox Series X|S"],
    peakPlayers: "90.000",
    peakPlayNow: "48.000",
    peakPlayWeek: "72.000",
    rating: "4.6/5"
  },
  {
    slug: "mortal-shell-2",
    cover: "../Image/list game pict/Mortal shell 2.jpeg",
    name: "Mortal Shell 2",
    genre: "Action",
    bio: "Action RPG bertempo berat dengan pertarungan yang presisi, sistem pertempuran agresif, dan vibe dark fantasy.",
    device: ["PC", "PlayStation 5", "Xbox Series X|S"],
    peakPlayers: "60.000",
    peakPlayNow: "31.000",
    peakPlayWeek: "48.000",
    rating: "4.2/5"
  },
  {
    slug: "naruto-ultimate-ninja-storm-4",
    cover: "../Image/list game pict/naruto ultimate ninja storm 4.jpg",
    name: "Naruto Ultimate Ninja Storm 4",
    genre: "Action",
    bio: "Game pertarungan anime yang menghadirkan aksi combo, teknik ninja, dan battle arena yang sangat ikonik.",
    device: ["PC", "PlayStation 5", "Xbox Series X|S"],
    peakPlayers: "95.000",
    peakPlayNow: "52.000",
    peakPlayWeek: "76.000",
    rating: "4.5/5"
  },
  {
    slug: "outlast",
    cover: "../Image/list game pict/outlast.avif",
    name: "Outlast",
    genre: "Horror",
    bio: "Survival horror yang menekankan penghindaran, rasa takut, dan eksplorasi lokasi menakutkan yang penuh kejutan.",
    device: ["PC", "PlayStation 4", "Xbox One"],
    peakPlayers: "80.000",
    peakPlayNow: "41.000",
    peakPlayWeek: "62.000",
    rating: "4.4/5"
  },
  {
    slug: "pubg-battlegrounds",
    cover: "../Image/list game pict/pubg-battlegrounds-19vwb.avif",
    name: "PUBG Battlegrounds",
    genre: "Action",
    bio: "Battle royale realistis dengan survival, loot, dan pertempuran skala besar yang sangat menegangkan.",
    device: ["PC", "PlayStation 5", "Xbox Series X|S", "Mobile"],
    peakPlayers: "750.000",
    peakPlayNow: "480.000",
    peakPlayWeek: "630.000",
    rating: "4.6/5"
  },
  {
    slug: "quantum-break",
    cover: "../Image/list game pict/quantum break.webp",
    name: "Quantum Break",
    genre: "Action",
    bio: "Action-adventure sci-fi dengan sistem time manipulation, cerita intens, dan mekanik pertempuran unik.",
    device: ["PC", "Xbox One"],
    peakPlayers: "32.000",
    peakPlayNow: "15.000",
    peakPlayWeek: "25.000",
    rating: "3.9/5"
  },
  {
    slug: "red-dead-redemption-2",
    cover: "../Image/list game pict/RD2.jpg",
    name: "Red Dead Redemption 2",
    genre: "Adventure",
    bio: "Open-world western epik menghadirkan eksplorasi, narasi kuat, dan detail dunia yang sangat hidup.",
    device: ["PC", "PlayStation 5", "Xbox Series X|S"],
    peakPlayers: "240.000",
    peakPlayNow: "130.000",
    peakPlayWeek: "190.000",
    rating: "4.9/5"
  },
  {
    slug: "resident-evil",
    cover: "../Image/list game pict/RE.avif",
    name: "Resident Evil",
    genre: "Horror",
    bio: "Survival horror klasik dengan pengalaman bertahan hidup, pengelolaan sumber daya, dan ketegangan yang konsisten.",
    device: ["PC", "PlayStation 5", "Xbox Series X|S"],
    peakPlayers: "130.000",
    peakPlayNow: "70.000",
    peakPlayWeek: "99.000",
    rating: "4.5/5"
  },
  {
    slug: "star-wars-zero-company",
    cover: "../Image/list game pict/Star wars zero company.jpg",
    name: "Star Wars: Zero Company",
    genre: "RPG",
    bio: "RPG bertema Star Wars dengan strategi, eksplorasi, dan keputusan yang membentuk perjalanan tim elite.",
    device: ["PC", "PlayStation 5", "Xbox Series X|S"],
    peakPlayers: "56.000",
    peakPlayNow: "30.000",
    peakPlayWeek: "44.000",
    rating: "4.1/5"
  },
  {
    slug: "tekken-8",
    cover: "../Image/list game pict/tekken 8.jpg",
    name: "Tekken 8",
    genre: "Action",
    bio: "Fighting game dengan grafik premium, sistem pertarungan cepat, dan kompetisi yang sangat bertenaga.",
    device: ["PC", "PlayStation 5", "Xbox Series X|S"],
    peakPlayers: "220.000",
    peakPlayNow: "122.000",
    peakPlayWeek: "182.000",
    rating: "4.7/5"
  },
  {
    slug: "undertale",
    cover: "../Image/list game pict/undertale.webp",
    name: "Undertale",
    genre: "RPG",
    bio: "RPG dengan pendekatan unik, cerita emosional, dan mekanik interaksi yang membuat keputusan sangat penting.",
    device: ["PC", "PlayStation 4", "Switch", "Mobile"],
    peakPlayers: "80.000",
    peakPlayNow: "40.000",
    peakPlayWeek: "58.000",
    rating: "4.8/5"
  },
  {
    slug: "valorant",
    cover: "../Image/list game pict/Valo.jpg",
    name: "Valorant",
    genre: "FPS",
    bio: "FPS taktis dengan kemampuan agent yang unik, koordinasi tim, dan putaran pertandingan yang sangat cepat.",
    device: ["PC"],
    peakPlayers: "1.500.000",
    peakPlayNow: "980.000",
    peakPlayWeek: "1.320.000",
    rating: "4.9/5"
  },
  {
    slug: "watch-dogs",
    cover: "../Image/list game pict/watch dog.jpg",
    name: "Watch Dogs",
    genre: "Action",
    bio: "Open-world hacking action dengan eksplorasi kota, kecepatan, dan manipulasi teknologi untuk menyelesaikan misi.",
    device: ["PC", "PlayStation 5", "Xbox Series X|S"],
    peakPlayers: "118.000",
    peakPlayNow: "64.000",
    peakPlayWeek: "94.000",
    rating: "4.2/5"
  },
  {
    slug: "yakuza-0",
    cover: "../Image/list game pict/yakuza 0.jpg",
    name: "Yakuza 0",
    genre: "Action",
    bio: "Action RPG dengan gaya hidup kota, misi cerita kuat, dan keseimbangan antara aksi dan kehidupan sehari-hari.",
    device: ["PC", "PlayStation 5", "Xbox Series X|S"],
    peakPlayers: "64.000",
    peakPlayNow: "33.000",
    peakPlayWeek: "51.000",
    rating: "4.3/5"
  },
  {
    slug: "xcom-2",
    cover: "../Image/list game pict/xcom.jpg",
    name: "XCOM 2",
    genre: "Action",
    bio: "Strategi taktis berbasis turn-based dengan keputusan penting, unit management, dan battle yang sangat mendalam.",
    device: ["PC", "PlayStation 4", "Xbox One"],
    peakPlayers: "48.000",
    peakPlayNow: "22.000",
    peakPlayWeek: "36.000",
    rating: "4.0/5"
  },
  {
    slug: "z1",
    cover: "../Image/list game pict/Z1.jpg",
    name: "Z1",
    genre: "Action",
    bio: "Game aksi dengan pengalaman cepat, arena battle, dan fokus pada intensitas permainan yang langsung.",
    device: ["PC"],
    peakPlayers: "27.000",
    peakPlayNow: "12.000",
    peakPlayWeek: "20.000",
    rating: "3.8/5"
  },
  {
    slug: "Tsubasa",
    cover: "../Image/list game pict/Tsubasa.jpg",
    name: "Tsubasa",
    genre: "Sports",
    bio: "Game sepak bola dengan mekanik arcade, karakter ikonik, dan pertandingan yang cepat dan seru. AYO keluarkan JURUS tendangan kamu yang iconic!",
    device: ["PC"],
    peakPlayers: "150.000",
    peakPlayNow: "90.000",
    peakPlayWeek: "100.000",
    rating: "3.8/5"
  }
];

function normalizePlayerCount(value, fallback = "-") {
  if (value === undefined || value === null || value === "") {
    return fallback;
  }

  const asString = String(value).trim();
  if (!asString || asString === "-") {
    return fallback;
  }

  return asString;
}

function normalizeGameEntry(game) {
  if (!game || typeof game !== "object") {
    throw new Error("Data game tidak valid.");
  }

  const normalized = { ...game };
  normalized.slug = String(normalized.slug || "").trim();
  normalized.cover = String(normalized.cover || "").trim();
  normalized.name = String(normalized.name || "").trim();
  normalized.genre = String(normalized.genre || "").trim();
  normalized.bio = String(normalized.bio || "Belum ada deskripsi.").trim();

  if (!Array.isArray(normalized.device)) {
    normalized.device = ["PC"];
  }

  normalized.peakPlayers = normalizePlayerCount(normalized.peakPlayers, "-");
  normalized.rating = normalizePlayerCount(normalized.rating || "4.0/5", "4.0/5");

  const monthlyPlayers = String(normalized.peakPlayers || "0").replace(/[^0-9.]/g, "");
  const monthlyNumber = Number(monthlyPlayers || 0);
  const fallbackNow = Number.isFinite(monthlyNumber) && monthlyNumber > 0
    ? Math.round(monthlyNumber * 0.7)
    : 0;
  const fallbackWeek = Number.isFinite(monthlyNumber) && monthlyNumber > 0
    ? Math.round(monthlyNumber * 0.85)
    : 0;

  normalized.peakPlayNow = normalizePlayerCount(normalized.peakPlayNow, fallbackNow ? String(fallbackNow).replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "-");
  normalized.peakPlayWeek = normalizePlayerCount(normalized.peakPlayWeek, fallbackWeek ? String(fallbackWeek).replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "-");

  return normalized;
}

function validateGameEntry(game) {
  const normalized = normalizeGameEntry(game);

  const missingFields = ["slug", "cover", "name", "genre"].filter((field) => !normalized[field]);
  if (missingFields.length) {
    throw new Error(`Data game tidak lengkap. Field yang hilang: ${missingFields.join(", ")}`);
  }

  if (!ALLOWED_GENRES.includes(normalized.genre)) {
    throw new Error(
      `Genre "${normalized.genre}" tidak diizinkan. Genre yang boleh dipakai: ${ALLOWED_GENRES.join(", ")}`
    );
  }

  return normalized;
}

const validatedList = ListGameAll.map((game) => validateGameEntry(game));

function resolveGameCoverPath(cover) {
  const value = String(cover || "").trim();
  if (!value || /^https?:\/\//i.test(value) || value.startsWith("data:")) {
    return value;
  }

  if (window.location.pathname.includes("/Games/")) {
    return value.replace(/^\.\.\//, "../../");
  }

  return value;
}

window.ALLOWED_GENRES = ALLOWED_GENRES;
window.ListGameAll = validatedList;
window.resolveGameCoverPath = resolveGameCoverPath;
