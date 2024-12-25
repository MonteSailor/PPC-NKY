var wms_layers = [];

var format_2563_0 = new ol.format.GeoJSON();
var features_2563_0 = format_2563_0.readFeatures(json_2563_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2563_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2563_0.addFeatures(features_2563_0);
var lyr_2563_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2563_0, 
                style: style_2563_0,
                popuplayertitle: 'คะแนนเลือกตั้งนายก 2563 รายตำบล',
                interactive: true,
    title: 'คะแนนเลือกตั้งนายก 2563 รายตำบล<br />\
    <img src="styles/legend/2563_0_0.png" /> 0.20 - 0.29<br />\
    <img src="styles/legend/2563_0_1.png" /> 0.29 - 0.38<br />\
    <img src="styles/legend/2563_0_2.png" /> 0.38 - 0.47<br />\
    <img src="styles/legend/2563_0_3.png" /> 0.47 - 0.56<br />\
    <img src="styles/legend/2563_0_4.png" /> 0.56 - 0.65<br />'
        });

lyr_2563_0.setVisible(true);
var layersList = [lyr_2563_0];
lyr_2563_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'P_CODE': 'P_CODE', 'A_CODE': 'A_CODE', 'T_CODE': 'T_CODE', 'P_NAME_T': 'ตำบล', 'P_NAME_E': 'P_NAME_E', 'A_NAME_T': 'อำเภอ', 'A_NAME_E': 'A_NAME_E', 'T_NAME_T': 'ตำบล', 'T_NAME_E': 'T_NAME_E', 'jim_%': 'jim_%', 'votes_tambon_votes_jim': 'นายกจิม', 'votes_tambon_vote_sitthicai': 'สิทธิชัย', 'votes_tambon_votes_marut': 'มารุต', 'votes_tambon_jim\'s_%': 'เปอร์เซ็นต์นายกจิม', });
lyr_2563_0.set('fieldImages', {'OBJECTID': 'Range', 'P_CODE': 'TextEdit', 'A_CODE': 'TextEdit', 'T_CODE': 'TextEdit', 'P_NAME_T': 'TextEdit', 'P_NAME_E': 'TextEdit', 'A_NAME_T': 'TextEdit', 'A_NAME_E': 'TextEdit', 'T_NAME_T': 'TextEdit', 'T_NAME_E': 'TextEdit', 'jim_%': 'TextEdit', 'votes_tambon_votes_jim': 'TextEdit', 'votes_tambon_vote_sitthicai': 'TextEdit', 'votes_tambon_votes_marut': 'TextEdit', 'votes_tambon_jim\'s_%': 'TextEdit', });
lyr_2563_0.set('fieldLabels', {'OBJECTID': 'hidden field', 'P_CODE': 'hidden field', 'A_CODE': 'hidden field', 'T_CODE': 'hidden field', 'P_NAME_T': 'hidden field', 'P_NAME_E': 'hidden field', 'A_NAME_T': 'inline label - visible with data', 'A_NAME_E': 'hidden field', 'T_NAME_T': 'inline label - visible with data', 'T_NAME_E': 'hidden field', 'jim_%': 'hidden field', 'votes_tambon_votes_jim': 'inline label - visible with data', 'votes_tambon_vote_sitthicai': 'inline label - visible with data', 'votes_tambon_votes_marut': 'inline label - visible with data', 'votes_tambon_jim\'s_%': 'header label - always visible', });
lyr_2563_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});