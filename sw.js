if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let f={};const d=e=>i(e,o),b={module:{uri:o},exports:f,require:d};s[o]=Promise.all(a.map((e=>b[e]||d(e)))).then((e=>(r(...e),f)))}}define(["./workbox-5bddb35e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/favicon.ico",revision:"556f31acd686989b1afcf382c05846aa"},{url:"assets/img/about/1.jpg",revision:"2575636204bfca26aed96241ef1de53c"},{url:"assets/img/about/2.jpg",revision:"ff1488e0c0c2f35cdb6934c6cebd1dca"},{url:"assets/img/about/3.jpg",revision:"534f97d860e1413404d983f949cb6589"},{url:"assets/img/about/4.jpg",revision:"abc9a64304a77efba1e59dc241705ae5"},{url:"assets/img/close-icon.svg",revision:"eba2f30b2d9c1634ddefcf30460107b8"},{url:"assets/img/header-bg.jpg",revision:"e2d2a51c2932205b52f4a5ae1943eb97"},{url:"assets/img/htm.jpg",revision:"6f65bbdea8357834b6d337b914a78e6b"},{url:"assets/img/logos/facebook.svg",revision:"72e07fcccec0a9fcb7d1a6760254eff2"},{url:"assets/img/logos/google.svg",revision:"6524fba9fd5b6d514591c17a0e8b1243"},{url:"assets/img/logos/ibm.svg",revision:"1154b774e2337902e6f5e6a52df70df0"},{url:"assets/img/logos/microsoft.svg",revision:"0638770e5b4f63b108d0810e9224c06b"},{url:"assets/img/map-image.png",revision:"f40ed5b1e791e9d2479ba8b5e67f2df8"},{url:"assets/img/navbar-logo.svg",revision:"2c06174927f9ff7f6e693f3106bd5ff7"},{url:"assets/img/portfolio/1.jpg",revision:"9905d577f8f03570da7c236aa31c35de"},{url:"assets/img/portfolio/Angular.jpg",revision:"b5ba9b34207f3c6838d0d8003f76a3f7"},{url:"assets/img/portfolio/cache.jfif",revision:"708e52c9e3a4ce84192223f4a371e16d"},{url:"assets/img/portfolio/htm.png",revision:"8f89b71aef110bdf3c7950346824de50"},{url:"assets/img/portfolio/java.jpg",revision:"c2fc05d116f4c12a19dbd33af707b31f"},{url:"assets/img/portfolio/JS.jpg",revision:"0b562acfc0610f6619ce14bd063af81a"},{url:"assets/img/portfolio/php.jpg",revision:"587126d7355635cef272d6f1b47b4a5a"},{url:"assets/img/portfolio/Py.png",revision:"0b9ba4973e77ae76007b637943d1cd15"},{url:"assets/img/team/1.jpg",revision:"cf4124a863fc3409ecbb053b8a6e2823"},{url:"assets/img/team/2.jpg",revision:"b576f944c27041161f9381dc03c5a6ab"},{url:"assets/img/team/3.jpg",revision:"ada16363946a28d8b4d1fa38611f4433"},{url:"bolsa.html",revision:"0970bf8223d9ba01361efa7c624f4a42"},{url:"css/styles.css",revision:"a763a3a4398b9014f3e2bd594d3d644c"},{url:"Curso1.html",revision:"ffbc06b992a0b48e07f0348fb903c1ec"},{url:"Curso2.html",revision:"d6975c3443c31f08b1500e337bf09fb5"},{url:"Curso3.html",revision:"84cffd8b0993ad1ba967f3ad99f82fad"},{url:"Curso4.html",revision:"ae0f19089f80259f1bd57442a409a8fb"},{url:"Curso5.html",revision:"2c8c9142681893292bd965c3aba1099e"},{url:"Curso6.html",revision:"6b4e5726d054d06514bda702aa4a0ac2"},{url:"Cursos.html",revision:"f2f7fdaad844b1b1cd0e4883e28d1623"},{url:"index.html",revision:"55789fb8f40d5a4b13c0d0ced455d142"},{url:"js/scripts.js",revision:"62592101a59361038486076fda793b7e"},{url:"logo.png",revision:"d2aafe71a0c90d09d0c8681b9a15fed7"},{url:"manifest.json",revision:"a25f80240e1ad68171782bb4ebb55662"},{url:"ptest.html",revision:"079cbdc1a314ebb976d9e41ad7ad90ea"},{url:"redes.html",revision:"1c3f4284807b553cd30d643656c3e1e0"},{url:"scrippre1.js",revision:"e4336060a26d2430f82b3f2e8071b0d6"},{url:"test1.html",revision:"1dae4def45b3de866a753b84569110d4"},{url:"test2.html",revision:"773d2679e6b12dea9f38239504439f9d"},{url:"test3.html",revision:"054ccbdb9ee4ff2f994043c303d27b3a"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map