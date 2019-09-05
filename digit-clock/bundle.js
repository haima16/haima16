!function(t){var s={};function i(e){if(s[e])return s[e].exports;var h=s[e]={i:e,l:!1,exports:{}};return t[e].call(h.exports,h,h.exports,i),h.l=!0,h.exports}i.m=t,i.c=s,i.d=function(t,s,e){i.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,s){if(1&s&&(t=i(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var h in t)i.d(e,h,function(s){return t[s]}.bind(null,h));return e},i.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},i.p="",i(i.s=0)}([function(t,s,i){"use strict";function e(t){this.posX=t.posX||0,this.posY=t.posY||0,this.radius=t.radius||10,this.vx=t.vx||Math.random()-.5,this.vy=t.vy||Math.random()-.5,this.alive=!0,this.canMove=!1,this.birth=null,this.light=!1,this.color=t.color||`#${Math.random().toString(16).substr(3,6)}`}i.r(s),e.prototype={init(t){return this.initData(t),this.blender(),this},initData(t){this.WIDTH=t.WIDTH,this.HEIGHT=t.HEIGHT,this.ctx=t.ctx,this.life=15e3,this.gravity=.08,this.bounce=-.7},blender(){this.ctx.fillStyle=this.light?this.color:"#aaa",this.ctx.beginPath(),this.ctx.arc(this.posX,this.posY,this.radius,0,2*Math.PI),this.ctx.closePath(),this.ctx.fill()},toString(){return`alive:${this.alive};posX:${this.posX};posY:${this.posY};vx:${this.vx};vy:${this.vy};light:${this.light};bounce:${this.bounce};gravity:${this.gravity};radius:${this.radius};canMove:${this.canMove}`},collide(){let t=this.WIDTH,s=this.HEIGHT;new Date-this.birth>this.life&&(this.alive=!1),(this.posX-this.radius<=0||this.posX>=t)&&(this.alive=!1),(this.posY-this.radius<=0||this.posY+this.radius>=s)&&(this.posY=Math.min(this.posY,s-this.radius),this.posY=Math.max(this.posY,0),this.vy*=this.bounce)},update(){this.blender(),this.canMove&&(this.posX+=this.vx,this.posY+=this.vy,this.collide(),this.vy+=this.gravity)}};var h=e;function n(t){this.posX=t.posX||100,this.posY=t.posY||100,this.num=t.num||0,this.radius=t.radius||10,this.scene=t.scene,this._frame=[31599,11415,29671,29647,23497,31183,31215,29330,31727,31695],this.balls=[],this.rate=2.2,this.row=5,this.col=3}n.prototype={init(){return this.create(),this},create(){let t=this._frame[this.num],s=this.col,i=this.row-1;for(;t;){let e=1&t;if(t>>=1,s--||(s=this.col-1,i--),e){let t=this.posX+s*this.radius*this.rate,e=this.posY+i*this.radius*this.rate;this.balls.push(new h({posX:t,posY:e}).init(this.scene))}}},update(){this.balls.forEach(t=>t.update())}};var o=n;function r(t){this.num=0,this.pre=0,this.posX=t.posX,this.posY=t.posY,this.scene=t.scene,this.max=60,this.balls=[],this.tiles=[],this.round=null}r.prototype={init(){return this.format(this.num).forEach((t,s)=>{let i=new o({num:+t,scene:this.scene});i.posX=1.2*s*i.rate*i.radius*i.col+this.posX,i.posY=this.posY,i.init(),this.tiles[s]=i}),this},format:t=>Array.from(`00${t}`.slice(-2)),update(){this.format(this.num%this.max).forEach((t,s)=>{if(this.format(this.pre)[s]!=t){let i=new o({num:+t,scene:this.scene});this.tiles[s].balls.forEach(t=>{t.canMove=!0,t.light=!0,t.birth=new Date,this.balls.push(t)}),i.posX=1.2*s*i.rate*i.radius*i.col+this.posX,i.posY=this.posY,i.init(),this.tiles[s]=i}else this.tiles[s].update()}),this.pre=this.num,this.max===this.num&&(this.round&&this.round(),this.num%=this.max)}};var a=r;function u(t){this.ctx=t.ctx,this.HEIGHT=t.HEIGHT,this.WIDTH=t.WIDTH,this.chunks=[],this.count=0}u.prototype={init(){return this.chunks.push(new a({posX:100,posY:100,scene:this}).init()),this.chunks.push(new a({posX:300,posY:100,scene:this}).init()),this.chunks.push(new a({posX:500,posY:100,max:24,scene:this}).init()),this.update(),this},getTime(){let t=new Date;return{sec:t.getSeconds(),min:t.getMinutes(),hour:t.getHours()}},updateTime(){let{sec:t,min:s,hour:i}=this.getTime();this.chunks[0].num=i,this.chunks[1].num=s,this.chunks[2].num=t},update(){this.ctx.clearRect(0,0,this.WIDTH,this.HEIGHT),this.ctx.fillText(`当前小球数量${this.count}`,10,30),this.ctx.fillText("绚丽的数字时钟，By hans",this.WIDTH-250,30),this.count=0,this.updateTime(),this.chunks.forEach(t=>{t.update(),this.count+=t.balls.length;for(let s=t.balls.length-1;s>=0;s--)t.balls[s].alive?t.balls[s].update():t.balls.splice(s,1)}),requestAnimationFrame(this.update.bind(this))}};var l=u;let c=canvas.getContext("2d");c.font="20px Georgia";new l({ctx:c,HEIGHT:400,WIDTH:800}).init()}]);