/* eslint-disable */
(function() {'use strict';function l(a){throw a;}var r=void 0,t,aa=this;function v(a,b){var c=a.split("."),d=aa;!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)!c.length&&b!==r?d[f]=b:d=d[f]?d[f]:d[f]={}};var y="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array&&"undefined"!==typeof DataView;new (y?Uint8Array:Array)(256);var z;for(z=0;256>z;++z)for(var B=z,ba=7,B=B>>>1;B;B>>>=1)--ba;var ca=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,
2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,
2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,
2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,
3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,
936918E3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],C=y?new Uint32Array(ca):ca;if(aa.Uint8Array!==r)try{eval("String.fromCharCode.apply(null, new Uint8Array([0]));")}catch(ea){String.fromCharCode.apply=function(a){return function(b,c){return a.call(String.fromCharCode,b,Array.prototype.slice.call(c))}}(String.fromCharCode.apply)};function D(a){var b=a.length,c=0,d=Number.POSITIVE_INFINITY,f,h,k,e,g,m,p,s,q,x;for(s=0;s<b;++s)a[s]>c&&(c=a[s]),a[s]<d&&(d=a[s]);f=1<<c;h=new (y?Uint32Array:Array)(f);k=1;e=0;for(g=2;k<=c;){for(s=0;s<b;++s)if(a[s]===k){m=0;p=e;for(q=0;q<k;++q)m=m<<1|p&1,p>>=1;x=k<<16|s;for(q=m;q<f;q+=g)h[q]=x;++e}++k;e<<=1;g<<=1}return[h,c,d]};var F=[],G;for(G=0;288>G;G++)switch(!0){case 143>=G:F.push([G+48,8]);break;case 255>=G:F.push([G-144+400,9]);break;case 279>=G:F.push([G-256+0,7]);break;case 287>=G:F.push([G-280+192,8]);break;default:l("invalid literal: "+G)}
var fa=function(){function a(a){switch(!0){case 3===a:return[257,a-3,0];case 4===a:return[258,a-4,0];case 5===a:return[259,a-5,0];case 6===a:return[260,a-6,0];case 7===a:return[261,a-7,0];case 8===a:return[262,a-8,0];case 9===a:return[263,a-9,0];case 10===a:return[264,a-10,0];case 12>=a:return[265,a-11,1];case 14>=a:return[266,a-13,1];case 16>=a:return[267,a-15,1];case 18>=a:return[268,a-17,1];case 22>=a:return[269,a-19,2];case 26>=a:return[270,a-23,2];case 30>=a:return[271,a-27,2];case 34>=a:return[272,
a-31,2];case 42>=a:return[273,a-35,3];case 50>=a:return[274,a-43,3];case 58>=a:return[275,a-51,3];case 66>=a:return[276,a-59,3];case 82>=a:return[277,a-67,4];case 98>=a:return[278,a-83,4];case 114>=a:return[279,a-99,4];case 130>=a:return[280,a-115,4];case 162>=a:return[281,a-131,5];case 194>=a:return[282,a-163,5];case 226>=a:return[283,a-195,5];case 257>=a:return[284,a-227,5];case 258===a:return[285,a-258,0];default:l("invalid length: "+a)}}var b=[],c,d;for(c=3;258>=c;c++)d=a(c),b[c]=d[2]<<24|d[1]<<
16|d[0];return b}();y&&new Uint32Array(fa);function I(a,b){this.l=[];this.m=32768;this.d=this.f=this.c=this.t=0;this.input=y?new Uint8Array(a):a;this.u=!1;this.n=J;this.K=!1;if(b||!(b={}))b.index&&(this.c=b.index),b.bufferSize&&(this.m=b.bufferSize),b.bufferType&&(this.n=b.bufferType),b.resize&&(this.K=b.resize);switch(this.n){case ga:this.a=32768;this.b=new (y?Uint8Array:Array)(32768+this.m+258);break;case J:this.a=0;this.b=new (y?Uint8Array:Array)(this.m);this.e=this.W;this.B=this.R;this.q=this.V;break;default:l(Error("invalid inflate mode"))}}
var ga=0,J=1;
I.prototype.r=function(){for(;!this.u;){var a=K(this,3);a&1&&(this.u=!0);a>>>=1;switch(a){case 0:var b=this.input,c=this.c,d=this.b,f=this.a,h=b.length,k=r,e=r,g=d.length,m=r;this.d=this.f=0;c+1>=h&&l(Error("invalid uncompressed block header: LEN"));k=b[c++]|b[c++]<<8;c+1>=h&&l(Error("invalid uncompressed block header: NLEN"));e=b[c++]|b[c++]<<8;k===~e&&l(Error("invalid uncompressed block header: length verify"));c+k>b.length&&l(Error("input buffer is broken"));switch(this.n){case ga:for(;f+k>d.length;){m=
g-f;k-=m;if(y)d.set(b.subarray(c,c+m),f),f+=m,c+=m;else for(;m--;)d[f++]=b[c++];this.a=f;d=this.e();f=this.a}break;case J:for(;f+k>d.length;)d=this.e({H:2});break;default:l(Error("invalid inflate mode"))}if(y)d.set(b.subarray(c,c+k),f),f+=k,c+=k;else for(;k--;)d[f++]=b[c++];this.c=c;this.a=f;this.b=d;break;case 1:this.q(ha,ia);break;case 2:for(var p=K(this,5)+257,s=K(this,5)+1,q=K(this,4)+4,x=new (y?Uint8Array:Array)(L.length),u=r,n=r,E=r,A=r,X=r,O=r,H=r,w=r,da=r,w=0;w<q;++w)x[L[w]]=K(this,3);if(!y){w=
q;for(q=x.length;w<q;++w)x[L[w]]=0}u=D(x);A=new (y?Uint8Array:Array)(p+s);w=0;for(da=p+s;w<da;)switch(X=M(this,u),X){case 16:for(H=3+K(this,2);H--;)A[w++]=O;break;case 17:for(H=3+K(this,3);H--;)A[w++]=0;O=0;break;case 18:for(H=11+K(this,7);H--;)A[w++]=0;O=0;break;default:O=A[w++]=X}n=y?D(A.subarray(0,p)):D(A.slice(0,p));E=y?D(A.subarray(p)):D(A.slice(p));this.q(n,E);break;default:l(Error("unknown BTYPE: "+a))}}return this.B()};
var ja=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],L=y?new Uint16Array(ja):ja,ka=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],la=y?new Uint16Array(ka):ka,ma=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],N=y?new Uint8Array(ma):ma,na=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],oa=y?new Uint16Array(na):na,pa=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,
11,11,12,12,13,13],P=y?new Uint8Array(pa):pa,Q=new (y?Uint8Array:Array)(288),R,qa;R=0;for(qa=Q.length;R<qa;++R)Q[R]=143>=R?8:255>=R?9:279>=R?7:8;var ha=D(Q),S=new (y?Uint8Array:Array)(30),T,ra;T=0;for(ra=S.length;T<ra;++T)S[T]=5;var ia=D(S);function K(a,b){for(var c=a.f,d=a.d,f=a.input,h=a.c,k=f.length,e;d<b;)h>=k&&l(Error("input buffer is broken")),c|=f[h++]<<d,d+=8;e=c&(1<<b)-1;a.f=c>>>b;a.d=d-b;a.c=h;return e}
function M(a,b){for(var c=a.f,d=a.d,f=a.input,h=a.c,k=f.length,e=b[0],g=b[1],m,p;d<g&&!(h>=k);)c|=f[h++]<<d,d+=8;m=e[c&(1<<g)-1];p=m>>>16;p>d&&l(Error("invalid code length: "+p));a.f=c>>p;a.d=d-p;a.c=h;return m&65535}t=I.prototype;
t.q=function(a,b){var c=this.b,d=this.a;this.C=a;for(var f=c.length-258,h,k,e,g;256!==(h=M(this,a));)if(256>h)d>=f&&(this.a=d,c=this.e(),d=this.a),c[d++]=h;else{k=h-257;g=la[k];0<N[k]&&(g+=K(this,N[k]));h=M(this,b);e=oa[h];0<P[h]&&(e+=K(this,P[h]));d>=f&&(this.a=d,c=this.e(),d=this.a);for(;g--;)c[d]=c[d++-e]}for(;8<=this.d;)this.d-=8,this.c--;this.a=d};
t.V=function(a,b){var c=this.b,d=this.a;this.C=a;for(var f=c.length,h,k,e,g;256!==(h=M(this,a));)if(256>h)d>=f&&(c=this.e(),f=c.length),c[d++]=h;else{k=h-257;g=la[k];0<N[k]&&(g+=K(this,N[k]));h=M(this,b);e=oa[h];0<P[h]&&(e+=K(this,P[h]));d+g>f&&(c=this.e(),f=c.length);for(;g--;)c[d]=c[d++-e]}for(;8<=this.d;)this.d-=8,this.c--;this.a=d};
t.e=function(){var a=new (y?Uint8Array:Array)(this.a-32768),b=this.a-32768,c,d,f=this.b;if(y)a.set(f.subarray(32768,a.length));else{c=0;for(d=a.length;c<d;++c)a[c]=f[c+32768]}this.l.push(a);this.t+=a.length;if(y)f.set(f.subarray(b,b+32768));else for(c=0;32768>c;++c)f[c]=f[b+c];this.a=32768;return f};
t.W=function(a){var b,c=this.input.length/this.c+1|0,d,f,h,k=this.input,e=this.b;a&&("number"===typeof a.H&&(c=a.H),"number"===typeof a.P&&(c+=a.P));2>c?(d=(k.length-this.c)/this.C[2],h=258*(d/2)|0,f=h<e.length?e.length+h:e.length<<1):f=e.length*c;y?(b=new Uint8Array(f),b.set(e)):b=e;return this.b=b};
t.B=function(){var a=0,b=this.b,c=this.l,d,f=new (y?Uint8Array:Array)(this.t+(this.a-32768)),h,k,e,g;if(0===c.length)return y?this.b.subarray(32768,this.a):this.b.slice(32768,this.a);h=0;for(k=c.length;h<k;++h){d=c[h];e=0;for(g=d.length;e<g;++e)f[a++]=d[e]}h=32768;for(k=this.a;h<k;++h)f[a++]=b[h];this.l=[];return this.buffer=f};
t.R=function(){var a,b=this.a;y?this.K?(a=new Uint8Array(b),a.set(this.b.subarray(0,b))):a=this.b.subarray(0,b):(this.b.length>b&&(this.b.length=b),a=this.b);return this.buffer=a};function U(a){a=a||{};this.files=[];this.v=a.comment}U.prototype.L=function(a){this.j=a};U.prototype.s=function(a){var b=a[2]&65535|2;return b*(b^1)>>8&255};U.prototype.k=function(a,b){a[0]=(C[(a[0]^b)&255]^a[0]>>>8)>>>0;a[1]=(6681*(20173*(a[1]+(a[0]&255))>>>0)>>>0)+1>>>0;a[2]=(C[(a[2]^a[1]>>>24)&255]^a[2]>>>8)>>>0};U.prototype.T=function(a){var b=[305419896,591751049,878082192],c,d;y&&(b=new Uint32Array(b));c=0;for(d=a.length;c<d;++c)this.k(b,a[c]&255);return b};function V(a,b){b=b||{};this.input=y&&a instanceof Array?new Uint8Array(a):a;this.c=0;this.ba=b.verify||!1;this.j=b.password}var sa={O:0,M:8},W=[80,75,1,2],Y=[80,75,3,4],Z=[80,75,5,6];function ta(a,b){this.input=a;this.offset=b}
ta.prototype.parse=function(){var a=this.input,b=this.offset;(a[b++]!==W[0]||a[b++]!==W[1]||a[b++]!==W[2]||a[b++]!==W[3])&&l(Error("invalid file header signature"));this.version=a[b++];this.ia=a[b++];this.Z=a[b++]|a[b++]<<8;this.I=a[b++]|a[b++]<<8;this.A=a[b++]|a[b++]<<8;this.time=a[b++]|a[b++]<<8;this.U=a[b++]|a[b++]<<8;this.p=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.z=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.J=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.h=a[b++]|a[b++]<<
8;this.g=a[b++]|a[b++]<<8;this.F=a[b++]|a[b++]<<8;this.ea=a[b++]|a[b++]<<8;this.ga=a[b++]|a[b++]<<8;this.fa=a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24;this.$=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.filename=String.fromCharCode.apply(null,y?a.subarray(b,b+=this.h):a.slice(b,b+=this.h));this.X=y?a.subarray(b,b+=this.g):a.slice(b,b+=this.g);this.v=y?a.subarray(b,b+this.F):a.slice(b,b+this.F);this.length=b-this.offset};function ua(a,b){this.input=a;this.offset=b}var va={N:1,ca:8,da:2048};
ua.prototype.parse=function(){var a=this.input,b=this.offset;(a[b++]!==Y[0]||a[b++]!==Y[1]||a[b++]!==Y[2]||a[b++]!==Y[3])&&l(Error("invalid local file header signature"));this.Z=a[b++]|a[b++]<<8;this.I=a[b++]|a[b++]<<8;this.A=a[b++]|a[b++]<<8;this.time=a[b++]|a[b++]<<8;this.U=a[b++]|a[b++]<<8;this.p=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.z=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.J=(a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24)>>>0;this.h=a[b++]|a[b++]<<8;this.g=a[b++]|a[b++]<<8;this.filename=
String.fromCharCode.apply(null,y?a.subarray(b,b+=this.h):a.slice(b,b+=this.h));this.X=y?a.subarray(b,b+=this.g):a.slice(b,b+=this.g);this.length=b-this.offset};
function $(a){var b=[],c={},d,f,h,k;if(!a.i){if(a.o===r){var e=a.input,g;if(!a.D)a:{var m=a.input,p;for(p=m.length-12;0<p;--p)if(m[p]===Z[0]&&m[p+1]===Z[1]&&m[p+2]===Z[2]&&m[p+3]===Z[3]){a.D=p;break a}l(Error("End of Central Directory Record not found"))}g=a.D;(e[g++]!==Z[0]||e[g++]!==Z[1]||e[g++]!==Z[2]||e[g++]!==Z[3])&&l(Error("invalid signature"));a.ha=e[g++]|e[g++]<<8;a.ja=e[g++]|e[g++]<<8;a.ka=e[g++]|e[g++]<<8;a.aa=e[g++]|e[g++]<<8;a.Q=(e[g++]|e[g++]<<8|e[g++]<<16|e[g++]<<24)>>>0;a.o=(e[g++]|
e[g++]<<8|e[g++]<<16|e[g++]<<24)>>>0;a.w=e[g++]|e[g++]<<8;a.v=y?e.subarray(g,g+a.w):e.slice(g,g+a.w)}d=a.o;h=0;for(k=a.aa;h<k;++h)f=new ta(a.input,d),f.parse(),d+=f.length,b[h]=f,c[f.filename]=h;a.Q<d-a.o&&l(Error("invalid file header size"));a.i=b;a.G=c}}t=V.prototype;t.Y=function(){var a=[],b,c,d;this.i||$(this);d=this.i;b=0;for(c=d.length;b<c;++b)a[b]=d[b].filename;return a};
t.r=function(a,b){var c;this.G||$(this);c=this.G[a];c===r&&l(Error(a+" not found"));var d;d=b||{};var f=this.input,h=this.i,k,e,g,m,p,s,q,x;h||$(this);h[c]===r&&l(Error("wrong index"));e=h[c].$;k=new ua(this.input,e);k.parse();e+=k.length;g=k.z;if(0!==(k.I&va.N)){!d.password&&!this.j&&l(Error("please set password"));s=this.S(d.password||this.j);q=e;for(x=e+12;q<x;++q)wa(this,s,f[q]);e+=12;g-=12;q=e;for(x=e+g;q<x;++q)f[q]=wa(this,s,f[q])}switch(k.A){case sa.O:m=y?this.input.subarray(e,e+g):this.input.slice(e,
e+g);break;case sa.M:m=(new I(this.input,{index:e,bufferSize:k.J})).r();break;default:l(Error("unknown compression type"))}if(this.ba){var u=r,n,E="number"===typeof u?u:u=0,A=m.length;n=-1;for(E=A&7;E--;++u)n=n>>>8^C[(n^m[u])&255];for(E=A>>3;E--;u+=8)n=n>>>8^C[(n^m[u])&255],n=n>>>8^C[(n^m[u+1])&255],n=n>>>8^C[(n^m[u+2])&255],n=n>>>8^C[(n^m[u+3])&255],n=n>>>8^C[(n^m[u+4])&255],n=n>>>8^C[(n^m[u+5])&255],n=n>>>8^C[(n^m[u+6])&255],n=n>>>8^C[(n^m[u+7])&255];p=(n^4294967295)>>>0;k.p!==p&&l(Error("wrong crc: file=0x"+
k.p.toString(16)+", data=0x"+p.toString(16)))}return m};t.L=function(a){this.j=a};function wa(a,b,c){c^=a.s(b);a.k(b,c);return c}t.k=U.prototype.k;t.S=U.prototype.T;t.s=U.prototype.s;v("Zlib.Unzip",V);v("Zlib.Unzip.prototype.decompress",V.prototype.r);v("Zlib.Unzip.prototype.getFilenames",V.prototype.Y);v("Zlib.Unzip.prototype.setPassword",V.prototype.L);}).call(window);

function requestArrayBuffer(url, success, error) {
    var xhr
    if (window.FormData && window.ArrayBuffer) {
        xhr = new XMLHttpRequest()
        xhr.addEventListener('load', function() {
            var successd = xhr.status >= 200 && xhr.status < 300 || xhr.status === 304;
            if (success&&successd) {
                success(xhr.response)
            } else {
                error(xhr.statusText);
            }
        })
        xhr.addEventListener('progress',progressSegment)
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer'
        xhr.send(null)
        return xhr;
    }
}





//return types
var TYPE_TEXT = 1;
var TYPE_URL = 2;
var TYPE_BLOB = 3;
var TYPE_RAW = 5;
var TYPE_FILES = 6;

var progressList = {};
var progressCb;
// the map of file extensions and return types
var DEFAULT_RETURN_OPTIONS = {
    'css': TYPE_TEXT,
    'html': TYPE_TEXT,
    'folder': TYPE_FILES,
}

// default callbacks if not specified
var DEFAULT_LOAD_OPTIONS = {
    success: function(e) {
        console.log(e)
    },
    error: function(e) {
        console.error(e);
    },
    progress: function(e) {
        console.log('loaded: ' + e * 100 + '%')
    }
}

// mime map used by blob
var MIME_MAP = {
    'js': 'text/javascript',
    'jpg': 'image/jpeg',
    'png': 'image/png',
}

