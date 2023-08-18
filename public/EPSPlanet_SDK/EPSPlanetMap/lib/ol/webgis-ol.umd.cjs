(function(n,f){typeof exports=="object"&&typeof module<"u"?f(exports,require("ol"),require("ol/proj/Projection"),require("ol/layer"),require("ol/source"),require("ol/format"),require("ol/style.js"),require("ol/control/defaults"),require("ol/style/Style"),require("ol/style/Text"),require("ol/control/Zoom"),require("ol-ext/control/LayerShop"),require("ol-ext/control/LayerSwitcher"),require("ol/events"),require("ol/control")):typeof define=="function"&&define.amd?define(["exports","ol","ol/proj/Projection","ol/layer","ol/source","ol/format","ol/style.js","ol/control/defaults","ol/style/Style","ol/style/Text","ol/control/Zoom","ol-ext/control/LayerShop","ol-ext/control/LayerSwitcher","ol/events","ol/control"],f):(n=typeof globalThis<"u"?globalThis:n||self,f(n["webgis-ol"]={},n.ol,n.ol.proj.Projection,n.ol.layer,n.ol.source,n.ol.format,n.ol.style,n.ol.control.defaults,n.ol.style.Style,n.ol.style.Text,n.ol.control.Zoom,n.ol.control.LayerShop,n.ol.control.LayerSwitcher,n.ol.events,n.ol.control))})(this,function(n,f,g,H,ye,ve,we,be,_e,Oe,Ce,$e,Se,Le,Pe){var E,O,q,te,P,j,T,I,x,M,V,A,C,B,se,z,ue,J,fe,N,Q,F,U,de,G,ie,K,me,R,re,X,pe,Y,ge,$,b,W,S,he;"use strict";var ee=(n,f,g)=>{if(!f.has(n))throw TypeError("Cannot "+g)};var l=(n,f,g)=>(ee(n,f,"read from private field"),g?g.call(n):f.get(n)),c=(n,f,g)=>{if(f.has(n))throw TypeError("Cannot add the same private member more than once");f instanceof WeakSet?f.add(n):f.set(n,g)},p=(n,f,g,H)=>(ee(n,f,"write to private field"),H?H.call(n,g):f.set(n,g),g);var u=(n,f,g)=>(ee(n,f,"access private method"),g);function Z(r){const s=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(r){for(const e in r)if(e!=="default"){const i=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(s,e,i.get?i:{enumerable:!0,get:()=>r[e]})}}return s.default=r,Object.freeze(s)}const y=Z(H),h=Z(ye),m=Z(ve),w=Z(we);class ne{constructor(s){const e=Object.assign({},s),i=new _e(e);return t=>{const o=i.getText();return o.setFeature&&o.setFeature(t),i}}}class oe extends Oe{constructor(e){super(e);c(this,q);c(this,E,void 0);c(this,O,void 0);p(this,O,e.text)}setFeature(e){p(this,E,e)}getText(){try{let e;return Array.isArray(l(this,O))?e=l(this,O).map(i=>u(this,q,te).call(this,i)):e=u(this,q,te).call(this,l(this,O)),e}catch(e){console.error(e);return}}}E=new WeakMap,O=new WeakMap,q=new WeakSet,te=function(e){return e.replace(/\{(.+?)\}/g,(...i)=>{var t;return(t=l(this,E))==null?void 0:t.get(i[1])})};const je={map:f.Map,view:f.View,projection:g,defaults:be.defaults,graticule:y.Graticule,group:y.Group,heatmap:y.Heatmap,image:y.Image,layer:y.Layer,mapboxvector:y.MapboxVector,tile:y.Tile,vector:y.Vector,vectorimage:y.VectorImage,vectortile:y.VectorTile,webglpoints:y.WebGLPoints,webgltile:y.WebGLTile,"bingmaps-source":h.BingMaps,"cartodb-source":h.CartoDB,"cluster-source":h.Cluster,"datatile-source":h.DataTile,"geotiff-source":h.GeoTIFF,"iiif-source":h.IIIF,"imagearcgisrest-source":h.ImageArcGISRest,"imagecanvas-source":h.ImageCanvas,"imagemapguide-source":h.ImageMapGuide,"imagestatic-source":h.ImageStatic,"imagewms-source":h.ImageWMS,"osm-source":h.OSM,"raster-source":h.Raster,"stamen-source":h.Stamen,"tilearcgisrest-source":h.TileArcGISRest,"tiledebug-source":h.TileDebug,"tileimage-source":h.TileImage,"tilejson-source":h.TileJSON,"tilewms-source":h.TileWMS,"urltile-source":h.UrlTile,"utfgrid-source":h.UTFGrid,"vector-source":h.Vector,"vectortile-source":h.VectorTile,"wmts-source":h.WMTS,"xyz-source":h.XYZ,"zoomify-source":h.Zoomify,esrijson:m.EsriJSON,geojson:m.GeoJSON,gml:m.GML,gpx:m.GPX,igc:m.IGC,iiifinfo:m.IIIFInfo,kml:m.KML,mvt:m.MVT,ows:m.OWS,polyline:m.Polyline,topojson:m.TopoJSON,wfs:m.WFS,wkb:m.WKB,wkt:m.WKT,wmscapabilities:m.WMSCapabilities,wmsgetfeatureinfo:m.WMSGetFeatureInfo,wmtscapabilities:m.WMTSCapabilities,circle:w.Circle,fill:w.Fill,icon:w.Icon,iconimage:w.IconImage,regularshape:w.RegularShape,stroke:w.Stroke,style:w.Style,text:w.Text,"style-fn":ne,"text-fn":oe},D=(r,s)=>{if(r===null||typeof r!="object")return r;const e=JSON.parse(JSON.stringify(r));try{if(Array.isArray(e)){for(let t=0;t<e.length;t++)e[t]=D(e[t]);return e}Object.keys(e).forEach(t=>{e[t]=D(e[t],t)}),s=e.type||s;const i=ae(s);if(!i)throw new Error(`Cannot find a constructor of type ${s}`);return new i(e)}catch(i){return console.error(i),e}},ae=r=>{if(r)return je[r.toLowerCase()]};var v=(r=>(r[r.none=0]="none",r[r.funOnly=1]="funOnly",r[r.propOnly=2]="propOnly",r[r.always=3]="always",r))(v||{});const _=r=>s=>(s.prototype._manifest=Te(r),customElements.define(r.tagName,s),s),Te=r=>(r=Object.assign({hasConfig:!1,mode:v.always},r),r),le=r=>{Promise?Promise.resolve().then(r):requestAnimationFrame?requestAnimationFrame(r):setTimeout(r,0)};class L extends HTMLElement{constructor(){super();c(this,B);c(this,z);c(this,J);c(this,N);c(this,U);c(this,G);c(this,K);c(this,R);c(this,X);c(this,Y);c(this,b);c(this,P,void 0);c(this,j,void 0);c(this,T,void 0);c(this,I,void 0);c(this,x,void 0);c(this,M,void 0);c(this,V,"w-l");c(this,A,!1);c(this,C,void 0);c(this,F,!1);c(this,$,"unInited");this.manifest.hasConfig&&u(this,B,se).call(this,this.getAttribute("config")||this.getAttribute("configUrl")),p(this,C,this.manifest.mode??v.always),le(()=>{u(this,J,fe).call(this),u(this,b,W).call(this)})}startup(e){this.mapView=e.mapView,this.map=e.map,this.mapConfig=e.mapConfig,this.config=e.config}get manifest(){return this._manifest}get mapConfig(){return l(this,P)}set mapConfig(e){!l(this,P)&&e&&(p(this,P,e),u(this,b,W).call(this))}get mapView(){return l(this,j)}set mapView(e){!l(this,j)&&e&&(p(this,j,e),u(this,b,W).call(this))}get map(){return l(this,T)}set map(e){!l(this,T)&&e&&(p(this,T,e),u(this,b,W).call(this))}get config(){return l(this,I)}set config(e){if(typeof e=="string"){u(this,B,se).call(this,e);return}else typeof e=="object"&&!l(this,I)&&e&&(p(this,I,e),u(this,b,W).call(this))}get loading(){return!!l(this,x)}set loading(e){p(this,x,e),u(this,z,ue).call(this)}get $data(){return l(this,M)}set $data(e){(l(this,C)&v.propOnly)==v.propOnly?(p(this,M,u(this,N,Q).call(this,e)),u(this,G,ie).call(this)):p(this,M,e)}isReady(){return!!(this.map&&this.mapView&&this.mapConfig&&(this.config||!this.manifest.hasConfig))}async onInit(){}afterInit(){}onOpen(){}onClose(){}}P=new WeakMap,j=new WeakMap,T=new WeakMap,I=new WeakMap,x=new WeakMap,M=new WeakMap,V=new WeakMap,A=new WeakMap,C=new WeakMap,B=new WeakSet,se=async function(e){if(!this.config&&e){this.loading=!0;const i=await fetch(e);this.config=i&&i.ok&&await i.json()||{},this.loading=!1}},z=new WeakSet,ue=function(){this.loading?this.classList.add("loading"):this.classList.remove("loading")},J=new WeakSet,fe=function(){const e=this.manifest.className||this.manifest.tagName;if(this.classList.add(e),this.manifest.template){let i=this.manifest.template;(l(this,C)&v.propOnly)==v.propOnly&&(i=i.replace(/\{\{(.+?)\}\}/g,(...t)=>`<${l(this,V)}>${t[1]}</${l(this,V)}>`)),this.innerHTML=i,(l(this,C)&v.funOnly)==v.funOnly&&u(this,Y,ge).call(this)}p(this,A,!0)},N=new WeakSet,Q=function(e){return typeof e=="object"?(Object.keys(e).forEach(i=>{e[i]=u(this,N,Q).call(this,e[i])}),new Proxy(e,{set:(i,t,o)=>(i[t]=u(this,N,Q).call(this,o),u(this,U,de).call(this),!0)})):e},F=new WeakMap,U=new WeakSet,de=function(){l(this,F)||(p(this,F,!0),le(()=>{u(this,G,ie).call(this),p(this,F,!1)}))},G=new WeakSet,ie=function(){["s-value","s-src"].forEach(t=>{u(this,K,me).call(this,t)}),this.querySelectorAll(l(this,V)).forEach(t=>{const o=u(this,R,re).call(this,t.origin);String(o)!==t.innerHTML&&(t.innerHTML=o)})},K=new WeakSet,me=function(e){this.querySelectorAll(`[${e}]`).forEach(t=>{const o=t.getAttribute(e),a=e.replace("s-",""),d=u(this,R,re).call(this,o);d!==t[a]&&(t[a]=d)})},R=new WeakSet,re=function(e){try{return e.split(".").reduce((i,t)=>i[t],this.$data)}catch(i){console.error(i);return}},X=new WeakSet,pe=function(e,i){let t=this.$data,o=e.split(".");for(let a=0;a<o.length;a++){const d=o[a];a==o.length-1?t[d]=i:t=t[d]}},Y=new WeakSet,ge=function(){this.querySelectorAll("*").forEach(i=>{i.$this||(i.$this=this,i.$set=(t,o)=>{u(this,X,pe).call(this,t,o)})})},$=new WeakMap,b=new WeakSet,W=async function(){l(this,A)&&(l(this,$)==="initing"||l(this,$)==="inited"||this.isReady()&&(p(this,$,"initing"),this.loading=!0,await this.onInit(),this.loading=!1,p(this,$,"inited"),this.afterInit()))};class ce extends L{constructor(){super()}isReady(){return!!this.config}afterInit(){this.mapConfig=this.config,this.mapView=this;const s=this.mapConfig.widgetManager||"webgis-widget-manager",e=document.createElement(s);e.startup({mapView:this,map:this.map,config:this.mapConfig.widgets,mapConfig:this.mapConfig}),this.childNodes[0]?this.insertBefore(e,this.childNodes[0]):this.appendChild(e)}}const tt="";var Ie=Object.defineProperty,Me=Object.getOwnPropertyDescriptor,Ve=(r,s,e,i)=>{for(var t=i>1?void 0:i?Me(s,e):s,o=r.length-1,a;o>=0;o--)(a=r[o])&&(t=(i?a(s,e,t):a(t))||t);return i&&t&&Ie(s,e,t),t};n.MapView=class extends ce{constructor(){super()}async onInit(){const s=D(this.config.map,"map");s.setTarget(this),this.map=s}},n.MapView=Ve([_({tagName:"ol-map",className:"ol-map",hasConfig:!0})],n.MapView);const st="";var Ne=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,We=(r,s,e,i)=>{for(var t=i>1?void 0:i?Fe(s,e):s,o=r.length-1,a;o>=0;o--)(a=r[o])&&(t=(i?a(s,e,t):a(t))||t);return i&&t&&Ne(s,e,t),t};n.ZoomWidget=class extends L{constructor(){super()}async onInit(){let s=new Ce({target:this});this.map.addControl(s)}},n.ZoomWidget=We([_({tagName:"ol-zoom-widget",className:"ol-zoom-widget"})],n.ZoomWidget);const it="";var De=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,qe=(r,s,e,i)=>{for(var t=i>1?void 0:i?Ee(s,e):s,o=r.length-1,a;o>=0;o--)(a=r[o])&&(t=(i?a(s,e,t):a(t))||t);return i&&t&&De(s,e,t),t};n.LayerList=(he=class extends L{constructor(){super();c(this,S,[])}async onInit(){let e=new $e({target:this,noScroll:!0,collapsed:!1,trash:!1,extent:!0,show_progress:!1,displayInLayerSwitcher:i=>i.values_.listMode!=="hide"});e.on("drawlist",i=>{const t=i.li,o=t.getElementsByClassName("ol-layerswitcher-buttons")[0],a=t.getElementsByClassName("layerswitcher-opacity")[0];let d=document.createElement("div");d.title="透明度",d.innerHTML="%";const k=i.layer;a.style.display=l(this,S).includes(k.ol_uid)?"block":"none",d.onclick=()=>{a.style.display==="block"?(a.style.display="none",p(this,S,l(this,S).filter(et=>et!==k.ol_uid))):(a.style.display="block",l(this,S).push(k.ol_uid))},o.appendChild(d)}),this.map.addControl(e)}},S=new WeakMap,he),n.LayerList=qe([_({tagName:"ol-layer-list",className:"ol-layer-list"})],n.LayerList);const rt="";var xe=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,Be=(r,s,e,i)=>{for(var t=i>1?void 0:i?Ae(s,e):s,o=r.length-1,a;o>=0;o--)(a=r[o])&&(t=(i?a(s,e,t):a(t))||t);return i&&t&&xe(s,e,t),t};n.BasemapList=class extends L{constructor(){super()}async onInit(){let s=new Ge({target:this});this.map.addControl(s)}},n.BasemapList=Be([_({tagName:"ol-basemap-list",className:"ol-basemap-list"})],n.BasemapList);class Ge extends Se{constructor(s){s=s||{},s.switcherClass=((s.switcherClass||"")+" ol-layerswitcher-image").trim(),s.mouseover=s.mouseover!==!1,super(s)}drawList(s,e){s.style.height="auto",e.array_.filter(t=>t.values_.isBasemap).forEach(t=>{if(this.displayInLayerSwitcher(t)){let o=document.createElement("img");o.src=t.values_.thumbnail||"images/thumbnail.png";let a=document.createElement("p");a.innerHTML=t.get("title")||t.get("name");let d=document.createElement("li");d.className="ol-imgcontainer"+(t.getVisible()?" ol-visible":""),d.appendChild(o),d.appendChild(a),d.onclick=()=>{this.switchLayerVisibility(t,e)},this._setLayerForLI(d,t),this.testLayerVisibility(t)||d.classList.add("ol-layer-hidden"),s.appendChild(d)}})}overflow(){}}const nt="",Re="<div>{{coordinate}} 比例尺 {{scale}}</div>";var He=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,ze=(r,s,e,i)=>{for(var t=i>1?void 0:i?Ze(s,e):s,o=r.length-1,a;o>=0;o--)(a=r[o])&&(t=(i?a(s,e,t):a(t))||t);return i&&t&&He(s,e,t),t};n.Coordinate=class extends L{constructor(){super()}async onInit(){this.$data={coordinate:"",scale:""};const s=this.map.getViewport();Le.listen(s,"pointermove",this.handleMouseMove,this),this.map.on("moveend",this.moveEnd.bind(this))}handleMouseMove(s){const e=this.map.getEventPixel(s),i=this.map.getCoordinateFromPixelInternal(e);i&&(this.$data.coordinate=`${i[0].toFixed(3)} ${i[1].toFixed(3)}`)}moveEnd(){const s=this.getScale();(s??!1)&&(this.$data.scale=`1:${s.toLocaleString()}`)}getScale(){const s=this.map.getView(),e=25.4/.28,i=1e3/25.4;var t=1;return s.getProjection().getUnits()!="metric"?t=s.getResolution()*s.getProjection().getMetersPerUnit()*i*e:t=s.getResolution()*i*e,Math.round(t)}},n.Coordinate=ze([_({tagName:"ol-coordinate",className:"ol-coordinate",template:Re})],n.Coordinate);const ot="",Je=`<fieldset>\r
    <legend>\r
        数据解析\r
    </legend>\r
    <div>\r
        <button onclick="$this.add(event)">测试加一</button>\r
        结果：{{a}}\r
    </div>\r
\r
    <div>\r
        <button onclick="$this.changeName(event)">测试人名</button>\r
        你是：{{b}}\r
    </div>\r
\r
\r
    <div>\r
        <button onclick="$this.changeValue(event)">测试多重属性</button>\r
        c.d.e : {{c.d.e}}\r
    </div>\r
\r
\r
    <div>\r
        <button onclick="$this.changeArr(event)">测试数组</button>\r
        数组长度：{{f.length}}\r
    </div>\r
</fieldset>\r
\r
\r
<fieldset>\r
    <legend>\r
        事件数据绑定\r
    </legend>\r
    <div>\r
        <input oninput="$this.$data.aa=value">\r
        <br>\r
        结果：{{aa}}\r
    </div>\r
</fieldset>\r
\r
<fieldset>\r
    <legend>\r
        属性绑定 + 直接赋值\r
    </legend>\r
    <div>\r
        <input s-value="bb" oninput="$this.$data.bb=value">\r
        <br>\r
        结果：{{bb}}\r
    </div>\r
</fieldset>\r
\r
<fieldset>\r
    <legend>\r
        属性绑定 + 绑定赋值\r
    </legend>\r
    <div>\r
        <input s-value="cc" oninput="$set('cc',value)">\r
        <!-- <input s-value="cc" oninput="console.log(this)"> -->\r
        <br>\r
        结果：{{cc}}\r
    </div>\r
</fieldset>`;var Ue=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,Xe=(r,s,e,i)=>{for(var t=i>1?void 0:i?Ke(s,e):s,o=r.length-1,a;o>=0;o--)(a=r[o])&&(t=(i?a(s,e,t):a(t))||t);return i&&t&&Ue(s,e,t),t};n.HelloWorld=class extends L{constructor(){super()}async onInit(){this.$data={a:1,b:"张三",c:{d:{e:1}},f:[1],aa:"123",bb:"start",cc:"121"}}hello(s){console.log(s),this.$data.c.d="和了了了了了了"}changeName(){this.$data.b=this.$data.b=="张三"?"李四":"张三"}changeValue(){this.$data.c.d={e:this.$data.c.d.e+1}}changeArr(){this.$data.f.push(1)}add(){this.$data.a++}kill(){return"hello"}},n.HelloWorld=Xe([_({tagName:"ol-hello-world",className:"ol-hello-world",template:Je})],n.HelloWorld);const at="";var Ye=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,ke=(r,s,e,i)=>{for(var t=i>1?void 0:i?Qe(s,e):s,o=r.length-1,a;o>=0;o--)(a=r[o])&&(t=(i?a(s,e,t):a(t))||t);return i&&t&&Ye(s,e,t),t};n.MapViewTest=class extends ce{constructor(){super()}async onInit(){const s=D(this.config.map,"map");s.setTarget(this),s.addControl(new Pe.MousePosition),this.map=s}},n.MapViewTest=ke([_({tagName:"ol-map-test",className:"ol-map-test",hasConfig:!0})],n.MapViewTest),n.StyleFn=ne,n.TextFn=oe,n.getConstructor=ae,n.getObject=D,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=webgis-ol.umd.cjs.map
