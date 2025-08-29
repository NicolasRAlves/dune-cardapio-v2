const menuData = {
    combos: {
        title: 'Combos',
        items: [
            { name: 'Combo Beefeater', description: '4 gelo + red bull sabores', price: '240,00', image: 'https://images.unsplash.com/photo-1623933439938-5282a9310860?q=80&w=400' },
            { name: 'Combo Beefeater Pink', description: '4 gelo + red bull sabores', price: '220,00', image: 'https://images.unsplash.com/photo-1630422741933-7a28579649e3?q=80&w=400' },
            { name: 'Combo Tanqueray', description: '4 gelo + red bull sabores', price: '250,00', image: 'https://images.unsplash.com/photo-1624588238213-95b878343714?q=80&w=400' },
            { name: 'Combo Absolut', description: '4 gelo + red bull sabores', price: '210,00', image: 'https://images.unsplash.com/photo-1569529940125-27c395744a2b?q=80&w=400' },
            { name: 'Combo Ciroc Blue', description: '4 gelo + red bull sabores', price: '330,00', image: 'https://images.unsplash.com/photo-1614314890214-1a29a18063ea?q=80&w=400' },
            { name: 'Combo Ciroc Red Berry', description: '4 gelo + red bull sabores', price: '340,00', image: 'https://images.unsplash.com/photo-1614314890214-1a29a18063ea?q=80&w=400' },
            { name: 'Combo Grey Goose', description: '4 gelo + red bull sabores', price: '320,00', image: 'https://images.unsplash.com/photo-1563806923938-78a4b3d7486d?q=80&w=400' },
            { name: 'Combo Black Label', description: '4 gelo + red bull', price: '320,00', image: 'https://images.unsplash.com/photo-1627232339025-e8596e1e32c8?q=80&w=400' },
            { name: 'Combo Buchannas', description: '4 gelo + red bull', price: '340,00', image: 'https://images.unsplash.com/photo-1589862395037-6997f348482d?q=80&w=400' },
            { name: 'Combo Chivas', description: '4 gelo + red bull', price: '280,00', image: 'https://images.unsplash.com/photo-1593382928358-a15c8a37996a?q=80&w=400' },
            { name: 'Combo Gold Label', description: '4 gelo + red bull', price: '400,00', image: 'https://images.unsplash.com/photo-1619451334909-81d394a5e2f7?q=80&w=400' },
            { name: 'Combo Jack Daniels', description: '4 gelo + red bull', price: '290,00', image: 'https://images.unsplash.com/photo-1617037040824-0ad78905a39e?q=80&w=400' },
            { name: 'Combo Old Parr', description: '4 gelo + red bull', price: '290,00', image: 'https://images.unsplash.com/photo-1627232339025-e8596e1e32c8?q=80&w=400' },
            { name: 'Combo Red Label', description: '4 gelo + red bull', price: '220,00', image: 'https://images.unsplash.com/photo-1588870564479-22cf94c3a0dc?q=80&w=400' },
        ]
    },
    porcoes: {
        title: 'Porções',
        items: [
            { name: 'Batata Frita', description: '500g', price: '30,00', image: 'https://images.unsplash.com/photo-1598515214211-89d3c7bab720?q=80&w=400' },
            { name: 'Batata Frita C/ Calabresa', description: '500g', price: '40,00', image: 'https://images.unsplash.com/photo-1598515214211-89d3c7bab720?q=80&w=400' },
            { name: 'Batata Frita C/ Cheddar e Bacon', description: '500g', price: '45,00', image: 'https://images.unsplash.com/photo-1598515214211-89d3c7bab720?q=80&w=400' },
            { name: 'Frango a Passarinho', description: '500g', price: '35,00', image: 'https://images.unsplash.com/photo-1604467795338-02b2b6469a2a?q=80&w=400' },
        ]
    },
    drinks: {
        title: 'Drinks',
        items: [
            { name: 'Caipirinha', description: 'Morango, Kiwi, Maracujá, Limão, Frutas Vermelhas', price: '20,00', image: 'https://images.unsplash.com/photo-1599633833705-a582b1575a5e?q=80&w=400' },
            { name: 'Caipiroska', description: 'Morango, Kiwi, Maracujá, Limão, Frutas Vermelhas', price: '25,00', image: 'https://images.unsplash.com/photo-1634469035992-3a15f8a2b7b3?q=80&w=400' },
            { name: 'Sakerinha', description: 'Morango, Kiwi, Maracujá, Limão, Frutas Vermelhas', price: '25,00', image: 'https://images.unsplash.com/photo-1614313519810-25a58c2f2412?q=80&w=400' },
            { name: 'Dune Kiss', description: 'Gin, licor 43, limão siciliano e mel infusionado', price: '35,00', image: 'https://images.unsplash.com/photo-1626701533938-c00d418151b6?q=80&w=400', featured: 'Sugestão da Casa' },
            { name: 'Sabi Night', description: 'Gin, xarope de rosas francesas, morango e limão siciliano.', price: '30,00', image: 'https://images.unsplash.com/photo-1597599986288-2ff81b6c08c8?q=80&w=400' },
            { name: 'Whiskey Sour', description: 'Whiskey bourbon, limão siciliano, xarope de açúcar e angostura.', price: '25,00', image: 'https://images.unsplash.com/photo-1622464482386-536310f84474?q=80&w=400' },
            { name: 'Clericot', description: 'Espumante, licor 43, morango, kiwi e água com gás', price: '35,00', image: 'https://images.unsplash.com/photo-1551538850-016fe5333c1e?q=80&w=400' },
        ]
    },
    clubedogin: {
        title: 'Clube do Gin',
        items: [
            { name: 'Gin Clássico', description: '', price: '40,00', image: 'https://images.unsplash.com/photo-1543363363-6b236100b092?q=80&w=400' },
            { name: 'Gold Dune', description: 'Gin, licor 43, limão siciliano e tônica', price: '55,00', image: 'https://images.unsplash.com/photo-1622222432239-2651a54cae81?q=80&w=400', featured: 'Exclusivo' },
            { name: 'Gin Mulle', description: 'Gin, limão siciliano, schweppes citrus e espuma de gengibre.', price: '45,00', image: 'https://images.unsplash.com/photo-1551024709-8f23eda2c5a5?q=80&w=400' },
            { name: 'Gin Rose', description: 'Gin, xarope de rosas francesas e tônica', price: '45,00', image: 'https://images.unsplash.com/photo-1609232829214-3c295b282702?q=80&w=400' },
            { name: 'Gin Tropical', description: 'Gin, mix de frutas e red bull tropical', price: '45,00', image: 'https://images.unsplash.com/photo-1623593688039-65a639b4515f?q=80&w=400' },
        ]
    },
    doses: {
        title: 'Doses',
        collapsible: true,
        items: [
            { name: 'Dose Absolut', description: '1 Red bull + 1 gelo sabores', price: '30,00' },
            { name: 'Dose Beefeater', description: '1 Red bull + 1 gelo sabores', price: '35,00' },
            { name: 'Dose Beefeater Pink', description: '1 Red bull + 1 gelo sabores', price: '40,00' },
            { name: 'Dose Black Label', description: '1 Red bull + 1 gelo sabores', price: '45,00' },
            { name: 'Dose Buchannas', description: '1 Red bull + 1 gelo sabores', price: '45,00' },
            { name: 'Dose Chivas', description: '1 Red bull + 1 gelo sabores', price: '40,00' },
            { name: 'Dose Ciroc Blue', description: '1 Red bull + 1 gelo sabores', price: '40,00' },
            { name: 'Dose Ciroc Red Berry', description: '1 Red bull + 1 gelo sabores', price: '50,00' },
            { name: 'Dose Gold Label', description: '1 Red bull + 1 gelo sabores', price: '55,00' },
            { name: 'Dose Grey Goose', description: '1 Red bull + 1 gelo sabores', price: '50,00' },
            { name: 'Dose Jack Daniels', description: '1 Red bull + 1 gelo sabores', price: '40,00' },
            { name: 'Dose Old Parr', description: '1 Red bull + 1 gelo sabores', price: '40,00' },
            { name: 'Dose Red Label', description: '1 Red bull + 1 gelo sabores', price: '30,00' },
            { name: 'Dose Tanqueray', description: '1 Red bull + 1 gelo sabores', price: '40,00' },
            { name: 'Gelo Coco', description: '', price: '3,50' },
            { name: 'Gelo Maracujá', description: '', price: '5,00' },
            { name: 'Gelo Melancia', description: '', price: '5,00' },
            { name: 'Dose P Ballena', description: '', price: '32,00' },
            { name: 'Dose P Licor 43', description: '', price: '25,00' },
            { name: 'Dose P Licor 43 Chocolate', description: '', price: '30,00' },
            { name: 'Dose P Tequila Ouro', description: '', price: '22,00' },
        ]
    },
    cervejas: {
        title: 'Cervejas',
        items: [
            { name: 'Amstel 600 ML', price: '14,00' },
            { name: 'Brahma 600 ML', price: '14,00' },
            { name: 'Original 600 ML', price: '14,00' },
            { name: 'Heineken 600 ML', price: '17,00' },
            { name: 'Budweiser Long Neck', price: '10,00' },
            { name: 'Corona Long Neck', price: '14,00' },
            { name: 'Heineken Long Neck Zero', price: '12,00' },
            { name: 'Skol Beats', price: '10,00' },
        ]
    },
    roshs: {
        title: 'Sessão',
        collapsible: true,
        items: [
            { name: 'Aluguel', price: '30,00' },
            { name: 'Essências Ziggy / Onix', description: 'Banana, Açaí, Cherry, Coru Magic, Frutas Verdes, Grapp, Hapocalyx Mint, High Fusion, High Herry, Hortelã, Laranja e Morango, Limão, Manga Tropical, Maçã, Pera, Tropical, Uva, Watermelon Bomb, Yellow', price: '25,00' },
            { name: 'Trident', price: '4,00' },
        ]
    },
    softdrinks: {
        title: 'Bebidas não Alcoólicas',
        items: [
            { name: 'Água Mineral', price: '4,00' },
            { name: 'Água com Gás', price: '5,00' },
            { name: 'Refrigerantes Lata', description: 'Coca-Cola, Coca Zero, Fanta, Guaraná', price: '6,00' },
            { name: 'Schweppes Lata', price: '7,00' },
            { name: 'Red Bull', description: 'Tradicional / Sabores', price: '12,00' },
            { name: 'Suco Jarra', description: 'Abacaxi, Laranja, Limão, Maracujá', price: '15,00' },
        ]
    }
};

