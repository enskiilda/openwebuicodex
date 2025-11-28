const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BobdjDLW.js","./OO7lCI-F.js","../assets/leaflet.DvTUgzRd.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./CQrtv1eE.js";
import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { p as push, o as onMount, b as get, m as mutable_source, ay as onDestroy, c as child, s as set, r as reset, a as pop } from "./BxIY6ir7.js";
import { f as from_html, a as append } from "./CAbo1QWi.js";
import { b as bind_this } from "./D16JuV5t.js";
import { i as init } from "./ByqEASoO.js";
import { p as prop } from "./BRmGPDvq.js";
var root = from_html(`<div class=" z-10 w-full"><div class="h-96 z-10"></div></div>`);
function MapSelector($$anchor, $$props) {
  push($$props, false);
  let map;
  let mapElement = mutable_source();
  let setViewLocation = prop($$props, "setViewLocation", 24, () => [51.505, -0.09]);
  let points = prop($$props, "points", 28, () => []);
  let onClick = prop($$props, "onClick", 8, (e) => {
  });
  let markerGroupLayer = null;
  onMount(async () => {
    const [{ default: L }] = await Promise.all([__vitePreload(() => import("./BobdjDLW.js").then((n) => n.l), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url), __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([2]) : void 0, import.meta.url)]);
    map = L.map(get(mapElement)).setView(setViewLocation() ? setViewLocation() : [51.505, -0.09], 10);
    if (setViewLocation()) {
      points([
        {
          coords: setViewLocation(),
          content: `Lat: ${setViewLocation()[0]}, Lng: ${setViewLocation()[1]}`
        }
      ]);
    }
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    const setMarkers = (points2) => {
      if (map) {
        if (markerGroupLayer) {
          map.removeLayer(markerGroupLayer);
        }
        let markers = [];
        for (let point of points2) {
          const marker = L.marker(point.coords).bindPopup(point.content);
          markers.push(marker);
        }
        markerGroupLayer = L.featureGroup(markers).addTo(map);
        try {
          map.fitBounds(markerGroupLayer.getBounds(), { maxZoom: Math.max(map.getZoom(), 13) });
        } catch (error) {
        }
      }
    };
    setMarkers(points());
    map.on("click", (e) => {
      console.log(e.latlng);
      onClick()(`${e.latlng.lat}, ${e.latlng.lng}`);
      setMarkers([
        {
          coords: [e.latlng.lat, e.latlng.lng],
          content: `Lat: ${e.latlng.lat}, Lng: ${e.latlng.lng}`
        }
      ]);
    });
  });
  onDestroy(async () => {
    if (map) {
      console.log("Unloading Leaflet map.");
      map.remove();
    }
  });
  init();
  var div = root();
  var div_1 = child(div);
  bind_this(div_1, ($$value) => set(mapElement, $$value), () => get(mapElement));
  reset(div);
  append($$anchor, div);
  pop();
}
export {
  MapSelector as M
};
