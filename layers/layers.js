var wms_layers = [];

var format_admin_level_4_japan_0 = new ol.format.GeoJSON();
var features_admin_level_4_japan_0 = format_admin_level_4_japan_0.readFeatures(json_admin_level_4_japan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_admin_level_4_japan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_admin_level_4_japan_0.addFeatures(features_admin_level_4_japan_0);
var lyr_admin_level_4_japan_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_admin_level_4_japan_0, 
                style: style_admin_level_4_japan_0,
                popuplayertitle: 'admin_level_4_japan',
                interactive: false,
                title: '<img src="styles/legend/admin_level_4_japan_0.png" /> admin_level_4_japan'
            });
var format_admin_level_4_japan_1 = new ol.format.GeoJSON();
var features_admin_level_4_japan_1 = format_admin_level_4_japan_1.readFeatures(json_admin_level_4_japan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_admin_level_4_japan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_admin_level_4_japan_1.addFeatures(features_admin_level_4_japan_1);
var lyr_admin_level_4_japan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_admin_level_4_japan_1, 
                style: style_admin_level_4_japan_1,
                popuplayertitle: 'admin_level_4_japan',
                interactive: false,
                title: '<img src="styles/legend/admin_level_4_japan_1.png" /> admin_level_4_japan'
            });
var format_admin_level_4_japan_2 = new ol.format.GeoJSON();
var features_admin_level_4_japan_2 = format_admin_level_4_japan_2.readFeatures(json_admin_level_4_japan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_admin_level_4_japan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_admin_level_4_japan_2.addFeatures(features_admin_level_4_japan_2);
var lyr_admin_level_4_japan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_admin_level_4_japan_2, 
                style: style_admin_level_4_japan_2,
                popuplayertitle: 'admin_level_4_japan',
                interactive: false,
                title: '<img src="styles/legend/admin_level_4_japan_2.png" /> admin_level_4_japan'
            });
var format_admin_level_4_japan_3 = new ol.format.GeoJSON();
var features_admin_level_4_japan_3 = format_admin_level_4_japan_3.readFeatures(json_admin_level_4_japan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_admin_level_4_japan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_admin_level_4_japan_3.addFeatures(features_admin_level_4_japan_3);
var lyr_admin_level_4_japan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_admin_level_4_japan_3, 
                style: style_admin_level_4_japan_3,
                popuplayertitle: 'admin_level_4_japan',
                interactive: false,
                title: '<img src="styles/legend/admin_level_4_japan_3.png" /> admin_level_4_japan'
            });

