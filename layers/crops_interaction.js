// Взаимодействие за слоя "Основни земеделски култури":
// - клик върху маркер показва popup с културите на съответната префектура
// - легенда долу вдясно, затворена по подразбиране, отваря се с клик

map.on('singleclick', function (evt) {
    var hit = map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
        if (layer === lyr_crops) return feature;
    });
    if (!hit) return;

    var crops = hit.get('crops');
    var html = '<div class="crop-popup-title">' + hit.get('name_bg') + '</div>';
    html += '<ul class="crop-popup-list">';
    crops.forEach(function (c) {
        var cat = CROP_CATEGORIES[c.cat];
        html += '<li><img class="crop-popup-icon" src="' + cat.iconUrl + '" alt="" />' +
                '<span>' + c.bg + '<span class="crop-popup-cat">' + cat.label + '</span></span></li>';
    });
    html += '</ul>';

    content.innerHTML = html;
    overlayPopup.setPosition(evt.coordinate);
    container.style.display = 'block';
});

// ---- Легенда ----
(function () {
    var wrap = document.createElement('div');
    wrap.className = 'crop-legend collapsed';

    var toggle = document.createElement('div');
    toggle.className = 'crop-legend-toggle';
    toggle.innerHTML = 'Основни култури <span class="crop-legend-arrow">&#9650;</span>';
    toggle.addEventListener('click', function () {
        wrap.classList.toggle('collapsed');
    });

    var body = document.createElement('div');
    body.className = 'crop-legend-body';
    Object.keys(CROP_CATEGORIES).forEach(function (key) {
        var c = CROP_CATEGORIES[key];
        var row = document.createElement('div');
        row.className = 'crop-legend-row';
        row.innerHTML = '<img src="' + c.iconUrl + '" alt="" /><span>' + c.label + '</span>';
        body.appendChild(row);
    });

    wrap.appendChild(body);
    wrap.appendChild(toggle);
    document.body.appendChild(wrap);
})();
