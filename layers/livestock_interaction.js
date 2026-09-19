// Взаимодействие за слоя "Животновъдство":
// - клик върху ромбовиден маркер показва popup с животните за съответната префектура
// - в легендата се добавя секция "Животновъдство", която се показва/скрива
//   автоматично според това дали слоят в момента е включен

map.on('singleclick', function (evt) {
    var hit = map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
        if (layer === lyr_livestock) return feature;
    });
    if (!hit) return;

    var animals = hit.get('animals');
    var html = '<div class="crop-popup-title">' + hit.get('name_bg') + '</div>';
    html += '<ul class="crop-popup-list">';
    animals.forEach(function (a) {
        var cat = LIVESTOCK_CATEGORIES[a.cat];
        html += '<li><img class="crop-popup-icon" src="' + cat.iconUrl + '" alt="" />' +
                '<span>' + a.bg + '<span class="crop-popup-cat">' + cat.label + '</span></span></li>';
    });
    html += '</ul>';

    content.innerHTML = html;
    overlayPopup.setPosition(evt.coordinate);
    container.style.display = 'block';
});

// ---- добавяне на секция "Животновъдство" в съществуващата легенда ----
(function () {
    var body = document.querySelector('.crop-legend-body');
    if (!body) return;

    var section = document.createElement('div');
    section.className = 'crop-legend-livestock-section';
    section.style.display = 'none';
    section.style.marginTop = '8px';
    section.style.paddingTop = '8px';
    section.style.borderTop = '1px solid #ddd';

    var heading = document.createElement('div');
    heading.textContent = 'Животновъдство';
    heading.style.fontWeight = '600';
    heading.style.fontSize = '11px';
    heading.style.textTransform = 'uppercase';
    heading.style.letterSpacing = '0.04em';
    heading.style.color = 'var(--muted, #667085)';
    heading.style.marginBottom = '6px';
    section.appendChild(heading);

    Object.keys(LIVESTOCK_CATEGORIES).forEach(function (key) {
        var c = LIVESTOCK_CATEGORIES[key];
        var row = document.createElement('div');
        row.className = 'crop-legend-row';
        row.innerHTML = '<img src="' + c.iconUrl + '" alt="" /><span>' + c.label + '</span>';
        section.appendChild(row);
    });

    body.appendChild(section);

    function syncVisibility() {
        section.style.display = lyr_livestock.getVisible() ? 'block' : 'none';
    }
    lyr_livestock.on('change:visible', syncVisibility);
    syncVisibility();
})();
