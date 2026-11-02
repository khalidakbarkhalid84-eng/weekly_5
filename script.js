// Data Presisi Berdasarkan Video Sequence
const DATASETS = {
    "17-23": {
        label: "17 Okt 2023 - 23 Okt 2023",
        days: ["Sen, 17", "Ming, 18", "Sen, 19", "Sel, 20", "Rab, 21", "Kam, 22", "Jum, 23"],
        categories: {
            all: {
                omzet: "Rp1.410.000",
                omzetSub: "Rata-rata Rp201.429 per hari",
                terjual: 261,
                terjualSub: "Dari 10 produk yang laku",
                transaksi: 21,
                transaksiSub: "Dalam 7 hari",
                barData: [140000, 80000, 100000, 110000, 80000, 75000, 161000],
                donutData: [130, 95, 36], // Makanan, Minuman, Snack
                products: [
                    { name: "Nasi Goreng", category: "Makanan", terjual: 38, omset: 380000 },
                    { name: "Mie Ayam", category: "Makanan", terjual: 23, omset: 184000 },
                    { name: "Es Teh Manis", category: "Minuman", terjual: 42, omset: 126000 },
                    { name: "Nasi Uduk", category: "Makanan", terjual: 23, omset: 161000 },
                    { name: "Air Mineral", category: "Minuman", terjual: 34, omset: 136000 },
                    { name: "Keripik Singkong", category: "Snack", terjual: 18, omset: 90000 },
                    { name: "Jus Jeruk", category: "Minuman", terjual: 17, omset: 102000 },
                    { name: "Rot Cokelat", category: "Snack", terjual: 18, omset: 72000 },
                    { name: "Bakso", category: "Makanan", terjual: 30, omset: 90000 },
                    { name: "Susu Kotak", category: "Minuman", terjual: 18, omset: 69000 }
                ]
            },
            minumanOnly: {
                omzet: "Rp360.000",
                omzetSub: "Rata-rata Rp51.429 per hari",
                terjual: 89,
                terjualSub: "Dari 4 produk yang laku",
                transaksi: 6,
                transaksiSub: "Dalam 7 hari",
                barData: [0, 0, 0, 0, 70000, 60000, 100000],
                donutData: [0, 89, 0],
                products: [
                    { name: "Es Teh Manis", category: "Minuman", terjual: 42, omset: 126000 },
                    { name: "Jus Jeruk", category: "Minuman", terjual: 17, omset: 102000 },
                    { name: "Air Mineral", category: "Minuman", terjual: 18, omset: 72000 },
                    { name: "Susu Kotak", category: "Minuman", terjual: 12, omset: 60000 }
                ]
            }
        }
    },
    "01-22": {
        label: "01 Okt 2023 - 22 Okt 2023",
        days: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"],
        categories: {
            all: {
                omzet: "Rp1.151.000",
                omzetSub: "Rata-rata Rp212.318 per hari",
                terjual: 221,
                terjualSub: "Dari 10 produk yang laku",
                transaksi: 18,
                transaksiSub: "Dalam 22 hari",
                barData: [30000, 45000, 50000, 40000, 60000, 55000, 70000, 80000, 75000, 90000, 65000, 85000, 95000, 100000, 110000, 105000, 120000, 115000, 130000, 125000, 140000, 150000],
                donutData: [110, 80, 31],
                products: [
                    { name: "Nasi Goreng", category: "Makanan", terjual: 23, omset: 230000 },
                    { name: "Mie Ayam", category: "Makanan", terjual: 23, omset: 184000 },
                    { name: "Nasi Uduk", category: "Makanan", terjual: 23, omset: 161000 },
                    { name: "Es Teh Manis", category: "Minuman", terjual: 42, omset: 126000 },
                    { name: "Jus Jeruk", category: "Minuman", terjual: 17, omset: 102000 },
                    { name: "Air Mineral", category: "Minuman", terjual: 34, omset: 136000 },
                    { name: "Keripik Singkong", category: "Snack", terjual: 18, omset: 90000 }
                ]
            },
            minumanSnack: {
                omzet: "Rp576.000",
                omzetSub: "Rata-rata Rp162.000 per hari",
                terjual: 152,
                terjualSub: "Dari 7 produk yang laku",
                transaksi: 12,
                transaksiSub: "Dalam 22 hari",
                barData: [10000, 20000, 25000, 30000, 40000, 45000, 50000, 60000, 55000, 70000, 45000, 60000, 70000, 80000, 85000, 90000, 95000, 100000, 105000, 110000, 115000, 120000],
                donutData: [0, 95, 57],
                products: [
                    { name: "Es Teh Manis", category: "Minuman", terjual: 42, omset: 126000 },
                    { name: "Jus Jeruk", category: "Minuman", terjual: 17, omset: 102000 },
                    { name: "Keripik Singkong", category: "Snack", terjual: 18, omset: 90000 },
                    { name: "Air Mineral", category: "Minuman", terjual: 18, omset: 72000 },
                    { name: "Rot Cokelat", category: "Snack", terjual: 18, omset: 72000 }
                ]
            }
        }
    },
    "01-26": {
        label: "17 Okt 2023 - 23 Okt 2023",
        days: ["Sen, 17", "Ming, 18", "Sen, 19", "Sel, 20", "Rab, 21", "Kam, 22", "Jum, 23"],
        categories: {
            all: {
                omzet: "Rp1.194.000",
                omzetSub: "Rata-rata Rp79.571 per hari",
                terjual: 198,
                terjualSub: "Dari 7 produk yang laku",
                transaksi: 15,
                transaksiSub: "Dalam 7 hari",
                barData: [90000, 60000, 75000, 80000, 70000, 60000, 140000],
                donutData: [100, 70, 28],
                products: [
                    { name: "Nasi Goreng", category: "Makanan", terjual: 30, omset: 300000 },
                    { name: "Mie Ayam", category: "Makanan", terjual: 20, omset: 160000 },
                    { name: "Es Teh Manis", category: "Minuman", terjual: 40, omset: 120000 }
                ]
            },
            makananOnly: {
                omzet: "Rp725.000",
                omzetSub: "Rata-rata Rp33.571 per hari",
                terjual: 84,
                terjualSub: "Dari 3 produk yang laku",
                transaksi: 7,
                transaksiSub: "Dalam 7 hari",
                barData: [50000, 40000, 45000, 50000, 40000, 40000, 100000],
                donutData: [84, 0, 0],
                products: [
                    { name: "Nasi Uduk", category: "Makanan", terjual: 23, omset: 161000 },
                    { name: "Nasi Goreng", category: "Makanan", terjual: 38, omset: 380000 },
                    { name: "Mie Ayam", category: "Makanan", terjual: 23, omset: 184000 }
                ]
            }
        }
    }
};

// State Global Aplikasi
let currentDatePreset = "17-23";
let activeCategories = ["Makanan", "Minuman", "Snack"];
let searchQuery = "";
let currentPage = 1;
const itemsPerPage = 6;
let productToDelete = null;

// Chart Instance
let barChart = null;
let donutChart = null;

// Element Selectors
const darkModeToggle = document.getElementById('darkModeToggle');
const dateRangeBtn = document.getElementById('dateRangeBtn');
const dateDropdown = document.getElementById('dateDropdown');
const presetSelect = document.getElementById('presetSelect');
const applyDateBtn = document.getElementById('applyDateBtn');
const dateRangeLabel = document.getElementById('dateRangeLabel');
const headerSubtitle = document.getElementById('headerSubtitle');

const categoryDropdownToggle = document.getElementById('categoryDropdownToggle');
const categoryDropdown = document.getElementById('categoryDropdown');
const categoryTagsContainer = document.getElementById('categoryTagsContainer');
const catCheckboxes = document.querySelectorAll('.cat-checkbox');

const kpiOmset = document.getElementById('kpiOmset');
const kpiOmsetSub = document.getElementById('kpiOmsetSub');
const kpiItemTerjual = document.getElementById('kpiItemTerjual');
const kpiItemSub = document.getElementById('kpiItemSub');
const kpiTransaksi = document.getElementById('kpiTransaksi');
const kpiTransaksiSub = document.getElementById('kpiTransaksiSub');

const productTableBody = document.getElementById('productTableBody');
const searchInput = document.getElementById('searchInput');
const tableCountLabel = document.getElementById('tableCountLabel');
const prevPageBtn = document.getElementById('prevPageBtn');
const nextPageBtn = document.getElementById('nextPageBtn');
const pageNumbers = document.getElementById('pageNumbers');

const deleteModal = document.getElementById('deleteModal');
const deleteModalTitle = document.getElementById('deleteModalTitle');
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

// Init App
window.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initCharts();
    renderCategoryChips();
    updateDashboard();

    // Toggle Dark Mode
    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        updateChartColors();
    });

    // Toggle Dropdowns
    dateRangeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dateDropdown.classList.toggle('hidden');
        categoryDropdown.classList.add('hidden');
    });

    categoryDropdownToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        categoryDropdown.classList.toggle('hidden');
        dateDropdown.classList.add('hidden');
    });

    document.addEventListener('click', () => {
        dateDropdown.classList.add('hidden');
        categoryDropdown.classList.add('hidden');
    });

    dateDropdown.addEventListener('click', (e) => e.stopPropagation());
    categoryDropdown.addEventListener('click', (e) => e.stopPropagation());

    // Preset Date Selector
    presetSelect.addEventListener('change', (e) => {
        currentDatePreset = e.target.value;
    });

    applyDateBtn.addEventListener('click', () => {
        dateDropdown.classList.add('hidden');
        updateDashboard();
    });

    // Checkbox Category Selector
    catCheckboxes.forEach(cb => {
        cb.addEventListener('change', () => {
            activeCategories = Array.from(catCheckboxes)
                .filter(c => c.checked)
                .map(c => c.value);
            renderCategoryChips();
            updateDashboard();
        });
    });

    // Search Bar Filter
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        currentPage = 1;
        renderTable();
    });

    // Delete Modal Handlers
    cancelDeleteBtn.addEventListener('click', () => {
        deleteModal.classList.add('hidden');
        productToDelete = null;
    });

    confirmDeleteBtn.addEventListener('click', () => {
        if (productToDelete) {
            const dataset = getActiveData();
            dataset.products = dataset.products.filter(p => p.name !== productToDelete);
            deleteModal.classList.add('hidden');
            productToDelete = null;
            renderTable();
        }
    });
});

// Resolve Data Based on Combination of Filters
function getActiveData() {
    const dateObj = DATASETS[currentDatePreset];
    let categoryKey = "all";

    const hasMakanan = activeCategories.includes("Makanan");
    const hasMinuman = activeCategories.includes("Minuman");
    const hasSnack = activeCategories.includes("Snack");

    if (hasMinuman && !hasMakanan && !hasSnack) {
        categoryKey = "minumanOnly";
    } else if (hasMinuman && hasSnack && !hasMakanan) {
        categoryKey = "minumanSnack";
    } else if (hasMakanan && !hasMinuman && !hasSnack) {
        categoryKey = "makananOnly";
    }

    return dateObj.categories[categoryKey] || dateObj.categories["all"];
}

// Render Multi-select Chips
function renderCategoryChips() {
    categoryTagsContainer.innerHTML = '';
    activeCategories.forEach(cat => {
        const tag = document.createElement('span');
        tag.className = 'flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600';
        tag.innerHTML = `
            ${cat}
            <button onclick="removeCategory('${cat}')" class="text-gray-400 hover:text-red-500 font-bold ml-0.5">&times;</button>
        `;
        categoryTagsContainer.appendChild(tag);
    });
}

window.removeCategory = function(cat) {
    activeCategories = activeCategories.filter(c => c !== cat);
    catCheckboxes.forEach(cb => {
        if (cb.value === cat) cb.checked = false;
    });
    renderCategoryChips();
    updateDashboard();
};

// Core Dashboard Update Routine
function updateDashboard() {
    const dateObj = DATASETS[currentDatePreset];
    const data = getActiveData();

    // Update Labels
    dateRangeLabel.textContent = dateObj.label;
    headerSubtitle.textContent = `${dateObj.label} · ${activeCategories.length} kategori · ${data.products.length} produk`;

    // Update KPI Cards
    kpiOmset.textContent = data.omzet;
    kpiOmsetSub.textContent = data.omzetSub;
    kpiItemTerjual.textContent = data.terjual;
    kpiItemSub.textContent = data.terjualSub;
    kpiTransaksi.textContent = data.transaksi;
    kpiTransaksiSub.textContent = data.transaksiSub;

    // Update Charts
    updateCharts(dateObj.days, data.barData, data.donutData);

    // Update Table
    currentPage = 1;
    renderTable();
}

