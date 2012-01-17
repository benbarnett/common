#target photoshop

var sizes = {
	'xlarge': [1490, 730],
	'large': [1160, 568],
	'medium': [890, 436],
	'small': [760, 372]
};

function main() {
    if (!documents.length) return;
    var doc = activeDocument;
    var oldPath = activeDocument.path;

	processLayers(oldPath + "/output/%%SIZE%%/", doc);

    for (var a = 0; a < doc.layerSets.length; a++) {	
		var layerSet = doc.layerSets[a];
		var filename = oldPath + "/output/%%SIZE%%/" + layerSet.name;
		
		
		processLayers(filename, layerSet);
		
		// check if we have sub-groups (only recurse once)
		for (var n=0; n < layerSet.layerSets.length; n++) {
			var subLayerSet = layerSet.layerSets[n];
			
			processLayers(filename + "_" + subLayerSet.name, subLayerSet);
		};
    };
};


main();


function makeSafe(filename) {
	return filename.replace(/ /g, '_');
}

function processLayers(filename, layerSet, isSubSet) {
	for (var i=0; i < layerSet.layers.length; i++) {
		var layer = layerSet.layers[i];
		
		if (layer.layers) continue;
		
		// set to active layer
		activeDocument.activeLayer = layerSet.layers.getByName(layer.name);
		
		// duplicate to standalone document
		duplicateLayer();
		
		// save to standalone file with gen'd filename and run off resizes
		for (var size in sizes) {
			// resize
			if (size == 'xlarge') {
				// crop xlarge version
				activeDocument.resizeCanvas(sizes[size][0],sizes[size][1]);
			}
			else {
				// scale down (nearest neighbour)
				activeDocument.resizeImage(sizes[size][0],sizes[size][1], activeDocument.resolution, ResampleMethod.BICUBIC);
			}
			
			var saveFile = File(filename.replace(/%%SIZE%%/ig, size) + "_" + makeSafe(layer.name) + ".png");
	        SavePNG(saveFile);
		}
        

		// close temporary doc
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
	};
};


function duplicateLayer() {
    var amActionDesc = new ActionDescriptor();
    var amActionRef = new ActionReference();
    amActionRef.putClass(charIDToTypeID('Dcmn'));
    amActionDesc.putReference(charIDToTypeID('null'), amActionRef);
    amActionDesc.putString(charIDToTypeID('Nm  '), activeDocument.activeLayer.name);
    var amActionRefDup = new ActionReference();
    amActionRefDup.putEnumerated(charIDToTypeID('Lyr '), charIDToTypeID('Ordn'), charIDToTypeID('Trgt'));
    amActionDesc.putReference(charIDToTypeID('Usng'), amActionRefDup);
    executeAction(charIDToTypeID('Mk  '), amActionDesc, DialogModes.NO);
};

function SavePNG(saveFile) {
    pngSaveOptions = new PNGSaveOptions();
    pngSaveOptions.embedColorProfile = true;
    pngSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
    pngSaveOptions.matte = MatteType.NONE;
    pngSaveOptions.PNG8 = false;
    pngSaveOptions.transparency = true;
    activeDocument.saveAs(saveFile, pngSaveOptions, true, Extension.LOWERCASE);
}