lyr_admin_level_4_japan_0.setVisible(true);lyr_admin_level_4_japan_1.setVisible(true);lyr_admin_level_4_japan_2.setVisible(true);lyr_admin_level_4_japan_3.setVisible(true);
var layersList = [lyr_admin_level_4_japan_0,lyr_admin_level_4_japan_1,lyr_admin_level_4_japan_2,lyr_admin_level_4_japan_3];
lyr_admin_level_4_japan_0.set('fieldAliases', {'name': 'name', 'name:en': 'name:en', 'name:ja': 'name:ja', 'admin_level': 'admin_level', 'osm_id': 'osm_id', 'full_id': 'full_id'});
lyr_admin_level_4_japan_1.set('fieldAliases', {'name': 'name', 'name:en': 'name:en', 'name:ja': 'name:ja', 'admin_level': 'admin_level', 'osm_id': 'osm_id', 'full_id': 'full_id'});
lyr_admin_level_4_japan_2.set('fieldAliases', {'name': 'name', 'name:en': 'name:en', 'name:ja': 'name:ja', 'admin_level': 'admin_level', 'osm_id': 'osm_id', 'full_id': 'full_id'});
lyr_admin_level_4_japan_3.set('fieldAliases', {'name': 'name', 'name:en': 'name:en', 'name:ja': 'name:ja', 'admin_level': 'admin_level', 'osm_id': 'osm_id', 'full_id': 'full_id'});
lyr_admin_level_4_japan_0.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'admin_level': '', 'operator:wikidata': '', 'official_name': '', 'addr:country': '', 'map_type': '', 'map_size': '', 'information': '', 'direction': '', 'contact:phone': '', 'addr:quarter': '', 'traffic_sign': '', 'description': '', 'waterway': '', 'alt_name:eo': '', 'land_area': '', 'alt_name:uk': '', 'maritime': '', 'sorting_name:ur': '', 'sorting_name:pnb': '', 'sorting_name:fa': '', 'sorting_name:ckb': '', 'sorting_name:azb': '', 'sorting_name:ar': '', 'name:kv': '', 'vehicle': '', 'motor_vehicle': '', 'material': '', 'locked': '', 'horse': '', 'foot': '', 'bicycle': '', 'access': '', 'alt_name:ar': '', 'junction': '', 'barrier': '', 'tourism': '', 'name:als': '', 'note:en': '', 'name:pnb': '', 'name:azb': '', 'int_name': '', 'addr:suburb': '', 'addr:province': '', 'addr:neighbourhood': '', 'addr:housenumber': '', 'addr:city': '', 'addr:block_number': '', 'operator': '', 'office': '', 'level': '', 'government': '', 'traffic_signals': '', 'ref': '', 'name:kr': '', 'KSJ2:filename': '', 'KSJ2:curve_id': '', 'noname': '', 'crossing:markings': '', 'crossing': '', 'name:zh-Latn-pinyin': '', 'name:hak': '', 'natural': '', 'survey_point:structure': '', 'survey_point:purpose': '', 'man_made': '', 'ele': '', 'addr:postcode': '', 'url': '', 'population:date': '', 'loc_name': '', 'contact:youtube': '', 'contact:twitter': '', 'contact:tripadvisor': '', 'contact:facebook': '', 'mountain_pass': '', 'name:zh-Hant-TW': '', 'name:zh-Hans-CN': '', 'note:ja': '', 'KSJ2:CN2': '', 'source_ref': '', 'source:ja': '', 'source:en': '', 'ISO3166-2': '', 'name:wa': '', 'name:ts': '', 'name:st': '', 'name:rn': '', 'name:ig': '', 'name:gu': '', 'layer': '', 'KSJ2:PRN': '', 'KSJ2:CON': '', 'sorting_name:cs': '', 'start_date': '', 'name:war': '', 'name:sh': '', 'name:roa-rup': '', 'name:mzn': '', 'wikidata_unofficial': '', 'rank': '', 'old_name:zh-Hant': '', 'old_name:zh-Hans': '', 'old_name:zh': '', 'old_name:vi': '', 'old_name:ja': '', 'old_name:fr': '', 'name:zu': '', 'name:za': '', 'name:yue': '', 'name:yo': '', 'name:yi': '', 'name:wuu': '', 'name:ty': '', 'name:to': '', 'name:te': '', 'name:szl': '', 'name:sq': '', 'name:so': '', 'name:sn': '', 'name:sm': '', 'name:sa': '', 'name:rw': '', 'name:rm': '', 'name:pap': '', 'name:or': '', 'name:nv': '', 'name:no': '', 'name:nan': '', 'name:lo': '', 'name:ln': '', 'name:li': '', 'name:kw': '', 'name:km': '', 'name:kab': '', 'name:ht': '', 'name:gn': '', 'name:dz': '', 'name:dv': '', 'name:cu': '', 'name:co': '', 'name:bo': '', 'name:bi': '', 'name:bh': '', 'name:ay': '', 'name:ast': '', 'name:as': '', 'name:ab': '', 'capital_ISO3166-1': '', 'alt_name:la': '', 'alt_name:hr': '', 'alt_name:be': '', 'wikipedia:en': '', 'highway': '', 'is_in:state': '', 'is_in:island': '', 'is_in:country_code': '', 'is_in:country': '', 'website': '', 'postal_code': '', 'name:zh-Hans': '', 'name:ain': '', 'capital': '', 'wikipedia': '', 'wikimedia_commons': '', 'wikidata': '', 'source:population': '', 'source:name:oc': '', 'population': '', 'place': '', 'old_name:ja-Latn': '', 'old_name:ja-Hira': '', 'old_name': '', 'name:zh-Hant': '', 'name:zh': '', 'name:wo': '', 'name:vo': '', 'name:vi': '', 'name:uz': '', 'name:ur': '', 'name:uk': '', 'name:ug': '', 'name:tw': '', 'name:tt': '', 'name:tr': '', 'name:tn': '', 'name:tl': '', 'name:tk': '', 'name:th': '', 'name:tg': '', 'name:ta': '', 'name:sw': '', 'name:sv': '', 'name:su': '', 'name:ss': '', 'name:sr': '', 'name:sl': '', 'name:sk': '', 'name:si': '', 'name:se': '', 'name:sd': '', 'name:sc': '', 'name:ru': '', 'name:ro': '', 'name:qu': '', 'name:pt': '', 'name:ps': '', 'name:pl': '', 'name:pa': '', 'name:os': '', 'name:oc': '', 'name:ny': '', 'name:nn': '', 'name:nl': '', 'name:ne': '', 'name:nb': '', 'name:my': '', 'name:mt': '', 'name:ms': '', 'name:mr': '', 'name:mn': '', 'name:ml': '', 'name:mk': '', 'name:mi': '', 'name:mg': '', 'name:lv': '', 'name:lt': '', 'name:lg': '', 'name:lb': '', 'name:la': '', 'name:ky': '', 'name:ku': '', 'name:ks': '', 'name:ko': '', 'name:kn': '', 'name:kk': '', 'name:ki': '', 'name:ka': '', 'name:jv': '', 'name:jbo': '', 'name:ja-Latn': '', 'name:ja-Hira': '', 'name:ja': '', 'name:iu': '', 'name:it': '', 'name:is': '', 'name:io': '', 'name:ik': '', 'name:ie': '', 'name:id': '', 'name:ia': '', 'name:hy': '', 'name:hu': '', 'name:hr': '', 'name:hi': '', 'name:he': '', 'name:ha': '', 'name:gl': '', 'name:gd': '', 'name:ga': '', 'name:fy': '', 'name:fr': '', 'name:fo': '', 'name:fj': '', 'name:fi': '', 'name:fa': '', 'name:eu': '', 'name:et': '', 'name:es': '', 'name:eo': '', 'name:en': '', 'name:el': '', 'name:ee': '', 'name:de': '', 'name:da': '', 'name:cy': '', 'name:cv': '', 'name:cs': '', 'name:cnr': '', 'name:ckb': '', 'name:ch': '', 'name:ce': '', 'name:ca': '', 'name:bs': '', 'name:br': '', 'name:bn': '', 'name:bm': '', 'name:bg': '', 'name:be': '', 'name:ba': '', 'name:az': '', 'name:ar': '', 'name:an': '', 'name:am': '', 'name:af': '', 'name': '', 'alt_name:zh': '', 'alt_name:en': '', 'alt_name': '', });
lyr_admin_level_4_japan_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'admin_level': '', 'tunnel': '', 'layer': '', 'natural': '', 'type': '', 'wikidata': '', 'is_in:country': '', 'note:en': '', 'name:es': '', 'bridge': '', 'river_system': '', 'service': '', 'name:pt': '', 'oneway': '', 'incline': '', 'maxspeed': '', 'motor_vehicle': '', 'bicycle': '', 'width': '', 'proposed:highway': '', 'note:yh:WIDTH': '', 'access': '', 'yh:WIDTH': '', 'start_date': '', 'name:ja-Latn': '', 'name:ja-Hira': '', 'KSJ2:filename': '', 'KSJ2:curve_id': '', 'waterway': '', 'name:ja_rm': '', 'name:ja': '', 'name:en': '', 'note:ja': '', 'source_ref': '', 'source:ja': '', 'source:en': '', 'maritime': '', 'boundary': '', 'surface': '', 'ref': '', 'name': '', 'lanes': '', 'lane_markings': '', 'highway': '', });
lyr_admin_level_4_japan_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'admin_level': '', 'type': '', 'route': '', 'ref': '', 'official_name:ja': '', 'official_name': '', 'name:ja': '', 'name': '', 'designation:ja': '', 'designation': '', });
lyr_admin_level_4_japan_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'admin_level': '', 'residential': '', 'operator:ownership': '', 'operation': '', 'landuse': '', 'developer:ownership': '', 'addr:quarter': '', 'government': '', 'addr:province': '', 'addr:postcode': '', 'addr:neighbourhood': '', 'addr:housenumber': '', 'addr:city': '', 'addr:block_number': '', 'operator': '', 'office': '', 'building': '', 'alt_name:fr': '', 'alt_name:en': '', 'end_date': '', 'alt_name:ja-Latn': '', 'historic:place': '', 'alt_name:ja-Hira': '', 'alt_name:eo': '', 'population:date': '', 'loc_name': '', 'contact:twitter': '', 'alt_name:ja': '', 'alt_name': '', 'name:lt': '', 'contact:youtube': '', 'contact:tripadvisor': '', 'contact:website': '', 'alt_name:zh-Hant': '', 'alt_name:zh-Hans': '', 'alt_name:zh': '', 'name:mn': '', 'name:kn': '', 'note:ja': '', 'alt_name:nl': '', 'phone': '', 'name:hak': '', 'name:ce': '', 'name:tl': '', 'name:tg': '', 'name:sw': '', 'name:sv': '', 'name:su': '', 'name:ro': '', 'name:ms': '', 'name:mr': '', 'name:lv': '', 'name:hy': '', 'name:he': '', 'name:ca': '', 'name:az': '', 'name:ta': '', 'name:km': '', 'name:ka': '', 'name:hu': '', 'name:ga': '', 'name:vi': '', 'short_name:ar': '', 'official_name:it': '', 'name:tr': '', 'name:szl': '', 'name:mi': '', 'name:la': '', 'name:io': '', 'name:ia': '', 'name:hr': '', 'name:br': '', 'name:be': '', 'alt_name:la': '', 'alt_name:hr': '', 'alt_name:be': '', 'sorting_name:ur': '', 'sorting_name:pnb': '', 'sorting_name:fa': '', 'sorting_name:ckb': '', 'sorting_name:azb': '', 'sorting_name:ar': '', 'name:ur': '', 'name:pnb': '', 'name:fa': '', 'name:ckb': '', 'name:sr': '', 'name:id': '', 'name:hi': '', 'name:bn': '', 'name:bg': '', 'name:azb': '', 'land_area': '', 'name:eo': '', 'source_ref': '', 'source:ja': '', 'source:en': '', 'population': '', 'name:zh-Latn-pinyin': '', 'name:zh-Hans': '', 'is_in:country_code': '', 'is_in:country': '', 'wikipedia': '', 'wikimedia_commons': '', 'wikidata': '', 'website': '', 'type': '', 'start_date': '', 'sorting_name:cs': '', 'ref': '', 'place': '', 'name:zh-Hant': '', 'name:zh': '', 'name:uk': '', 'name:th': '', 'name:sk': '', 'name:ru': '', 'name:pt': '', 'name:pl': '', 'name:nl': '', 'name:ko': '', 'name:ja-Latn': '', 'name:ja-Hira': '', 'name:ja': '', 'name:it': '', 'name:fr': '', 'name:fi': '', 'name:es': '', 'name:en': '', 'name:de': '', 'name:cs': '', 'name:cnr': '', 'name:ar': '', 'name': '', 'boundary': '', 'ISO3166-2': '', });
lyr_admin_level_4_japan_0.set('fieldLabels', {'name': 'inline label - visible with data', 'name:en': 'no label', 'name:ja': 'no label', 'admin_level': 'no label', 'osm_id': 'no label', 'full_id': 'no label'});
lyr_admin_level_4_japan_1.set('fieldLabels', {'name': 'inline label - visible with data', 'name:en': 'no label', 'name:ja': 'no label', 'admin_level': 'no label', 'osm_id': 'no label', 'full_id': 'no label'});
lyr_admin_level_4_japan_2.set('fieldLabels', {'name': 'inline label - visible with data', 'name:en': 'no label', 'name:ja': 'no label', 'admin_level': 'no label', 'osm_id': 'no label', 'full_id': 'no label'});
lyr_admin_level_4_japan_3.set('fieldLabels', {'name': 'inline label - visible with data', 'name:en': 'no label', 'name:ja': 'no label', 'admin_level': 'no label', 'osm_id': 'no label', 'full_id': 'no label'});
lyr_admin_level_4_japan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});