// ===================================================================
// ===== NÃO É NECESSÁRIO EDITAR NADA ABAIXO DESTA LINHA =========
// ===================================================================
document.addEventListener('DOMContentLoaded', function () {
    const menuContainer = document.getElementById('menu-container');
    const searchInput = document.getElementById('search-input');
    const noResults = document.getElementById('no-results');
    const navLinks = document.querySelectorAll('.nav-link');
    const navContainer = document.getElementById('nav-container');

    function renderMenu(data) {
        menuContainer.innerHTML = '';
        let hasVisibleItems = false;
        let itemDelay = 0;

        const sectionIdToTitleMap = {
            clubedogin: 'drinks',
        };

        for (const categoryKey in data) {
            const category = data[categoryKey];
            if (!category.items || category.items.length === 0) continue;

            hasVisibleItems = true;

            const sectionId = sectionIdToTitleMap[categoryKey] || categoryKey;

            const sectionElement = document.createElement('section');
            sectionElement.id = categoryKey;
            sectionElement.className = 'menu-section pt-4 mb-8 animated-item';
            sectionElement.style.animationDelay = `${itemDelay * 50}ms`;
            itemDelay++;

            let categoryHTML = `<h2 class="text-3xl font-bold text-gold mb-6 border-b-2 border-gold/20 pb-2">${category.title}</h2>`;

            const itemsHTML = category.items.map(item => {
                itemDelay++;
                const animationClass = category.collapsible ? '' : 'animated-item';
                const animationStyle = category.collapsible ? '' : `style="animation-delay: ${itemDelay * 30}ms"`;

                if (item.image) {
                    return `
                            <div class="product-card bg-[#222] rounded-lg overflow-hidden flex items-center transition-transform duration-300 hover:scale-105 ${animationClass}" ${animationStyle} data-name="${item.name}" data-description="${item.description || ''}">
                                <img src="${item.image}&auto=format&fit=crop" alt="${item.name}" class="w-28 h-28 object-cover">
                                <div class="p-4 flex-1 relative">
                                    ${item.featured ? `<span class="absolute top-0 right-0 bg-gold text-black text-xs font-semibold px-2 py-1 rounded-bl-lg">${item.featured}</span>` : ''}
                                    <h3 class="product-name text-xl font-semibold">${item.name}</h3>
                                    <p class="product-desc text-sm text-gray-400 mt-1">${item.description || ''}</p>
                                    <p class="text-lg font-bold text-gold mt-2">R$ ${item.price}</p>
                                </div>
                            </div>`;
                } else {
                    return `
                            <div class="product-list-item flex justify-between items-center py-3 border-b border-gray-800 ${animationClass}" ${animationStyle} data-name="${item.name}" data-description="${item.description || ''}">
                                <div>
                                    <h3 class="product-name text-lg font-medium">${item.name}</h3>
                                    ${item.description ? `<p class="product-desc text-sm text-gray-400 mt-1">${item.description}</p>` : ''}
                                </div>
                                <p class="text-lg font-bold text-gold flex-shrink-0 ml-4">R$ ${item.price}</p>
                            </div>`;
                }
            }).join('');

            if (category.collapsible) {
                sectionElement.innerHTML = `
                        <details class="group" open>
                            <summary class="flex justify-between items-center list-none">
                                <h2 class="text-3xl font-bold text-gold mb-2 pb-2">${category.title}</h2>
                                <span class="chevron text-gold transform group-open:rotate-90 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
                                </span>
                            </summary>
                            <div class="mt-4 space-y-2">${itemsHTML}</div>
                        </details>`;
            } else {
                sectionElement.innerHTML = categoryHTML + `<div class="grid grid-cols-1 gap-4">${itemsHTML}</div>`;
            }
            menuContainer.appendChild(sectionElement);
        }
        noResults.style.display = hasVisibleItems ? 'none' : 'block';
    }

    function filterMenu() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const filteredData = {};

        for (const categoryKey in menuData) {
            const category = menuData[categoryKey];
            const filteredItems = category.items.filter(item =>
                item.name.toLowerCase().includes(searchTerm) ||
                (item.description && item.description.toLowerCase().includes(searchTerm))
            );

            if (filteredItems.length > 0) {
                filteredData[categoryKey] = { ...category, items: filteredItems };
            }
        }
        renderMenu(filteredData);
    }

    const updateActiveLink = () => {
        const sections = document.querySelectorAll('.menu-section');
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - navContainer.offsetHeight - 40) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href').substring(1);
            if (linkHref === current || (current === 'clubedogin' && linkHref === 'drinks')) {
                link.classList.add('active');
            }
        });
    };

    searchInput.addEventListener('input', filterMenu);
    window.addEventListener('scroll', updateActiveLink);

    renderMenu(menuData);
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
});
