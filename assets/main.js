import { shortcutSegments } from './../data/data.js';

function renderBentoGrid() {
    const container = document.getElementById('bento-container');
    if (!container) return;

    // Mapeo de doble nivel: Segmentos -> Categorías -> Links
    const html = shortcutSegments.map(segment => {
        const categoriesHtml = segment.categories.map(cat => `
            <div class="category-group">
                <h3 class="category-title">${cat.title}</h3>
                <div class="shortcuts-grid">
                    ${cat.links.map(link => `
                        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="shortcut-item" title="${link.title}">
                            <img class="icon" src="${link.icon}" alt="${link.title}" onerror="this.src='./assets/icono.png'">
                            <span class="title">${link.title}</span>
                        </a>
                    `).join('')}
                </div>
            </div>
        `).join('');

        return `
            <article class="bento-card">
                <h2 class="segment-title">${segment.name}</h2>
                ${categoriesHtml}
            </article>
        `;
    }).join('');

    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderBentoGrid);