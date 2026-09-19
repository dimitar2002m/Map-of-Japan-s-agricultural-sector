// Слой "Основни земеделски култури" — по една маркер-иконка на префектура,
// оцветена и със символ според категорията на основната ѝ култура.
// Съдържа до 2 култури на префектура (виж popup при клик).

var CROP_CATEGORIES = {
    GRAIN:  { label: "Зърнени / ориз",        color: "#c9a227", glyph: "grain"  },
    FRUIT:  { label: "Плодове",                color: "#d1495b", glyph: "fruit"  },
    CITRUS: { label: "Цитрусови плодове",      color: "#f28c28", glyph: "citrus" },
    GRAPE:  { label: "Грозде",                 color: "#7b3f9e", glyph: "grape"  },
    VEG:    { label: "Зеленчуци / листни",     color: "#4c8c4a", glyph: "leaf"   },
    TUBER:  { label: "Кореноплодни",           color: "#8a5a34", glyph: "tuber"  },
    TEA:    { label: "Чай",                    color: "#2f6b4f", glyph: "leaf"   },
    DAIRY:  { label: "Млечни продукти",        color: "#3a7ca5", glyph: "dairy"  },
    FLOWER: { label: "Цветя",                  color: "#c15fa0", glyph: "flower" },
    CANE:   { label: "Захарна тръстика",       color: "#6fa832", glyph: "cane"   },
    OLIVE:  { label: "Маслини",                color: "#7d8f3f", glyph: "olive"  },
    NUT:    { label: "Ядки",                   color: "#a3762c", glyph: "nut"    }
};

// Прости, плоски глиф-пътеки (в 0..18 координатна мрежа), рисувани в бяло
// върху цветния кръг на маркера.
var CROP_GLYPHS = {
    grain:  '<g fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round">' +
                '<path d="M9 15 V4"/>' +
                '<path d="M9 6 C6.5 5 6 3 6 2 C7.6 2.4 9 3.6 9 6Z" fill="#fff" stroke="none"/>' +
                '<path d="M9 8 C11.5 7 12 5 12 4 C10.4 4.4 9 5.6 9 8Z" fill="#fff" stroke="none"/>' +
                '<path d="M9 10 C6.5 9 6 7 6 6 C7.6 6.4 9 7.6 9 10Z" fill="#fff" stroke="none"/>' +
                '<path d="M9 12 C11.5 11 12 9 12 8 C10.4 8.4 9 9.6 9 12Z" fill="#fff" stroke="none"/>' +
            '</g>',
    fruit:  '<g fill="#fff">' +
                '<circle cx="9" cy="11" r="5.2"/>' +
                '<path d="M9 6 Q8.3 4 9.6 3" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>' +
                '<path d="M9.6 3.6 C10.8 3 12 3.6 12 4.8 C10.8 5 9.8 4.6 9.6 3.6Z"/>' +
            '</g>',
    citrus: '<g fill="none" stroke="#fff" stroke-width="1.2">' +
                '<circle cx="9" cy="9.5" r="5.4"/>' +
                '<path d="M9 4.5 V14.5 M4.4 9.5 H13.6 M5.9 5.9 L12.1 13.1 M12.1 5.9 L5.9 13.1"/>' +
            '</g>',
    grape:  '<g fill="#fff">' +
                '<circle cx="7" cy="8" r="1.6"/><circle cx="10.2" cy="8" r="1.6"/>' +
                '<circle cx="5.6" cy="11" r="1.6"/><circle cx="8.8" cy="11" r="1.6"/><circle cx="12" cy="11" r="1.6"/>' +
                '<circle cx="7.2" cy="14" r="1.6"/><circle cx="10.4" cy="14" r="1.6"/>' +
                '<path d="M8.5 6.5 C8 4.5 9.5 3.5 11 4" fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/>' +
            '</g>',
    leaf:   '<g fill="#fff">' +
                '<path d="M4 14 C4 7 9 3.5 14.5 3.5 C14.5 10.5 10.5 14 4 14Z"/>' +
            '</g>',
    tuber:  '<g fill="#fff">' +
                '<ellipse cx="9" cy="9.5" rx="5.6" ry="4.2"/>' +
            '</g>',
    dairy:  '<g fill="#fff">' +
                '<path d="M7.3 3 H10.7 V5.4 L12 7.3 C12.4 7.9 12.6 8.6 12.6 9.3 V13.4 C12.6 14.3 11.9 15 11 15 H7 C6.1 15 5.4 14.3 5.4 13.4 V9.3 C5.4 8.6 5.6 7.9 6 7.3 L7.3 5.4 Z"/>' +
            '</g>',
    flower: '<g fill="#fff">' +
                '<circle cx="9" cy="6.6" r="2"/><circle cx="12.4" cy="9" r="2"/>' +
                '<circle cx="9" cy="11.4" r="2"/><circle cx="5.6" cy="9" r="2"/>' +
                '<circle cx="9" cy="9" r="1.6" fill="' + '#c15fa0' + '"/>' +
            '</g>',
    cane:   '<g fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round">' +
                '<path d="M6 15 V4"/><path d="M9 15 V3"/><path d="M12 15 V4.5"/>' +
                '<path d="M9 3 C10 2 11.5 2 12 3"/>' +
            '</g>',
    olive:  '<g fill="#fff">' +
                '<ellipse cx="9" cy="10.5" rx="2.6" ry="3.4"/>' +
                '<path d="M9 7 C9 4.6 11 3.6 12.6 4" fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/>' +
            '</g>',
    nut:    '<g fill="#fff">' +
                '<path d="M9 3.6 C11.4 3.6 12.6 5.6 12.2 7.8 C13.6 8.6 13.8 10.8 12.4 11.8 C12.8 13.8 11 15.2 9 14.4 C7 15.2 5.2 13.8 5.6 11.8 C4.2 10.8 4.4 8.6 5.8 7.8 C5.4 5.6 6.6 3.6 9 3.6Z"/>' +
            '</g>'
};

