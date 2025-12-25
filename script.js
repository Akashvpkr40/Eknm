const bookList = document.getElementById("book-list");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentStockFilter = 'All';

function escapeHtml(str) {
  if (!str) return "";
  return String(str).replace(/[&<>"']/g, function (s) {
    return ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    })[s];
  });
}

function debounce(fn, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), wait);
  };
}

function displayBooks(bookArray) {
  bookList.innerHTML = "";

  if (!bookArray || bookArray.length === 0) {
    const query = (searchInput && searchInput.value) ? searchInput.value.trim() : "";
    if (query) {
      bookList.innerHTML = `<p class="no-results">No results found for "${escapeHtml(query)}".</p>`;
    } else {
      bookList.innerHTML = `<p class="no-results">No books found.</p>`;
    }
    return;
  }

  bookArray.forEach(book => {
    const div = document.createElement("div");
    div.className = "book-card";

    const nameMl = escapeHtml(book.name_ml || "");
    const nameEn = escapeHtml(book.name_en || "");
    const author = escapeHtml(book.author || "");
    const stockText = escapeHtml(book.stock || "");
    const stockClass = String(book.stock || "").replace(/\s/g, '').toLowerCase();
    const image = escapeHtml(book.image || "");
    const stockNumber = book.stockNumber != null ? escapeHtml(String(book.stockNumber)) : "";

    div.innerHTML = `
      <img src="${image}" alt="${nameMl}">
      <h2>${nameMl}</h2>
      <p class="title-en"><em>${nameEn}</em></p>
      <p><strong>Author:</strong> ${author}</p>
      <p><strong>Stock No:</strong> ${stockNumber}</p>
      <p class="stock ${stockClass}">
        ${stockText}
      </p>
    `;

    bookList.appendChild(div);
  });
}

function getFilteredBooks() {
  const query = (searchInput && searchInput.value)
    ? String(searchInput.value).trim().toLowerCase()
    : "";

  return (Array.isArray(books) ? books : []).filter(book => {
    const nameMl = String(book.name_ml || "").toLowerCase();
    const nameEn = String(book.name_en || "").toLowerCase();
    const author = String(book.author || "").toLowerCase();
    const stock = String(book.stock || "").toLowerCase();

    const matchesQuery = query === "" ||
      nameMl.includes(query) ||
      nameEn.includes(query) ||
      author.includes(query);

    const matchesStock = currentStockFilter === 'All' ||
      stock === String(currentStockFilter || "").toLowerCase();

    return matchesQuery && matchesStock;
  });
}

function updateDisplayedBooks() {
  const filtered = getFilteredBooks();
  displayBooks(filtered);
}

if (typeof books !== "undefined") {
  updateDisplayedBooks();
} else {
  console.warn("Book data (`books`) not available yet.");
}

if (filterButtons && filterButtons.forEach) {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentStockFilter = btn.getAttribute('data-stock') || 'All';
      updateDisplayedBooks();
    });
  });
}

function performSearch() {
  updateDisplayedBooks();
}

if (searchBtn) {
  searchBtn.addEventListener("click", performSearch);
}

if (searchInput) {
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") performSearch();
  });

  const debouncedLiveSearch = debounce(() => {
    updateDisplayedBooks();
  }, 250);
  searchInput.addEventListener('input', debouncedLiveSearch);
}

// Scroll-to-top button behaviour
(function () {
  const scrollBtn = document.getElementById('scrollToTopBtn');
  if (!scrollBtn) return;

  const showAt = 200; // px

  function prefersReducedMotion() {
    try {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {
      return false;
    }
  }

  function onScroll() {
    if (window.scrollY > showAt) scrollBtn.classList.add('visible');
    else scrollBtn.classList.remove('visible');
  }

  // Throttle scroll handler for performance
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Initial state
  onScroll();

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (prefersReducedMotion()) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
})();