// load entry
function initLoad(urls, options) {

    // overwrite default options
    var loadOption = $.extend({}, DEFAULT_LOAD_OPTIONS, options.loadOptions)
    var success = loadOption.success;
    var error = loadOption.error;
    // 进度
    progressCb = loadOption.progress;
    

    // overwrite default return types
    var returnOption = $.extend({}, DEFAULT_RETURN_OPTIONS, options.returnOptions)
    // 合并对象   如果有新属性就添加，没有新属性就覆盖旧属性内容
    MIME_MAP = $.extend(MIME_MAP, options.mimeOptions)

    // parse Uint8Array based on file extension or specific type
    function getType(name, rawData, type) {
        var fileType = getFileExt(name)
        var returnType = type || returnOption[fileType];
        switch (returnType) {
            case TYPE_TEXT:
                return Utf8ArrayToStr(rawData);
                break;
            case TYPE_BLOB:
                return getBlob(rawData, MIME_MAP[fileType])
                break;
            case TYPE_RAW:
                return rawData;
                break;
            case TYPE_URL:
            default:
                return getBlobUrl(rawData, MIME_MAP[fileType]);
        }

    }

    urls.map(function(v) {

        // handle cros problems
        var crosTail = btoa(window.location.origin)
        if (/\#/.test(v)) {
            v = v.split('#')[0]
        }
        if (/\?/.test(v)) {
            crosTail = '&' + crosTail
        } else {
            crosTail = '?' + crosTail
        }
        return v + crosTail;
    }).forEach(function(url) {
        requestArrayBuffer(url,function(data){
                // wrap arrayBuffer with Uint8Array buffer view
                var bufferView = new Uint8Array(data)
                //record execute start time
                // var now = performance.now()
                //create unzip object
                var unzip = new Zlib.Unzip(bufferView)

                //get file names from zip
                var files = unzip.getFilenames()

                //parse all files outside folders
                var baseFiles = files.filter(function(v) {
                    return !/\/|\\/g.test(v)
                }).reduce(function(pre, cur) {
                    var rawData = unzip.decompress(cur);
                    pre[cur] = getType(cur, rawData);
                    return pre;
                }, {})

                //parse files inside folders, only ONE level of folder tree supported
                var baseFolders = files.filter(function(v) {
                    return /^[^\/|\\]+(\/|\\)$/.test(v)
                }).reduce(function(pre, cur) {
                    if (returnOption['folder'] == TYPE_FILES) {

                        // return each file inside the folder based on its type
                        pre[cur] = files.filter(function(v) {
                            return v != cur && v.indexOf(cur) == 0;
                        }).map(function(v) {
                            return v.replace(cur, '')
                        }).reduce(function(pre, cur2) {
                            pre[cur2] = getType(cur2, unzip.decompress(cur + cur2))
                            return pre;
                        }, {})
                    } else {

                        // return all files inside the folder based on a specific type
                        var type = returnOption['folder']
                        pre[cur] = files.filter(function(v) {
                            return v != cur && v.indexOf(cur) == 0;
                        }).map(function(v) {
                            return v.replace(cur, '')
                        }).reduce(function(pre, cur2) {
                            pre[cur2] = getType(cur2, unzip.decompress(cur + cur2), type)
                            return pre;
                        }, {})
                    }
                    return pre;
                }, {})
                // console.log(baseFiles)
                // console.log(baseFolders)
                success($.extend({}, baseFiles, baseFolders))
                progressSegment(url,true)

                // console.log(performance.now() - now)
        },function(errorText){
            error(errorText)
        })
    })

}

