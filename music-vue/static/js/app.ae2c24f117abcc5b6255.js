webpackJsonp([3],{"0d87":function(t,n,e){"use strict";e.d(n,"a",function(){return i});var i=function(t){return t.map(function(t){var n=t.songmid,e=t.songname,i=t.singer,a=t.albummid;return{mid:n,song:e,singer:i[0].name,pid:a}})}},"2Ssz":function(t,n){},"4e6e":function(t,n){},AqoR:function(t,n){},CVKS:function(t,n){},CzV3:function(t,n){},GnfN:function(t,n){},JVYo:function(t,n){},KQuV:function(t,n){},L0r4:function(t,n){},M7jv:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});e("2f25");var i=e("XzeX"),a=(e("cS5I"),e("3Qzg")),o=(e("g+F2"),e("MLpb")),r=(e("gRG7"),e("RAWL")),s=(e("+x9Z"),e("AQJZ")),c=(e("fQlO"),e("G0Hr")),l=(e("E7t3"),e("AEO1")),u=(e("caxj"),e("ZeNv")),f=(e("6t37"),e("ZVX4")),p=(e("WU42"),e("KnQa")),d=(e("g3c5"),e("Rxbw")),h=(e("I82+"),e("Pg/2")),m=(e("wtVb"),e("cx9g")),g=(e("2tlI"),e("V7ot")),v=(e("WS+D"),e("tSaw")),y=(e("eAJP"),e("lcXR")),S=(e("tjYF"),e("4Xrf")),w=e("xd7I"),b=e("4YfN"),_=e.n(b),L=(e("/QXl"),e("2bvH")),k={methods:_()({},Object(L.d)("player",["showListState","playerShowState","toggle"]),{foldHandle:function(){this.listShow=!this.listShow}}),computed:_()({},Object(L.e)("player",["listShow","isPlay","loading","currentIndex"]),Object(L.c)("player",["getInfo"]),{getPic:function(){return this.getInfo?"https://y.gtimg.cn/music/photo_new/T002R500x500M000"+this.getInfo.pid+".jpg":""}})},x={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:-1!==t.currentIndex,expression:"currentIndex !== -1"}],staticClass:"min-player"},[e("div",{staticClass:"bar",on:{click:t.playerShowState}},[e("div",{staticClass:"wrap"},[t.loading?e("van-loading"):e("img",{attrs:{src:t.getPic,alt:""}})],1),t._v(" "),t.getInfo?e("div",{staticClass:"info"},[e("h2",[t._v(t._s(t.getInfo.song))]),t._v(" "),e("p",[t._v(t._s(t.getInfo.singer))])]):t._e(),t._v(" "),e("div",{staticClass:"ctrl"},[e("van-icon",{attrs:{name:t.isPlay?"pause-circle-o":"play-circle-o"},on:{click:function(n){return n.stopPropagation(),t.toggle(n)}}}),t._v(" "),e("van-icon",{attrs:{name:t.listShow?"descending":"ascending"},on:{click:function(n){return n.stopPropagation(),t.showListState(n)}}})],1)])])},staticRenderFns:[]};var I=e("C7Lr")(k,x,!1,function(t){e("U4Jf")},"data-v-abdff580",null).exports,C=e("lejI"),P=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return(""+n.repeat(e)+t).slice(-1*e)},j={name:"Player",components:{ScrollView:C.a},data:function(){return{value:0,isShow:!1}},methods:_()({},Object(L.d)("player",["showListState","playerShowState","toggle"]),Object(L.b)("player",["playPrev","playNext"]),{enter:function(){this.isShow=!0},leave:function(){this.isShow=!1}}),filters:{clockTime:function(t){var n=t/60>>0;return t%=60,P(n)+":"+P(~~t)}},computed:_()({},Object(L.c)("player",["getInfo"]),Object(L.e)("player",["playerShow","player","isPlay"]),{getPic:function(){return this.getInfo?"https://y.gtimg.cn/music/photo_new/T002R500x500M000"+this.getInfo.pid+".jpg":""}})},T={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"player"},on:{"after-enter":t.enter,leave:t.leave}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.playerShow,expression:"playerShow"}],staticClass:"player"},[e("img",{staticClass:"bg",attrs:{src:t.getPic,alt:""}}),t._v(" "),e("div",{staticClass:"top"},[e("transition",{attrs:{name:"top"}},[t.getInfo?e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"title"},[e("van-icon",{attrs:{name:"arrow-left"},on:{click:function(n){return t.playerShowState(!1)}}}),t._v(" "),e("h2",[t._v(t._s(t.getInfo.song))]),t._v(" "),e("p",[t._v(t._s(t.getInfo.singer))])],1):t._e()])],1),t._v(" "),e("div",{staticClass:"cont"},[e("transition",{attrs:{name:"photo"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}]},[e("img",{staticClass:"pane",style:{animationPlayState:t.isPlay?"running":"paused"},attrs:{src:t.getPic,alt:""}})])])],1),t._v(" "),e("transition",{attrs:{name:"bottom"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"bottom"},[e("div",{staticClass:"bar"},[e("span",[t._v(t._s(t._f("clockTime")(t.player.currentTime)))]),t._v(" "),e("van-slider",{attrs:{min:0,max:t.player.duration,disabled:""},model:{value:t.player.currentTime,callback:function(n){t.$set(t.player,"currentTime",n)},expression:"player.currentTime"}}),t._v(" "),e("span",[t._v(t._s(t._f("clockTime")(t.player.duration)))])],1),t._v(" "),e("div",{staticClass:"opt"},[e("van-icon",{attrs:{name:"arrow-left"},on:{click:t.playPrev}}),t._v(" "),e("van-icon",{attrs:{name:t.isPlay?"pause-circle-o":"play-circle-o"},on:{click:t.toggle}}),t._v(" "),e("van-icon",{attrs:{name:"arrow"},on:{click:t.playNext}})],1)])])],1)])},staticRenderFns:[]};var N=e("C7Lr")(j,T,!1,function(t){e("eJTR")},"data-v-6219743e",null).exports,O={components:{ScrollView:C.a},methods:_()({},Object(L.d)("music",["addCollection"]),Object(L.d)("player",["liked"]),Object(L.d)("player",["showListState","showDetail"]),Object(L.b)("player",["play","removeSongList"]),{remove:function(t){var n=this;this.$dialog.confirm({message:"确定把歌曲从当前播放列表移除？"}).then(function(e){n.removeSongList(t)}).catch(function(t){})},collect:function(t){this.addCollection(this.playerList[t]),this.liked(t)}}),watch:{playerList:function(t){this.collection.forEach(function(n){t.some(function(t,e){if(t.mid===n.mid)return t.liked=!0,!0})})}},computed:_()({},Object(L.e)("player",["playerList","currentIndex","listShow"]),Object(L.e)("music",["collection"]))},D={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"list"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"player-list"},[e("van-nav-bar",{attrs:{title:"播放列表("+t.playerList.length+")","right-text":"关闭"},on:{"click-right":t.showListState}}),t._v(" "),e("scroll-view",{staticClass:"scroll-view",attrs:{data:t.playerList}},[e("ul",t._l(t.playerList,function(n,i){return e("li",{key:i,class:{active:i===t.currentIndex}},[e("van-icon",{attrs:{name:"music-o"}}),t._v(" "),e("p",{on:{click:function(n){return t.play(i)}}},[t._v(t._s(n.song)),e("span",[t._v(t._s(n.singer))])]),t._v(" "),e("van-icon",{staticClass:"like",attrs:{name:n.liked?"like":"like-o"},on:{click:function(n){return t.collect(i)}}}),t._v(" "),e("van-icon",{attrs:{name:"cross"},on:{click:function(n){return t.remove(i)}}})],1)}),0)])],1)])},staticRenderFns:[]};var E={name:"App",components:{MinPlayer:I,Player:N,PlayerList:e("C7Lr")(O,D,!1,function(t){e("CVKS")},"data-v-feca87ec",null).exports}},K={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1),this._v(" "),n("min-player"),this._v(" "),n("player"),this._v(" "),n("player-list")],1)},staticRenderFns:[]},R=e("C7Lr")(E,K,!1,null,null,null).exports,V=e("7LQH");w.a.use(V.a);var H=new V.a({routes:[{path:"/rank/:id",name:"rank",component:function(){return e.e(1).then(e.bind(null,"V5vd"))}},{path:"/",name:"home",component:function(){return e.e(0).then(e.bind(null,"ncI9"))}}]}),J=e("Poa6"),q=e.n(J),$=e("KH7x"),U=e.n($),Q=e("rVsN"),A=e.n(Q),M=e("IHPB"),F=e.n(M),X=e("gyMJ"),z=e("VKKs"),Z={namespaced:!0,state:{rankData:null,loading:!0,rankList:[],mvData:[],slider:[],hotKey:[],historySearch:[],albumList:[],albumPage:0,collection:[]},mutations:{rankData:function(t,n){t.rankData=n},loading:function(t,n){t.loading=n},rankList:function(t,n){t.rankList=n},mvData:function(t,n){t.mvData=n},slider:function(t,n){t.slider=n},hotKey:function(t,n){t.hotKey=n},addHistorySearch:function(t,n){var e=t.historySearch,i=e.indexOf(n);~i&&e.splice(i,1),e.unshift(n)},clearHistorySearch:function(t){t.historySearch=[]},deleteHistorySearch:function(t,n){t.historySearch.splice(n,1)},albumList:function(t,n){var e;(e=t.albumList).push.apply(e,F()(n))},albumPage:function(t){t.albumPage++},collection:function(t,n){t.collection=n},addCollection:function(t,n){var e=t.collection.findIndex(function(t){return t.mid===n.mid});~e?t.collection.splice(e,1):t.collection.push(n),Object(z.d)(t.collection)},removeCollection:function(t,n){var e=t.collection.splice(n,1)[0],i=W.state.player.playerList;i.some(function(t,n){if(t.mid===e.mid)return t.liked=!1,i.splice(n,1,t),!0})}},getters:{songList:function(t){return t.rankData&&t.rankData.songlist||[]},topInfo:function(t){return t.rankData&&t.rankData.topinfo},topList:function(t){return t.rankList.topList}},actions:{rankSongs:function(t,n){var e=t.commit;e("loading",!0),e("rankData",null),X.f(n).then(function(t){if(!t.code){var n=t.songlist,i=t.topinfo;e("rankData",{songlist:n,topinfo:i}),W.commit("player/songList",n.map(function(t){return t.data}))}e("loading",!1)})},rankList:function(t){var n=t.commit;X.e().then(function(t){t.code||n("rankList",t.data)})},homeData:function(t){var n=t.commit;A.a.all([X.b(),X.a()]).then(function(t){var e=U()(t,2),i=e[0],a=e[1];i.code||n("slider",i.data.slider),a.code||n("mvData",a.data.shoubomv)})},hotkey:function(t){var n=t.commit;X.c().then(function(t){t.code||n("hotKey",t.data)})},albumList:function(t){var n=t.commit,e=t.state;return X.d(e.albumPage).then(function(t){t.code||(n("albumList",t.data.albumlist),n("albumPage"))})}}},Y=e("0d87"),B={listShow:!1,playerShow:!1,isPlay:!1,songList:[],playerList:[],currentIndex:-1,loading:!0,mid:"",firstError:"",historySongs:[],player:new QMplayer({onplay:function(){B.loading=!1,B.isPlay=!0},onended:function(){B.currentIndex++}})},G={namespaced:!0,actions:{removeSongList:function(t,n){var e=t.state,i=t.dispatch;e.currentIndex===n?(e.player.pause(),e.songList.splice(n,1),i("play",n)):e.songList.splice(n,1)},playNext:function(t){var n=t.dispatch,e=t.state;(0,t.commit)("currentIndex",e.currentIndex+1),n("start")},playPrev:function(t){var n=t.dispatch,e=t.state;(0,t.commit)("currentIndex",e.currentIndex-1),n("start")},play:function(t){var n=t.state,e=t.commit,i=t.dispatch,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=n.playerList[a].mid;n.mid!==o&&(e("currentIndex",a),e("playerShowState",!0),i("start"))},start:function(t){var n=t.state,e=t.commit,i=t.getters,a=t.dispatch,o=i.getInfo,r=o.error,s=o.mid;if(n.firstError!==s)if(r)a("playNext");else{e("mid",s),n.player.play(n.mid),n.loading=!0;var c=setTimeout(function(t){n.loading&&g.a.alert({message:"加载失败！"}).then(function(t){n.firstError||(n.firstError=s),n.playerList[n.currentIndex].error=!0,a("playNext")}),e("addHistorySongs",i.getInfo),Object(z.c)(n.historySongs),clearTimeout(c)},5e3)}else g.a.alert({message:"当前列表全部不能播放，是否清空？"}).then(function(t){e("reset")})}},state:B,getters:{getInfo:function(t){return t.playerList[t.currentIndex]}},mutations:{showListState:function(t){t.listShow=!t.listShow},playerShowState:function(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.playerShow=n},songList:function(t,n){t.songList=Object(Y.a)(n)},addSongList:function(t,n){t.songList.some(function(t){return t.mid===n.mid})||(t.songList.unshift(n),t.playerList.unshift(n))},clearSongList:function(t){t.songList=[]},playerList:function(t,n){t.playerList=n},liked:function(t,n){var e=t.playerList[n];e.liked=!e.liked,t.playerList.splice(n,1,e)},currentIndex:function(t,n){var e=t.playerList.length;t.currentIndex=n<0?e-1:n>=e?0:n},syncList:function(t){t.playerList=t.songList},toggle:function(t){t.isPlay=!t.isPlay,t.player.toggle()},mid:function(t,n){t.mid=n},setCurrentTime:function(t,n){t.currentTime=n},historySongs:function(t,n){t.historySongs=n},addHistorySongs:function(t,n){t.historySongs.some(function(t){return t.mid===n.mid})||t.historySongs.push(n)},removeHistorySongs:function(t,n){t.historySongs.splice(n,1),Object(z.c)(t.historySongs)},reset:function(t){t.listShow=!1,t.playerShow=!1,t.isPlay=!1,t.songList=[],t.playerList=[],t.currentIndex=-1,t.mid="",t.firstError=""}}};w.a.use(L.a);var W=new L.a.Store({modules:{music:Z,player:G}});w.a.use(q.a,5e3),w.a.use(i.a).use(a.a).use(o.a).use(r.a).use(s.a).use(c.a).use(l.a).use(u.a).use(f.a).use(p.a).use(d.a).use(h.a).use(m.a).use(g.a).use(v.a).use(y.a).use(S.a),w.a.config.productionTip=!1,new w.a({el:"#app",router:H,store:W,components:{App:R},template:"<App/>"})},U4Jf:function(t,n){},VKKs:function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"c",function(){return r}),e.d(n,"b",function(){return s}),e.d(n,"d",function(){return c});var i=e("3cXf"),a=e.n(i),o=function(){return JSON.parse(localStorage.getItem("h-songs")||"[]")},r=function(t){return localStorage.setItem("h-songs",a()(t))},s=function(){return JSON.parse(localStorage.getItem("l-songs")||"[]")},c=function(t){return localStorage.setItem("l-songs",a()(t))}},VTEE:function(t,n){},ZbCe:function(t,n){},ca7p:function(t,n){},eJTR:function(t,n){},gyMJ:function(t,n,e){"use strict";e.d(n,"g",function(){return s}),e.d(n,"f",function(){return c}),e.d(n,"e",function(){return l}),e.d(n,"c",function(){return u}),e.d(n,"b",function(){return f}),e.d(n,"a",function(){return p}),e.d(n,"d",function(){return d});var i=e("4YfN"),a=e.n(i),o=e("xd7I");function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:"https://c.y.qq.com/")+t,o.a.jsonp(t,a()({callbackQuery:"jsonpCallback",format:"jsonp",inCharset:"utf-8",outCharset:"utf-8"},n))}var s=function(t,n){return r("soso/fcgi-bin/client_search_cp",{w:t,p:n,n:15,g_tk:5381})},c=function(t){return r("v8/fcg-bin/fcg_v8_toplist_cp.fcg",{topid:t})},l=function(){return r("v8/fcg-bin/fcg_myqq_toplist.fcg",{g_tk:5381,platform:"h5",needNewCode:1,_:(new Date).getTime()})},u=function(){return r("splcloud/fcgi-bin/gethotkey.fcg")},f=function(){return r("musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg")},p=function(){return r("v8/fcg-bin/fcg_first_yqq.fcg",{tpl:"v12",page:"other"})},d=function(){return r("v8/fcg-bin/album_library?g_tk=1278911659&platform=yqq&needNewCode=0&cmd=firstpage&pagesize=20&sort=1&language=-1&genre=0&year=1&pay=0&type=-1&company=-1",{page:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0})}},iloK:function(t,n){},iyl7:function(t,n){},lejI:function(t,n,e){"use strict";var i=e("hRKE"),a=e.n(i),o=e("/QXl"),r={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null},beforeScroll:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20},pullUpLoad:{validator:function(t){return-1!==["boolean","number","string"].indexOf(void 0===t?"undefined":a()(t))}}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},this.refreshDelay)}},methods:{_initScroll:function(){var t=this;if(this.$refs.wrapper){var n={probeType:this.probeType,click:this.click},e="number"==typeof this.pullUpLoad?this.pullUpLoad:30;n.pullUpLoad={threshold:e},this.instance=new o.a(this.$refs.wrapper,n),this.instance.on("scroll",function(n){t.$emit("scroll",n)}),(this.pullUpLoad||e)&&this.instance.on("pullingUp",function(){t.$emit("pullUp",t.instance),t.instance.finishPullUp()}),this.beforeScroll&&this.instance.on("beforeScrollStart",function(){return t.$emit("beforeScroll")})}},disable:function(){this.instance&&this.instance.disable()},enable:function(){this.instance&&this.instance.enable()},refresh:function(){this.instance&&this.instance.refresh()},scrollTo:function(){this.instance&&this.instance.scrollTo.apply(this.instance,arguments)},scrollToElement:function(){this.instance&&this.instance.scrollToElement.apply(this.instance,arguments)}}},s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrapper",staticClass:"wrapper"},[this._t("default")],2)},staticRenderFns:[]},c=e("C7Lr")(r,s,!1,null,null,null);n.a=c.exports},mFEP:function(t,n){},meJn:function(t,n){},q0ms:function(t,n){},r3sw:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.ae2c24f117abcc5b6255.js.map