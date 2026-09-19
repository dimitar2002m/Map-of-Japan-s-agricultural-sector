// Слой "Животновъдство" — отделен от културите, ИЗКЛЮЧЕН по подразбиране.
// Включва се ръчно от превключвателя на слоеве горе вдясно.
// Маркерите са РОМБОВИДНИ (за разлика от кръглите за култури) и леко изместени
// в пиксели спрямо точката, за да не се застъпват изцяло, ако двата слоя се включат едновременно.

var LIVESTOCK_CATEGORIES = {
    CATTLE:  { label: "Говедовъдство / уагю", color: "#8a3324", glyph: "cattle"  },
    PORK:    { label: "Свиневъдство",         color: "#c97b63", glyph: "pork"    },
    POULTRY: { label: "Птицевъдство",         color: "#d99a2b", glyph: "poultry" },
    DAIRY_L: { label: "Млечно говедовъдство", color: "#3a7ca5", glyph: "dairy_l" }
};

var LIVESTOCK_GLYPHS = {
    cattle:  '<g fill="#fff">' +
                '<ellipse cx="9" cy="10.5" rx="4.6" ry="3.6"/>' +
                '<path d="M5.4 7 C4.4 5.6 4.8 4.4 5.8 4.4 C6.2 5.4 6 6.4 5.7 7.2Z"/>' +
                '<path d="M12.6 7 C13.6 5.6 13.2 4.4 12.2 4.4 C11.8 5.4 12 6.4 12.3 7.2Z"/>' +
                '<circle cx="7" cy="6.6" r="1"/><circle cx="11" cy="6.6" r="1"/>' +
            '</g>',
    pork:    '<g fill="#fff">' +
                '<circle cx="9" cy="10" r="4.6"/>' +
                '<path d="M5.6 6.4 C4.6 5.2 5 4 6 4.2 C6.3 5.2 6.1 6 5.8 6.8Z"/>' +
                '<path d="M12.4 6.4 C13.4 5.2 13 4 12 4.2 C11.7 5.2 11.9 6 12.2 6.8Z"/>' +
                '<circle cx="7.6" cy="10.2" r="0.7" fill="' + '#c97b63' + '"/>' +
                '<circle cx="10.4" cy="10.2" r="0.7" fill="' + '#c97b63' + '"/>' +
            '</g>',
    poultry: '<g fill="#fff">' +
                '<ellipse cx="9" cy="11" rx="4.4" ry="3.8"/>' +
                '<circle cx="9" cy="6.4" r="2.2"/>' +
                '<path d="M11.2 6.2 L13.2 6.9 L11.2 7.6Z"/>' +
                '<path d="M8.2 4.2 C8.5 3.2 9.5 3.2 9.6 4.2 C9.1 4.6 8.6 4.6 8.2 4.2Z" fill="' + '#d99a2b' + '"/>' +
            '</g>',
    dairy_l: '<g fill="#fff">' +
                '<path d="M7.3 3 H10.7 V5.4 L12 7.3 C12.4 7.9 12.6 8.6 12.6 9.3 V13.4 C12.6 14.3 11.9 15 11 15 H7 C6.1 15 5.4 14.3 5.4 13.4 V9.3 C5.4 8.6 5.6 7.9 6 7.3 L7.3 5.4 Z"/>' +
            '</g>'
};

Object.keys(LIVESTOCK_CATEGORIES).forEach(function (key) {
    var c = LIVESTOCK_CATEGORIES[key];
    var svg =
        '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 18 18">' +
        '<rect x="2.2" y="2.2" width="13.6" height="13.6" rx="3" transform="rotate(45 9 9)" fill="' + c.color + '" stroke="#ffffff" stroke-width="1.4"/>' +
        (LIVESTOCK_GLYPHS[c.glyph] || '') +
        '</svg>';
    c.iconUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
});

var livestockFeatures = LIVESTOCK.map(function (d) {
    var f = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([d.lon, d.lat]))
    });
    f.set('iso', d.iso);
    f.set('name_bg', d.name_bg);
    f.set('animals', d.animals);
    return f;
});

var livestockSource = new ol.source.Vector({ features: livestockFeatures });

var livestockStyleCache = {};
function livestockFeatureStyle(feature) {
    var primaryCat = feature.get('animals')[0].cat;
    if (!livestockStyleCache[primaryCat]) {
        livestockStyleCache[primaryCat] = new ol.style.Style({
            image: new ol.style.Icon({
                src: LIVESTOCK_CATEGORIES[primaryCat].iconUrl,
                scale: 0.92,
                anchor: [0.5, 0.5],
                displacement: [13, -13] // леко изместване спрямо маркера за култура на същата точка
            })
        });
    }
    return livestockStyleCache[primaryCat];
}

var lyr_livestock = new ol.layer.Vector({
    source: livestockSource,
    style: livestockFeatureStyle,
    interactive: true,
    title: 'Животновъдство'
});
lyr_livestock.setVisible(false); // изключен по подразбиране

layersList.push(lyr_livestock);
