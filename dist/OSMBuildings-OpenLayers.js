var OSMBuildings=function(){function sa(a,d){var b=a.x-d.x,c=a.y-d.y;return b*b+c*c}function Na(a){for(var d=Infinity,b=-Infinity,c=Infinity,e=-Infinity,f=0,g=a.length-3;f<g;f+=2)d=S(d,a[f]),b=G(b,a[f]),c=S(c,a[f+1]),e=G(e,a[f+1]);return{x:d+(b-d)/2<<0,y:c+(e-c)/2<<0}}function ta(a,d,b,c){var e=a.x-b.x,f=a.y-b.y,g=d-c,h=e*e+f*f;if(!(h<=g*g)){var h=ua(h),e=-e/h,f=-f/h,g=g/h,h=[],j,p,l;j=ua(G(0,1-g*g));for(var m=1;-1<=m;m-=2)p=e*g-m*j*f,l=f*g+m*j*e,h.push({x1:a.x+d*p<<0,y1:a.y+d*l<<0,x2:b.x+c*p<<0,
y2:b.y+c*l<<0});return h}}function X(a,d){var b={};a/=T;d/=T;b[Oa]=0>=d?90:1<=d?-90:va*(2*Pa(Qa(H*(1-2*d)))-L);b[Ra]=360*(1===a?1:(a%1+1)%1)-180;return b}function wa(a,d,b){function c(a){if("XDomainRequest"in U&&a!==e.readyState&&(e.readyState=a,e.onreadystatechange))e.onreadystatechange()}a=a.replace(/\{ *([\w_]+) *\}/g,function(a,b){return d[b]||a});var e="XDomainRequest"in U?new XDomainRequest:new XMLHttpRequest;e.onerror=function(){e.status=500;e.statusText="Error";c(4)};e.ontimeout=function(){e.status=
408;e.statusText="Timeout";c(4)};e.onprogress=function(){c(3)};e.onload=function(){e.status=200;e.statusText="Ok";c(4)};e.onreadystatechange=function(){4===e.readyState&&e.status&&!(200>e.status||299<e.status)&&b&&e.responseText&&b(JSON.parse(e.responseText))};c(0);e.open("GET",a);c(1);e.send(null);c(2);return e}function xa(a){x=a.w;t=a.h;M=x/2<<0;ea=t/2<<0;w=M;N=t;y.setSize(x,t);fa=C-50}function ya(a){I=a;T=Sa<<I;a=X(u+M,r+ea);ga=-40075040*za(a.latitude)/Aa(2,I+8);v=Aa(0.9,I-Y);ha=E.alpha(v)+"";
ia=Z.alpha(v)+"";$=F.alpha(v)+""}var Ba=Ba||Array,Ca=Ca||Array,k=Math,Qa=k.exp,Ta=k.log,Ua=k.sin,za=k.cos,Da=k.tan,Pa=k.atan,aa=k.atan2,S=k.min,G=k.max,ua=k.sqrt,Ea=k.ceil,Fa=k.floor,Aa=k.pow,U=window,ja=document;U.console||(U.console={});var J,ka=function(a,d,b){0>b&&(b+=1);1<b&&(b-=1);return b<1/6?a+6*(d-a)*b:0.5>b?d:b<2/3?a+6*(d-a)*(2/3-b):a},Va={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",
blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",
darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",
lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",
mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",
pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",
whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},O=function(a,d,b,c){this.H=a;this.S=d;this.L=b;this.A=c},k=O.prototype;k.toString=function(){var a=Math.min(360,Math.max(0,this.H)),d=Math.min(1,Math.max(0,this.S)),b=Math.min(1,Math.max(0,this.L)),c=Math.min(1,Math.max(0,this.A)),e;if(0===d)a=e=d=b;else{var f=0.5>b?b*(1+d):b+d-b*d,b=2*b-f,a=a/360,d=ka(b,f,a+1/3);e=ka(b,f,a);a=ka(b,f,a-1/3)}d*=255;e*=255;a*=255;return 1===c?"#"+(16777216+(d<<16)+(e<<8)+a).toString(16).slice(1,7):"rgba("+
[Math.round(d),Math.round(e),Math.round(a),c.toFixed(2)].join()+")"};k.hue=function(a){return new O(this.H*a,this.S,this.L,this.A)};k.saturation=function(a){return new O(this.H,this.S*a,this.L,this.A)};k.lightness=function(a){return new O(this.H,this.S,this.L*a,this.A)};k.alpha=function(a){return new O(this.H,this.S,this.L,this.A*a)};J=function(a){var d=0,b=0,c=0,e=1,f;a=(""+a).toLowerCase().replace("grey","gray");a=Va[a]||a;if(f=a.match(/^#(\w{2})(\w{2})(\w{2})$/))d=parseInt(f[1],16),b=parseInt(f[2],
16),c=parseInt(f[3],16);if(f=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))d=parseInt(f[1],10),b=parseInt(f[2],10),c=parseInt(f[3],10),e=f[4]?parseFloat(f[5]):1;d/=255;b/=255;c/=255;a=Math.max(d,b,c);var g=Math.min(d,b,c),h;f=(a+g)/2;var j=a-g;if(j){g=0.5<f?j/(2-a-g):j/(a+g);switch(a){case d:h=(b-c)/j+(b<c?6:0);break;case b:h=(c-d)/j+2;break;case c:h=(d-b)/j+4}h*=60}else h=g=0;return new O(h,g,f,e)};var Ga,k=Math,la=k.PI,s=k.sin,D=k.cos,Ha=k.tan,Ia=k.asin,Ja=k.atan2,K=la/180,ba=23.4397*
K;Ga=function(a,d,b){b=K*-b;d*=K;a=a.valueOf()/864E5-0.5+2440588-2451545;var c=K*(357.5291+0.98560028*a),e=K*(1.9148*s(c)+0.02*s(2*c)+3E-4*s(3*c)),e=c+e+102.9372*K+la,c=Ia(s(0)*D(ba)+D(0)*s(ba)*s(e)),e=Ja(s(e)*D(ba)-Ha(0)*s(ba),D(e));b=K*(280.16+360.9856235*a)-b-e;return{altitude:Ia(s(d)*s(c)+D(d)*D(c)*D(b)),azimuth:Ja(s(b),D(b)*s(d)-Ha(c)*D(d))-la/2}};var n={YARD_TO_METER:0.9144,FOOT_TO_METER:0.3048,INCH_TO_METER:0.0254,METERS_PER_LEVEL:3,clockwise:"CW",counterClockwise:"CCW",getWinding:function(a){var d,
b,c,e,f=0,g,h;g=0;for(h=a.length-3;g<h;g+=2)d=a[g],b=a[g+1],c=a[g+2],e=a[g+3],f+=d*e-c*b;return 0<f/2?this.clockwise:this.counterClockwise},makeWinding:function(a,d){if(this.getWinding(a)===d)return a;for(var b=[],c=a.length-2;0<=c;c-=2)b.push(a[c],a[c+1]);return b},toMeters:function(a){a=""+a;var d=parseFloat(a);return d===a||~a.indexOf("m")?d<<0:~a.indexOf("yd")?d*this.YARD_TO_METER<<0:~a.indexOf("ft")?d*this.FOOT_TO_METER<<0:~a.indexOf("'")?(a=a.split("'"),a[0]*this.FOOT_TO_METER+a[1]*this.INCH_TO_METER<<
0):d<<0},getRadius:function(a){for(var d=90,b=-90,c=0,e=a.length;c<e;c+=2)d=S(d,a[c]),b=G(b,a[c]);return 6378137*((b-d)/va)/2<<0},materialColors:{brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},baseMaterials:{asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",
bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"},getMaterialColor:function(a){a=a.toLowerCase();return"#"===a[0]?a:this.materialColors[this.baseMaterials[a]||
a]||null}},Ka,La=function(a){return(a=a.tags)&&!a.landuse&&(a.building||a["building:part"])&&(!a.layer||0<=a.layer)},na=function(a){if(a){for(var d=[],b,c=0,e=a.length;c<e;c++)b=ma[a[c]],d.push(b[0],b[1]);d[d.length-2]!==d[0]&&d[d.length-1]!==d[1]&&d.push(d[0],d[1]);if(!(8>d.length))return d}},Wa=function(a,d){for(var b in d)a[b]||(a[b]=d[b]);return a},oa=function(a,d){var b={},c=a.tags||{};a.id&&(b.id=a.id);d&&(b.footprint=n.makeWinding(d,n.clockwise));c.height&&(b.height=n.toMeters(c.height));!b.height&&
c["building:height"]&&(b.height=n.toMeters(c["building:height"]));!b.height&&c.levels&&(b.height=c.levels*n.METERS_PER_LEVEL<<0);!b.height&&c["building:levels"]&&(b.height=c["building:levels"]*n.METERS_PER_LEVEL<<0);c.min_height&&(b.minHeight=n.toMeters(c.min_height));!b.minHeight&&c["building:min_height"]&&(b.minHeight=n.toMeters(c["building:min_height"]));!b.minHeight&&c.min_level&&(b.minHeight=c.min_level*n.METERS_PER_LEVEL<<0);!b.minHeight&&c["building:min_level"]&&(b.minHeight=c["building:min_level"]*
n.METERS_PER_LEVEL<<0);c["building:material"]&&(b.wallColor=n.getMaterialColor(c["building:material"]));c["building:facade:material"]&&(b.wallColor=n.getMaterialColor(c["building:facade:material"]));c["building:cladding"]&&(b.wallColor=n.getMaterialColor(c["building:cladding"]));c["building:color"]&&(b.wallColor=c["building:color"]);c["building:colour"]&&(b.wallColor=c["building:colour"]);c["roof:material"]&&(b.roofColor=n.getMaterialColor(c["roof:material"]));c["building:roof:material"]&&(b.roofColor=
n.getMaterialColor(c["building:roof:material"]));c["roof:color"]&&(b.roofColor=c["roof:color"]);c["roof:colour"]&&(b.roofColor=c["roof:colour"]);c["building:roof:color"]&&(b.roofColor=c["building:roof:color"]);c["building:roof:colour"]&&(b.roofColor=c["building:roof:colour"]);b.height=b.height||Ma;if("dome"===c["roof:shape"]||"cylinder"===c["building:shape"]||"sphere"===c["building:shape"])b.shape="cylinder",b.radius=n.getRadius(b.footprint),"dome"===c["roof:shape"]&&c["roof:height"]&&(b.roofShape=
"cylinder",b.roofHeight=n.toMeters(c["roof:height"]),b.height=G(0,b.height-b.roofHeight));return b},ma,V,ca,da;Ka=function(a,d){ma={};V={};ca=[];da=d;for(var b,c=0,e=a.length;c<e;c++)switch(b=a[c],b.type){case "node":ma[b.id]=[b.lat,b.lon];break;case "way":if(La(b)){var f=void 0,f=void 0;if((f=na(b.nodes))&&!1!==da(b))f=oa(b,f),ca.push(f)}else if(f=b.tags,!f||!f.highway&&!f.railway&&!f.landuse)V[b.id]=b;break;case "relation":var g=b,h=void 0,j=void 0;b=[];var p=j=void 0,l=void 0,f=void 0;if(La(g)&&
!("multipolygon"!==g.tags.type&&"building"!==g.tags.type||!1===da(g))){for(var h=g.members,j=p=void 0,l=[],m=0,A=h.length;m<A;m++)p=h[m],"way"===p.type&&V[p.ref]&&(!p.role||"outer"===p.role?j=V[p.ref]:("inner"===p.role||"enclave"===p.role)&&l.push(V[p.ref]));h=j?{outer:j,inner:l}:void 0;if(h&&(p=oa(g),j=h.outer))if((l=na(j.nodes))&&!1!==da(j)){j=oa(j,l);g=0;for(l=h.inner.length;g<l;g++)(f=na(h.inner[g].nodes))&&b.push(n.makeWinding(f,n.counterClockwise));b.length&&(j.holes=b);ca.push(Wa(j,p))}}}return ca};
var H=Math.PI,L=H/2,Xa=H/4,va=180/H,Sa=256,Y=15,Oa="latitude",Ra="longitude",x=0,t=0,M=0,ea=0,u=0,r=0,I,T,E=J("rgba(200, 190, 180)"),Z=E.lightness(0.8),F=E.lightness(1.2),ha=""+E,ia=""+Z,$=""+F,P,ga=1,v=1,fa,Ma=5,w,N,C=450,pa,qa={time:new Date,data:{},add:function(a,d){this.data[d]={data:a,time:Date.now()}},get:function(a){return this.data[a]&&this.data[a].data},purge:function(){this.time.setMinutes(this.time.getMinutes()-5);for(var a in this.data)this.data[a].time<this.time&&delete this.data[a]}},
B={currentItemsIndex:{},items:[],cropDecimals:function(a){return parseFloat(a.toFixed(5))},getPixelFootprint:function(a){for(var d,b,c=new Ba(a.length),e=0,f=a.length-1;e<f;e+=2)d=a[e+1],b=S(1,G(0,0.5-Ta(Da(Xa+L*a[e]/180))/H/2)),d=(d/360+0.5)*T<<0,b=b*T<<0,c[e]=d,c[e+1]=b;a=c;c=a.length/2;e=new Ca(c);f=0;d=c-1;var g,h,j,p=[],l=[],m=[];for(e[f]=e[d]=1;d;){g=0;for(b=f+1;b<d;b++){h=a[2*b];var A=a[2*b+1],Q=a[2*f],k=a[2*f+1],n=a[2*d],u=a[2*d+1],r=n-Q,q=u-k,t=void 0;if(0!==r||0!==q)t=((h-Q)*r+(A-k)*q)/
(r*r+q*q),1<t?(Q=n,k=u):0<t&&(Q+=r*t,k+=q*t);r=h-Q;q=A-k;h=r*r+q*q;h>g&&(j=b,g=h)}2<g&&(e[j]=1,p.push(f),l.push(j),p.push(j),l.push(d));f=p.pop();d=l.pop()}for(b=0;b<c;b++)e[b]&&m.push(a[2*b],a[2*b+1]);c=m;if(!(8>c.length))return c},createClosure:function(a){var d=this;return function(b){b=d.parse(b);qa.add(b,a);d.addRenderItems(b,!0)}},parse:function(a){if(!a)return[];if("FeatureCollection"===a.type){a=a.features;var d=this.each,b,c,e,f,g,h,j=[],p,l,m,A,k;b=0;for(c=a.length;b<c;b++)if(e=a[b],"Feature"===
e.type&&(k={},f=e.geometry,p=e.properties,"LineString"===f.type&&(m=l.length-1,l[0][0]===l[m][0]&&l[0][1]===l[m][1]&&(l=f.coordinates)),"Polygon"===f.type&&(l=f.coordinates),"MultiPolygon"===f.type&&(l=f.coordinates[0]),l&&!1!==d(e))){m=l[0];g=[];e=0;for(f=m.length;e<f;e++)g.push(m[e][1],m[e][0]);k.id=p.id||[g[0],g[1],p.height,p.minHeight].join();k.footprint=n.makeWinding(g,n.clockwise);A=[];e=1;for(f=l.length;e<f;e++){m=l[e];A[e-1]=[];g=0;for(h=m.length;g<h;g++)A[e-1].push(m[g][1],m[g][0]);A[e-1]=
n.makeWinding(A[e-1],n.counterClockwise)}A.length&&(k.holes=A);k.height=n.toMeters(p.height)||Ma;p.minHeight&&(k.minHeight=n.toMeters(p.minHeight));if(p.color||p.wallColor)k.wallColor=p.color||p.wallColor;p.roofColor&&(k.roofColor=p.roofColor);j.push(k)}return j}return a.osm3s?Ka(a.elements,this.each):[]},resetItems:function(){this.items=[];this.currentItemsIndex={}},addRenderItems:function(a,d){for(var b=this.scale(a),c=0,e=b.length;c<e;c++)this.currentItemsIndex[b[c].id]||(b[c].scale=d?0:1,this.items.push(b[c]),
this.currentItemsIndex[b[c].id]=1);P||(P=setInterval(function(){for(var a=B.items,b=!1,c=0,d=a.length;c<d;c++)1>a[c].scale&&(a[c].scale+=0.1,1<a[c].scale&&(a[c].scale=1),b=!0);y.render();b||(clearInterval(P),P=null)},33))},scale:function(a){var d,b,c,e,f=[],g,h,j,p,l,m,k,n,r,q=3*ga;d=0;for(b=a.length;d<b;d++)if(g=a[d],h=g.height/q,j=isNaN(g.minHeight)?0:g.minHeight/q,!(j>fa)&&(p=this.getPixelFootprint(g.footprint))){n=[];if(g.holes){c=0;for(e=g.holes.length;c<e;c++)(r=this.getPixelFootprint(g.holes[c]))&&
n.push(r)}e=c=null;if(g.wallColor&&(l=J(g.wallColor)))c=l.alpha(v),e=""+c.lightness(0.8),c=""+c;m=null;if(g.roofColor&&(l=J(g.roofColor)))m=""+l.alpha(v);k=g.roofHeight/q;h<=j&&0>=k||f.push({id:g.id,footprint:p,height:S(h,fa),minHeight:j,wallColor:c,altColor:e,roofColor:m,roofShape:g.roofShape,roofHeight:k,center:Na(p),holes:n.length?n:null,shape:g.shape,radius:g.radius/ga})}return f},set:function(a){this.isStatic=!0;this.resetItems();this.addRenderItems(this.staticData=this.parse(a),!0)},load:function(a){this.url=
a||"http://overpass-api.de/api/interpreter?data=[out:json];(way[%22building%22]({s},{w},{n},{e});node(w);way[%22building:part%22=%22yes%22]({s},{w},{n},{e});node(w);relation[%22building%22]({s},{w},{n},{e});way(r);node(w););out;";(this.isStatic=!/(.+\{[nesw]\}){4,}/.test(this.url))?(this.resetItems(),wa(this.url,{},function(a){this.addRenderItems(this.staticData=this.parse(a),!0)})):this.update()},update:function(){this.resetItems();if(!(I<Y))if(this.isStatic)this.addRenderItems(this.staticData);
else if(this.url){var a,d,b,c,e=X(u,r);a=X(u+x,r+t);var f=0.0075*Ea(e.latitude/0.0075),g=0.015*Ea(a.longitude/0.015);a=0.0075*Fa(a.latitude/0.0075);for(e=0.015*Fa(e.longitude/0.015);a<=f;a+=0.0075)for(d=e;d<=g;d+=0.015)a=this.cropDecimals(a),d=this.cropDecimals(d),c=a+","+d,(b=qa.get(c))?this.addRenderItems(b):wa(this.url,{n:this.cropDecimals(a+0.0075),e:this.cropDecimals(d+0.015),s:a,w:d},this.createClosure(c));qa.purge()}},each:function(){}},ra={project:function(a,d,b){return{x:(a-w)*b+w<<0,y:(d-
N)*b+N<<0}},drawSolid:function(a,d,b,c,e){for(var f={x:0,y:0},g={x:0,y:0},h,j,p=[],l=0,m=a.length-3;l<m;l+=2)f.x=a[l]-u,f.y=a[l+1]-r,g.x=a[l+2]-u,g.y=a[l+3]-r,h=this.project(f.x,f.y,d),j=this.project(g.x,g.y,d),b&&(f=this.project(f.x,f.y,b),g=this.project(g.x,g.y,b)),(g.x-f.x)*(h.y-f.y)>(h.x-f.x)*(g.y-f.y)&&(this.context.fillStyle=f.x<g.x&&f.y<g.y||f.x>g.x&&f.y>g.y?e:c,this.drawFace([g.x,g.y,f.x,f.y,h.x,h.y,j.x,j.y])),p[l]=h.x,p[l+1]=h.y;return p},render:function(){var a=x/(window.devicePixelRatio||
1)/30;w-=a;this.renderPass();var d=this.context.getImageData(0,0,x,t);w+=2*a;this.renderPass();var b=this.context.getImageData(0,0,x,t);w-=a;for(var a=d.data,b=b.data,c,e,f,g,h=0,j=a.length;h<j;h+=4)if(c=h,e=h+1,f=h+2,g=h+3,a[g]||b[g])a[c]=0.7*(a[e]||235)+0.3*(a[f]||230),a[e]=b[e]||F.g,a[f]=b[f]||F.b,a[g]=G(b[g],b[g]);this.context.clearRect(0,0,x,t);this.context.putImageData(d,0,0)},drawFace:function(a,d,b){if(a.length){var c,e,f,g;this.context.beginPath();this.context.moveTo(a[0],a[1]);c=2;for(e=
a.length;c<e;c+=2)this.context.lineTo(a[c],a[c+1]);if(b){c=0;for(e=b.length;c<e;c++){a=b[c];this.context.moveTo(a[0],a[1]);f=2;for(g=a.length;f<g;f+=2)this.context.lineTo(a[f],a[f+1])}}this.context.closePath();d&&this.context.stroke();this.context.fill()}},drawCircle:function(a,d,b){this.context.beginPath();this.context.arc(a.x,a.y,d,0,2*H);b&&this.context.stroke();this.context.fill()},drawCylinder:function(a,d,b,c,e,f){var g=C/(C-b);b=this.project(a.x,a.y,g);var g=d*g,h;c&&(c=C/(C-c),a=this.project(a.x,
a.y,c),d*=c);if(h=ta(a,d,b,g))c=aa(h[0].y1-a.y,h[0].x1-a.x),h=aa(h[1].y1-a.y,h[1].x1-a.x),f||(f=J(e),f=""+f.lightness(0.8)),this.context.fillStyle=e,this.context.beginPath(),this.context.arc(b.x,b.y,g,L,c,!0),this.context.arc(a.x,a.y,d,c,L),this.context.closePath(),this.context.fill(),this.context.fillStyle=f,this.context.beginPath(),this.context.arc(b.x,b.y,g,h,L,!0),this.context.arc(a.x,a.y,d,L,h),this.context.closePath(),this.context.fill();return{c:b,r:g}},renderPass:function(){this.context.clearRect(0,
0,x,t);if(!(I<Y||pa)){var a,d,b,c,e,f,g,h={x:w+u,y:N+r},j=u,p=u+x,l=r,m=r+t,k,n,q,z,v,s=B.items;s.sort(function(a,b){return a.minHeight-b.minHeight||sa(b.center,h)-sa(a.center,h)||b.height-a.height});a=0;for(d=s.length;a<d;a++){e=s[a];f=!1;k=e.footprint;b=0;for(c=k.length-1;b<c;b+=2)f||(f=k[b]>j&&k[b]<p&&k[b+1]>l&&k[b+1]<m);if(f)if(b=1>e.scale?e.height*e.scale:e.height,f=C/(C-b),g=c=0,e.minHeight&&(c=1>e.scale?e.minHeight*e.scale:e.minHeight,g=C/(C-c)),q=e.wallColor||ha,z=e.altColor||ia,v=e.roofColor||
$,this.context.strokeStyle=z,"cylinder"===e.shape)k=this.drawCylinder({x:e.center.x-u,y:e.center.y-r},e.radius,b,c,q,z),"cylinder"===e.roofShape&&(k=this.drawCylinder({x:e.center.x-u,y:e.center.y-r},e.radius,b+e.roofHeight,b,v)),this.context.fillStyle=v,this.drawCircle(k.c,k.r,!0);else{k=this.drawSolid(k,f,g,q,z);n=[];if(e.holes){b=0;for(c=e.holes.length;b<c;b++)n[b]=this.drawSolid(e.holes[b],f,g,q,z)}this.context.fillStyle=v;this.drawFace(k,!0,n)}}}}},W={enabled:!0,color:"#666666",blurColor:"#000000",
blurSize:15,date:new Date,direction:{x:0,y:0},project:function(a,d,b){return{x:a+this.direction.x*b,y:d+this.direction.y*b}},cylinder:function(a,d,b,c){b=this.project(a.x,a.y,b);var e;c&&(a=this.project(a.x,a.y,c));var f=ta(a,d,b,d);f&&(c=aa(f[0].y1-a.y,f[0].x1-a.x),e=aa(f[1].y1-a.y,f[1].x1-a.x),this.context.moveTo(f[1].x2,f[1].y2),this.context.arc(b.x,b.y,d,e,c),this.context.arc(a.x,a.y,d,c,e))},render:function(){var a,d,b;this.context.clearRect(0,0,x,t);if(this.enabled&&!(I<Y||pa))if(a=X(u+M,r+
ea),a=Ga(this.date,a.latitude,a.longitude),!(0>=a.altitude)){d=1/Da(a.altitude);b=5>d?1:5*(1/d);this.direction.x=za(a.azimuth)*d;this.direction.y=Ua(a.azimuth)*d;var c,e,f,g,h,j,k,l,m,n,q,s,z,w;a=[];d=[];var y=B.items;this.context.canvas.style.opacity=b/(2*v);this.context.shadowColor=this.blurColor;this.context.shadowBlur=this.blurSize*(v/2);this.context.fillStyle=this.color;this.context.beginPath();b=0;for(c=y.length;b<c;b++){j=y[b];m=!1;k=j.footprint;g=[];e=0;for(f=k.length-1;e<f;e+=2)g[e]=h=k[e]-
u,g[e+1]=l=k[e+1]-r,m||(m=0<h&&h<x&&0<l&&l<t);if(m)if(h=1>j.scale?j.height*j.scale:j.height,k=0,j.minHeight&&(k=1>j.scale?j.minHeight*j.scale:j.minHeight),"cylinder"===j.shape)"cylinder"===j.roofShape&&(h+=j.roofHeight),a.push({shape:j.shape,center:{x:j.center.x-u,y:j.center.y-r},radius:j.radius,h:h,mh:k});else{l=null;e=0;for(f=g.length-3;e<f;e+=2)m=g[e],n=g[e+1],q=g[e+2],s=g[e+3],z=this.project(m,n,h),w=this.project(q,s,h),k&&(n=this.project(m,n,k),s=this.project(q,s,k),m=n.x,n=n.y,q=s.x,s=s.y),
(q-m)*(z.y-n)>(z.x-m)*(s-n)?(1===l&&this.context.lineTo(m,n),l=0,e||this.context.moveTo(m,n),this.context.lineTo(q,s)):(0===l&&this.context.lineTo(z.x,z.y),l=1,e||this.context.moveTo(z.x,z.y),this.context.lineTo(w.x,w.y));k||d.push(g);if(j.holes){e=0;for(f=j.holes.length;e<f;e++){l=j.holes[e];m=[l[0]-u,l[1]-r];this.context.moveTo(m[0],m[1]);g=2;for(h=l.length;g<h;g+=2)m[g]=l[g]-u,m[g+1]=l[g+1]-r,this.context.lineTo(m[g],m[g+1]);k||d.push(m)}}}}b=0;for(c=a.length;b<c;b++)j=a[b],"cylinder"===j.shape&&
this.cylinder(j.center,j.radius,j.h,j.mh);this.context.closePath();this.context.fill();this.context.shadowBlur=null;this.context.globalCompositeOperation="destination-out";this.context.beginPath();b=0;for(c=d.length;b<c;b++){l=d[b];this.context.moveTo(l[0],l[1]);e=2;for(f=l.length;e<f;e+=2)this.context.lineTo(l[e],l[e+1]);this.context.lineTo(l[0],l[1])}b=0;for(c=a.length;b<c;b++)j=a[b],"cylinder"===j.shape&&!j.mh&&(this.context.moveTo(j.center.x+j.radius,j.center.y),this.context.arc(j.center.x,j.center.y,
j.radius,0,2*H));this.context.fillStyle="#00ff00";this.context.fill();this.context.globalCompositeOperation="source-over"}}},y={container:ja.createElement("DIV"),items:[],init:function(){this.container.style.pointerEvents="none";this.container.style.position="absolute";this.container.style.left=0;this.container.style.top=0;W.context=this.createContext();ra.context=this.createContext()},render:function(){W.render();ra.render()},createContext:function(){var a=ja.createElement("CANVAS");a.style.webkitTransform=
"translate3d(0,0,0)";a.style.imageRendering="optimizeSpeed";a.style.position="absolute";a.style.left=0;a.style.top=0;var d=a.getContext("2d");d.lineCap="round";d.lineJoin="round";d.lineWidth=1;d.mozImageSmoothingEnabled=!1;d.webkitImageSmoothingEnabled=!1;this.items.push(a);this.container.appendChild(a);return d},appendTo:function(a){a.appendChild(this.container)},remove:function(){this.container.parentNode.removeChild(this.container)},setSize:function(a,d){for(var b=0,c=this.items.length;b<c;b++)this.items[b].width=
a,this.items[b].height=d},screenshot:function(){var a=ja.createElement("CANVAS"),d=a.getContext("2d"),b,c,e;a.width=x;a.height=t;clearInterval(P);P=null;e=B.items;b=0;for(c=e.length;b<c;b++)e[b].scale=1;this.render();b=0;for(c=this.items.length;b<c;b++)e=this.items[b],""!==e.style.opacity&&(d.globalAlpha=parseFloat(e.style.opacity)),d.drawImage(e,0,0),d.globalAlpha=1;return a.toDataURL("image/png")},setPosition:function(a,d){this.container.style.left=a+"px";this.container.style.top=d+"px"}};y.init();
var R=OpenLayers.Layer.prototype,k=function(a){this.offset={x:0,y:0};R.initialize.call(this,this.name,{projection:"EPSG:900913"});a.addLayer(this)},q=k.prototype=new OpenLayers.Layer;q.name="OSM Buildings";q.attribution='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';q.isBaseLayer=!1;q.alwaysInRange=!0;q.setOrigin=function(){var a=this.map,d=a.getLonLatFromPixel(new OpenLayers.Pixel(0,0)),a=a.resolution,b=this.maxExtent,c=(b.top-d.lat)/a<<0;u=(d.lon-b.left)/a<<0;r=c};q.setMap=function(a){this.map||
R.setMap.call(this,a);y.appendTo(this.div);xa(a.size);ya(a.zoom);this.setOrigin();B.update()};q.removeMap=function(a){y.remove();R.removeMap.call(this,a);this.map=null};q.onMapResize=function(){var a=this.map;R.onMapResize.call(this);xa(a.size.w,a.size.h);y.render();B.update()};q.moveTo=function(a,d,b){var c=this.map;a=R.moveTo.call(this,a,d,b);if(!b){b=parseInt(c.layerContainerDiv.style.left,10);var e=parseInt(c.layerContainerDiv.style.top,10);this.div.style.left=-b+"px";this.div.style.top=-e+"px"}this.setOrigin();
this.offset.x=0;this.offset.y=0;b=this.offset;w=M+b.x;N=t+b.y;d?(d=c.zoom,pa=!1,ya(d),B.update(),y.render()):(y.render(),B.update());return a};q.moveByPx=function(a,d){this.offset.x+=a;this.offset.y+=d;var b=R.moveByPx.call(this,a,d),c=this.offset;w=M+c.x;N=t+c.y;ra.render();return b};q.setStyle=function(a){a=a||{};var d;if(d=a.color||a.wallColor)E=J(d),ha=""+E.alpha(v),Z=E.lightness(0.8),ia=""+Z.alpha(v),F=E.lightness(1.2),$=""+F.alpha(v);a.roofColor&&(F=J(a.roofColor),$=""+F.alpha(v));void 0!==
a.shadows&&(W.enabled=!!a.shadows);y.render();return this};q.setDate=function(a){W.date=a;W.render();return this};q.loadData=function(a){B.load(a);return this};q.setData=function(a){B.set(a);return this};q.each=function(a,d){B.each=function(b){return a.call(d,b)};return this};q.screenshot=function(a){var d=y.screenshot();a&&(U.location.href=d.replace("image/png","image/octet-stream"));return d};k.VERSION="0.1.9a";k.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';return k}();
