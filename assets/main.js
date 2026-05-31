/* Importa los segmentos y shortcuts desde tu archivo de datos */
import { shortcutSegments } from '../data/data.js';

/**
 * Renderiza las cards dentro del contenedor .cards
 */
function renderCards() {
    const container = document.querySelector('.cards');

    if (!container) {
        console.error('No se encontró el contenedor .cards');
        return;
    }

    // Fragmento para minimizar reflows
    const fragment = document.createDocumentFragment();

    shortcutSegments.forEach(segment => {
        // === CARD ===
        const card = document.createElement('article');
        card.className = 'card';
        card.setAttribute('data-segment', segment.id);

        // === HEADER ===
        const header = document.createElement('header');
        header.className = 'card-header';

        const title = document.createElement('h2');
        const guion = document.createElement('span');
        guion.className = 'guion';

        title.className = 'card-title';
        title.textContent = segment.name;

        header.appendChild(title);
        header.appendChild(guion);
        card.appendChild(header);

        // === SHORTCUTS CONTAINER ===
        const shortcutsContainer = document.createElement('div');
        shortcutsContainer.className = 'shortcuts-grid';

        segment.shortcuts.forEach(shortcut => {
            const link = document.createElement('a');
            link.href = shortcut.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.className = 'shortcut';
            link.title = shortcut.title;

            // Ícono (SVG inline proveniente del data)
            const iconWrapper = document.createElement('span');
            iconWrapper.className = 'icon';
            iconWrapper.innerHTML = shortcut.icon;

            // Info textual
            const info = document.createElement('div');
            info.className = 'info';

            const itemTitle = document.createElement('span');
            itemTitle.className = 'title';
            itemTitle.textContent = shortcut.title;

            const itemUrl = document.createElement('span');
            itemUrl.className = 'url';
            // Limpia la URL para mostrar solo el dominio principal
            // try {
            //     const urlObj = new URL(shortcut.url);
            //     // itemUrl.textContent = urlObj.hostname.replace(/^www\./, '');
            // } catch {
            //     itemUrl.textContent = shortcut.url;
            // }

            info.appendChild(itemTitle);
            info.appendChild(itemUrl);

            link.appendChild(iconWrapper);
            link.appendChild(info);

            shortcutsContainer.appendChild(link);
        });

        card.appendChild(shortcutsContainer);
        fragment.appendChild(card);
    });

    container.appendChild(fragment);
}

// Inicializa cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderCards);