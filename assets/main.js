import { shortcutSegments } from '../data/data.js';

function renderCards() {
    const container = document.querySelector('.cards');
    if (!container) return;

    // Generamos todo el HTML usando map y plantillas literales
    const html = shortcutSegments.map(segment => `
        <article class="card" data-segment="${segment.id}">
            <header class="card-header">
                <h2>${segment.name}</h2>
                <span class="guion"></span>
            </header>
            <div class="shortcuts-grid">
                ${segment.shortcuts.map(shortcut => `
                    <a href="${shortcut.url}" target="_blank" rel="noopener noreferrer" class="shortcut" title="${shortcut.title}">
                        <span class="icon">${shortcut.icon}</span>
                        <div class="info">
                            <span class="title">${shortcut.title}</span>
                        </div>
                    </a>
                `).join('')}
            </div>
        </article>
    `).join('');

    // Inyectamos el HTML (al hacerlo una sola vez, el reflow es mínimo, similar al Fragment)
    container.innerHTML = html;
}

// Inicializa cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderCards);