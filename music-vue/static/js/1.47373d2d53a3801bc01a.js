webpackJsonp([1],{V5vd:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=n("4YfN"),i=n.n(e),a=n("2bvH"),o={name:"RankDetail",components:{ScrollView:n("lejI").a},data:function(){return{rankData:null,top:0,scale:1,rankId:""}},computed:i()({},Object(a.e)("music",["loading"]),Object(a.c)("music",["songList","topInfo"]),{getPic:function(){return this.topInfo?"url("+this.topInfo.pic_album+")":""}}),beforeRouteEnter:function(t,s,n){n(function(s){s.$store.dispatch("music/rankSongs",t.params.id)})},mounted:function(){this.top=this.$refs.photo.getBoundingClientRect().height},methods:i()({},Object(a.b)("player",["play"]),Object(a.d)("player",["syncList"]),{onClickLeft:function(){this.$router.back()},onScroll:function(t){var s=t.y;s>0&&(this.scale=(this.top+s)/this.top)},start:function(t){var s=this.$router.currentRoute.params.id;this.rankId!==s&&(this.syncList(),this.rankId=s),this.play(t)}})},r={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"rank"},[n("van-nav-bar",{attrs:{fixed:"","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("div",{ref:"photo",staticClass:"photo",style:{transform:"scale("+t.scale+")"}},[n("div",{style:{backgroundImage:t.getPic}})]),t._v(" "),n("scroll-view",{ref:"wrap",staticClass:"wrap",on:{scroll:t.onScroll}},[n("van-skeleton",{attrs:{title:"",row:10,loading:t.loading}},[t.topInfo?n("div",{staticClass:"list"},[n("div",{staticClass:"list-title"},[n("h2",[t._v(t._s(t.topInfo.ListName))]),t._v(" "),n("p",[t._v(t._s(t.topInfo.listennum))])]),t._v(" "),t._l(t.songList,function(s,e){return n("div",{key:e,staticClass:"list-item",on:{click:function(s){return t.start(e)}}},[n("p",{staticClass:"order"},[t._v(t._s(1+e))]),t._v(" "),n("div",{staticClass:"list-info"},[n("h3",[t._v(t._s(s.data.songname))]),t._v(" "),n("p",[t._v(t._s(s.data.singer[0].name))])])])})],2):n("div",{staticClass:"err"},[t._v("\n        加载失败\n      ")])])],1)],1)},staticRenderFns:[]};var c=n("C7Lr")(o,r,!1,function(t){n("hBE6")},"data-v-78e4c360",null);s.default=c.exports},hBE6:function(t,s){}});
//# sourceMappingURL=1.47373d2d53a3801bc01a.js.map