// генерираме готов data-url маркер за всяка категория, веднъж
Object.keys(CROP_CATEGORIES).forEach(function (key) {
    var c = CROP_CATEGORIES[key];
    var svg =
        '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 18 18">' +
        '<circle cx="9" cy="9" r="8" fill="' + c.color + '" stroke="#ffffff" stroke-width="1.4"/>' +
        (CROP_GLYPHS[c.glyph] || '') +
        '</svg>';
    c.iconUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
});

var cropFeatures = CROPS.map(function (d) {
    var f = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([d.lon, d.lat]))
    });
    f.set('iso', d.iso);
    f.set('name_bg', d.name_bg);
    f.set('crops', d.crops);
    return f;
});

var cropSource = new ol.source.Vector({ features: cropFeatures });

var cropStyleCache = {};
function cropFeatureStyle(feature) {
    var primaryCat = feature.get('crops')[0].cat;
    if (!cropStyleCache[primaryCat]) {
        cropStyleCache[primaryCat] = new ol.style.Style({
            image: new ol.style.Icon({
                src: CROP_CATEGORIES[primaryCat].iconUrl,
                scale: 1,
                anchor: [0.5, 0.5]
            })
        });
    }
    return cropStyleCache[primaryCat];
}

var lyr_crops = new ol.layer.Vector({
    source: cropSource,
    style: cropFeatureStyle,
    interactive: true,
    title: 'Основни земеделски култури'
});
lyr_crops.setVisible(true);

// декluttering: скриваме шумните технически слоеве по подразбиране
// (случайни OSM точки без данни, реки, трасета), за да изпъкнат
// префектурите и земеделските маркери. Остават достъпни в превключвателя на слоеве.
lyr_admin_level_4_japan_0.setVisible(false);
lyr_admin_level_4_japan_1.setVisible(false);
lyr_admin_level_4_japan_2.setVisible(false);

// добавяме новия слой в списъка, който layers/layers.js вече е декларирал,
// така че да участва при създаването на картата в qgis2web.js
layersList.push(lyr_crops);