// 文件名的扩展名
function getFileExt(name) {  
    //  按字符串按 . 分割成一个数组  从数组中取最后一个元素文件的扩展名     拼接成字符串  全部转换为小写
    return name.split('.').slice(-1).join('').toLowerCase()
}

function Utf8ArrayToStr(array) {
    var out, i, len, c;
    var char2, char3;

    out = "";
    len = array.length;
    i = 0;
    while (i < len) {
        c = array[i++];
        switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                // 0xxxxxxx
                out += String.fromCharCode(c);
                break;
            case 12:
            case 13:
                // 110x xxxx   10xx xxxx
                char2 = array[i++];
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                break;
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
                break;
        }
    }

    return out;
}

function getBlob(uit8ary, mime) {
    try {
        var hasBlob = window.Blob
        var hasBlobBuilder = window.BlobBuilder || window.webkieBlobBuilder || window.mozBlobBuilder
        var file
        if (hasBlob) {
            file = new Blob([uit8ary], { type: mime || 'text/plain' })
        }
        if (!hasBlob && hasBlobBuilder) {
            var builder = new hasBlobBuilder()
            builder.append(uit8ary)
            file = builder.getBlob(mime)
        }
        if (file) {
            return file
        } else {
            return ''
        }
    } catch (e) {
        alert('No Blob API Avilable')
        return ''
    }
}

