export function addVectorTileLayersMapbox(mapInstance, sourceFolder, outlineColour, fillColor) {
  // 1️⃣ Add the vector source
  if (!mapInstance.getSource("layer-vectors")) {
    mapInstance.addSource("layer-vectors", {
      type: "vector",
      tiles: [
        `${window.location.origin}/${sourceFolder}/{z}/{x}/{y}.pbf`,
      ],
      minzoom: 4,
      maxzoom: 10,
    });
  }

  // 2️⃣ Base fill layer
  if (!mapInstance.getLayer("layer-fill")) {
    mapInstance.addLayer({
      id: "layer-fill",
      type: "fill",
      source: "layer-vectors",
      "source-layer": "layer", // must match the layer name in your .pbf
      paint: {
        "fill-color": fillColor,
        "fill-opacity": 0.2,
      },
    });
  }

  // 3️⃣ Normal outline layer
  if (!mapInstance.getLayer("layer-layer-outline")) {
    mapInstance.addLayer({
      id: "layer-layer-outline",
      type: "line",
      source: "layer-vectors",
      "source-layer": "layer",
      paint: {
        "line-color": outlineColour,
        "line-opacity": 0.9,
        "line-width": 1.5,
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
    });
  }

  // 4️⃣ Hover outline layer (red)
  if (!mapInstance.getLayer("layer-outline-hover")) {
    mapInstance.addLayer({
      id: "layer-outline-hover",
      type: "line",
      source: "layer-vectors",
      "source-layer": "layer",
      paint: {
        "line-color": "#ff0000", // red
        "line-width": 2.5,
      },
      filter: ["==", ["get", "id"], ""], // initially nothing highlighted
    });
  }

  
}
