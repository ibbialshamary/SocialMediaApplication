(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17d62b78"],{"27b8":function(e,t,s){},"706c":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"section"},[s("div",{staticClass:"container"},[s("simple-upload")],1)])},n=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.sendFile(t)}}},[e.message?s("div",{class:"message "+(e.error?"is-danger":"is-success")},[e._v(" "+e._s(e.message)+" ")]):e._e(),s("div",{staticClass:"field"},[s("label",{staticClass:"label",attrs:{for:"file"}},[e._v("Upload File")]),s("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:e.selectFile}}),e.file?s("span",{staticClass:"file-name"},[e._v(e._s(e.file.name))]):e._e()]),e._m(0)])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"field"},[s("button",{staticClass:"button is-info"},[e._v("Send")])])}],l=(s("99af"),s("caad"),s("b0c0"),s("ac1f"),s("1276"),s("96cf"),s("1da1")),c=s("bc3a"),o=s.n(c),u={name:"SimpleUpload",data:function(){return{file:"",message:"",error:!1}},methods:{selectFile:function(){var e=this.$refs.file.files[0],t=e.type.split("/")[1];console.log(t);var s=["image/jpeg","image/png","image/gif"],a=2e7,n=e.size>a;s.includes(e.type)&&!n?(this.file=e,this.error=!1,this.message=""):(this.error=!0,this.message=n?"Too large. Max size is ".concat(a/1e3,"KB"):"Only images are allowed")},sendFile:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=new FormData,s.append("file",e.file,"".concat(Date.now(),"-").concat(e.file.name.toLowerCase())),console.log(s),t.prev=3,t.next=6,o.a.post("http://localhost:5000/upload",s);case 6:e.message="File has been uploaded",e.file="",e.error=!1,t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](3),console.log(t.t0),e.message=t.t0.response.data.error,e.error=!0;case 16:case"end":return t.stop()}}),t,null,[[3,11]])})))()}}},f=u,d=(s("ad36"),s("2877")),p=Object(d["a"])(f,i,r,!1,null,null,null),m=p.exports,g={components:{SimpleUpload:m},data:function(){return{previewImage:null}},methods:{}},v=g,h=(s("f2cd"),Object(d["a"])(v,a,n,!1,null,null,null));t["default"]=h.exports},"8f22":function(e,t,s){},ad36:function(e,t,s){"use strict";s("27b8")},caad:function(e,t,s){"use strict";var a=s("23e7"),n=s("4d64").includes,i=s("44d2"),r=s("ae40"),l=r("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:!l},{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},f2cd:function(e,t,s){"use strict";s("8f22")}}]);
//# sourceMappingURL=chunk-17d62b78.cfb7d1dd.js.map