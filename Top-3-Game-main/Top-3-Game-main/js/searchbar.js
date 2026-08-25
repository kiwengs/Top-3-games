const defaultGameCatalog = [
  { slug: "apex-legends", cover: "../Image/list game pict/APEX.jpg", name: "Apex Legends", genre: "FPS" },
  { slug: "black-myth-wukong", cover: "../Image/list game pict/Black Myth Wukong.jpeg", name: "Black Myth: Wukong", genre: "Action" },
  { slug: "call-of-duty-modern-warfare-4", cover: "../Image/list game pict/CODMW4.jpeg", name: "Call of Duty: Modern Warfare 4", genre: "FPS" },
  { slug: "counter-strike-2", cover: "../Image/list game pict/CS2.jpg", name: "Counter-Strike 2", genre: "FPS" },
  { slug: "dota-2", cover: "../Image/list game pict/DOTA.jpg", name: "Dota 2", genre: "Strategy" },
  { slug: "elden-ring", cover: "../Image/list game pict/Elden ring.jpg", name: "Elden Ring", genre: "RPG" },
  { slug: "forza-horizon", cover: "../Image/list game pict/forzan.png", name: "Forza Horizon", genre: "Racing" },
  { slug: "genshin-impact", cover: "../Image/list game pict/GI.jpg", name: "Genshin Impact", genre: "RPG" },
  { slug: "how-to-fish", cover: "../Image/list game pict/How To Fish.webp", name: "How To Fish", genre: "Adventure" },
  { slug: "in-take-two", cover: "../Image/list game pict/in take two.jpg", name: "In Take Two", genre: "Adventure" },
  { slug: "jurassic-world", cover: "../Image/list game pict/jurassic world.webp", name: "Jurassic World", genre: "Adventure" },
  { slug: "killing-floor-2", cover: "../Image/list game pict/killing floor 2.jpg", name: "Killing Floor 2", genre: "Action" },
  { slug: "little-nightmares", cover: "../Image/list game pict/little nightmare.jpg", name: "Little Nightmares", genre: "Horror" },
  { slug: "mortal-shell-2", cover: "../Image/list game pict/Mortal shell 2.jpeg", name: "Mortal Shell 2", genre: "Action" },
  { slug: "naruto-ultimate-ninja-storm-4", cover: "../Image/list game pict/naruto ultimate ninja storm 4.jpg", name: "Naruto Ultimate Ninja Storm 4", genre: "Action" },
  { slug: "outlast", cover: "../Image/list game pict/outlast.avif", name: "Outlast", genre: "Horror" },
  { slug: "pubg-battlegrounds", cover: "../Image/list game pict/pubg-battlegrounds-19vwb.avif", name: "PUBG Battlegrounds", genre: "Action" },
  { slug: "quantum-break", cover: "../Image/list game pict/quantum break.webp", name: "Quantum Break", genre: "Action" },
  { slug: "red-dead-redemption-2", cover: "../Image/list game pict/RD2.jpg", name: "Red Dead Redemption 2", genre: "Adventure" },
  { slug: "resident-evil", cover: "../Image/list game pict/RE.avif", name: "Resident Evil", genre: "Horror" },
  { slug: "star-wars-zero-company", cover: "../Image/list game pict/Star wars zero company.jpg", name: "Star Wars: Zero Company", genre: "RPG" },
  { slug: "tekken-8", cover: "../Image/list game pict/tekken 8.jpg", name: "Tekken 8", genre: "Action" },
  { slug: "undertale", cover: "../Image/list game pict/undertale.webp", name: "Undertale", genre: "RPG" },
  { slug: "valorant", cover: "../Image/list game pict/Valo.jpg", name: "Valorant", genre: "FPS" },
  { slug: "watch-dogs", cover: "../Image/list game pict/watch dog.jpg", name: "Watch Dogs", genre: "Action" },
  { slug: "yakuza-0", cover: "../Image/list game pict/yakuza 0.jpg", name: "Yakuza 0", genre: "Action" },
  { slug: "z1", cover: "../Image/list game pict/Z1.jpg", name: "Z1", genre: "Action" },
];