function getBlobUrl(uit8ary, mime) {
    try {
        var hasBlob = window.Blob
        var hasBlobBuilder = window.BlobBuilder || window.webkieBlobBuilder || window.mozBlobBuilder
        var file
        if (hasBlob) {
            file = new Blob([uit8ary], { type: mime || 'text/plain' })
        }
        if (!hasBlob && hasBlobBuilder) {
            var builder = new hasBlobBuilder()
            builder.append(uit8ary)
            file = builder.getBlob()
        }
        if (file) {
            return (URL.createObjectURL || URL.webkitCreateObjectURL)(file)
        } else {
            return ''
        }
    } catch (e) {
        alert('No Blob API or createObjectURL Method Avilable')
        return ''
    }
}
function progressSegment(e,isSuccess){
    if(isSuccess){
        progressList[e] = {
            total:1,
            loaded:1,
            progress:1
        }
        return;
    }
    var xhr = e.target;
    var id = xhr.id;
    if(!e.lengthComputable){
        progressList[id] = {
            total:1,
            loaded:0,
            progress:0
        }
        return;
    }
    if(progressList[id]){
        progressList[id].loaded = e.loaded;
        progressList[id].progress = e.loaded / e.total;
    }else{
        progressList[id] = {
            total:e.total,
            loaded:e.loaded,
            progress:e.loaded / e.total
        }
    }

    var total = 0;
    var loaded = 0;
    for(var i in progressList){
        total += progressList[i].total;
        loaded += progressList[i].loaded;
    }
    progressCb(loaded/total)
}


// 导出语句

/*
module.exports = {
    TYPE_URL:TYPE_URL,
    TYPE_FILES:TYPE_FILES,
    TYPE_TEXT:TYPE_TEXT,
    TYPE_RAW:TYPE_RAW,
    TYPE_BLOB:TYPE_BLOB,
    initLoad:initLoad
}
*/
