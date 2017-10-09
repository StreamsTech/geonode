!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.osmtogeojson=e()}}(function(){return function e(n,t,r){function o(i,s){if(!t[i]){if(!n[i]){var l="function"==typeof require&&require;if(!s&&l)return l(i,!0);if(a)return a(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var c=t[i]={exports:{}};n[i][0].call(c.exports,function(e){var t=n[i][1][e];return o(t?t:e)},c,c.exports,e,n,t,r)}return t[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,n,t){var r=e("./lodash.custom.js"),o=e("geojson-rewind"),a={};e("osm-polygon-features").forEach(function(e){if("all"===e.polygon)a[e.key]=!0;else{var n="whitelist"===e.polygon?"included_values":"excluded_values",t={};e.values.forEach(function(e){t[e]=!0}),a[e.key]={},a[e.key][n]=t}});var i={};i=function(e,n){function t(e){function n(e){var n=r.clone(e);n.lat=e.center.lat,n.lon=e.center.lon,n.__is_center_placeholder=!0,i.push(n)}function t(e){function n(e,n,r){var o={type:"node",id:"_"+t.type+"/"+t.id+"bounds"+r,lat:e,lon:n};t.nodes.push(o.id),i.push(o)}var t=r.clone(e);t.nodes=[],n(t.bounds.minlat,t.bounds.minlon,1),n(t.bounds.maxlat,t.bounds.minlon,2),n(t.bounds.maxlat,t.bounds.maxlon,3),n(t.bounds.minlat,t.bounds.maxlon,4),t.nodes.push(t.nodes[0]),t.__is_bounds_placeholder=!0,l.push(t)}function o(e){function n(e,n,t){var r={type:"node",id:t,lat:e,lon:n,__is_uninteresting:!0};i.push(r)}r.isArray(e.nodes)||(e.nodes=e.geometry.map(function(e){return null!==e?"_anonymous@"+e.lat+"/"+e.lon:"_anonymous@unknown_location"})),e.geometry.forEach(function(t,r){t&&n(t.lat,t.lon,e.nodes[r])})}function a(e){function n(e,n,t){var r={type:"node",id:t,lat:e,lon:n};i.push(r)}function t(e,n){function t(e,n){var t={type:"node",id:"_anonymous@"+e+"/"+n,lat:e,lon:n,__is_uninteresting:!0};r.nodes.push(t.id),i.push(t)}if(!l.some(function(e){return"way"==e.type&&e.id==n})){var r={type:"way",id:n,nodes:[]};e.forEach(function(e){e?t(e.lat,e.lon):r.nodes.push(void 0)}),l.push(r)}}e.members.forEach(function(e,r){"node"==e.type?e.lat&&n(e.lat,e.lon,e.ref):"way"==e.type&&e.geometry&&(e.ref="_fullGeom"+e.ref,t(e.geometry,e.ref))})}for(var i=new Array,l=new Array,u=new Array,c=0;c<e.elements.length;c++)switch(e.elements[c].type){case"node":var f=e.elements[c];i.push(f);break;case"way":var p=r.clone(e.elements[c]);p.nodes=r.clone(p.nodes),l.push(p),p.center&&n(p),p.geometry?o(p):p.bounds&&t(p);break;case"relation":var g=r.clone(e.elements[c]);g.members=r.clone(g.members),u.push(g);var y=g.members&&g.members.some(function(e){return"node"==e.type&&e.lat||"way"==e.type&&e.geometry&&e.geometry.length>0});g.center&&n(g),y?a(g):g.bounds&&t(g)}return s(i,l,u)}function i(e){function n(e,n,t){e.hasAttribute(t)&&(n[t]=e.getAttribute(t))}function t(e,t){var o=r.clone(e);n(t,o,"lat"),n(t,o,"lon"),o.__is_center_placeholder=!0,l.push(o)}function o(e,n){function t(e,n,t){var r={type:"node",id:"_"+o.type+"/"+o.id+"bounds"+t,lat:e,lon:n};o.nodes.push(r.id),l.push(r)}var o=r.clone(e);o.nodes=[],t(n.getAttribute("minlat"),n.getAttribute("minlon"),1),t(n.getAttribute("maxlat"),n.getAttribute("minlon"),2),t(n.getAttribute("maxlat"),n.getAttribute("maxlon"),3),t(n.getAttribute("minlat"),n.getAttribute("maxlon"),4),o.nodes.push(o.nodes[0]),o.__is_bounds_placeholder=!0,u.push(o)}function a(e,n){function t(e,n,t){var r={type:"node",id:t,lat:e,lon:n,__is_uninteresting:!0};return l.push(r),r.id}r.isArray(e.nodes)||(e.nodes=[],r.each(n,function(n,t){e.nodes.push("_anonymous@"+n.getAttribute("lat")+"/"+n.getAttribute("lon"))})),r.each(n,function(n,r){n.getAttribute("lat")&&t(n.getAttribute("lat"),n.getAttribute("lon"),e.nodes[r])})}function i(e,n){function t(e,n,t){var r={type:"node",id:t,lat:e,lon:n};l.push(r)}function o(e,n){function t(e,n){var t={type:"node",id:"_anonymous@"+e+"/"+n,lat:e,lon:n,__is_uninteresting:!0};o.nodes.push(t.id),l.push(t)}if(!u.some(function(e){return"way"==e.type&&e.id==n})){var o={type:"way",id:n,nodes:[]};r.each(e,function(e){e.getAttribute("lat")?t(e.getAttribute("lat"),e.getAttribute("lon")):o.nodes.push(void 0)}),u.push(o)}}r.each(n,function(n,r){"node"==e.members[r].type?n.getAttribute("lat")&&t(n.getAttribute("lat"),n.getAttribute("lon"),e.members[r].ref):"way"==e.members[r].type&&n.getElementsByTagName("nd").length>0&&(e.members[r].ref="_fullGeom"+e.members[r].ref,o(n.getElementsByTagName("nd"),e.members[r].ref))})}var l=new Array,u=new Array,c=new Array;r.each(e.getElementsByTagName("node"),function(e,t){var o={};r.each(e.getElementsByTagName("tag"),function(e){o[e.getAttribute("k")]=e.getAttribute("v")});var a={type:"node"};n(e,a,"id"),n(e,a,"lat"),n(e,a,"lon"),n(e,a,"version"),n(e,a,"timestamp"),n(e,a,"changeset"),n(e,a,"uid"),n(e,a,"user"),r.isEmpty(o)||(a.tags=o),l.push(a)});var f,p;return r.each(e.getElementsByTagName("way"),function(e,i){var s={},l=[];r.each(e.getElementsByTagName("tag"),function(e){s[e.getAttribute("k")]=e.getAttribute("v")});var c=!1;r.each(e.getElementsByTagName("nd"),function(e,n){var t;(t=e.getAttribute("ref"))&&(l[n]=t),!c&&e.getAttribute("lat")&&(c=!0)});var g={type:"way"};n(e,g,"id"),n(e,g,"version"),n(e,g,"timestamp"),n(e,g,"changeset"),n(e,g,"uid"),n(e,g,"user"),l.length>0&&(g.nodes=l),r.isEmpty(s)||(g.tags=s),(f=e.getElementsByTagName("center")[0])&&t(g,f),c?a(g,e.getElementsByTagName("nd")):(p=e.getElementsByTagName("bounds")[0])&&o(g,p),u.push(g)}),r.each(e.getElementsByTagName("relation"),function(e,a){var s={},l=[];r.each(e.getElementsByTagName("tag"),function(e){s[e.getAttribute("k")]=e.getAttribute("v")});var u=!1;r.each(e.getElementsByTagName("member"),function(e,t){l[t]={},n(e,l[t],"ref"),n(e,l[t],"role"),n(e,l[t],"type"),(!u&&"node"==l[t].type&&e.getAttribute("lat")||"way"==l[t].type&&e.getElementsByTagName("nd").length>0)&&(u=!0)});var g={type:"relation"};n(e,g,"id"),n(e,g,"version"),n(e,g,"timestamp"),n(e,g,"changeset"),n(e,g,"uid"),n(e,g,"user"),l.length>0&&(g.members=l),r.isEmpty(s)||(g.tags=s),(f=e.getElementsByTagName("center")[0])&&t(g,f),u?i(g,e.getElementsByTagName("member")):(p=e.getElementsByTagName("bounds")[0])&&o(g,p),c.push(g)}),s(l,u,c)}function s(e,t,a){function i(e,t){if("object"!=typeof t&&(t={}),"function"==typeof n.uninterestingTags)return!n.uninterestingTags(e,t);for(var r in e)if(n.uninterestingTags[r]!==!0&&t[r]!==!0&&t[r]!==e[r])return!0;return!1}function s(e){var n={timestamp:e.timestamp,version:e.version,changeset:e.changeset,user:e.user,uid:e.uid};for(var t in n)void 0===n[t]&&delete n[t];return n}function u(e,t){function o(e){for(var t,r,o,a,i,s,l=function(e){return e[0]},f=function(e){return e[e.length-1]},p=[];e.length;)for(t=e.pop().nodes.slice(),p.push(t);e.length&&l(t)!==f(t);){for(r=l(t),o=f(t),a=0;a<e.length;a++){if(s=e[a].nodes,o===l(s)){i=t.push,s=s.slice(1);break}if(o===f(s)){i=t.push,s=s.slice(0,-1).reverse();break}if(r==f(s)){i=t.unshift,s=s.slice(0,-1);break}if(r==l(s)){i=t.unshift,s=s.slice(1).reverse();break}s=i=null}if(!s){n.verbose&&console.warn("Multipolygon",u+"/"+c,"contains unclosed ring geometry");break}e.splice(a,1),i.apply(t,s)}return p}function a(e){var n,t,r=function(e,n){for(var t=0;t<n.length;t++)if(a(n[t],e))return!0;return!1},o=function(e){return e.map(function(e){return[+e.lat,+e.lon]})},a=function(e,n){for(var t=e[0],r=e[1],o=!1,a=0,i=n.length-1;a<n.length;i=a++){var s=n[a][0],l=n[a][1],u=n[i][0],c=n[i][1],f=l>r!=c>r&&(u-s)*(r-l)/(c-l)+s>t;f&&(o=!o)}return o};for(e=o(e),n=0;n<f.length;n++)if(t=o(f[n]),r(t,e))return n}var i,l=!1,u=O?"way":"relation",c="number"==typeof e.id?e.id:+e.id.replace("_fullGeom","");i=t.members.filter(function(e){return"way"===e.type}),i=i.map(function(e){var t=y[e.ref];return void 0===t?(n.verbose&&console.warn("Multipolygon",u+"/"+c,"tainted by a missing way",e.type+"/"+e.ref),void(l=!0)):{id:e.ref,role:e.role||"outer",way:t,nodes:t.nodes.filter(function(t){return void 0!==t?!0:(l=!0,n.verbose&&console.warn("Multipolygon",u+"/"+c,"tainted by a way",e.type+"/"+e.ref,"with a missing node"),!1)})}}),i=r.compact(i);var f,p;f=o(i.filter(function(e){return"outer"===e.role})),p=o(i.filter(function(e){return"inner"===e.role}));var g;g=f.map(function(e){return[e]});for(var d=0;d<p.length;d++){var m=a(p[d]);void 0!==m?g[m].push(p[d]):n.verbose&&console.warn("Multipolygon",u+"/"+c,"contains an inner ring with no containing outer")}var b=[];if(b=r.compact(g.map(function(e){var t=r.compact(e.map(function(e){return e.length<4?void(n.verbose&&console.warn("Multipolygon",u+"/"+c,"contains a ring with less than four nodes")):r.compact(e.map(function(e){return[+e.lon,+e.lat]}))}));return 0==t.length?void(n.verbose&&console.warn("Multipolygon",u+"/"+c,"contains an empty ring cluster")):t})),0==b.length)return n.verbose&&console.warn("Multipolygon",u+"/"+c,"contains no coordinates"),!1;var v="MultiPolygon";1===b.length&&(v="Polygon",b=b[0]);var w={type:"Feature",id:e.type+"/"+c,properties:{type:e.type,id:c,tags:e.tags||{},relations:h[e.type][e.id]||[],meta:s(e)},geometry:{type:v,coordinates:b}};return l&&(n.verbose&&console.warn("Multipolygon",u+"/"+c,"is tainted"),w.properties.tainted=!0),w}for(var c=new Object,f=0;f<e.length;f++)void 0!==e[f].lat?c[e[f].id]=e[f]:n.verbose&&console.warn("Node",e[f].type+"/"+e[f].id,"ignored because it has no coordinates");for(var p=new Object,f=0;f<e.length;f++)"undefined"!=typeof e[f].tags&&i(e[f].tags)&&(p[e[f].id]=!0);for(var f=0;f<a.length;f++)if(r.isArray(a[f].members))for(var g=0;g<a[f].members.length;g++)"node"==a[f].members[g].type&&(p[a[f].members[g].ref]=!0);else n.verbose&&console.warn("Relation",a[f].type+"/"+a[f].id,"ignored because it has no members");for(var y=new Object,d=new Object,f=0;f<t.length;f++)if(r.isArray(t[f].nodes)){y[t[f].id]=t[f];for(var g=0;g<t[f].nodes.length;g++)d[t[f].nodes[g]]=!0,t[f].nodes[g]=c[t[f].nodes[g]]}else n.verbose&&console.warn("Way",t[f].type+"/"+t[f].id,"ignored because it has no nodes");for(var m=new Array,f=0;f<e.length;f++)d[e[f].id]&&!p[e[f].id]||e[f].__is_uninteresting||m.push(e[f]);for(var b=new Array,f=0;f<a.length;f++)r.isArray(a[f].members)?b[a[f].id]=a[f]:n.verbose&&console.warn("Relation",a[f].type+"/"+a[f].id,"ignored because it has no members");for(var h={node:{},way:{},relation:{}},f=0;f<a.length;f++)if(r.isArray(a[f].members))for(var g=0;g<a[f].members.length;g++){var v;switch(a[f].members[g].type){case"node":v=c[a[f].members[g].ref];break;case"way":v=y[a[f].members[g].ref];break;case"relation":v=b[a[f].members[g].ref]}if(v){var w=a[f].members[g].type,_=a[f].members[g].ref;"undefined"==typeof h[w][_]&&(h[w][_]=[]),h[w][_].push({role:a[f].members[g].role,rel:a[f].id,reltags:a[f].tags})}else n.verbose&&console.warn("Relation",a[f].type+"/"+a[f].id,"member",a[f].members[g].type+"/"+a[f].members[g].id,"ignored because it has an invalid type")}else n.verbose&&console.warn("Relation",a[f].type+"/"+a[f].id,"ignored because it has no members");var x,k={type:"FeatureCollection",features:new Array};for(f=0;f<m.length;f++)if("undefined"!=typeof m[f].lon&&"undefined"!=typeof m[f].lat){var A={type:"Feature",id:m[f].type+"/"+m[f].id,properties:{type:m[f].type,id:m[f].id,tags:m[f].tags||{},relations:h.node[m[f].id]||[],meta:s(m[f])},geometry:{type:"Point",coordinates:[+m[f].lon,+m[f].lat]}};m[f].__is_center_placeholder&&(A.properties.geometry="center"),k.features.push(A)}else n.verbose&&console.warn("POI",m[f].type+"/"+m[f].id,"ignored because it lacks coordinates");for(var j={type:"FeatureCollection",features:new Array},E={type:"FeatureCollection",features:new Array},f=0;f<a.length;f++)if("undefined"!=typeof a[f].tags&&("multipolygon"==a[f].tags.type||"boundary"==a[f].tags.type)){if(!r.isArray(a[f].members)){n.verbose&&console.warn("Multipolygon",a[f].type+"/"+a[f].id,"ignored because it has no members");continue}for(var P=0,g=0;g<a[f].members.length;g++)"outer"==a[f].members[g].role?P++:n.verbose&&"inner"!=a[f].members[g].role&&console.warn("Multipolygon",a[f].type+"/"+a[f].id,"member",a[f].members[g].type+"/"+a[f].members[g].ref,'ignored because it has an invalid role: "'+a[f].members[g].role+'"');if(a[f].members.forEach(function(e){y[e.ref]&&("outer"!==e.role||i(y[e.ref].tags,a[f].tags)||(y[e.ref].is_multipolygon_outline=!0),"inner"!==e.role||i(y[e.ref].tags)||(y[e.ref].is_multipolygon_outline=!0))}),0==P){n.verbose&&console.warn("Multipolygon relation",a[f].type+"/"+a[f].id,"ignored because it has no outer ways");continue}var O=!1;1!=P||i(a[f].tags,{type:!0})||(O=!0);var A=null;if(O){var T=a[f].members.filter(function(e){return"outer"===e.role})[0];if(T=y[T.ref],void 0===T){n.verbose&&console.warn("Multipolygon relation",a[f].type+"/"+a[f].id,"ignored because outer way",T.type+"/"+T.ref,"is missing");continue}T.is_multipolygon_outline=!0,A=u(T,a[f])}else A=u(a[f],a[f]);if(A===!1){n.verbose&&console.warn("Multipolygon relation",a[f].type+"/"+a[f].id,"ignored because it has invalid geometry");continue}E.features.push(A)}for(var f=0;f<t.length;f++)if(r.isArray(t[f].nodes)){if(!t[f].is_multipolygon_outline){for(t[f].tainted=!1,t[f].hidden=!1,coords=new Array,g=0;g<t[f].nodes.length;g++)"object"==typeof t[f].nodes[g]?coords.push([+t[f].nodes[g].lon,+t[f].nodes[g].lat]):(n.verbose&&console.warn("Way",t[f].type+"/"+t[f].id,"is tainted by an invalid node"),t[f].tainted=!0);if(coords.length<=1)n.verbose&&console.warn("Way",t[f].type+"/"+t[f].id,"ignored because it contains too few nodes");else{var N="LineString";"undefined"!=typeof t[f].nodes[0]&&t[f].nodes[0]===t[f].nodes[t[f].nodes.length-1]&&("undefined"!=typeof t[f].tags&&l(t[f].tags)||t[f].__is_bounds_placeholder)&&(N="Polygon",coords=[coords]);var A={type:"Feature",id:t[f].type+"/"+t[f].id,properties:{type:t[f].type,id:t[f].id,tags:t[f].tags||{},relations:h.way[t[f].id]||[],meta:s(t[f])},geometry:{type:N,coordinates:coords}};t[f].tainted&&(n.verbose&&console.warn("Way",t[f].type+"/"+t[f].id,"is tainted"),A.properties.tainted=!0),t[f].__is_bounds_placeholder&&(A.properties.geometry="bounds"),"LineString"==N?j.features.push(A):E.features.push(A)}}}else n.verbose&&console.warn("Way",t[f].type+"/"+t[f].id,"ignored because it has no nodes");return x={type:"FeatureCollection",features:[]},x.features=x.features.concat(E.features),x.features=x.features.concat(j.features),x.features=x.features.concat(k.features),n.flatProperties&&x.features.forEach(function(e){e.properties=r.merge(e.properties.meta,e.properties.tags,{id:e.properties.type+"/"+e.properties.id})}),x=o(x,!0)}function l(e){var t=n.polygonFeatures;if("function"==typeof t)return t(e);if("no"===e.area)return!1;for(var r in e){var o=e[r],a=t[r];if("undefined"!=typeof a&&"no"!==o){if(a===!0)return!0;if(a.included_values&&a.included_values[o]===!0)return!0;if(a.excluded_values&&a.excluded_values[o]!==!0)return!0}}return!1}n=r.merge({verbose:!1,flatProperties:!1,uninterestingTags:{source:!0,source_ref:!0,"source:ref":!0,history:!0,attribution:!0,created_by:!0,"tiger:county":!0,"tiger:tlid":!0,"tiger:upload_uuid":!0},polygonFeatures:a},n);var u;return u="undefined"!=typeof XMLDocument&&e instanceof XMLDocument||"undefined"==typeof XMLDocument&&e.childNodes?i(e):t(e)},i.toGeojson=i,n.exports=i},{"./lodash.custom.js":2,"geojson-rewind":3,"osm-polygon-features":6}],2:[function(e,n,t){(function(e){(function(){function r(){return S.pop()||[]}function o(e){return"function"!=typeof e.toString&&"string"==typeof(e+"")}function a(e){e.length=0,S.length<M&&S.push(e)}function i(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,o=t-n||0,a=Array(0>o?0:o);++r<o;)a[r]=e[n+r];return a}function s(){}function l(e){function n(){if(r){var e=i(r);pe.apply(e,arguments)}if(this instanceof n){var a=c(t.prototype),s=t.apply(a,e||arguments);return x(s)?s:a}return t.apply(o,e||arguments)}var t=e[0],r=e[2],o=e[4];return ke(n,e),n}function u(e,n,t,s,l){if(t){var c=t(e);if("undefined"!=typeof c)return c}var f=x(e);if(!f)return e;var p=se.call(e);if(!z[p]||!_e.nodeClass&&o(e))return e;var g=ve[p];switch(p){case H:case U:return new g(+e);case q:case V:return new g(e);case X:return c=g(e.source,L.exec(e)),c.lastIndex=e.lastIndex,c}var y=Ae(e);if(n){var d=!s;s||(s=r()),l||(l=r());for(var m=s.length;m--;)if(s[m]==e)return l[m];c=y?g(e.length):{}}else c=y?i(e):Se({},e);return y&&(fe.call(e,"index")&&(c.index=e.index),fe.call(e,"input")&&(c.input=e.input)),n?(s.push(e),l.push(c),(y?Ne:Me)(e,function(e,r){c[r]=u(e,n,t,s,l)}),d&&(a(s),a(l)),c):c}function c(e,n){return x(e)?me(e):{}}function f(e,n,t){if("function"!=typeof e)return T;if("undefined"==typeof n||!("prototype"in e))return e;var r=e.__bindData__;if("undefined"==typeof r&&(_e.funcNames&&(r=!e.name),r=r||!_e.funcDecomp,!r)){var o=ue.call(e);_e.funcNames||(r=!B.test(o)),r||(r=F.test(o),ke(e,r))}if(r===!1||r!==!0&&1&r[1])return e;switch(t){case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,o){return e.call(n,t,r,o)};case 4:return function(t,r,o,a){return e.call(n,t,r,o,a)}}return O(e,n)}function p(e){function n(){var e=u?s:this;if(o){var m=i(o);pe.apply(m,arguments)}if((a||g)&&(m||(m=i(arguments)),a&&pe.apply(m,a),g&&m.length<l))return r|=16,p([t,y?r:-4&r,m,null,s,l]);if(m||(m=arguments),f&&(t=e[d]),this instanceof n){e=c(t.prototype);var b=t.apply(e,m);return x(b)?b:e}return t.apply(e,m)}var t=e[0],r=e[1],o=e[2],a=e[3],s=e[4],l=e[5],u=1&r,f=2&r,g=4&r,y=8&r,d=t;return ke(n,e),n}function g(e,n,t,r,o){(Ae(n)?E:Me)(n,function(n,a){var i,s,l=n,u=e[a];if(n&&((s=Ae(n))||Le(n))){for(var c=r.length;c--;)if(i=r[c]==n){u=o[c];break}if(!i){var f;t&&(l=t(u,n),(f="undefined"!=typeof l)&&(u=l)),f||(u=s?Ae(u)?u:[]:Le(u)?u:{}),r.push(n),o.push(u),f||g(u,n,t,r,o)}}else t&&(l=t(u,n),"undefined"==typeof l&&(l=n)),"undefined"!=typeof l&&(u=l);e[a]=u})}function y(e,n,t,r,o,a){var s=1&n,u=2&n,c=4&n,f=16&n,g=32&n;if(!u&&!_(e))throw new TypeError;f&&!t.length&&(n&=-17,f=t=!1),g&&!r.length&&(n&=-33,g=r=!1);var d=e&&e.__bindData__;if(d&&d!==!0)return d=i(d),d[2]&&(d[2]=i(d[2])),d[3]&&(d[3]=i(d[3])),!s||1&d[1]||(d[4]=o),!s&&1&d[1]&&(n|=8),!c||4&d[1]||(d[5]=a),f&&pe.apply(d[2]||(d[2]=[]),t),g&&ye.apply(d[3]||(d[3]=[]),r),d[1]|=n,y.apply(null,d);var m=1==n||17===n?l:p;return m([e,n,t,r,o,a])}function d(){K.shadowedProps=I,K.array=K.bottom=K.loop=K.top="",K.init="iterable",K.useHas=!0;for(var e,n=0;e=arguments[n];n++)for(var t in e)K[t]=e[t];var r=K.args;K.firstArg=/^[^,]+/.exec(r)[0];var o=Function("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString","return function("+r+") {\n"+xe(K)+"\n}");return o(f,W,oe,fe,C,h,Ae,A,K.keys,ae,Q,we,V,ie,se)}function m(e){return"function"==typeof e&&le.test(e)}function b(e){var n,t;return!e||se.call(e)!=$||(n=e.constructor,_(n)&&!(n instanceof n))||!_e.argsClass&&h(e)||!_e.nodeClass&&o(e)?!1:_e.ownLast?(Ce(e,function(e,n,r){return t=fe.call(r,n),!1}),t!==!1):(Ce(e,function(e,n){t=n}),"undefined"==typeof t||fe.call(e,t))}function h(e){return e&&"object"==typeof e&&"number"==typeof e.length&&se.call(e)==D||!1}function v(e,n,t,r){return"boolean"!=typeof n&&null!=n&&(r=t,t=n,n=!1),u(e,n,"function"==typeof t&&f(t,r,1))}function w(e){var n=!0;if(!e)return n;var t=se.call(e),r=e.length;return t==R||t==V||(_e.argsClass?t==D:h(e))||t==$&&"number"==typeof r&&_(e.splice)?!r:(Me(e,function(){return n=!1}),n)}function _(e){return"function"==typeof e}function x(e){return!(!e||!Q[typeof e])}function A(e){return"string"==typeof e||e&&"object"==typeof e&&se.call(e)==V||!1}function j(e){var n=arguments,t=2;if(!x(e))return e;if("number"!=typeof n[2]&&(t=n.length),t>3&&"function"==typeof n[t-2])var o=f(n[--t-1],n[t--],2);else t>2&&"function"==typeof n[t-1]&&(o=n[--t]);for(var s=i(arguments,1,t),l=-1,u=r(),c=r();++l<t;)g(e,s[l],o,u,c);return a(u),a(c),e}function E(e,n,t){if(n&&"undefined"==typeof t&&Ae(e))for(var r=-1,o=e.length;++r<o&&n(e[r],r,e)!==!1;);else Ne(e,n,t);return e}function P(e){for(var n=-1,t=e?e.length:0,r=[];++n<t;){var o=e[n];o&&r.push(o)}return r}function O(e,n){return arguments.length>2?y(e,17,i(arguments,2),null,n):y(e,1,null,null,n)}function T(e){return e}function N(){}var S=[],C={},M=40,L=/\w*$/,B=/^\s*function[ \n\r\t]+\w/,F=/\bthis\b/,I=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],D="[object Arguments]",R="[object Array]",H="[object Boolean]",U="[object Date]",W="[object Error]",G="[object Function]",q="[object Number]",$="[object Object]",X="[object RegExp]",V="[object String]",z={};z[G]=!1,z[D]=z[R]=z[H]=z[U]=z[q]=z[$]=z[X]=z[V]=!0;var J={configurable:!1,enumerable:!1,value:null,writable:!1},K={args:"",array:null,bottom:"",firstArg:"",init:"",keys:null,loop:"",shadowedProps:null,support:null,top:"",useHas:!1},Q={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},Y=Q[typeof window]&&window||this,Z=Q[typeof t]&&t&&!t.nodeType&&t,ee=Q[typeof n]&&n&&!n.nodeType&&n,ne=ee&&ee.exports===Z&&Z,te=Q[typeof e]&&e;!te||te.global!==te&&te.window!==te||(Y=te);var re=[],oe=Error.prototype,ae=Object.prototype,ie=String.prototype,se=ae.toString,le=RegExp("^"+String(se).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),ue=Function.prototype.toString,ce=m(ce=Object.getPrototypeOf)&&ce,fe=ae.hasOwnProperty,pe=re.push,ge=ae.propertyIsEnumerable,ye=re.unshift,de=function(){try{var e={},n=m(n=Object.defineProperty)&&n,t=n(e,e,e)&&n}catch(r){}return t}(),me=m(me=Object.create)&&me,be=m(be=Array.isArray)&&be,he=m(he=Object.keys)&&he,ve={};ve[R]=Array,ve[H]=Boolean,ve[U]=Date,ve[G]=Function,ve[$]=Object,ve[q]=Number,ve[X]=RegExp,ve[V]=String;var we={};we[R]=we[U]=we[q]={constructor:!0,toLocaleString:!0,toString:!0,valueOf:!0},we[H]=we[V]={constructor:!0,toString:!0,valueOf:!0},we[W]=we[G]=we[X]={constructor:!0,toString:!0},we[$]={constructor:!0},function(){for(var e=I.length;e--;){var n=I[e];for(var t in we)fe.call(we,t)&&!fe.call(we[t],n)&&(we[t][n]=!1)}}();var _e=s.support={};!function(){var e=function(){this.x=1},n={0:1,length:1},t=[];e.prototype={valueOf:1,y:1};for(var r in new e)t.push(r);for(r in arguments);_e.argsClass=se.call(arguments)==D,_e.argsObject=arguments.constructor==Object&&!(arguments instanceof Array),_e.enumErrorProps=ge.call(oe,"message")||ge.call(oe,"name"),_e.enumPrototypes=ge.call(e,"prototype"),_e.funcDecomp=!m(Y.WinRTError)&&F.test(function(){return this}),_e.funcNames="string"==typeof Function.name,_e.nonEnumArgs=0!=r,_e.nonEnumShadows=!/valueOf/.test(t),_e.ownLast="x"!=t[0],_e.spliceObjects=(re.splice.call(n,0,1),!n[0]),_e.unindexedChars="x"[0]+Object("x")[0]!="xx";try{_e.nodeClass=!(se.call(document)==$&&!({toString:0}+""))}catch(o){_e.nodeClass=!0}}(1);var xe=function(e){var n="var index, iterable = "+e.firstArg+", result = "+e.init+";\nif (!iterable) return result;\n"+e.top+";";e.array?(n+="\nvar length = iterable.length; index = -1;\nif ("+e.array+") {  ",_e.unindexedChars&&(n+="\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "),n+="\n  while (++index < length) {\n    "+e.loop+";\n  }\n}\nelse {  "):_e.nonEnumArgs&&(n+="\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      "+e.loop+";\n    }\n  } else {  "),_e.enumPrototypes&&(n+="\n  var skipProto = typeof iterable == 'function';\n  "),_e.enumErrorProps&&(n+="\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ");var t=[];if(_e.enumPrototypes&&t.push('!(skipProto && index == "prototype")'),_e.enumErrorProps&&t.push('!(skipErrorProps && (index == "message" || index == "name"))'),e.useHas&&e.keys)n+="\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n",t.length&&(n+="    if ("+t.join(" && ")+") {\n  "),n+=e.loop+";    ",t.length&&(n+="\n    }"),n+="\n  }  ";else if(n+="\n  for (index in iterable) {\n",e.useHas&&t.push("hasOwnProperty.call(iterable, index)"),t.length&&(n+="    if ("+t.join(" && ")+") {\n  "),n+=e.loop+";    ",t.length&&(n+="\n    }"),n+="\n  }    ",_e.nonEnumShadows){for(n+="\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ",k=0;k<7;k++)n+="\n    index = '"+e.shadowedProps[k]+"';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))",e.useHas||(n+=" || (!nonEnum[index] && iterable[index] !== objectProto[index])"),n+=") {\n      "+e.loop+";\n    }      ";n+="\n  }    "}return(e.array||_e.nonEnumArgs)&&(n+="\n}"),n+=e.bottom+";\nreturn result"};me||(c=function(){function e(){}return function(n){if(x(n)){e.prototype=n;var t=new e;e.prototype=null}return t||Y.Object()}}());var ke=de?function(e,n){J.value=n,de(e,"__bindData__",J)}:N;_e.argsClass||(h=function(e){return e&&"object"==typeof e&&"number"==typeof e.length&&fe.call(e,"callee")&&!ge.call(e,"callee")||!1});var Ae=be||function(e){return e&&"object"==typeof e&&"number"==typeof e.length&&se.call(e)==R||!1},je=d({args:"object",init:"[]",top:"if (!(objectTypes[typeof object])) return result",loop:"result.push(index)"}),Ee=he?function(e){return x(e)?_e.enumPrototypes&&"function"==typeof e||_e.nonEnumArgs&&e.length&&h(e)?je(e):he(e):[]}:je,Pe={args:"collection, callback, thisArg",top:"callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",array:"typeof length == 'number'",keys:Ee,loop:"if (callback(iterable[index], index, collection) === false) return result"},Oe={args:"object, source, guard",top:"var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",keys:Ee,loop:"if (typeof result[index] == 'undefined') result[index] = iterable[index]",bottom:"  }\n}"},Te={top:"if (!objectTypes[typeof iterable]) return result;\n"+Pe.top,array:!1},Ne=d(Pe),Se=d(Oe,{top:Oe.top.replace(";",";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),loop:"result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"}),Ce=d(Pe,Te,{useHas:!1}),Me=d(Pe,Te);_(/x/)&&(_=function(e){return"function"==typeof e&&se.call(e)==G});var Le=ce?function(e){if(!e||se.call(e)!=$||!_e.argsClass&&h(e))return!1;var n=e.valueOf,t=m(n)&&(t=ce(n))&&ce(t);return t?e==t||ce(e)==t:b(e)}:b;s.assign=Se,s.bind=O,s.compact=P,s.forEach=E,s.forIn=Ce,s.forOwn=Me,s.keys=Ee,s.merge=j,s.each=E,s.extend=Se,s.clone=v,s.identity=T,s.isArguments=h,s.isArray=Ae,s.isEmpty=w,s.isFunction=_,s.isObject=x,s.isPlainObject=Le,s.isString=A,s.noop=N,s.VERSION="2.4.1",Z&&ee&&ne&&((ee.exports=s)._=s)}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(e,n,t){function r(e,n){switch(e&&e.type||null){case"FeatureCollection":return e.features=e.features.map(o(r,n)),e;case"Feature":return e.geometry=r(e.geometry,n),e;case"Polygon":case"MultiPolygon":return a(e,n);default:return e}}function o(e,n){return function(t){return e(t,n)}}function a(e,n){return"Polygon"===e.type?e.coordinates=i(e.coordinates,n):"MultiPolygon"===e.type&&(e.coordinates=e.coordinates.map(o(i,n))),e}function i(e,n){n=!!n,e[0]=s(e[0],!n);for(var t=1;t<e.length;t++)e[t]=s(e[t],n);return e}function s(e,n){return l(e)===n?e:e.reverse()}function l(e){return u.ring(e)>=0}var u=e("geojson-area");n.exports=r},{"geojson-area":4}],4:[function(e,n,t){function r(e){if("Polygon"===e.type)return o(e.coordinates);if("MultiPolygon"===e.type){for(var n=0,t=0;t<e.coordinates.length;t++)n+=o(e.coordinates[t]);return n}return null}function o(e){var n=0;if(e&&e.length>0){n+=Math.abs(a(e[0]));for(var t=1;t<e.length;t++)n-=Math.abs(a(e[t]))}return n}function a(e){var n=0;if(e.length>2){for(var t,r,o=0;o<e.length-1;o++)t=e[o],r=e[o+1],n+=i(r[0]-t[0])*(2+Math.sin(i(t[1]))+Math.sin(i(r[1])));n=n*s.RADIUS*s.RADIUS/2}return n}function i(e){return e*Math.PI/180}var s=e("wgs84");n.exports.geometry=r,n.exports.ring=a},{wgs84:5}],5:[function(e,n,t){n.exports.RADIUS=6378137,n.exports.FLATTENING=1/298.257223563,n.exports.POLAR_RADIUS=6356752.3142},{}],6:[function(e,n,t){n.exports=e("./polygon-features.json")},{"./polygon-features.json":7}],7:[function(e,n,t){n.exports=[{key:"building",polygon:"all"},{key:"highway",polygon:"whitelist",values:["services","rest_area","escape","elevator"]},{key:"natural",polygon:"blacklist",values:["coastline","cliff","ridge","arete","tree_row"]},{key:"landuse",polygon:"all"},{key:"waterway",polygon:"whitelist",values:["riverbank","dock","boatyard","dam"]},{key:"amenity",polygon:"all"},{key:"leisure",polygon:"all"},{key:"barrier",polygon:"whitelist",values:["city_wall","ditch","hedge","retaining_wall","wall","spikes"]},{key:"railway",polygon:"whitelist",values:["station","turntable","roundhouse","platform"]},{key:"area",polygon:"all"},{key:"boundary",polygon:"all"},{key:"man_made",polygon:"blacklist",values:["cutline","embankment","pipeline"]},{key:"power",polygon:"whitelist",values:["plant","substation","generator","transformer"]},{key:"place",polygon:"all"},{key:"shop",polygon:"all"},{key:"aeroway",polygon:"blacklist",values:["taxiway"]},{key:"tourism",polygon:"all"},{key:"historic",polygon:"all"},{key:"public_transport",polygon:"all"},{key:"office",polygon:"all"},{key:"building:part",polygon:"all"},{key:"military",polygon:"all"},{key:"ruins",polygon:"all"},{key:"area:highway",polygon:"all"},{key:"craft",polygon:"all"},{key:"golf",polygon:"all"}]},{}]},{},[1])(1)});