// Initialize Chart.js
function initCharts() {
    const isDark = document.documentElement.classList.contains('dark');
    const textColor = isDark ? '#94a3b8' : '#64748b';

    // Bar Chart
    const ctxBar = document.getElementById('barChart').getContext('2d');
    barChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Omzet',
                data: [],
                backgroundColor: '#3b82f6',
                borderRadius: 4,
                maxBarThickness: 32
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ' Rp' + context.raw.toLocaleString('id-ID');
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: textColor, font: { size: 10 } } },
                y: {
                    grid: { color: isDark ? '#334155' : '#f1f5f9' },
                    ticks: {
                        color: textColor,
                        font: { size: 10 },
                        callback: function(val) { return val >= 1000 ? (val/1000) + 'rb' : val; }
                    }
                }
            }
        }
    });

    // Donut Chart
    const ctxDonut = document.getElementById('donutChart').getContext('2d');
    donutChart = new Chart(ctxDonut, {
        type: 'doughnut',
        data: {
            labels: ['Makanan', 'Minuman', 'Snack'],
            datasets: [{
                data: [130, 95, 36],
                backgroundColor: ['#3b82f6', '#22c55e', '#a855f7'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '72%',
            plugins: {
                legend: { display: false }
            }
        }
    });
}

function updateCharts(labels, barData, donutData) {
    barChart.data.labels = labels;
    barChart.data.datasets[0].data = barData;
    barChart.update();

    donutChart.data.datasets[0].data = donutData;
    donutChart.update();
}

function updateChartColors() {
    const isDark = document.documentElement.classList.contains('dark');
    const textColor = isDark ? '#94a3b8' : '#64748b';
    
    barChart.options.scales.x.ticks.color = textColor;
    barChart.options.scales.y.ticks.color = textColor;
    barChart.options.scales.y.grid.color = isDark ? '#334155' : '#f1f5f9';
    barChart.update();
}

// Render Table & Handle Instant Search + Pagination
function renderTable() {
    const data = getActiveData();
    let filtered = data.products.filter(p => {
        const matchCat = activeCategories.includes(p.category);
        const matchSearch = p.name.toLowerCase().includes(searchQuery);
        return matchCat && matchSearch;
    });

    tableCountLabel.textContent = `${filtered.length} produk`;

    // Pagination calculation
    const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
    if (currentPage > totalPages) currentPage = totalPages;

    const startIdx = (currentPage - 1) * itemsPerPage;
    const pageData = filtered.slice(startIdx, startIdx + itemsPerPage);

    productTableBody.innerHTML = '';
    if (pageData.length === 0) {
        productTableBody.innerHTML = `
            <tr>
                <td colspan="5" class="py-6 text-center text-gray-400">Tidak ada produk ditemukan</td>
            </tr>
        `;
    } else {
        pageData.forEach(prod => {
            let badgeClass = 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300';
            if (prod.category === 'Minuman') badgeClass = 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300';
            if (prod.category === 'Snack') badgeClass = 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300';

            const tr = document.createElement('tr');
            tr.className = 'hover:bg-gray-50 dark:hover:bg-gray-700/30 transition';
            tr.innerHTML = `
                <td class="py-3 px-2 font-medium text-gray-900 dark:text-gray-100">${prod.name}</td>
                <td class="py-3 px-2">
                    <span class="px-2 py-0.5 text-[10px] font-bold rounded ${badgeClass}">${prod.category.toUpperCase()}</span>
                </td>
                <td class="py-3 px-2 text-right">${prod.terjual}</td>
                <td class="py-3 px-2 text-right font-medium">Rp${prod.omset.toLocaleString('id-ID')}</td>
                <td class="py-3 px-2 text-center">
                    <button onclick="openDeleteModal('${prod.name}')" class="p-1 text-gray-400 hover:text-red-600 rounded transition">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </td>
            `;
            productTableBody.appendChild(tr);
        });
    }

    lucide.createIcons();
    renderPaginationControls(totalPages);
}

function renderPaginationControls(totalPages) {
    pageNumbers.innerHTML = '';
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `w-6 h-6 rounded text-xs ${i === currentPage ? 'bg-blue-600 text-white font-medium' : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400'}`;
        btn.textContent = i;
        btn.onclick = () => { currentPage = i; renderTable(); };
        pageNumbers.appendChild(btn);
    }

    prevPageBtn.onclick = () => { if (currentPage > 1) { currentPage--; renderTable(); } };
    nextPageBtn.onclick = () => { if (currentPage < totalPages) { currentPage++; renderTable(); } };
}

window.openDeleteModal = function(productName) {
    productToDelete = productName;
    deleteModalTitle.textContent = `Hapus ${productName}?`;
    deleteModal.classList.remove('hidden');
};