"use strict";const url=require("url"),{version:version}=require("../../package.json"),themeVersion=version;hexo.extend.helper.register("isInHomePaging",function(e,t){return e.length>5&&"/"===t&&"page/"===e.slice(0,5)}),hexo.extend.filter.register("after_post_render",function(e){return e.content=e.content.replace(/<figure class="highlight ([a-zA-Z+\-/#]+)">.*?<\/figure>/g,function(e,t){let s=t||"code";"plain"===s&&(s="code");const r=e.replace('<figure class="highlight ','<figure class="iseeu highlight ');return'<div class="highlight-container" data-rel="'+s.charAt(0).toUpperCase()+s.slice(1)+'">'+r+"</div>"}),e}),hexo.extend.helper.register("createNewArchivePosts",function(e){const t=[],s=[];return e.forEach(e=>s.push(e.date.year())),Array.from(new Set(s)).forEach(e=>{t.push({year:e,postList:[]})}),t.sort((e,t)=>t.year-e.year),t.forEach(t=>{e.forEach(e=>t.year===e.date.year()&&t.postList.push(e))}),t.forEach(e=>e.postList.sort((e,t)=>t.date.unix()-e.date.unix())),t}),hexo.extend.helper.register("getAuthorLabel",function(e,t,s){let r=Math.floor(Math.log2(e));return r=r<2?1:r-1,!1===t&&Array.isArray(s)&&s.length>0?r>s.length?s[s.length-1]:s[r-1]:`Lv${r}`}),hexo.extend.helper.register("getPostUrl",function(e,t){if(e){let{href:s}=new URL(e);return"/"!==s.substring(s.length-1)&&(s+="/"),s+t}return t}),hexo.extend.helper.register("renderJS",function(e){const t=hexo.extend.helper.get("js").bind(hexo),s={staticfile:"https://cdn.staticfile.net",bootcdn:"https://cdn.bootcdn.net/ajax/libs",sustech:"https://mirrors.sustech.edu.cn/cdnjs/ajax/libs",zstatic:"https://s4.zstatic.net/ajax/libs",cdnjs:"https://cdnjs.cloudflare.com/ajax/libs",unpkg:"https://unpkg.com",jsdelivr:"https://cdn.jsdelivr.net/npm",aliyun:"https://evan.beee.top/projects",custom:this.theme.cdn.custom_url},r=e=>{if("staticfile"===this.theme.cdn.provider&&200!==hexo.locals.get(`cdnTestStatus_${this.theme.cdn.provider}`))return t(e);const r=s[this.theme.cdn.provider]||s.staticfile;if("custom"===this.theme.cdn.provider){const s=r.replace("${version}",themeVersion).replace("${path}",e);return this.theme.cdn.enable?`<script src="${s}"><\/script>`:t(e)}return"staticfile"===this.theme.cdn.provider||"bootcdn"===this.theme.cdn.provider||"cdnjs"===this.theme.cdn.provider||"sustech"===this.theme.cdn.provider||"zstatic"===this.theme.cdn.provider?this.theme.cdn.enable?`<script src="${r}/hexo-theme-redefine/${themeVersion}/${e}"><\/script>`:t(e):this.theme.cdn.enable?`<script src="${r}/hexo-theme-redefine@${themeVersion}/source/${e}"><\/script>`:t(e)};let i="";if(Array.isArray(e))for(const t of e)i+=r(t);else i=r(e);return i}),hexo.extend.helper.register("renderJSModule",function(e){const t=hexo.extend.helper.get("js").bind(hexo),s={staticfile:"https://cdn.staticfile.net",bootcdn:"https://cdn.bootcdn.net/ajax/libs",sustech:"https://mirrors.sustech.edu.cn/cdnjs/ajax/libs",zstatic:"https://s4.zstatic.net/ajax/libs",cdnjs:"https://cdnjs.cloudflare.com/ajax/libs",unpkg:"https://unpkg.com",jsdelivr:"https://cdn.jsdelivr.net/npm",aliyun:"https://evan.beee.top/projects",custom:this.theme.cdn.custom_url},r=e=>{if("staticfile"===this.theme.cdn.provider&&200!==hexo.locals.get(`cdnTestStatus_${this.theme.cdn.provider}`))return t({src:e,type:"module"});const r=s[this.theme.cdn.provider]||s.staticfile;if("custom"===this.theme.cdn.provider){const s=r.replace("${version}",themeVersion).replace("${path}",e);return this.theme.cdn.enable?`<script type="module" src="${s}"><\/script>`:t({src:e,type:"module"})}return"staticfile"===this.theme.cdn.provider||"bootcdn"===this.theme.cdn.provider||"cdnjs"===this.theme.cdn.provider||"sustech"===this.theme.cdn.provider||"zstatic"===this.theme.cdn.provider?this.theme.cdn.enable?`<script type="module" src="${r}/hexo-theme-redefine/${themeVersion}/${e}"><\/script>`:t({src:e,type:"module"}):this.theme.cdn.enable?`<script type="module" src="${r}/hexo-theme-redefine@${themeVersion}/source/${e}"><\/script>`:t({src:e,type:"module"})};let i="";if(Array.isArray(e))for(const t of e)i+=r(t);else i=r(e);return i}),hexo.extend.helper.register("renderJSPath",function(e){const t=hexo.extend.helper.get("url_for").bind(hexo),s={staticfile:"https://cdn.staticfile.net",bootcdn:"https://cdn.bootcdn.net/ajax/libs",sustech:"https://mirrors.sustech.edu.cn/cdnjs/ajax/libs",zstatic:"https:https://s4.zstatic.net/ajax/libs",cdnjs:"https://cdnjs.cloudflare.com/ajax/libs",unpkg:"https://unpkg.com",jsdelivr:"https://cdn.jsdelivr.net/npm",aliyun:"https://evan.beee.top/projects",custom:this.theme.cdn.custom_url},r=e=>{if("staticfile"===this.theme.cdn.provider&&200!==hexo.locals.get(`cdnTestStatus_${this.theme.cdn.provider}`))return t(e);const r=s[this.theme.cdn.provider]||s.staticfile;if("custom"===this.theme.cdn.provider){const s=r.replace("${version}",themeVersion).replace("${path}",e);return this.theme.cdn.enable?s:t(e)}return"staticfile"===this.theme.cdn.provider||"bootcdn"===this.theme.cdn.provider||"cdnjs"===this.theme.cdn.provider||"sustech"===this.theme.cdn.provider||"zstatic"===this.theme.cdn.provider?this.theme.cdn.enable?`${r}/hexo-theme-redefine/${themeVersion}/${e}`:t(e):this.theme.cdn.enable?`${r}/hexo-theme-redefine@${themeVersion}/source/${e}`:t(e)};let i="";if(Array.isArray(e))for(const t of e)i+=r(t);else i=r(e);return i}),hexo.extend.helper.register("renderCSS",function(e){const t=hexo.extend.helper.get("css").bind(hexo),s={staticfile:"https://cdn.staticfile.net",bootcdn:"https://cdn.bootcdn.net/ajax/libs",sustech:"https://mirrors.sustech.edu.cn/cdnjs/ajax/libs",zstatic:"https://s4.zstatic.net/ajax/libs",cdnjs:"https://cdnjs.cloudflare.com/ajax/libs",unpkg:"https://unpkg.com",jsdelivr:"https://cdn.jsdelivr.net/npm",aliyun:"https://evan.beee.top/projects",custom:this.theme.cdn.custom_url},r=e=>{if("staticfile"===this.theme.cdn.provider&&200!==hexo.locals.get(`cdnTestStatus_${this.theme.cdn.provider}`))return t(e);const r=s[this.theme.cdn.provider]||s.staticfile;if("custom"===this.theme.cdn.provider){const s=r.replace("${version}",themeVersion).replace("${path}",e);return this.theme.cdn.enable?`<link rel="stylesheet" href="${s}">`:t(e)}return"staticfile"===this.theme.cdn.provider||"bootcdn"===this.theme.cdn.provider||"cdnjs"===this.theme.cdn.provider||"sustech"===this.theme.cdn.provider||"zstatic"===this.theme.cdn.provider?this.theme.cdn.enable?`<link rel="stylesheet" href="${r}/hexo-theme-redefine/${themeVersion}/${e}">`:t(e):this.theme.cdn.enable?`<link rel="stylesheet" href="${r}/hexo-theme-redefine@${themeVersion}/source/${e}">`:t(e)};return Array.isArray(e)?e.map(r).join(""):r(e)}),hexo.extend.helper.register("getThemeVersion",function(){return themeVersion});