const sourceCatalog = Array.isArray(window.ListGameAll) && window.ListGameAll.length
  ? window.ListGameAll
  : Array.isArray(window.gameCatalog) && window.gameCatalog.length
    ? window.gameCatalog
    : defaultGameCatalog;

const gameCatalog = sourceCatalog;
window.gameCatalog = gameCatalog;
window.ListGameAll = gameCatalog;

const slugify = (value) => {
  if (typeof window.normalizeSlug === "function") {
    return window.normalizeSlug(value);
  }

  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

function findGameBySlug(slug) {
  const keyword = String(slug || "").trim().toLowerCase();
  if (!keyword) return null;

  return (
    gameCatalog.find((game) => {
      const candidates = [
        game.slug,
        slugify(game.name),
        game.name.toLowerCase(),
        game.name.toLowerCase().replace(/[^a-z0-9]/g, "")
      ];

      return candidates.includes(keyword) || candidates.some((item) => item.includes(keyword));
    }) || null
  );
}

window.findGameBySlug = findGameBySlug;

let availableKeywords = gameCatalog.map((game) => game.name);
const searchEntries = gameCatalog.map((game) => ({
  name: game.name,
  cover: game.cover,
  slug: game.slug,
  genre: game.genre
}));

availableKeywords.sort((a, b) =>
  a.localeCompare(b, undefined, { sensitivity: "base" })
);

const alphabet = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(65 + index)
);

function isGenreListPage() {
  return window.location.pathname.toLowerCase().includes("list-genre.html");
}

function getCurrentGenreFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const rawGenre = params.get("genre");
  return rawGenre ? String(rawGenre).trim() : "";
}

function getCurrentSortFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const sort = params.get("sort");
  return ["az", "za", "recommended", "daily", "weekly", "monthly"].includes(sort)
    ? sort
    : "az";
}

function getNormalizedGenreName(rawGenre) {
  const value = String(rawGenre || "").trim();
  if (!value) return "";

  const mapped = {
    action: "Action",
    adventure: "Adventure",
    rpg: "RPG",
    fps: "FPS",
    racing: "Racing",
    strategy: "Strategy",
    sports: "Sports",
    horror: "Horror"
  };

  return mapped[value.toLowerCase()] || value;
}

function getPeakPlayerValue(game, key = "peakPlayers") {
  const rawValue = String(game?.[key] ?? game?.peakPlayers ?? "0");
  if (!rawValue || rawValue === "-") return 0;

  let normalized = rawValue.replace(/\s/g, "");

  if (normalized.includes(",") && normalized.includes(".")) {
    normalized = normalized.replace(/\./g, "").replace(/,/g, ".");
  } else if (normalized.includes(",")) {
    normalized = normalized.replace(/,/g, "");
  } else if (normalized.includes(".")) {
    const parts = normalized.split(".");
    if (parts.length > 2) {
      normalized = parts.join("");
    } else if (parts.length === 2 && parts[1].length <= 3) {
      normalized = parts.join("");
    }
  }

  const numericValue = Number(normalized.replace(/[^0-9]/g, "") || 0);
  return Number.isFinite(numericValue) ? numericValue : 0;
}

function getWeightedPeakValue(game, mode) {
  switch (mode) {
    case "daily":
      return getPeakPlayerValue(game, "peakPlayNow");
    case "weekly":
      return getPeakPlayerValue(game, "peakPlayWeek");
    case "monthly":
      return getPeakPlayerValue(game, "peakPlayers");
    default:
      return getPeakPlayerValue(game, "peakPlayers");
  }
}

