(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d5a9"],{f6ad:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"profileSettingsHeading"},[t._m(0),i("div",{staticClass:"leftSection"},[i("img",{attrs:{src:t.user.image}}),i("p",{staticClass:"userNameParagraph"},[t._v(" "+t._s(t.user.name))]),i("div",{staticClass:"settingsOptions"},[i("button",{on:{click:function(e){return t.showSelectedPage("buttonHighlighter","aboutSection","sectionClass","rightAboutSection")}}},[i("div",{staticClass:"buttonHighlighter",attrs:{id:"aboutSection"}}),i("p",[t._v("About")])])]),i("div",{staticClass:"settingsOptions"},[i("button",{on:{click:function(e){return t.showSelectedPage("buttonHighlighter","profileSection","sectionClass","rightProfileSection")}}},[i("div",{staticClass:"buttonHighlighter",attrs:{id:"profileSection"}}),i("p",[t._v("Profile")])])]),i("div",{staticClass:"settingsOptions"},[i("button",{on:{click:function(e){return t.showSelectedPage("buttonHighlighter","preferencesSection","sectionClass","rightPreferencesSection")}}},[i("div",{staticClass:"buttonHighlighter",attrs:{id:"preferencesSection"}}),i("p",[t._v("Preferences")])])]),i("div",{staticClass:"settingsOptions"},[i("button",{on:{click:function(e){return t.showSelectedPage("buttonHighlighter","notificationsSection","sectionClass","rightNotificationsSection")}}},[i("div",{staticClass:"buttonHighlighter",attrs:{id:"notificationsSection"}}),i("p",[t._v("Notifications")])])]),i("div",{staticClass:"settingsOptions"},[i("button",{on:{click:function(e){return t.showSelectedPage("buttonHighlighter","securitySection","sectionClass","rightSecuritySection")}}},[i("div",{staticClass:"buttonHighlighter",attrs:{id:"securitySection"}}),i("p",[t._v("Security")])])])]),i("div",{staticClass:"rightSection"},[i("div",{attrs:{id:"sectionsContainer"}},[i("div",{staticClass:"sectionClass",attrs:{id:"rightAboutSection"}},[i("br"),i("h2",[t._v("About")]),i("br"),t._v(" Name: "),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],attrs:{type:"text"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),i("br"),i("br"),t._v(" Biography: "),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.biography,expression:"user.biography"}],attrs:{type:"text"},domProps:{value:t.user.biography},on:{input:function(e){e.target.composing||t.$set(t.user,"biography",e.target.value)}}}),i("br"),i("br"),t._v(" Location: "),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.location,expression:"user.location"}],attrs:{type:"text"},domProps:{value:t.user.location},on:{input:function(e){e.target.composing||t.$set(t.user,"location",e.target.value)}}}),i("br"),i("br"),t.hasBeenUpdated?i("button",{on:{click:function(e){return t.patchProfileSettings(t.user._id)}}},[t._v("Save changes")]):t._e(),i("br"),i("br"),i("p",{staticStyle:{color:"#2BAE66FF","text-align":"left"}},[t._v(t._s(t.statusMessage))])]),t._m(1),t._m(2),t._m(3),t._m(4)])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"settingsTitleHeading"},[i("h1",[t._v("Profile Settings")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sectionClass",attrs:{id:"rightProfileSection"}},[i("br"),i("h2",[t._v("Profile")]),i("br")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sectionClass",attrs:{id:"rightPreferencesSection"}},[i("br"),i("h2",[t._v("Preferences")]),i("br")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sectionClass",attrs:{id:"rightNotificationsSection"}},[i("br"),i("h2",[t._v("Notifications")]),i("br")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sectionClass",attrs:{id:"rightSecuritySection"}},[i("br"),i("h2",[t._v("Security")]),i("br")])}],a=(i("b0c0"),i("ac1f"),i("5319"),i("5530")),r=i("2f62"),o={data:function(){return{bio:"",loc:"",statusMessage:""}},computed:Object(a["a"])(Object(a["a"])({},Object(r["c"])({user:"user"})),{},{hasBeenUpdated:function(){return""!==this.user.biography&&""!==this.user.location}}),methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(r["b"])(["patchUser"])),{},{patchProfileSettings:function(t){var e=this,i={name:this.user.name,biography:this.user.biography,location:this.user.location};this.patchUser([t,i]).then((function(t){t.data&&(console.log(t.data.status),e.statusMessage=t.data.status)})).catch((function(){alert("Fail")}))},showSelectedPage:function(t,e,i,s){for(var n=document.getElementsByClassName(t),a=0;a<n.length;a++)n[a].style.visibility="hidden";var r=document.getElementById(e);if(r.style.visibility="visible","visible"===window.getComputedStyle(r).visibility)for(var o=document.getElementsByClassName(i),c=0;c<o.length;c++)o[c].style.display="none";var l=document.getElementById(s);l.style.display="block"}},Object(r["b"])(["getProfile"])),{},{goToProfileSettings:function(){this.$router.replace("/ProfileSettings")}}),created:function(){this.getProfile()}},c=o,l=i("2877"),u=Object(l["a"])(c,s,n,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d22d5a9.cdf9f6b3.js.map