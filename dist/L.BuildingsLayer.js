(function(a){function k(g,b){var p=g[0]-b[0],f=g[1]-b[1];return p*p+f*f}function Aa(g){for(var b=0,p=0,f=0,a=g.length-3;f<a;f+=2)b+=g[f],p+=g[f+1];g=2*(g.length-2);return[b/g<<0,p/g<<0]}function Ba(g){var b=g.length/2,p=new Z(b),a=0,h=b-1,q,e,I,ma,k=[],x=[],r=[];for(p[a]=p[h]=1;h;){e=0;for(q=a+1;q<h;q++){I=g[2*q];var F=g[2*q+1],A=g[2*a],z=g[2*a+1],G=g[2*h],w=g[2*h+1],D=G-A,E=w-z,C=void 0;if(0!==D||0!==E)C=((I-A)*D+(F-z)*E)/(D*D+E*E),1<C?(A=G,z=w):0<C&&(A+=D*C,z+=E*C);D=I-A;E=F-z;I=D*D+E*E;I>e&&(ma=
q,e=I)}2<e&&(p[ma]=1,k.push(a),x.push(ma),k.push(ma),x.push(h));a=k.pop();h=x.pop()}for(q=0;q<b;q++)p[q]&&r.push(g[2*q],g[2*q+1]);return r}var Ca=Ca||Array,Z=Z||Array,e=Math,Ja=e.exp,Ka=e.log,La=e.sin,Ma=e.cos,va=e.tan,Na=e.atan,aa=e.min,wa=e.max,pa=a.document,r,Da=function(g){var b,a,f;if(0===g.s)b=a=f=g.l;else{f=0.5>g.l?g.l*(1+g.s):g.l+g.s-g.l*g.s;var h=2*g.l-f;b=W(h,f,g.h+1/3);a=W(h,f,g.h);f=W(h,f,g.h-1/3)}return new r(255*b<<0,255*a<<0,255*f<<0,g.a)},W=function(g,b,a){0>a&&(a+=1);1<a&&(a-=1);
return a<1/6?g+6*(b-g)*a:0.5>a?b:a<2/3?g+6*(b-g)*(2/3-a):g},e=function(a,b,p,f){this.r=a;this.g=b;this.b=p;this.a=4>arguments.length?1:f},R=e.prototype;R.toString=function(){return"rgba("+[this.r<<0,this.g<<0,this.b<<0,this.a.toFixed(2)].join()+")"};R.adjustLightness=function(a){var b=r.toHSLA(this);b.l*=a;b.l=Math.min(1,Math.max(0,b.l));return Da(b)};R.adjustAlpha=function(a){return new r(this.r,this.g,this.b,this.a*a)};e.parse=function(a){var b;a+="";if(~a.indexOf("#"))return b=a.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/),
new r(parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16),b[4]?parseInt(b[4],16)/255:1);if(b=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new r(parseInt(b[1],10),parseInt(b[2],10),parseInt(b[3],10),b[4]?parseFloat(b[5],10):1);if(b=a.match(/hsla?\(([\d.]+)\D+([\d.]+)\D+([\d.]+)(\D+([\d.]+))?\)/))return Da({h:parseInt(b[1],10)/360,s:parseFloat(b[2],10),l:parseFloat(b[3],10),a:b[4]?parseFloat(b[5],10):1})};e.toHSLA=function(a){var b=a.r/255,p=a.g/255,f=a.b/255,h=Math.max(b,p,f),e=
Math.min(b,p,f),k,x=(h+e)/2,r;if(h===e)k=e=0;else{r=h-e;e=0.5<x?r/(2-h-e):r/(h+e);switch(h){case b:k=(p-f)/r+(p<f?6:0);break;case p:k=(f-b)/r+2;break;case f:k=(b-p)/r+4}k/=6}return{h:k,s:e,l:x,a:a.a}};r=e;var Ea,e=Math,B=e.sin,H=e.cos,Oa=e.tan,Fa=e.asin,Ga=e.atan2,S=e.PI,w=180/S,Pa=357.5291/w,Qa=0.98560028/w,Ra=1.9148/w,Sa=0.02/w,Ta=3E-4/w,Ua=102.9372/w,Ha=23.45/w,Va=280.16/w,Wa=360.9856235/w;Ea=function(a,b,e){e=-e/w;b/=w;a=a.valueOf()/864E5-0.5+2440588;var f=Pa+Qa*(a-2451545),h=Ra*B(f)+Sa*B(2*f)+
Ta*B(3*f),h=f+Ua+h+S,f=Fa(B(h)*B(Ha)),h=Ga(B(h)*H(Ha),H(h));e=Va+Wa*(a-2451545)-e-h;return{altitude:Fa(B(b)*B(f)+H(b)*H(f)*H(e)),azimuth:Ga(B(e),H(e)*B(b)-Oa(f)*H(b))-S/2}};var ba=Math.PI,Ia=ba/2,Xa=ba/4,Ya=180/ba,Za=256,xa=14,ca="latitude",da="longitude",F=0,x=1,G=2,P=3,qa=4,T=5,N=6;a.OSMBuildings=function(g){function b(c,a){var j={};c/=ea;a/=ea;j[ca]=0>=a?90:1<=a?-90:Ya*(2*Na(Ja(ba*(1-2*a)))-Ia);j[da]=360*(1===c?1:(c%1+1)%1)-180;return j}function e(){if(R&&!(C<xa)){var c=b(D-V,E-oa),a=b(D+A+V,E+
z+oa);ra&&ra.abort();var j={w:c[da],n:c[ca],e:a[da],s:a[ca],z:C},c=R.replace(/\{ *([\w_]+) *\}/g,function(c,d){return j[d]}),d=f,K=new XMLHttpRequest;K.onreadystatechange=function(){4===K.readyState&&K.status&&!(200>K.status||299<K.status)&&K.responseText&&d(JSON.parse(K.responseText))};K.open("GET",c);K.send(null);ra=K}}function f(c){var a,j,d,b=[],e,g=e=0;X=xa;I(C);ra=null;if(c&&c.meta.z===C){d=c.meta;j=c.data;if(s&&m&&s.z===d.z){e=s.x-d.x;g=s.y-d.y;c=0;for(a=m.length;c<a;c++)b[c]=m[c][G][0]+e+
","+(m[c][G][1]+g)}s=d;m=[];c=0;for(a=j.length;c<a;c++)d=[],j[c][x]>fa||(e=Ba(j[c][G]),8>e.length||(d[G]=e,d[qa]=Aa(e),d[F]=aa(j[c][F],fa),d[x]=j[c][x],e=d[G][0]+","+d[G][1],d[T]=!(b&&~b.indexOf(e)),d[P]=[],d[N]=[],m.push(d)));B()}}function h(c,a){var j,d,b=[],e,g,n,l,f,h,k,m,y=ya-C;e=0;for(g=c.length;e<g;e++)if(f=c[e],k=f[x]>>y,!(k>fa)){h=f[G];m=new Ca(h.length);n=0;for(l=h.length-1;n<l;n+=2)j=h[n+1],d=aa(1,wa(0,0.5-Ka(va(Xa+Ia*h[n]/180))/ba/2)),j=(j/360+0.5)*ea<<0,d=d*ea<<0,m[n]=j,m[n+1]=d;m=Ba(m);
if(!(8>m.length)){l=[];l[G]=m;l[qa]=Aa(m);l[F]=aa(f[F]>>y,fa);l[x]=k;l[T]=a;l[P]=f[P];l[N]=[];for(n=0;3>n;n++)l[P][n]&&(l[N][n]=l[P][n].adjustAlpha(M)+"");b.push(l)}}return b}function q(c,a,j){void 0===j&&(j=[]);var d,b,e,g=c[0]?c:c.features,n,l,f,h,m,k=a?1:0,y=a?0:1;if(g){d=0;for(c=g.length;d<c;d++)q(g[d],a,j);return j}"Feature"===c.type&&(n=c.geometry,d=c.properties);"Polygon"===n.type&&(l=[n.coordinates]);"MultiPolygon"===n.type&&(l=n.coordinates);if(l){a=d.height;if(d.color||d.wallColor)h=r.parse(d.color||
d.wallColor);d.roofColor&&(m=r.parse(d.roofColor));d=0;for(c=l.length;d<c;d++){g=l[d][0];f=[];b=n=0;for(e=g.length;b<e;b++)f.push(g[b][k],g[b][y]),n+=a||g[b][2]||0;if(n){e=b=[];var v=G;for(var t=void 0,u=void 0,p=void 0,z=void 0,x=0,s=void 0,A=void 0,s=0,A=f.length-3;s<A;s+=2)t=f[s],u=f[s+1],p=f[s+2],z=f[s+3],x+=t*z-p*u;if("CW"!==(0<x/2?"CW":"CCW")){t=[];for(u=f.length-2;0<=u;u-=2)t.push(f[u],f[u+1]);f=t}e[v]=f;b[F]=n/g.length<<0;b[P]=[h||null,h?h.adjustLightness(0.8):null,m?m:h?h.adjustLightness(1.2):
U];j.push(b)}}}return j}function w(c,a){c?(ga=q(c,a),X=0,I(C),s={n:90,w:-180,s:-90,e:180,x:0,y:0,z:C},m=h(ga,!0),B()):(ga=null,$())}function I(c){var a,j,d;C=c;ea=Za<<C;c=C;a=X;j=ya;c=aa(wa(c,a),j);M=1-aa(wa(0+0.4*((c-a)/(j-a)),0),0.4);S=Q.adjustAlpha(M)+"";ha=sa.adjustAlpha(M)+"";ia=U.adjustAlpha(M)+"";if(m){c=0;for(a=m.length;c<a;c++){d=m[c];d[N]=[];for(j=0;3>j;j++)d[P][j]&&(d[N][j]=d[P][j].adjustAlpha(M)+"")}}}function B(){clearInterval(za);O=0;ta.render();za=setInterval(function(){O+=0.1;if(1<
O){clearInterval(za);O=1;for(var c=0,a=m.length;c<a;c++)m[c][T]=0}ua.render();$()},33)}function H(){ua.render();ta.render();$()}function $(){J.clearRect(0,0,A,z);if(s&&m&&!(C<X||ja)){var c,a,j,d,b,e,g,f,l,h=D-s.x,p=E-s.y,r=ta.getMaxHeight(),w=[ka+h,la+p],y,v,t,u,q,B;m.sort(function(c,a){return k(a[qa],w)/a[F]-k(c[qa],w)/c[F]});c=0;for(a=m.length;c<a;c++)if(b=m[c],!(b[F]<=r)){v=!1;e=b[G];y=[];j=0;for(d=e.length-1;j<d;j+=2)y[j]=f=e[j]-h,y[j+1]=l=e[j+1]-p,v||(v=0<f&&f<A&&0<l&&l<z);if(v){j=b[T]?b[F]*
O:b[F];e=Y/(Y-j);b[x]&&(j=b[T]?b[x]*O:b[x],g=Y/(Y-j));f=[];j=0;for(d=y.length-3;j<d;j+=2)l=y[j],t=y[j+1],v=y[j+2],u=y[j+3],q=na(l,t,e),B=na(v,u,e),b[x]&&(t=na(l,t,g),u=na(v,u,g),l=t.x,t=t.y,v=u.x,u=u.y),(v-l)*(q.y-t)>(q.x-l)*(u-t)&&(J.fillStyle=l<v&&t<u||l>v&&t>u?b[N][1]||ha:b[N][0]||S,W([v,u,l,t,q.x,q.y,B.x,B.y])),f[j]=q.x,f[j+1]=q.y;J.fillStyle=b[N][2]||ia;J.strokeStyle=b[N][1]||ha;W(f,!0)}}}}function W(c,a){if(c.length){J.beginPath();J.moveTo(c[0],c[1]);for(var b=2,d=c.length;b<d;b+=2)J.lineTo(c[b],
c[b+1]);J.closePath();a&&J.stroke();J.fill()}}function na(c,a,b){return{x:(c-ka)*b+ka<<0,y:(a-la)*b+la<<0}}var A=0,z=0,V=0,oa=0,D=0,E=0,C,ea,ra,J,R,Q=new r(200,190,180),sa=Q.adjustLightness(0.8),U=Q.adjustLightness(1.2),S=Q+"",ha=sa+"",ia=U+"",ga,s,m,O=1,za,M=1,X=xa,ya=20,fa,ka,la,Y,ja,Z={container:null,items:[],init:function(c){var a=this.container=pa.createElement("DIV");a.style.pointerEvents="none";a.style.position="absolute";a.style.left=0;a.style.top=0;ua.init(this.add());ta.init(this.add());
J=this.add();c.appendChild(a);return a},add:function(){var c=pa.createElement("CANVAS");c.style.webkitTransform="translate3d(0,0,0)";c.style.imageRendering="optimizeSpeed";c.style.position="absolute";c.style.left=0;c.style.top=0;var a=c.getContext("2d");a.lineCap="round";a.lineJoin="round";a.lineWidth=1;try{a.mozImageSmoothingEnabled=!1}catch(b){}this.items.push(c);this.container.appendChild(c);return a},setSize:function(c,a){for(var b=this.items,d=0,e=b.length;d<e;d++)b[d].width=c,b[d].height=a}},
ua={context:null,color:new r(0,0,0),colorStr:this.color+"",date:null,alpha:1,length:0,directionX:0,directionY:0,init:function(c){this.context=c;this.setDate((new Date).setHours(10))},render:function(){var c=this.context,a,e,d,f;c.clearRect(0,0,A,z);if(s&&m&&!(C<X||ja))if(a=b(D+V,E+oa),a=Ea(this.date,a.latitude,a.longitude),!(0>=a.altitude)){e=1/va(a.altitude);d=0.4/e;this.directionX=Ma(a.azimuth)*e;this.directionY=La(a.azimuth)*e;this.color.a=d;f=this.color+"";var g,h,n,l,k,p=D-s.x,r=E-s.y,q,y,v,
t,u,w,B=[];c.beginPath();a=0;for(e=m.length;a<e;a++){h=m[a];y=!1;n=h[G];q=[];d=0;for(g=n.length-1;d<g;d+=2)q[d]=l=n[d]-p,q[d+1]=k=n[d+1]-r,y||(y=0<l&&l<A&&0<k&&k<z);if(y){n=h[T]?h[F]*O:h[F];h[x]&&(n=h[T]?h[x]*O:h[x]);l=null;d=0;for(g=q.length-3;d<g;d+=2)k=q[d],v=q[d+1],y=q[d+2],t=q[d+3],u=this.project(k,v,n),w=this.project(y,t,n),h[x]&&(v=this.project(k,v,n),t=this.project(y,t,n),k=v.x,v=v.y,y=t.x,t=t.y),(y-k)*(u.y-v)>(u.x-k)*(t-v)?(1===l&&c.lineTo(k,v),l=0,d||c.moveTo(k,v),c.lineTo(y,t)):(0===l&&
c.lineTo(u.x,u.y),l=1,d||c.moveTo(u.x,u.y),c.lineTo(w.x,w.y));c.closePath();B.push(q)}}c.fillStyle=f;c.fill();c.globalCompositeOperation="destination-out";c.beginPath();a=0;for(e=B.length;a<e;a++){f=B[a];c.moveTo(f[0],f[1]);d=2;for(g=f.length;d<g;d+=2)c.lineTo(f[d],f[d+1]);c.lineTo(f[0],f[1]);c.closePath()}c.fillStyle="#00ff00";c.fill();c.globalCompositeOperation="source-over"}},project:function(a,b,e){return{x:a+this.directionX*e,y:b+this.directionY*e}},setDate:function(a){this.date=a;this.render()}},
ta={context:null,maxHeight:8,init:function(a){this.context=a},render:function(){var a=this.context;a.clearRect(0,0,A,z);if(s&&m&&!(C<X||ja)){var b,e,d,f,g,h,k,l=D-s.x,q=E-s.y,p,r;a.beginPath();b=0;for(e=m.length;b<e;b++){d=m[b];r=!1;g=d[G];p=[];d=0;for(f=g.length-1;d<f;d+=2)p[d]=h=g[d]-l,p[d+1]=k=g[d+1]-q,r||(r=0<h&&h<A&&0<k&&k<z);if(r){d=0;for(f=p.length-3;d<f;d+=2)r=p[d],g=p[d+1],d?a.lineTo(r,g):a.moveTo(r,g);a.closePath()}}a.fillStyle=ia;a.strokeStyle=ha;a.stroke();a.fill()}},getMaxHeight:function(){return this.maxHeight}};
this.setStyle=function(a){a=a||{};if(a.color||a.wallColor)Q=r.parse(a.color||a.wallColor),S=Q.adjustAlpha(M)+"",sa=Q.adjustLightness(0.8),ha=sa.adjustAlpha(M)+"",U=Q.adjustLightness(1.2),ia=U.adjustAlpha(M)+"";a.roofColor&&(U=r.parse(a.roofColor),ia=U.adjustAlpha(M)+"");H();return this};this.geoJSON=function(c,b){if("object"===typeof c)w(c,!b);else{var e=pa.documentElement,d=pa.createElement("script");a.jsonpCallback=function(c){delete a.jsonpCallback;e.removeChild(d);w(c,!b)};e.insertBefore(d,e.lastChild).src=
c.replace(/\{callback\}/,"jsonpCallback")}return this};this.setCamOffset=function(a,b){ka=V+a;la=z+b};this.setMaxZoom=function(a){ya=a};this.setDate=function(a){ua.setDate(a);return this};this.appendTo=function(a){return Z.init(a)};this.loadData=e;this.onMoveEnd=function(){var a=b(D,E),f=b(D+A,E+z);H();s&&(a[ca]>s.n||a[da]<s.w||f[ca]<s.s||f[da]>s.e)&&e()};this.onZoomEnd=function(a){ja=!1;I(a.zoom);ga?(m=h(ga),H()):($(),e())};this.onZoomStart=function(){ja=!0;H()};this.setOrigin=function(a,b){D=a;
E=b};this.setSize=function(a,b){A=a;z=b;V=A/2<<0;oa=z/2<<0;ka=V;la=z;Y=A/1.5/va(45)<<0;Z.setSize(A,z);fa=Y-50};this.setZoom=I;this.render=$;R=g};a.OSMBuildings.VERSION="0.1.8a";a.OSMBuildings.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>'})(this);
L.BuildingsLayer=L.Class.extend({map:null,osmb:null,container:null,blockMoveEvent:null,lastX:0,lastY:0,initialize:function(a){L.Util.setOptions(this,a)},onMove:function(){var a=L.DomUtil.getPosition(this.map._mapPane);this.osmb.setCamOffset(this.lastX-a.x,this.lastY-a.y);this.osmb.render()},onMoveEnd:function(){if(this.blockMoveEvent)this.blockMoveEvent=!1;else{var a=L.DomUtil.getPosition(this.map._mapPane),k=this.map.getPixelOrigin();this.lastX=a.x;this.lastY=a.y;this.container.style.left=-a.x+"px";
this.container.style.top=-a.y+"px";this.osmb.setCamOffset(0,0);this.osmb.setSize(this.map._size.x,this.map._size.y);this.osmb.setOrigin(k.x-a.x,k.y-a.y);this.osmb.onMoveEnd()}},onZoomStart:function(){this.osmb.onZoomStart()},onZoomEnd:function(){var a=L.DomUtil.getPosition(this.map._mapPane),k=this.map.getPixelOrigin();this.osmb.setOrigin(k.x-a.x,k.y-a.y);this.osmb.onZoomEnd({zoom:this.map._zoom});this.blockMoveEvent=!0},addTo:function(a){a.addLayer(this);return this},onAdd:function(a){this.map=a;
a=this.map._panes.overlayPane;this.osmb?a.appendChild(this.container):(this.osmb=new OSMBuildings(this.options.url),this.container=this.osmb.appendTo(a),this.osmb.maxZoom=this.map._layersMaxZoom);a=L.DomUtil.getPosition(this.map._mapPane);var k=this.map.getPixelOrigin();this.osmb.setSize(this.map._size.x,this.map._size.y);this.osmb.setOrigin(k.x-a.x,k.y-a.y);this.osmb.setZoom(this.map._zoom);this.container.style.left=-a.x+"px";this.container.style.top=-a.y+"px";this.map.on({move:this.onMove,moveend:this.onMoveEnd,
zoomstart:this.onZoomStart,zoomend:this.onZoomEnd},this);this.map.attributionControl.addAttribution(OSMBuildings.ATTRIBUTION);this.osmb.loadData();this.osmb.render()},onRemove:function(a){a.attributionControl.removeAttribution(OSMBuildings.ATTRIBUTION);a.off({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd},this);this.container.parentNode.removeChild(this.container)},geoJSON:function(a,k){return this.osmb.geoJSON(a,k)},setStyle:function(a){return this.osmb.setStyle(a)},
setDate:function(a){return this.osmb.setDate(a)}});