function getFilteredGames(sortKey = getCurrentSortFromUrl()) {
  const selectedGenre = isGenreListPage() ? getNormalizedGenreName(getCurrentGenreFromUrl()) : "";
  let filtered = selectedGenre
    ? gameCatalog.filter((game) => game.genre === selectedGenre)
    : [...gameCatalog];

  if (!isGenreListPage()) {
    return filtered.slice().sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
  }

  if (sortKey === "za") {
    return filtered.slice().sort((a, b) => b.name.localeCompare(a.name, undefined, { sensitivity: "base" }));
  }

  if (sortKey === "recommended") {
    return filtered.slice().sort(() => Math.random() - 0.5);
  }

  if (sortKey === "daily" || sortKey === "weekly" || sortKey === "monthly") {
    return filtered.slice().sort((a, b) => getWeightedPeakValue(b, sortKey) - getWeightedPeakValue(a, sortKey));
  }

  return filtered.slice().sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
}

function updateListPageMeta() {
  const title = document.getElementById("list-page-title");
  const subtitle = document.getElementById("list-page-subtitle");
  const selectedGenre = isGenreListPage() ? getNormalizedGenreName(getCurrentGenreFromUrl()) : "";
  const currentSort = getCurrentSortFromUrl();

  if (title) {
    title.innerHTML = selectedGenre
      ? `${selectedGenre} <span>Games</span>`
      : "List Game <span>A–Z</span>";
  }

  if (subtitle) {
    if (!isGenreListPage()) {
      subtitle.textContent = "Jelajahi daftar game yang tersedia di katalog kami, disusun berdasarkan urutan abjad untuk memudahkan pencarian.";
      return;
    }

    const sortLabel = {
      az: "disusun berdasarkan urutan abjad A–Z",
      za: "disusun berdasarkan urutan abjad Z–A",
      recommended: "ditampilkan berdasarkan rekomendasi acak",
      daily: "menampilkan game yang paling ramai saat ini",
      weekly: "menampilkan game yang paling ramai dalam 7 hari terakhir",
      monthly: "menampilkan game yang paling ramai dalam 30 hari terakhir"
    };

    subtitle.textContent = `Menampilkan game ${selectedGenre} dengan filter ${sortLabel[currentSort] || "berdasarkan urutan abjad"}.`;
  }
}

function syncFilterButtons() {
  if (!document.querySelectorAll(".filter-btn").length) return;

  const selectedSort = getCurrentSortFromUrl();
  document.querySelectorAll(".filter-btn").forEach((button) => {
    const isActive = button.dataset.sort === selectedSort;
    button.classList.toggle("active", isActive);
  });
}

function applyListFilter(sortKey) {
  const params = new URLSearchParams(window.location.search);
  params.set("sort", sortKey);
  const nextUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, "", nextUrl);
  syncFilterButtons();
  renderListPage();
}

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

if (inputBox) {
  inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value.trim();

    if (input.length) {
      result = searchEntries.filter((item) => {
        return item.name.toLowerCase().includes(input.toLowerCase());
      });
    }

    display(result);
  };
}

function display(result) {
  if (!resultsBox) return;

  if (!result || !result.length || !inputBox || !inputBox.value.trim()) {
    resultsBox.innerHTML = "";
    resultsBox.classList.remove("has-results");
    return;
  }

  const content = result
    .map((item) => {
      const coverPath = window.resolveGameCoverPath ? window.resolveGameCoverPath(item.cover) : item.cover;
      const safeImage = encodeURI(coverPath);
      const slug = item.slug || slugify(item.name || "");
      return (
        '<li class="search-result-item" data-value="' +
        item.name +
        '" data-slug="' +
        slug +
        '" onclick="selectInput(this)">' +
        '<img src="' +
        safeImage +
        '" alt="' +
        item.name +
        '" class="search-result-thumb" />' +
        '<span class="search-result-name">' +
        item.name +
        "</span></li>"
      );
    })
    .join("");

  resultsBox.innerHTML = "<ul>" + content + "</ul>";
  resultsBox.classList.add("has-results");
}

function selectInput(list) {
  if (!list) return;

  const selectedName = list.dataset.value || list.textContent.trim();
  const selectedSlug = list.dataset.slug || slugify(selectedName);

  if (inputBox) {
    inputBox.value = selectedName;
  }

  resultsBox.innerHTML = "";

  const targetUrl = "Games/detail.html?game=" + encodeURIComponent(selectedSlug);
  window.location.href = targetUrl;
}

function buildAlphabetList() {
  const dropdowns = document.querySelectorAll(".nav-dropdown");

  dropdowns.forEach((dropdown) => {
    const html = alphabet
      .map((letter) => {
        const games = availableKeywords.filter((game) =>
          game.toUpperCase().startsWith(letter)
        );

        if (!games.length) return "";

        const items = games
          .map(
            (game) =>
              '<a href="#" class="alphabet-item">' + game + "</a>"
          )
          .join("");

        return (
          '<div class="alphabet-group">' +
          '<span class="alphabet-letter">' + letter + "</span>" +
          '<div class="alphabet-items">' + items + "</div>" +
          "</div>"
        );
      })
      .filter(Boolean)
      .join("");

    dropdown.innerHTML = html;
  });
}

function renderListPage() {
  const container = document.getElementById("game-list-az");
  if (!container) return;

  const currentSort = getCurrentSortFromUrl();
  const filteredGames = getFilteredGames(currentSort);
  const shouldGroupByLetter = !["daily", "weekly", "monthly", "recommended"].includes(currentSort);
  const letterOrder = currentSort === "za" ? [...alphabet].reverse() : alphabet;
  const metricMap = {
    daily: { key: "peakPlayNow", label: "Peak Daily" },
    weekly: { key: "peakPlayWeek", label: "Peak Weekly" },
    monthly: { key: "peakPlayers", label: "Peak Monthly" }
  };

  const renderGameRow = (game) => {
    const coverPath = window.resolveGameCoverPath ? window.resolveGameCoverPath(game.cover) : game.cover;
    const safeImage = encodeURI(coverPath);
    const activeMetric = metricMap[currentSort];
    const metricText = activeMetric
      ? '<span class="game-metric"><strong>' + activeMetric.label + ':</strong> ' + (game[activeMetric.key] || "-") + '</span>'
      : "";
    const detailHref = `Games/detail.html?game=${encodeURIComponent(game.slug || slugify(game.name))}`;
    const genreHref = `list-genre.html?genre=${encodeURIComponent(game.genre)}`;

    return (
      '<article class="game-row">' +
      '<a class="game-main-link" href="' + detailHref + '" aria-label="Buka detail ' + game.name + '">' +
      '<div class="game-cover-wrap"><img src="' +
      safeImage +
      '" alt="' +
      game.name +
      '" class="game-cover" /></div>' +
      '<div class="game-name-wrap"><span class="game-name">' +
      game.name +
      '</span>' +
      metricText +
      '</div>' +
      '</a>' +
      '<div class="game-genre-wrap"><a class="game-genre" href="' + genreHref + '" aria-label="Lihat genre ' + game.genre + '">' +
      game.genre +
      "</a></div>" +
      "</article>"
    );
  };

  const groups = shouldGroupByLetter
    ? letterOrder
        .map((letter) => {
          const games = filteredGames.filter((game) =>
            game.name.toUpperCase().startsWith(letter)
          );

          if (!games.length) return "";

          const items = games.map(renderGameRow).join("");

          return (
            '<section class="alphabet-section">' +
            '<h2 class="alphabet-title">' + letter + "</h2>" +
            '<div class="game-list">' + items + "</div>" +
            "</section>"
          );
        })
        .filter(Boolean)
        .join("")
    : '<section class="alphabet-section"><div class="game-list">' + filteredGames.map(renderGameRow).join("") + "</div></section>";

  if (!filteredGames.length) {
    container.innerHTML = '<div class="alphabet-section"><h2 class="alphabet-title">No Result</h2><p class="empty-state">Tidak ada game yang sesuai dengan filter ini.</p></div>';
  } else {
    container.innerHTML = groups;
  }

  updateListPageMeta();
  syncFilterButtons();
}

document.addEventListener("DOMContentLoaded", function () {
  buildAlphabetList();
  renderListPage();

  if (document.querySelectorAll(".filter-btn").length) {
    document.querySelectorAll(".filter-btn").forEach((button) => {
      button.addEventListener("click", () => {
        applyListFilter(button.dataset.sort);
      });
    });
  }
});
