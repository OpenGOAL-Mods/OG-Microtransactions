(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-461a09f2"],{"0160":function(t,e,i){},"0481":function(t,e,i){"use strict";var n=i("23e7"),s=i("a2bf"),a=i("7b0b"),r=i("50c4"),o=i("a691"),l=i("65f0");n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=a(this),i=r(e.length),n=l(e,0);return n.length=s(n,e,e,i,0,void 0===t?1:o(t)),n}})},"22da":function(t,e,i){"use strict";var n=i("490a");e["a"]=n["a"]},"25a8":function(t,e,i){},3408:function(t,e,i){},4804:function(t,e,i){},5157:function(t,e,i){},"615b":function(t,e,i){},"6ece":function(t,e,i){},7435:function(t,e,i){},"86cc":function(t,e,i){},"87cf":function(t,e,i){t.exports=i.p+"img/logo-text-colored.png"},"950d":function(t,e,i){"use strict";i("5157")},9911:function(t,e,i){"use strict";var n=i("23e7"),s=i("857a"),a=i("af03");n({target:"String",proto:!0,forced:a("link")},{link:function(t){return s(this,"a","href",t)}})},a2bf:function(t,e,i){"use strict";var n=i("e8b5"),s=i("50c4"),a=i("0366"),r=function(t,e,i,o,l,c,u,d){var h,p=l,v=0,f=!!u&&a(u,d,3);while(v<o){if(v in i){if(h=f?f(i[v],v,e):i[v],c>0&&n(h))p=r(t,e,h,s(h.length),p,c-1)-1;else{if(p>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[p]=h}p++}v++}return p};t.exports=r},bb51:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"bg-img",attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",align:"center"}},[n("v-img",{attrs:{"max-height":"150","max-width":"250",src:i("87cf")}}),n("br"),n("h4",{staticClass:"text-stroke"},[t._v(" Reviving the Language that Brought us the Jak & Daxter Series ")]),n("br"),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{href:"#project-status",rounded:"",color:"pink darken-4"}},[n("v-icon",[t._v("mdi-calendar-check")]),t._v(" Project Status ")],1)],1),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{to:"/gallery",rounded:"",color:"green darken-1"}},[n("v-icon",[t._v("mdi-image")]),t._v(" Gallery ")],1)],1),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{href:"/jak-project/api-docs.html",target:"_blank",rounded:"",color:"indigo darken-1"}},[n("v-icon",[t._v("mdi-file-document")]),t._v(" Documentation ")],1)],1),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{href:"https://github.com/water111/jak-project",target:"_blank",rounded:"",color:"deep-purple darken-1"}},[n("v-icon",[t._v("mdi-git")]),t._v(" Contribute ")],1)],1)],1)],1)],1),n("v-row",{staticStyle:{"margin-top":"3em"}},[n("v-col",{staticClass:"orange--text text--darken-1",attrs:{align:"center",justify:"center",cols:"12",id:"project-status"}},[n("h2",[t._v("Project Status")])]),n("v-container",{staticStyle:{"margin-top":"2em"}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-row",[n("v-col",{staticClass:"orange--text text--darken-2",attrs:{align:"center",justify:"center"}},[n("h3",[t._v("Progress Tracker")])])],1),n("v-row",[n("v-col",{staticClass:"orange--text text--darken-3",attrs:{align:"center",justify:"center"}},[n("h4",[t._v("Jak 1 - Black Label - NTSC")])])],1),n("v-row",[n("v-col",{staticClass:"orange--text text--darken-4",attrs:{align:"center",justify:"center"}},[n("h5",[t._v("Decompilation")])])],1),n("v-row",[n("v-col",{attrs:{align:"center",justify:"center"}},[n("v-icon",{staticClass:"green--text"},[t._v("mdi-check")]),t._v(" Files Finished - "+t._s(t.jak1BlackLabelStatus.srcFilesFinished)+" / "+t._s(t.jak1BlackLabelStatus.srcFilesTotal)+" ")],1)],1),n("v-row",[n("v-col",{attrs:{align:"center",justify:"center"}},[n("v-icon",{staticClass:"yellow--text"},[t._v("mdi-timer-outline")]),t._v(" Files In Progress - "+t._s(t.jak1BlackLabelStatus.srcFilesStarted)+" / "+t._s(t.jak1BlackLabelStatus.srcFilesTotal)+" ")],1)],1),n("v-row",[n("v-col",{staticClass:"orange--text text--darken-4",attrs:{align:"center",justify:"center"}},[n("h5",[t._v("Renderers and Core Pieces")])])],1),n("v-row",t._l(t.majorMilestones.jak1,(function(e,i){return n("v-col",{key:"jak1-milestone"+i,attrs:{cols:"12",md:"6",align:"center",justify:"center"}},["Completed"===e.status?n("v-icon",{staticClass:"green--text"},[t._v(" mdi-check ")]):n("v-icon",{staticClass:"yellow--text"},[t._v(" mdi-timer-outline ")]),t._v(" "+t._s(e.name)+" ")],1)})),1)],1),n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-row",[n("v-col",{staticClass:"orange--text text--darken-2",attrs:{align:"center",justify:"center"}},[n("h3",[t._v("GitHub Updates")])])],1),n("v-row",[n("v-col",[n("v-timeline",{attrs:{dense:""}},t._l(t.recentPRs,(function(e,i){return n("v-timeline-item",{key:"pr"+i,scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-avatar",[n("img",{attrs:{src:e.user.avatar_url}})])]},proxy:!0},{key:"opposite",fn:function(){return[n("span",[t._v(t._s(e.user.login))])]},proxy:!0}],null,!0)},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",[n("h5",[t._v(t._s(e.title))])]),n("v-card-text",[t._v(" "+t._s(e.body)+" ")]),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"accent",href:e.html_url,target:"_blank"}},[t._v(" View Change ")])],1)],1)],1)})),1)],1)],1)],1)],1)],1)],1)],1)},s=[],a=i("1da1"),r=(i("fb6a"),i("d3b7"),i("96cf"),i("f5f2")),o=r,l={name:"Home",components:{},data:function(){return{recentPRs:[],majorMilestones:{jak1:[{name:"Sky",status:"Completed"},{name:"TFrag",status:"Completed"},{name:"TIE",status:"Completed"},{name:"Shrub",status:"In-Progress"},{name:"Ocean",status:"In-Progress"},{name:"MERC",status:"In-Progress"},{name:"Shadow",status:"In-Progress"},{name:"Generic",status:"In-Progress"},{name:"Collision",status:"In-Progress"},{name:"Bones",status:"In-Progress"}]},jak1BlackLabelStatus:{srcFilesTotal:o.jak1.fileProgress.src_files_total,srcFilesFinished:o.jak1.fileProgress.src_files_finished,srcFilesStarted:o.jak1.fileProgress.src_files_started}}},mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.loadRecentPRs();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{truncateString:function(t,e){return t.length<=e?t:t.slice(0,e)+"..."},loadRecentPRs:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,i,n,s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/search/issues?q=repo:water111/jak-project+is:pr+is:merged&sort=updated");case 2:return e=t.sent,t.next=5,e.json();case 5:for(i=t.sent,n=25,s=0;s<n;s++)a=i.items[s],null!=a.body&&0!=a.body.length||(a.body="No Description"),a.body=this.truncateString(a.body,250),this.recentPRs.push(a);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},c=l,u=(i("950d"),i("2877")),d=i("6544"),h=i.n(d),p=i("5530"),v=(i("a9e3"),i("3408"),i("a9ad")),f=i("24b2"),m=i("ade3"),g=i("b85c"),b=(i("ac1f"),i("1276"),i("a15b"),i("2b0e")),_=b["a"].extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses:function(){var t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){var i,n=e.split(" "),s=Object(g["a"])(n);try{for(s.s();!(i=s.n()).done;){var a=i.value;t.push("rounded-".concat(a))}}catch(r){s.e(r)}finally{s.f()}}else e&&t.push("rounded");return t.length>0?Object(m["a"])({},t.join(" "),!0):{}}}}),y=i("80d2"),C=i("58df"),x=Object(C["a"])(v["a"],f["a"],_).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(p["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(p["a"])({height:Object(y["d"])(this.size),minWidth:Object(y["d"])(this.size),width:Object(y["d"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),k=i("53ca"),j=i("3835");i("c7cd"),i("caad"),i("86cc"),i("25a8");function B(t){return function(e,i){for(var n in i)Object.prototype.hasOwnProperty.call(e,n)||this.$delete(this.$data[t],n);for(var s in e)this.$set(this.$data[t],s,e[s])}}var w=b["a"].extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",B("attrs$"),{immediate:!0}),this.$watch("$listeners",B("listeners$"),{immediate:!0})}}),O=b["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:Object(m["a"])({},"elevation-".concat(this.elevation),!0)}}}),S=i("7560"),$=Object(C["a"])(w,v["a"],O,f["a"],_,S["a"]).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes:function(){return Object(p["a"])(Object(p["a"])(Object(p["a"])({"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped},this.themeClasses),this.elevationClasses),this.roundedClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}}),L=$,E=i("22da"),T=(i("99af"),i("d9bd"));function z(t,e){return function(){return Object(T["c"])("The ".concat(t," component must be used inside a ").concat(e))}}function P(t,e,i){var n=e&&i?{register:z(e,i),unregister:z(e,i)}:null;return b["a"].extend({name:"registrable-inject",inject:Object(m["a"])({},t,{default:n})})}function V(t,e,i){return P(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(m["a"])({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}V("itemGroup");var R=i("f2e7"),I={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function D(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return b["a"].extend({name:"positionable",props:t.length?Object(y["f"])(I,t):I})}var N=D(),F=(i("9911"),i("498a"),i("5319"),i("a4d3"),i("e01a"),i("25f0"),i("b0c0"),i("7435"),Symbol("rippleStop")),A=80;function H(t,e){t.style.transform=e,t.style.webkitTransform=e}function q(t,e){t.style.opacity=e.toString()}function M(t){return"TouchEvent"===t.constructor.name}function W(t){return"KeyboardEvent"===t.constructor.name}var J=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=0,s=0;if(!W(t)){var a=e.getBoundingClientRect(),r=M(t)?t.touches[t.touches.length-1]:t;n=r.clientX-a.left,s=r.clientY-a.top}var o=0,l=.3;e._ripple&&e._ripple.circle?(l=.15,o=e.clientWidth/2,o=i.center?o:o+Math.sqrt(Math.pow(n-o,2)+Math.pow(s-o,2))/4):o=Math.sqrt(Math.pow(e.clientWidth,2)+Math.pow(e.clientHeight,2))/2;var c="".concat((e.clientWidth-2*o)/2,"px"),u="".concat((e.clientHeight-2*o)/2,"px"),d=i.center?c:"".concat(n-o,"px"),h=i.center?u:"".concat(s-o,"px");return{radius:o,scale:l,x:d,y:h,centerX:c,centerY:u}},G={show:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e._ripple&&e._ripple.enabled){var n=document.createElement("span"),s=document.createElement("span");n.appendChild(s),n.className="v-ripple__container",i.class&&(n.className+=" ".concat(i.class));var a=J(t,e,i),r=a.radius,o=a.scale,l=a.x,c=a.y,u=a.centerX,d=a.centerY,h="".concat(2*r,"px");s.className="v-ripple__animation",s.style.width=h,s.style.height=h,e.appendChild(n);var p=window.getComputedStyle(e);p&&"static"===p.position&&(e.style.position="relative",e.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),H(s,"translate(".concat(l,", ").concat(c,") scale3d(").concat(o,",").concat(o,",").concat(o,")")),q(s,0),s.dataset.activated=String(performance.now()),setTimeout((function(){s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),H(s,"translate(".concat(u,", ").concat(d,") scale3d(1,1,1)")),q(s,.25)}),0)}},hide:function(t){if(t&&t._ripple&&t._ripple.enabled){var e=t.getElementsByClassName("v-ripple__animation");if(0!==e.length){var i=e[e.length-1];if(!i.dataset.isHiding){i.dataset.isHiding="true";var n=performance.now()-Number(i.dataset.activated),s=Math.max(250-n,0);setTimeout((function(){i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),q(i,0),setTimeout((function(){var e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),i.parentNode&&t.removeChild(i.parentNode)}),300)}),s)}}}}};function X(t){return"undefined"===typeof t||!!t}function Y(t){var e={},i=t.currentTarget;if(i&&i._ripple&&!i._ripple.touched&&!t[F]){if(t[F]=!0,M(t))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(e.center=i._ripple.centered||W(t),i._ripple.class&&(e.class=i._ripple.class),M(t)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=function(){G.show(t,i,e)},i._ripple.showTimer=window.setTimeout((function(){i&&i._ripple&&i._ripple.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)}),A)}else G.show(t,i,e)}}function K(t){var e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((function(){K(t)})));window.setTimeout((function(){e._ripple&&(e._ripple.touched=!1)})),G.hide(e)}}function U(t){var e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}var Q=!1;function Z(t){Q||t.keyCode!==y["j"].enter&&t.keyCode!==y["j"].space||(Q=!0,Y(t))}function tt(t){Q=!1,K(t)}function et(t){!0===Q&&(Q=!1,K(t))}function it(t,e,i){var n=X(e.value);n||G.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=n;var s=e.value||{};s.center&&(t._ripple.centered=!0),s.class&&(t._ripple.class=e.value.class),s.circle&&(t._ripple.circle=s.circle),n&&!i?(t.addEventListener("touchstart",Y,{passive:!0}),t.addEventListener("touchend",K,{passive:!0}),t.addEventListener("touchmove",U,{passive:!0}),t.addEventListener("touchcancel",K),t.addEventListener("mousedown",Y),t.addEventListener("mouseup",K),t.addEventListener("mouseleave",K),t.addEventListener("keydown",Z),t.addEventListener("keyup",tt),t.addEventListener("blur",et),t.addEventListener("dragstart",K,{passive:!0})):!n&&i&&nt(t)}function nt(t){t.removeEventListener("mousedown",Y),t.removeEventListener("touchstart",Y),t.removeEventListener("touchend",K),t.removeEventListener("touchmove",U),t.removeEventListener("touchcancel",K),t.removeEventListener("mouseup",K),t.removeEventListener("mouseleave",K),t.removeEventListener("keydown",Z),t.removeEventListener("keyup",tt),t.removeEventListener("dragstart",K),t.removeEventListener("blur",et)}function st(t,e,i){it(t,e,!1)}function at(t){delete t._ripple,nt(t)}function rt(t,e){if(e.value!==e.oldValue){var i=X(e.oldValue);it(t,e,i)}}var ot={bind:st,unbind:at,update:rt},lt=ot,ct=b["a"].extend({name:"routable",directives:{Ripple:lt},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple:function(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},methods:{click:function(t){this.$emit("click",t)},generateRouteLink:function(){var t,e,i=this.exact,n=(t={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},Object(m["a"])(t,this.to?"nativeOn":"on",Object(p["a"])(Object(p["a"])({},this.$listeners),{},{click:this.click})),Object(m["a"])(t,"ref","link"),t);if("undefined"===typeof this.exact&&(i="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var s=this.activeClass,a=this.exactActiveClass||s;this.proxyClass&&(s="".concat(s," ").concat(this.proxyClass).trim(),a="".concat(a," ").concat(this.proxyClass).trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(n.props,{to:this.to,exact:i,activeClass:s,exactActiveClass:a,append:this.append,replace:this.replace})}else e=(this.href?"a":this.tag)||"div","a"===e&&this.href&&(n.attrs.href=this.href);return this.target&&(n.attrs.target=this.target),{tag:e,data:n}},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link&&this.$route){var e="".concat(this.activeClass," ").concat(this.proxyClass||"").trim(),i="_vnode.data.class.".concat(e);this.$nextTick((function(){Object(y["h"])(t.$refs.link,i)&&t.toggle()}))}},toggle:function(){}}}),ut=(i("c96a"),b["a"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})),dt=Object(C["a"])(L,ct,N,ut,V("btnToggle"),Object(R["b"])("inputValue")),ht=dt.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(p["a"])(Object(p["a"])(Object(p["a"])(Object(p["a"])(Object(p["a"])({"v-btn":!0},ct.options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},computedElevation:function(){if(!this.disabled)return O.options.computed.computedElevation.call(this)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg:function(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated:function(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(p["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=Object(j["a"])(e,2),n=i[0],s=i[1];t.$attrs.hasOwnProperty(n)&&Object(T["a"])(n,s,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(E["a"],{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.generateRouteLink(),n=i.tag,s=i.data,a=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(s.attrs.type=this.type,s.attrs.disabled=this.disabled),s.attrs.value=["string","number"].includes(Object(k["a"])(this.value))?this.value:JSON.stringify(this.value),t(n,this.disabled?s:a(this.color,s),e)}}),pt=(i("0481"),i("615b"),i("6ece"),i("d9f7"));function vt(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length,n=new Array(i>1?i-1:0),s=1;s<i;s++)n[s-1]=arguments[s];return(t=Array()).concat.apply(t,[e].concat(n))}function ft(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",i=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:i},origin:{type:String,default:e}},render:function(e,i){var n="transition".concat(i.props.group?"-group":""),s={props:{name:t,mode:i.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=i.props.origin,t.style.webkitTransformOrigin=i.props.origin}}};return i.props.leaveAbsolute&&(s.on.leave=vt(s.on.leave,(function(t){return t.style.position="absolute"}))),i.props.hideOnLeave&&(s.on.leave=vt(s.on.leave,(function(t){return t.style.display="none"}))),e(n,Object(pt["a"])(i.data,s),i.children)}}}function mt(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:i}},render:function(i,n){return i("transition",Object(pt["a"])(n.data,{props:{name:t},on:e}),n.children)}}}var gt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e?"width":"height",n="offset".concat(Object(y["o"])(i));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(m["a"])({transition:t.style.transition,overflow:t.style.overflow},i,t.style[i])},enter:function(e){var s=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";var a="".concat(e[n],"px");e.style[i]="0",e.offsetHeight,e.style.transition=s.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[i]=a}))},afterEnter:a,enterCancelled:a,leave:function(t){t._initialStyle=Object(m["a"])({transition:"",overflow:t.style.overflow},i,t.style[i]),t.style.overflow="hidden",t.style[i]="".concat(t[n],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[i]="0"}))},afterLeave:s,leaveCancelled:s};function s(e){t&&e._parent&&e._parent.classList.remove(t),a(e)}function a(t){var e=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[i]=e),delete t._initialStyle}},bt=(ft("carousel-transition"),ft("carousel-reverse-transition"),ft("tab-transition"),ft("tab-reverse-transition"),ft("menu-transition"),ft("fab-transition","center center","out-in"),ft("dialog-transition"),ft("dialog-bottom-transition"),ft("dialog-top-transition"),ft("fade-transition")),_t=(ft("scale-transition"),ft("scroll-x-transition"),ft("scroll-x-reverse-transition"),ft("scroll-y-transition"),ft("scroll-y-reverse-transition"),ft("slide-x-transition"));ft("slide-x-reverse-transition"),ft("slide-y-transition"),ft("slide-y-reverse-transition"),mt("expand-transition",gt()),mt("expand-x-transition",gt("",!0));function yt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return b["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(m["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(m["a"])({},t,(function(t){this.internalLazyValue=t}))})}var Ct,xt=yt(),kt=xt,jt=Object(C["a"])(v["a"],D(["absolute","fixed","top","bottom"]),kt,S["a"]),Bt=jt.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(y["d"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(y["d"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(m["a"])(t,this.isReversed?"right":"left",Object(y["d"])(this.normalizedValue,"%")),Object(m["a"])(t,"width",Object(y["d"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(p["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?bt:_t},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(y["d"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(y["i"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(m["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),i=e.width;this.internalValue=t.offsetX/i*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(y["d"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),wt=Bt,Ot=b["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(wt,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}}),St=Object(C["a"])(Ot,ct,L).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(p["a"])(Object(p["a"])({"v-card":!0},ct.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},L.options.computed.classes.call(this))},styles:function(){var t=Object(p["a"])({},L.options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=Ot.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),i=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}}),$t=Object(y["e"])("v-card__actions"),Lt=(Object(y["e"])("v-card__subtitle"),Object(y["e"])("v-card__text")),Et=Object(y["e"])("v-card__title"),Tt=i("62ad"),zt=i("a523");i("2532"),i("7db0"),i("4804");function Pt(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}function Vt(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(Ct||(Ct={}));var Rt=Object(C["a"])(w,v["a"],ut,S["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(y["n"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(y["k"])(t).find((function(e){return t[e]}));return e&&Ct[e]||Object(y["d"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(p["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(p["a"])(Object(p["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(p["a"])(Object(p["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var i=[],n=this.getDefaultData(),s="material-icons",a=t.indexOf("-"),r=a<=-1;r?i.push(t):(s=t.slice(0,a),Pt(s)&&(s="")),n.class[s]=!0,n.class[t]=!r;var o=this.getSize();return o&&(n.style={fontSize:o}),this.applyColors(n),e(this.hasClickListener?"button":this.tag,n,i)},renderSvgIcon:function(t,e){var i={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},n=this.getSize();return n&&(i.style={fontSize:n,height:n,width:n}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",i,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var i={class:{"v-icon__component":!0}},n=this.getSize();n&&(i.style={fontSize:n,height:n,width:n}),this.applyColors(i);var s=t.component;return i.props=t.props,i.nativeOn=i.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(s,i)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?Vt(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}}),It=b["a"].extend({name:"v-icon",$_wrapperFor:Rt,functional:!0,render:function(t,e){var i=e.data,n=e.children,s="";return i.domProps&&(s=i.domProps.textContent||i.domProps.innerHTML||s,delete i.domProps.textContent,delete i.domProps.innerHTML),t(Rt,i,s?[s]:n)}}),Dt=i("adda"),Nt=i("0fd9"),Ft=(i("0160"),Object(C["a"])(S["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return Object(p["a"])({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}})),At=It,Ht=Object(C["a"])(v["a"],S["a"]),qt=Ht.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(At,{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var t=this.setBackgroundColor(this.color);return this.$createElement("div",Object(p["a"])({staticClass:"v-timeline-item__inner-dot"},t),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(t){var e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:Object(p["a"])({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},e)}}),Mt=Object(u["a"])(c,n,s,!1,null,"7c2b5787",null);e["default"]=Mt.exports;h()(Mt,{VAvatar:x,VBtn:ht,VCard:St,VCardActions:$t,VCardText:Lt,VCardTitle:Et,VCol:Tt["a"],VContainer:zt["a"],VIcon:It,VImg:Dt["a"],VRow:Nt["a"],VTimeline:Ft,VTimelineItem:qt})},c7cd:function(t,e,i){"use strict";var n=i("23e7"),s=i("857a"),a=i("af03");n({target:"String",proto:!0,forced:a("fixed")},{fixed:function(){return s(this,"tt","","")}})},c96a:function(t,e,i){"use strict";var n=i("23e7"),s=i("857a"),a=i("af03");n({target:"String",proto:!0,forced:a("small")},{small:function(){return s(this,"small","","")}})},f5f2:function(t){t.exports=JSON.parse('{"jak1":{"fileProgress":{"src_files_total":523,"src_files_finished":188,"src_files_started":312}}}')}}]);
//# sourceMappingURL=chunk-461a09f2.js.map