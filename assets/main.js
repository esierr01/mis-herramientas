import { shortcutSegments } from '../data/data.js';

function renderCards() {
    const container = document.querySelector('.cards');
    if (!container) return;

    const html = shortcutSegments.map(segment => `
        <article class="card" data-segment="${segment.id}">
            <div class="shortcuts-grid">
                ${segment.shortcuts.map(shortcut => {
        // El if debe estar fuera del template string
        if (shortcut.url === 'separador') {
            return `<div class="separator">
                        ${shortcut.title}
                    </div>`;
        } else {
            return `
                            <a href="${shortcut.url}" target="_blank" rel="noopener noreferrer" class="shortcut" title="${shortcut.title}">
                                <img class="icon" src="${shortcut.icon}" alt="${shortcut.title}">
                                <div class="info">
                                    <span class="title">${shortcut.title}</span>
                                </div>
                            </a>
                        `;
        }
    }).join('')}
            </div>
        </article>
    `).join('');

    container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderCards);