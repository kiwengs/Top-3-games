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

function getCurrentGameSlug() {
  const params = new URLSearchParams(window.location.search);
  const paramGame = params.get("game");

  if (paramGame) {
    return normalizeGameSlug(paramGame);
  }

  const fileName = window.location.pathname.split("/").pop() || "";
  const fallback = fileName.replace(/\.html$/i, "");
  return fallback ? normalizeGameSlug(fallback) : "";
}

function getGameFromList() {
  const catalog = Array.isArray(window.ListGameAll) ? window.ListGameAll : [];
  const currentSlug = getCurrentGameSlug();

  if (!catalog.length || !currentSlug) return null;

  return (
    catalog.find((game) => {
      const candidates = [
        String(game.slug || "").trim().toLowerCase(),
        normalizeGameSlug(game.name),
        String(game.name || "").trim().toLowerCase(),
        String(game.name || "").trim().toLowerCase().replace(/[^a-z0-9]/g, "")
      ];

      return candidates.includes(currentSlug) || candidates.some((item) => item.includes(currentSlug));
    }) || null
  );
}

function formatDeviceList(device) {
  if (!Array.isArray(device) || !device.length) return "PC";
  return device.join(", ");
}

function getGenreConfig(genre) {
  const config = {
    Action: { className: "action", iconClass: "fa-solid fa-gun" },
    Adventure: { className: "adventure", iconClass: "fa-regular fa-map" },
    RPG: { className: "rpg", iconClass: "fa-solid fa-shield" },
    FPS: { className: "fps", iconClass: "fa-solid fa-crosshairs" },
    Racing: { className: "racing", iconClass: "fa-solid fa-flag-checkered" },
    Strategy: { className: "strategy", iconClass: "fa-regular fa-chess-knight" },
    Sports: { className: "sports", iconClass: "fa-regular fa-futbol" },
    Horror: { className: "horror", iconClass: "fa-solid fa-ghost" }
  };

  return config[String(genre || "Action")] || config.Action;
}

function updateGamePage(game) {
  if (!game) {
    const message = document.getElementById("game-error");
    const title = document.getElementById("game-title");
    if (message) {
      message.textContent = "Game tidak ditemukan. Silakan kembali ke daftar game.";
    }
    if (title) {
      title.textContent = "Game tidak ditemukan";
    }
    return;
  }

  const title = document.getElementById("game-title");
  const cover = document.getElementById("game-cover");
  const bio = document.getElementById("game-bio");
  const primaryBtn = document.getElementById("genre-primary-btn");
  const genreTarget = encodeURIComponent(String(game.genre || "Action"));
  const genreUrl = `../list-genre.html?genre=${genreTarget}`;
  const genreConfig = getGenreConfig(game.genre);

  if (title) title.textContent = game.name;

  if (cover) {
    const resolvedCover = window.resolveGameCoverPath ? window.resolveGameCoverPath(game.cover) : game.cover;
    cover.src = resolvedCover;
    cover.alt = game.name;
  }

  if (bio) {
    bio.textContent = game.bio || "Belum ada deskripsi game.";
  }

  if (primaryBtn) {
    primaryBtn.href = genreUrl;
    primaryBtn.className = `genre-badge ${genreConfig.className}`;
    primaryBtn.innerHTML = `
      <span class="genre-icon"><i class="${genreConfig.iconClass}"></i></span>
      <span class="genre-label">${game.genre || "Genre"}</span>
    `;
  }

  const rating = document.getElementById("game-rating");
  const peakPlayers = document.getElementById("game-peak-players");
  const daily = document.getElementById("game-daily");
  const weekly = document.getElementById("game-weekly");
  const monthly = document.getElementById("game-monthly");

  if (rating) rating.textContent = game.rating || "4.0/5";
  if (peakPlayers) peakPlayers.textContent = game.peakPlayers || "-";
  if (daily) daily.textContent = game.peakPlayNow || "-";
  if (weekly) weekly.textContent = game.peakPlayWeek || "-";
  if (monthly) monthly.textContent = game.peakPlayers || "-";

  document.title = `${game.name} | Game Detail`;
}

function renderGameList() {
  const listEl = document.getElementById("game-list");
  const catalog = Array.isArray(window.ListGameAll) ? window.ListGameAll : [];

  if (!listEl || !catalog.length) return;

  listEl.innerHTML = catalog
    .map((game) => {
      const safeFilename = encodeURIComponent(game.slug || normalizeGameSlug(game.name));
      const coverPath = window.resolveGameCoverPath ? window.resolveGameCoverPath(game.cover) : game.cover;
      return `
        <a class="game-link-card" href="./detail.html?game=${safeFilename}">
          <img src="${coverPath}" alt="${game.name}" />
          <div class="game-link-text">
            <strong>${game.name}</strong>
            <span>${game.genre}</span>
          </div>
        </a>
      `;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const productPage = document.getElementById("game-page");
  const gameListPage = document.getElementById("game-list");

  if (productPage) {
    updateGamePage(getGameFromList());
  }

  if (gameListPage) {
    renderGameList();
  }
});
