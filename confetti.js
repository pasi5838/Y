
!function(){"use strict";function t(t){return function(t){return new Promise((function(e,n){t((function(t){t instanceof Error?n(t):e(t)}))}))}(t)}function e(t,e,n){return t<e?e:t>n?n:t}function n(t){return Math.random()*t}function r(t){return Math.random()<t}function i(t){return Math.round(n(t))}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e+Math.random()*(t-e)}function a(t){return"rgb(".concat(t.r,",").concat(t.g,",").concat(t.b,")")}function s(t){var e,n,r=document.createElement("canvas");r.width=t.width,r.height=t.height;var i=r.getContext("2d");return i.fillStyle=t.color,i.beginPath(),i.arc(t.radius,t.radius,t.radius,0,2*Math.PI),i.fill(),e=r,n=t,URL.createObjectURL(new Blob([e.toDataURL("image/png")],{type:"application/octet-stream"}))}function u(t){return{
x:t.x*t.w+t.w/2,
y:t.y*t.h+t.h/2
}}var c,d,l,f,h,p,m,v=function(){return{
x:n(2)-1,
y:-1
}},y={};function g(n){if(!y[n])throw new Error("Missing confetti definition: ".concat(n));return y[n]}function w(t,e){return Object.keys(t).reduce((function(n,r){return n[r]=void 0!==e[r]?e[r]:t[r],n}),{})}function x(n){var r=function(n){var r=document.createElement("canvas");r.style.position="fixed",r.style.top="0px",r.style.left="0px",r.style.pointerEvents="none",r.style.zIndex=999999,r.width=window.innerWidth,r.height=window.innerHeight,document.body.appendChild(r);var i=r.getContext("2d"),o=[],a=function(){i.clearRect(0,0,r.width,r.height),o=o.filter((function(t){return!t.done})),o.forEach((function(t){return t.draw(i)})),requestAnimationFrame(a)};return a(),{canvas:r,add:(function(t){return o.push(t)}),reset:(function(){return o=[]})}}();return y[n.name]={draw:function(e){r.add(n.draw(e))},canvas:r.canvas}}function b(t){return{
x:t.x,
y:t.y,
angle:t.angle,
spread:t.spread,
startVelocity:t.startVelocity,
decay:t.decay,
gravity:t.gravity,
drift:t.drift,
ticks:t.ticks,
origin:{
x:t.origin.x,
y:t.origin.y
},
colors:t.colors,
shapes:t.shapes,
scalar:t.scalar,
zIndex:t.zIndex,
disableForReducedMotion:t.disableForReducedMotion
}}var M={};function C(){return M}window.confetti=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!c){var e=document.createElement("canvas");e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=999999,e.width=window.innerWidth,e.height=window.innerHeight,document.body.appendChild(e),c=e.getContext("2d"),d=e.width,l=e.height,window.addEventListener("resize",(function(){e.width=window.innerWidth,e.height=window.innerHeight,d=e.width,l=e.height}))}var n=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=0;n<e.length;n++){var r=e[n];t.push(r)}};return t.particleCount=t.particleCount||50,t.angle=void 0===t.angle?90:t.angle,t.spread=void 0===t.spread?45:t.spread,t.origin=t.origin||{x:.5,y:.5},t.colors=t.colors||["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],t.shapes=t.shapes||["square","circle"],t.gravity=void 0===t.gravity?1:t.gravity,t.decay=void 0===t.decay?.9:t.decay,t.drift=void 0===t.drift?0:t.drift,t.ticks=void 0===t.ticks?200:t.ticks,t.scalar=void 0===t.scalar?1:t.scalar,t.zIndex=void 0===t.zIndex?100:t.zIndex,t.disableForReducedMotion=t.disableForReducedMotion||!1;var r=b(t);return h||(h=function(){var t=[];return{
add:function(e){t.push(e)},
tick:function(){for(var e=[],n=0;n<t.length;n++)t[n].update(),t[n].draw(c),t[n].isDone()||e.push(t[n]);t=e,requestAnimationFrame(h.tick)}
}}(),h.tick()),m=h,m.add({update:function(){this.ticks+=1,this.x+=this.velocityX,this.y+=this.velocityY,this.velocityY+=this.gravity,this.velocityX+=this.drift,this.velocityX*=this.decay,this.velocityY*=this.decay},draw:function(t){t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),t.fillStyle=this.color,t.fill()},isDone:function(){return this.ticks>=this.totalTicks},x:r.origin.x*d,y:r.origin.y*l,radius:o(6,1)*r.scalar,velocityX:r.startVelocity*Math.cos(r.angle*Math.PI/180)*r.scalar,velocityY:r.startVelocity*Math.sin(r.angle*Math.PI/180)*r.scalar,gravity:r.gravity,decay:r.decay,drift:r.drift,scalar:r.scalar,color:r.colors[i(r.colors.length)],ticks:0,totalTicks:r.ticks}),Promise.resolve()}();
