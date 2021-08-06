(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["assets/css/global.css"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "body{font-family:\"Inter\",sans-serif}.page__title{margin-top:0;margin-bottom:.25em}html{color-scheme:dark;font-size:62.5%;background-color:#000;min-height:100%;display:flex;color:#fff}body{scroll-behavior:smooth;font-size:1.2em;display:flex;flex-direction:column;line-height:1.2;margin:0;flex-grow:1;background-size:cover;background-position:center;background-repeat:no-repeat;min-height:100%}main{flex-grow:1;display:flex;flex-direction:column;z-index:1;grid-row:span 2}@media(min-width: 48em){body{font-size:2em}}@media(min-width: 70em){body{font-size:2.4em}}@media(min-width: 110em){html{font-size:93.75%}}.visually-hidden{border:0;clip:rect(0 0 0 0);height:auto;margin:0;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap}.subscribe{margin-top:auto;max-width:24em;margin-bottom:.8rem}.subscribe__text{margin-bottom:.8rem}.subscribe__wrapper{display:flex;align-items:baseline;background-color:#fff;background-image:linear-gradient(90deg, #FFFFFF 50%, #0157FF 60%, #00FFF0, #FF00F5);background-size:200% 100%;background-position:0 0;transition:background-position .2s;padding:.1rem;border-radius:.8rem;position:relative}.subscribe__wrapper:focus-within{background-position:100% 0}.subscribe__input,.subscribe__btn{background-color:#000;color:inherit;font-family:inherit;font-size:1.4rem;border:0;margin:0;padding:1.4rem;outline:none;transition:background-color .2s,background-position .2s,box-shadow .2s}.subscribe__input{flex-grow:1;border-top-left-radius:.7rem;border-bottom-left-radius:.7rem;width:10em}.subscribe__input:-webkit-autofill{box-shadow:0 0 0 2em #000 inset !important;-webkit-text-fill-color:#fff !important}.subscribe__wrapper:hover .subscribe__input:-webkit-autofill,.subscribe__input:-webkit-autofill:focus,.subscribe__input:-webkit-autofill:active{box-shadow:0 0 0 2em #191919 inset !important}.subscribe__input:-webkit-autofill::first-line{font-size:1.4rem;font-family:\"Inter\",sans-serif}.subscribe__btn{font-weight:bold;border-top-right-radius:.7rem;border-bottom-right-radius:.7rem;position:relative;background-size:200% 100%;background-position:0 0;background-image:linear-gradient(90deg, rgba(219, 0, 255, 0) 50%, rgba(219, 0, 255, 0.5), #3300FF)}.subscribe__input:disabled,.subscribe__btn:disabled{cursor:not-allowed}.subscribe__btn:enabled{cursor:pointer}.subscribe__btn:disabled span{opacity:0}.subscribe__btn:disabled::before{content:\"\";display:inline-block;position:absolute;left:50%;top:50%;padding:.5em;border-radius:1em;line-height:1;border-top:.2rem solid;border-left:.2rem solid;border-bottom:.2rem solid;border-right:.2rem solid transparent;transform:translate(-50%, -50%);animation:rotate 3s infinite linear}@keyframes rotate{0%{transform:translate(-50%, -50%) rotate(0)}100%{transform:translate(-50%, -50%) rotate(360deg)}}.subscribe__btn:focus,.subscribe__btn:enabled:hover{background-position:100% 0}.subscribe__input:disabled,.subscribe__btn:disabled,.subscribe__wrapper:focus-within .subscribe__input,.subscribe__wrapper:focus-within .subscribe__btn,.subscribe__wrapper:hover .subscribe__input,.subscribe__wrapper:hover .subscribe__btn{background-color:#191919}.subscribe__input:disabled:-webkit-autofill{box-shadow:0 0 0 2em #191919 inset !important}.subscribe__message{position:absolute;top:-3em;left:.8rem;padding:1.2rem 1.6rem;border-radius:.8rem;line-height:1}.subscribe--error .subscribe__wrapper{background-image:linear-gradient(90deg, #FF4A4A, #FF9900, #FF4A4A)}.subscribe--error .subscribe__message{display:inline-block;background-image:linear-gradient(to bottom right, #FF4A4A, #FF9900)}.subscribe--success .subscribe__message{display:inline-block;background-image:linear-gradient(to bottom right, #30CE09, #00B3BE)}.subscribe__wrapper:focus-within .subscribe__message{display:none}@media(min-width: 70em){.subscribe__text{margin-bottom:1.6rem}.subscribe__input,.subscribe__btn{font-size:inherit}.subscribe__message{font-size:1.6rem}.subscribe__input:-webkit-autofill::first-line{font-size:2.4rem}}@media(min-width: 110em){.subscribe__input:-webkit-autofill::first-line{font-size:2.4rem}}.home__heading{max-width:5em;line-height:.8;font-size:2.5em;margin:0}.home__logo{width:14rem;height:auto;max-width:100%}.home__description{margin-top:.8rem;max-width:14.25em}.home__description p{margin:0}@media(min-width: 48em){.home__logo{width:28.5rem}.home__description{margin-top:2.4rem}}@media(min-width: 70em){.home__logo{width:38rem}.home__description{max-width:16em}}.frame{display:grid;grid-template-columns:3.2rem 1fr 3.2rem;grid-template-rows:3.2rem 14em 1fr 3.2rem}.frame::before{content:\"\";position:fixed;display:block;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5)}.frame>*{z-index:1}.frame__target{background:url(\"images/target.svg\") center/1.6rem no-repeat;padding:1.6rem}.frame__target:last-child{grid-column:3/4}.frame__code{display:inline-block;transform:rotate(-90deg);font-size:1rem;font-family:\"Source Code Pro\",\"SF Mono\",Monaco,Inconsolata,\"Fira Mono\",\"Droid Sans Mono\",monospace,monospace;transform-origin:bottom right;grid-column:3/4;white-space:nowrap;margin-right:1em;align-self:center}.frame__swatches{white-space:nowrap;line-height:0;border:.1rem solid;border-right:2.4rem solid;padding-left:1.2rem;margin-left:auto;margin-top:auto;margin-bottom:auto}.frame__swatches::before,.frame__swatches::after{content:\"\";display:inline-block;padding:.6rem;border-left:.1rem solid}.frame__swatches::before{background-color:rgba(255,255,255,.33)}.frame__swatches::after{background-color:rgba(255,255,255,.66)}.frame__left{display:inline-block;padding:.85rem;background-image:linear-gradient(rgba(255, 255, 255, 0) 0.8rem, white 0.8rem, white 0.9rem, rgba(255, 255, 255, 0) 0.9rem),linear-gradient(90deg, rgba(255, 255, 255, 0) 0.8rem, white 0.8rem, white 0.9rem, rgba(255, 255, 255, 0) 0.9rem);grid-row:2/4;margin:auto}.frame__scale{display:inline-flex;flex-direction:column;border-left:1px solid;border-bottom:1px solid;grid-column:3/4;margin-left:auto;margin-right:auto;margin-bottom:3rem;justify-content:space-between;padding-bottom:.5em;max-height:17rem;align-self:end;height:100%}.frame__scale::before,.frame__scale::after{content:\"\";border-top:1px solid;border-bottom:1px solid;padding-bottom:1em}.frame__scale span{display:block;border-top:1px solid;border-bottom:1px solid;padding:2rem .3rem;margin:auto 0}.frame__scale::before{margin-bottom:.5em}.frame__scale::after{margin-top:.5em;margin-bottom:auto}@media(min-width: 48em){.frame{grid-template-columns:5.6rem 1fr 5.6rem;grid-template-rows:5.6rem 10em 1fr 5.6rem}.frame__target{background-size:2.4rem;padding:2.8rem}.frame__code{font-size:1.4rem;margin-top:2rem;margin-right:2rem}.frame__swatches{border-right:4rem solid;padding-left:2rem}.frame__swatches::before,.frame__swatches::after{padding:1rem}.frame__left{padding:1.25rem;background-image:linear-gradient(rgba(255, 255, 255, 0) 1.2rem, white 1.2rem, white 1.3rem, rgba(255, 255, 255, 0) 1.3rem),linear-gradient(90deg, rgba(255, 255, 255, 0) 1.2rem, white 1.2rem, white 1.3rem, rgba(255, 255, 255, 0) 1.3rem);margin-bottom:30vh}.frame__scale span{padding:3.8rem .6rem}}.footer{z-index:1}.nav{text-align:right}.nav__list{margin:0;list-style:none;padding:0}.nav__item{margin-left:1em;display:inline-block}.nav__link{display:inline-block;color:inherit;text-decoration:none;padding:.8rem 0;outline:none;transition:color .2s}.nav__link:hover,.nav__link:focus{color:#ff00f5}@media(min-width: 48em){.nav__link{font-size:1.6rem;padding:1em 0}}/*# sourceMappingURL=global.css.map */\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["icons/arrow.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  width=\"1em\"\n  height=\"1em\"\n  viewBox=\"0 0 24 24\"\n  focusable=\"false\"\n  aria-hidden=\"true\"\n  fill=\"currentColor\"\n>\n  <path\n    d=\"M9.707 18.707l6-6a.999.999 0 0 0 0-1.414l-6-6a.999.999 0 1 0-1.414 1.414L13.586 12l-5.293 5.293a.999.999 0 1 0 1.414 1.414z\"\n  />\n</svg>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/base.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!DOCTYPE html>\n<html lang=\"en\" class=\"no-js";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") === "/"?" home":""), env.opts.autoescape);
output += "\">\n<!--suppress HtmlRequiredTitleElement -->\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <!--suppress HtmlUnknownTarget -->\n  <link rel=\"icon\" href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"faviconPath"), env.opts.autoescape);
output += "\" type=\"image/png\" />\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/meta-info.njk", false, "layouts/base.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  <script>document.documentElement.classList.remove('no-js');</script>\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n  <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap\" rel=\"stylesheet\">\n  <link rel='stylesheet' href='";
output += runtime.suppressValue(env.getFilter("url").call(context, "/global.css"), env.opts.autoescape);
output += "'>\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("head"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n</head>\n<body class='frame' ";
if((runtime.contextOrFrameLookup(context, frame, "background") && runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") === "/")) {
output += " style='background-image: url(\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "background"), env.opts.autoescape);
output += "\")' ";
;
}
output += ">\n  <span class='frame__target'></span>\n  <span class='frame__swatches'></span>\n  <span class='frame__target'></span>\n  <span class='frame__left'></span>\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += t_7;
output += "\n  <span class='frame__code'>EJ 01 5790 8702+33</span>\n  <span class='frame__scale'>\n        <span></span>\n    </span>\n  <span class='frame__target'></span>\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/site-foot.njk", false, "layouts/base.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  <span class='frame__target'></span>\n  ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("foot"))(env, context, frame, runtime, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
output += t_13;
output += "\n</body>\n</html>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_head(env, context, frame, runtime, cb) {
var lineno = 15;
var colno = 5;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 23;
var colno = 5;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_foot(env, context, frame, runtime, cb) {
var lineno = 32;
var colno = 5;
var output = "";
try {
var frame = frame.push(true);
output += "\n  ";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_head: b_head,
b_content: b_content,
b_foot: b_foot,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/contact.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/contact.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 5;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    <article class=\"[ post ] [ h-entry ]\">\n      <div class=\"[ post__body ] [ inner-wrapper ] [ leading-loose pad-top-900 pad-bottom-900 text-500 ] [ sf-flow ] [ e-content ]\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/contact-form.njk", false, "layouts/contact.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      </div>\n    </article>\n  </main>\n";
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/home.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/home.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n";
var t_5;
t_5 = (function() {
var output = "";
output += "\n  ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
;
return output;
})()
;
frame.set("introSummary", t_5, true);
if(frame.topLevel) {
context.setVariable("introSummary", t_5);
}
if(frame.topLevel) {
context.addExport("introSummary", t_5);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 8;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main>\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/home.njk", false, "layouts/home.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/subscribe.njk", false, "layouts/home.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
callback(null,t_14);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  </main>\n";
cb(null, output);
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/home.old.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/home.old.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n";
var t_5;
t_5 = (function() {
var output = "";
output += "\n  ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
;
return output;
})()
;
frame.set("introSummary", t_5, true);
if(frame.topLevel) {
context.setVariable("introSummary", t_5);
}
if(frame.topLevel) {
context.addExport("introSummary", t_5);
}
output += "\n\n";
output += "\n";
var t_6;
t_6 = runtime.contextOrFrameLookup(context, frame, "postsHeading");
frame.set("postListHeading", t_6, true);
if(frame.topLevel) {
context.setVariable("postListHeading", t_6);
}
if(frame.topLevel) {
context.addExport("postListHeading", t_6);
}
output += "\n";
var t_7;
t_7 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"postFeed");
frame.set("postListItems", t_7, true);
if(frame.topLevel) {
context.setVariable("postListItems", t_7);
}
if(frame.topLevel) {
context.addExport("postListItems", t_7);
}
output += "\n\n";
output += "\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "postListItems")),"length") < runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"posts")),"length")) {
output += " \n  ";
var t_8;
t_8 = runtime.contextOrFrameLookup(context, frame, "archiveButtonText");
frame.set("paginationNextText", t_8, true);
if(frame.topLevel) {
context.setVariable("paginationNextText", t_8);
}
if(frame.topLevel) {
context.addExport("paginationNextText", t_8);
}
output += "\n  ";
var t_9;
t_9 = "/archive";
frame.set("paginationNextUrl", t_9, true);
if(frame.topLevel) {
context.setVariable("paginationNextUrl", t_9);
}
if(frame.topLevel) {
context.addExport("paginationNextUrl", t_9);
}
output += "\n";
;
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
output += t_10;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 18;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "layouts/home.old.njk", false, function(t_13,t_12) {
if(t_13) { cb(t_13); return; }
callback(null,t_12);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_15,t_14) {
if(t_15) { cb(t_15); return; }
callback(null,t_14);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/post-list.njk", false, "layouts/home.old.njk", false, function(t_17,t_16) {
if(t_17) { cb(t_17); return; }
callback(null,t_16);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_19,t_18) {
if(t_19) { cb(t_19); return; }
callback(null,t_18);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/pagination.njk", false, "layouts/home.old.njk", false, function(t_21,t_20) {
if(t_21) { cb(t_21); return; }
callback(null,t_20);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_23,t_22) {
if(t_23) { cb(t_23); return; }
callback(null,t_22);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  </main>\n";
cb(null, output);
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/page.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/page.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 2;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main>\n    <h1 class='page__title'>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += "</h1>\n    <div>\n      ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n    </div>\n  </main>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/post.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/post.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
output += "\n";
var t_4;
t_4 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_4, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_4);
}
if(frame.topLevel) {
context.addExport("introHeading", t_4);
}
output += "\n";
var t_5;
t_5 = (function() {
var output = "";
output += "\n<p class=\"[ intro__meta ] [ text-500 leading-tight ]\">\n  ";
if(runtime.contextOrFrameLookup(context, frame, "date")) {
output += "\n    <time datetime=\"";
output += runtime.suppressValue(env.getFilter("w3DateFilter").call(context, runtime.contextOrFrameLookup(context, frame, "date")), env.opts.autoescape);
output += "\" class=\"dt-published\">";
output += runtime.suppressValue(env.getFilter("dateFilter").call(context, runtime.contextOrFrameLookup(context, frame, "date")), env.opts.autoescape);
output += "</time>\n  ";
;
}
output += "\n  <span>— ";
output += runtime.suppressValue((lineno = 9, colno = 35, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "helpers")),"getReadingTime"), "helpers[\"getReadingTime\"]", context, [runtime.contextOrFrameLookup(context, frame, "content")])), env.opts.autoescape);
output += " minute read</span>\n</p>\n";
;
return output;
})()
;
frame.set("introSummary", t_5, true);
if(frame.topLevel) {
context.setVariable("introSummary", t_5);
}
if(frame.topLevel) {
context.addExport("introSummary", t_5);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 13;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    <article class=\"[ post ] [ h-entry ]\">\n      <div class=\"[ post__body ] [ inner-wrapper ] [ leading-loose pad-top-900 ";
output += runtime.suppressValue((!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"enableThirdPartyComments")?"pad-bottom-900":""), env.opts.autoescape);
output += " text-500 ] [ sf-flow ] [ e-content ]\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n      </div>\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"enableThirdPartyComments")) {
output += "\n        <hr />\n        <aside class=\"[ post__body ] [ inner-wrapper ] [ pad-bottom-900 text-500 ]\">\n          ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/third-party-comments.njk", false, "layouts/post.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n        </aside>\n      ";
});
}
output += "\n      ";
if(runtime.contextOrFrameLookup(context, frame, "tags")) {
output += "\n        <footer class=\"[ post__footer ] [ pad-top-500 pad-bottom-500 ]\">\n          <div class=\"inner-wrapper\">\n            <div class=\"[ nav ] [ box-flex align-center ]\">\n              <h2 class=\"font-base text-600 weight-mid\">Filed under</h2>\n              <ul class=\"[ nav__list ] [ box-flex align-center pad-left-400 ] [ p-category ]\">\n                ";
frame = frame.push();
var t_14 = runtime.contextOrFrameLookup(context, frame, "tags");
if(t_14) {t_14 = runtime.fromIterator(t_14);
var t_13 = t_14.length;
for(var t_12=0; t_12 < t_14.length; t_12++) {
var t_15 = t_14[t_12];
frame.set("item", t_15);
frame.set("loop.index", t_12 + 1);
frame.set("loop.index0", t_12);
frame.set("loop.revindex", t_13 - t_12);
frame.set("loop.revindex0", t_13 - t_12 - 1);
frame.set("loop.first", t_12 === 0);
frame.set("loop.last", t_12 === t_13 - 1);
frame.set("loop.length", t_13);
output += "\n                  <li class=\"nav__item\">\n                    <a href=\"/tags/";
output += runtime.suppressValue(t_15, env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_15, env.opts.autoescape);
output += "</a>\n                  </li>\n                ";
;
}
}
frame = frame.pop();
output += "\n              </ul>\n            </div>\n          </div>\n        </footer>\n      ";
;
}
output += "\n    </article>\n  </main>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["macros/form.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n";
var macro_t_1 = runtime.makeMacro(
["text", "name"], 
[], 
function (l_text, l_name, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("text", l_text);
frame.set("name", l_name);
var t_2 = "";t_2 += "\n  <label class=\"question__label\" for=\"field-";
t_2 += runtime.suppressValue(l_name, env.opts.autoescape);
t_2 += "\">";
t_2 += runtime.suppressValue(l_text, env.opts.autoescape);
t_2 += "</label>\n";
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("label");
context.setVariable("label", macro_t_1);
output += "\n\n";
var macro_t_3 = runtime.makeMacro(
["type", "name", "data"], 
[], 
function (l_type, l_name, l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("type", l_type);
frame.set("name", l_name);
frame.set("data", l_data);
var t_4 = "";t_4 += "\n  <input class=\"question__field\"\n        type=\"";
t_4 += runtime.suppressValue(l_type, env.opts.autoescape);
t_4 += "\"\n        name=\"";
t_4 += runtime.suppressValue(l_name, env.opts.autoescape);
t_4 += "\"\n        id=\"field-";
t_4 += runtime.suppressValue(l_name, env.opts.autoescape);
t_4 += "\"\n        ";
if(runtime.memberLookup((l_data),"required")) {
t_4 += "required aria-required=\"true\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"placeholder")) {
t_4 += "placeholder=\"";
t_4 += runtime.suppressValue(runtime.memberLookup((l_data),"placeholder"), env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"pattern")) {
t_4 += "pattern=\"";
t_4 += runtime.suppressValue(runtime.memberLookup((l_data),"pattern"), env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"description")) {
t_4 += "aria-describedby=\"description-";
t_4 += runtime.suppressValue(l_name, env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"autocomplete")) {
t_4 += "autocomplete=\"";
t_4 += runtime.suppressValue(runtime.memberLookup((l_data),"autocomplete"), env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"autocorrect")) {
t_4 += "autocorrect=\"";
t_4 += runtime.suppressValue(runtime.memberLookup((l_data),"autocorrect"), env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"spellcheck")) {
t_4 += "spellcheck=\"";
t_4 += runtime.suppressValue(runtime.memberLookup((l_data),"spellcheck"), env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"label")) {
t_4 += "aria-label=\"";
t_4 += runtime.suppressValue(runtime.memberLookup((l_data),"label"), env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        ";
if(runtime.memberLookup((l_data),"autocapitalize")) {
t_4 += "autocapitalize=\"";
t_4 += runtime.suppressValue(runtime.memberLookup((l_data),"autocapitalize"), env.opts.autoescape);
t_4 += "\"";
;
}
t_4 += "\n        >\n  ";
if(runtime.memberLookup((l_data),"description")) {
t_4 += "\n    <br>\n    ";
t_4 += runtime.suppressValue((lineno = 25, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [l_name,runtime.memberLookup((l_data),"description")])), env.opts.autoescape);
t_4 += "\n  ";
;
}
t_4 += "\n";
;
frame = callerFrame;
return new runtime.SafeString(t_4);
});
context.addExport("field");
context.setVariable("field", macro_t_3);
output += "\n\n";
var macro_t_5 = runtime.makeMacro(
["text", "name", "data"], 
[], 
function (l_text, l_name, l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("text", l_text);
frame.set("name", l_name);
frame.set("data", l_data);
var t_6 = "";t_6 += "\n  <label for=\"field-";
t_6 += runtime.suppressValue(l_name, env.opts.autoescape);
t_6 += "\" class=\"question--confirm\">\n    <input class=\"question__field question__field--confirm\"\n          type=\"checkbox\"\n          name=\"";
t_6 += runtime.suppressValue(l_name, env.opts.autoescape);
t_6 += "\"\n          id=\"field-";
t_6 += runtime.suppressValue(l_name, env.opts.autoescape);
t_6 += "\"\n          value=\"1\"\n          ";
if(runtime.memberLookup((l_data),"required")) {
t_6 += "required aria-required=\"true\"";
;
}
t_6 += "\n          ";
if(runtime.memberLookup((l_data),"description")) {
t_6 += "aria-describedby=\"description-";
t_6 += runtime.suppressValue(l_name, env.opts.autoescape);
t_6 += "\"";
;
}
t_6 += "\n          >\n    ";
t_6 += runtime.suppressValue(l_text, env.opts.autoescape);
t_6 += "\n  </label>\n  ";
if(runtime.memberLookup((l_data),"description")) {
t_6 += "\n    <br>\n    ";
t_6 += runtime.suppressValue((lineno = 43, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [l_name,runtime.memberLookup((l_data),"description")])), env.opts.autoescape);
t_6 += "\n  ";
;
}
t_6 += "\n";
;
frame = callerFrame;
return new runtime.SafeString(t_6);
});
context.addExport("confirm");
context.setVariable("confirm", macro_t_5);
output += "\n\n";
var macro_t_7 = runtime.makeMacro(
["name", "options", "data"], 
[], 
function (l_name, l_options, l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("name", l_name);
frame.set("options", l_options);
frame.set("data", l_data);
var t_8 = "";t_8 += "\n  <br>\n  <select id=\"field-";
t_8 += runtime.suppressValue(l_name, env.opts.autoescape);
t_8 += "\"\n          name=\"";
t_8 += runtime.suppressValue(l_name, env.opts.autoescape);
t_8 += "\"\n          ";
if(runtime.memberLookup((l_data),"required")) {
t_8 += "required aria-required=\"true\"";
;
}
t_8 += "\n          ";
if(runtime.memberLookup((l_data),"multiple")) {
t_8 += "multiple";
;
}
t_8 += "\n          ";
if(runtime.memberLookup((l_data),"description")) {
t_8 += "aria-describedby=\"description-";
t_8 += runtime.suppressValue(l_name, env.opts.autoescape);
t_8 += "\"";
;
}
t_8 += "\n          >\n    ";
frame = frame.push();
var t_11 = runtime.memberLookup((l_data),"options_before");
if(t_11) {t_11 = runtime.fromIterator(t_11);
var t_10 = t_11.length;
for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("opt", t_12);
frame.set("loop.index", t_9 + 1);
frame.set("loop.index0", t_9);
frame.set("loop.revindex", t_10 - t_9);
frame.set("loop.revindex0", t_10 - t_9 - 1);
frame.set("loop.first", t_9 === 0);
frame.set("loop.last", t_9 === t_10 - 1);
frame.set("loop.length", t_10);
t_8 += "\n      ";
t_8 += runtime.suppressValue((lineno = 56, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "option"), "option", context, [t_12])), env.opts.autoescape);
t_8 += "\n    ";
;
}
}
frame = frame.pop();
t_8 += "\n    ";
frame = frame.push();
var t_15 = l_options;
if(t_15) {t_15 = runtime.fromIterator(t_15);
var t_14 = t_15.length;
for(var t_13=0; t_13 < t_15.length; t_13++) {
var t_16 = t_15[t_13];
frame.set("opt", t_16);
frame.set("loop.index", t_13 + 1);
frame.set("loop.index0", t_13);
frame.set("loop.revindex", t_14 - t_13);
frame.set("loop.revindex0", t_14 - t_13 - 1);
frame.set("loop.first", t_13 === 0);
frame.set("loop.last", t_13 === t_14 - 1);
frame.set("loop.length", t_14);
t_8 += "\n      ";
t_8 += runtime.suppressValue((lineno = 59, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "option"), "option", context, [t_16])), env.opts.autoescape);
t_8 += "\n    ";
;
}
}
frame = frame.pop();
t_8 += "\n    ";
frame = frame.push();
var t_19 = runtime.memberLookup((l_data),"options_after");
if(t_19) {t_19 = runtime.fromIterator(t_19);
var t_18 = t_19.length;
for(var t_17=0; t_17 < t_19.length; t_17++) {
var t_20 = t_19[t_17];
frame.set("opt", t_20);
frame.set("loop.index", t_17 + 1);
frame.set("loop.index0", t_17);
frame.set("loop.revindex", t_18 - t_17);
frame.set("loop.revindex0", t_18 - t_17 - 1);
frame.set("loop.first", t_17 === 0);
frame.set("loop.last", t_17 === t_18 - 1);
frame.set("loop.length", t_18);
t_8 += "\n      ";
t_8 += runtime.suppressValue((lineno = 62, colno = 15, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "option"), "option", context, [t_20])), env.opts.autoescape);
t_8 += "\n    ";
;
}
}
frame = frame.pop();
t_8 += "\n  </select>\n  ";
if(runtime.memberLookup((l_data),"description")) {
t_8 += "\n    <br>\n    ";
t_8 += runtime.suppressValue((lineno = 67, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [l_name,runtime.memberLookup((l_data),"description")])), env.opts.autoescape);
t_8 += "\n  ";
;
}
t_8 += "\n";
;
frame = callerFrame;
return new runtime.SafeString(t_8);
});
context.addExport("select");
context.setVariable("select", macro_t_7);
output += "\n\n";
var macro_t_21 = runtime.makeMacro(
["data"], 
[], 
function (l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("data", l_data);
var t_22 = "";t_22 += "\n  ";
if(runtime.memberLookup((l_data),"value")) {
t_22 += "\n    <option value=\"";
t_22 += runtime.suppressValue(runtime.memberLookup((l_data),"value"), env.opts.autoescape);
t_22 += "\">";
t_22 += runtime.suppressValue(runtime.memberLookup((l_data),"label"), env.opts.autoescape);
t_22 += "</option>\n  ";
;
}
else {
t_22 += "\n    <option>";
t_22 += runtime.suppressValue(l_data, env.opts.autoescape);
t_22 += "</option>\n  ";
;
}
t_22 += "\n";
;
frame = callerFrame;
return new runtime.SafeString(t_22);
});
context.addExport("option");
context.setVariable("option", macro_t_21);
output += "\n\n";
var macro_t_23 = runtime.makeMacro(
["name", "data"], 
[], 
function (l_name, l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("name", l_name);
frame.set("data", l_data);
var t_24 = "";t_24 += "\n  <br>\n  <textarea id=\"field-";
t_24 += runtime.suppressValue(l_name, env.opts.autoescape);
t_24 += "\"\n            name=\"";
t_24 += runtime.suppressValue(l_name, env.opts.autoescape);
t_24 += "\"\n            ";
if(runtime.memberLookup((l_data),"rows")) {
t_24 += "rows=\"";
t_24 += runtime.suppressValue(runtime.memberLookup((l_data),"rows"), env.opts.autoescape);
t_24 += "\"";
;
}
else {
t_24 += " rows=\"5\"";
;
}
t_24 += "\n            cols=\"100\"\n            ";
if(runtime.memberLookup((l_data),"required")) {
t_24 += "required aria-required=\"true\"";
;
}
t_24 += "\n            ";
if(runtime.memberLookup((l_data),"autocorrect")) {
t_24 += "autocorrect=\"";
t_24 += runtime.suppressValue(runtime.memberLookup((l_data),"autocorrect"), env.opts.autoescape);
t_24 += "\"";
;
}
t_24 += "\n            ";
if(runtime.memberLookup((l_data),"spellcheck")) {
t_24 += "spellcheck=\"";
t_24 += runtime.suppressValue(runtime.memberLookup((l_data),"spellcheck"), env.opts.autoescape);
t_24 += "\"";
;
}
t_24 += "\n            ";
if(runtime.memberLookup((l_data),"autocapitalize")) {
t_24 += "autocapitalize=\"";
t_24 += runtime.suppressValue(runtime.memberLookup((l_data),"autocapitalize"), env.opts.autoescape);
t_24 += "\"";
;
}
t_24 += "\n            ";
if(runtime.memberLookup((l_data),"description")) {
t_24 += "aria-describedby=\"description-";
t_24 += runtime.suppressValue(l_name, env.opts.autoescape);
t_24 += "\"";
;
}
t_24 += "\n            ></textarea>\n  ";
if(runtime.memberLookup((l_data),"description")) {
t_24 += "\n    ";
t_24 += runtime.suppressValue((lineno = 92, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [l_name,runtime.memberLookup((l_data),"description")])), env.opts.autoescape);
t_24 += "\n  ";
;
}
t_24 += "\n";
;
frame = callerFrame;
return new runtime.SafeString(t_24);
});
context.addExport("textarea");
context.setVariable("textarea", macro_t_23);
output += "\n\n";
var macro_t_25 = runtime.makeMacro(
["label", "name", "options", "data"], 
[], 
function (l_label, l_name, l_options, l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("label", l_label);
frame.set("name", l_name);
frame.set("options", l_options);
frame.set("data", l_data);
var t_26 = "";t_26 += "\n  <fieldset>\n    <legend\n      ";
if(runtime.memberLookup((l_data),"description")) {
t_26 += "aria-describedby=\"description-";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "\"";
;
}
t_26 += "\n      >";
t_26 += runtime.suppressValue(l_label, env.opts.autoescape);
t_26 += "</legend>\n    <ul class=\"field-list__field-group__list\">\n      ";
frame = frame.push();
var t_29 = l_options;
if(t_29) {t_29 = runtime.fromIterator(t_29);
var t_28 = t_29.length;
for(var t_27=0; t_27 < t_29.length; t_27++) {
var t_30 = t_29[t_27];
frame.set("option", t_30);
frame.set("loop.index", t_27 + 1);
frame.set("loop.index0", t_27);
frame.set("loop.revindex", t_28 - t_27);
frame.set("loop.revindex0", t_28 - t_27 - 1);
frame.set("loop.first", t_27 === 0);
frame.set("loop.last", t_27 === t_28 - 1);
frame.set("loop.length", t_28);
t_26 += "\n        <li>\n          ";
if(runtime.memberLookup((t_30),"value")) {
t_26 += "\n            <label for=\"field-";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "-";
t_26 += runtime.suppressValue(runtime.memberLookup((t_30),"value"), env.opts.autoescape);
t_26 += "\">\n              <input type=\"radio\"\n                    name=\"";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "\"\n                    id=\"field-";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "-";
t_26 += runtime.suppressValue(runtime.memberLookup((t_30),"value"), env.opts.autoescape);
t_26 += "\"\n                    value=\"";
t_26 += runtime.suppressValue(runtime.memberLookup((t_30),"value"), env.opts.autoescape);
t_26 += "\"\n                    ";
if(runtime.memberLookup((t_30),"note")) {
t_26 += "aria-describedby=\"description-";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "-";
t_26 += runtime.suppressValue(runtime.memberLookup((t_30),"value"), env.opts.autoescape);
t_26 += "\"";
;
}
t_26 += "\n                    >";
t_26 += runtime.suppressValue(runtime.memberLookup((t_30),"label"), env.opts.autoescape);
t_26 += "</label>\n          ";
;
}
else {
t_26 += "\n            <label for=\"field-";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "-";
t_26 += runtime.suppressValue(t_30, env.opts.autoescape);
t_26 += "\">\n              <input type=\"radio\"\n                    name=\"";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "\"\n                    id=\"field-";
t_26 += runtime.suppressValue(l_name, env.opts.autoescape);
t_26 += "-";
t_26 += runtime.suppressValue(t_30, env.opts.autoescape);
t_26 += "\"\n                    value=\"";
t_26 += runtime.suppressValue(t_30, env.opts.autoescape);
t_26 += "\"\n                    >";
t_26 += runtime.suppressValue(t_30, env.opts.autoescape);
t_26 += "</label>\n          ";
;
}
t_26 += "\n          ";
if(runtime.memberLookup((t_30),"note")) {
t_26 += "\n            <br>\n            ";
t_26 += runtime.suppressValue((lineno = 122, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [(l_name + "-" + runtime.memberLookup((t_30),"value")),runtime.memberLookup((t_30),"note")])), env.opts.autoescape);
t_26 += "\n          ";
;
}
t_26 += "\n        </li>\n      ";
;
}
}
frame = frame.pop();
t_26 += "\n    </ul>\n    ";
if(runtime.memberLookup((l_data),"description")) {
t_26 += "\n      ";
t_26 += runtime.suppressValue((lineno = 128, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [l_name,runtime.memberLookup((l_data),"description")])), env.opts.autoescape);
t_26 += "\n    ";
;
}
t_26 += "\n  </fieldset>\n";
;
frame = callerFrame;
return new runtime.SafeString(t_26);
});
context.addExport("radios");
context.setVariable("radios", macro_t_25);
output += "\n\n";
var macro_t_31 = runtime.makeMacro(
["label", "name", "options", "data"], 
[], 
function (l_label, l_name, l_options, l_data, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("label", l_label);
frame.set("name", l_name);
frame.set("options", l_options);
frame.set("data", l_data);
var t_32 = "";t_32 += "\n  <fieldset>\n    <legend\n      ";
if(runtime.memberLookup((l_data),"description")) {
t_32 += "aria-describedby=\"description-";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "\"";
;
}
t_32 += "\n      >";
t_32 += runtime.suppressValue(l_label, env.opts.autoescape);
t_32 += "</legend>\n    <ul class=\"field-list__field-group__list\">\n      ";
frame = frame.push();
var t_35 = l_options;
if(t_35) {t_35 = runtime.fromIterator(t_35);
var t_34 = t_35.length;
for(var t_33=0; t_33 < t_35.length; t_33++) {
var t_36 = t_35[t_33];
frame.set("option", t_36);
frame.set("loop.index", t_33 + 1);
frame.set("loop.index0", t_33);
frame.set("loop.revindex", t_34 - t_33);
frame.set("loop.revindex0", t_34 - t_33 - 1);
frame.set("loop.first", t_33 === 0);
frame.set("loop.last", t_33 === t_34 - 1);
frame.set("loop.length", t_34);
t_32 += "\n        <li>\n          ";
if(runtime.memberLookup((t_36),"value")) {
t_32 += "\n            <label for=\"field-";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "-";
t_32 += runtime.suppressValue(runtime.memberLookup((t_36),"value"), env.opts.autoescape);
t_32 += "\">\n              <input type=\"checkbox\"\n                    name=\"";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "[]\"\n                    id=\"field-";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "-";
t_32 += runtime.suppressValue(runtime.memberLookup((t_36),"value"), env.opts.autoescape);
t_32 += "\"\n                    value=\"";
t_32 += runtime.suppressValue(runtime.memberLookup((t_36),"value"), env.opts.autoescape);
t_32 += "\"\n                    ";
if(runtime.memberLookup((t_36),"note")) {
t_32 += "aria-describedby=\"description-";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "-";
t_32 += runtime.suppressValue(runtime.memberLookup((t_36),"value"), env.opts.autoescape);
t_32 += "\"";
;
}
t_32 += "\n                    >";
t_32 += runtime.suppressValue(runtime.memberLookup((t_36),"label"), env.opts.autoescape);
t_32 += "</label>\n          ";
;
}
else {
t_32 += "\n            <label for=\"field-";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "-";
t_32 += runtime.suppressValue(t_36, env.opts.autoescape);
t_32 += "\">\n              <input type=\"checkbox\"\n                    name=\"";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "[]\"\n                    id=\"field-";
t_32 += runtime.suppressValue(l_name, env.opts.autoescape);
t_32 += "-";
t_32 += runtime.suppressValue(t_36, env.opts.autoescape);
t_32 += "\"\n                    value=\"";
t_32 += runtime.suppressValue(t_36, env.opts.autoescape);
t_32 += "\"\n                    >";
t_32 += runtime.suppressValue(t_36, env.opts.autoescape);
t_32 += "</label>\n          ";
;
}
t_32 += "\n          ";
if(runtime.memberLookup((t_36),"note")) {
t_32 += "\n            <br>\n            ";
t_32 += runtime.suppressValue((lineno = 159, colno = 26, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [(l_name + "-" + runtime.memberLookup((t_36),"value")),runtime.memberLookup((t_36),"note")])), env.opts.autoescape);
t_32 += "\n          ";
;
}
t_32 += "\n        </li>\n      ";
;
}
}
frame = frame.pop();
t_32 += "\n    </ul>\n    ";
if(runtime.memberLookup((l_data),"description")) {
t_32 += "\n      ";
t_32 += runtime.suppressValue((lineno = 165, colno = 20, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "description"), "description", context, [l_name,runtime.memberLookup((l_data),"description")])), env.opts.autoescape);
t_32 += "\n    ";
;
}
t_32 += "\n  </fieldset>\n";
;
frame = callerFrame;
return new runtime.SafeString(t_32);
});
context.addExport("checkboxes");
context.setVariable("checkboxes", macro_t_31);
output += "\n\n";
var macro_t_37 = runtime.makeMacro(
["id", "html"], 
[], 
function (l_id, l_html, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("id", l_id);
frame.set("html", l_html);
var t_38 = "";t_38 += "\n  <em class=\"[ field-list__field-group__description ]\" id=\"description-";
t_38 += runtime.suppressValue(l_id, env.opts.autoescape);
t_38 += "\">";
t_38 += runtime.suppressValue(env.getFilter("safe").call(context, l_html), env.opts.autoescape);
t_38 += "</em>\n";
;
frame = callerFrame;
return new runtime.SafeString(t_38);
});
context.addExport("description");
context.setVariable("description", macro_t_37);
output += "\n\n";
var macro_t_39 = runtime.makeMacro(
["name", "value"], 
[], 
function (l_name, l_value, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("name", l_name);
frame.set("value", l_value);
var t_40 = "";t_40 += "\n  <input type=\"hidden\" name=\"";
t_40 += runtime.suppressValue(l_name, env.opts.autoescape);
t_40 += "\" id=\"field-";
t_40 += runtime.suppressValue(l_name, env.opts.autoescape);
t_40 += "\" value=\"";
t_40 += runtime.suppressValue(l_value, env.opts.autoescape);
t_40 += "\">\n";
;
frame = callerFrame;
return new runtime.SafeString(t_40);
});
context.addExport("hidden_field");
context.setVariable("hidden_field", macro_t_39);
output += "\n\n";
var macro_t_41 = runtime.makeMacro(
["text"], 
[], 
function (l_text, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("text", l_text);
var t_42 = "";t_42 += "\n  <button type=\"submit\" class=\"[ button ] [ font-base text-base weight-bold ]\">";
t_42 += runtime.suppressValue(l_text, env.opts.autoescape);
t_42 += "</button>\n";
;
frame = callerFrame;
return new runtime.SafeString(t_42);
});
context.addExport("button");
context.setVariable("button", macro_t_41);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["macros/site.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "\n\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/contact-form.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("macros/form.njk", false, "partials/components/contact-form.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
if(Object.prototype.hasOwnProperty.call(t_1, "label")) {
var t_4 = t_1.label;
} else {
cb(new Error("cannot import 'label'")); return;
}
context.setVariable("label", t_4);
if(Object.prototype.hasOwnProperty.call(t_1, "field")) {
var t_5 = t_1.field;
} else {
cb(new Error("cannot import 'field'")); return;
}
context.setVariable("field", t_5);
if(Object.prototype.hasOwnProperty.call(t_1, "textarea")) {
var t_6 = t_1.textarea;
} else {
cb(new Error("cannot import 'textarea'")); return;
}
context.setVariable("textarea", t_6);
if(Object.prototype.hasOwnProperty.call(t_1, "button")) {
var t_7 = t_1.button;
} else {
cb(new Error("cannot import 'button'")); return;
}
context.setVariable("button", t_7);
output += "\n\n<form name=\"contact\" method=\"POST\" data-netlify=\"true\" action=\"/thank-you\" netlify-honeypot=\"bot-field\">\n  <ol class=\"[ field-list ]\">\n    <li class=\"[ field-list__field-group ]\">\n      ";
output += runtime.suppressValue((lineno = 5, colno = 14, runtime.callWrap(t_4, "label", context, ["What’s your name?","name"])), env.opts.autoescape);
output += "\n      ";
output += runtime.suppressValue((lineno = 6, colno = 14, runtime.callWrap(t_5, "field", context, ["text","name",{"required": true,"placeholder": "Katherine Johnson","autocomplete": "name","autocorrect": "off","autocapitalize": "off"}])), env.opts.autoescape);
output += "\n    </li>\n    <li class=\"[ field-list__field-group ]\">\n      ";
output += runtime.suppressValue((lineno = 9, colno = 14, runtime.callWrap(t_4, "label", context, ["What’s your email address?","email"])), env.opts.autoescape);
output += "\n      ";
output += runtime.suppressValue((lineno = 10, colno = 14, runtime.callWrap(t_5, "field", context, ["email","email",{"required": true,"placeholder": "katherine@johnson.tld","autocomplete": "email"}])), env.opts.autoescape);
output += "\n    </li>\n    <li class=\"[ field-list__field-group ]\">\n      ";
output += runtime.suppressValue((lineno = 13, colno = 14, runtime.callWrap(t_4, "label", context, ["What’s on your mind?","message"])), env.opts.autoescape);
output += "\n      ";
output += runtime.suppressValue((lineno = 14, colno = 17, runtime.callWrap(t_6, "textarea", context, ["message",{"required": true,"autocapitalize": "sentences","spellcheck": "true"}])), env.opts.autoescape);
output += "\n    </li>\n    <li hidden>\n      <label>Don’t fill this out if you're human: <input name=\"bot-field\" /></label>\n    </li>\n  </ol>\n  ";
output += runtime.suppressValue((lineno = 20, colno = 11, runtime.callWrap(t_7, "button", context, ["Send message"])), env.opts.autoescape);
output += "\n</form>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/home.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<h1 class=\"home__heading ";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "logo")?" visually-hidden":""), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "introHeading"), env.opts.autoescape);
output += "</h1>\n";
if(runtime.contextOrFrameLookup(context, frame, "logo")) {
output += "\n  <img class='home__logo' src='";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "logo"), env.opts.autoescape);
output += "' alt='Genius Immersive Show' width='140' height='70'>\n";
;
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "introSummary")) {
output += "\n  <div class=\"home__description\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "introSummary")), env.opts.autoescape);
output += "</div>\n";
;
}
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/nav.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "navigation")),"items")) {
output += "\n  <nav class=\"nav\" aria-label=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ariaLabel"), env.opts.autoescape);
output += "\">\n    <ul class=\"nav__list\">\n      ";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "navigation")),"items");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n        ";
var t_5;
t_5 = "";
frame.set("relAttribute", t_5, true);
if(frame.topLevel) {
context.setVariable("relAttribute", t_5);
}
if(frame.topLevel) {
context.addExport("relAttribute", t_5);
}
output += "\n\n        ";
if(runtime.memberLookup((t_4),"rel")) {
output += "\n          ";
var t_6;
t_6 = " rel=\"" + runtime.memberLookup((t_4),"rel") + "\"";
frame.set("relAttribute", t_6, true);
if(frame.topLevel) {
context.setVariable("relAttribute", t_6);
}
if(frame.topLevel) {
context.addExport("relAttribute", t_6);
}
output += "\n        ";
;
}
output += "\n\n          ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") !== runtime.memberLookup((t_4),"url")) {
output += "\n            <li class=\"nav__item\">\n              <a class='nav__link' href=\"";
output += runtime.suppressValue(env.getFilter("url").call(context, runtime.memberLookup((t_4),"url")), env.opts.autoescape);
output += "\"";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "relAttribute")), env.opts.autoescape);
output += ">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"text"), env.opts.autoescape);
output += "</a>\n            </li>\n          ";
;
}
output += "\n      ";
;
}
}
frame = frame.pop();
output += "\n    </ul>\n  </nav>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/pagination.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = "leading-tight text-500 weight-mid box-inline-flex align-center pad-bottom-300";
frame.set("paginationLinkTokens", t_1, true);
if(frame.topLevel) {
context.setVariable("paginationLinkTokens", t_1);
}
if(frame.topLevel) {
context.addExport("paginationLinkTokens", t_1);
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "paginationNextUrl") || runtime.contextOrFrameLookup(context, frame, "paginationPrevUrl")) {
output += "\n  <hr />\n  <div class=\"inner-wrapper\">\n    <footer class=\"[ pagination ] [ pad-bottom-900 ]\">\n      <nav class=\"[ pagination__nav ] [ box-flex space-between align-center ]\">\n        ";
if(runtime.contextOrFrameLookup(context, frame, "paginationPrevUrl")) {
output += "\n          <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationPrevUrl"), env.opts.autoescape);
output += "\" class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationLinkTokens"), env.opts.autoescape);
output += "\" data-direction=\"backwards\">\n            <span>";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "paginationPrevText")?runtime.contextOrFrameLookup(context, frame, "paginationPrevText"):"Previous"), env.opts.autoescape);
output += "</span>\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("icons/arrow.svg", false, "partials/components/pagination.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
callback(null,t_2);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
callback(null,t_4);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n          </a>\n        ";
});
}
output += "\n        ";
if(runtime.contextOrFrameLookup(context, frame, "paginationNextUrl")) {
output += "\n          <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationNextUrl"), env.opts.autoescape);
output += "\" class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationLinkTokens"), env.opts.autoescape);
output += "\" data-direction=\"forwards\">\n            <span>";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "paginationNextText")?runtime.contextOrFrameLookup(context, frame, "paginationNextText"):"Next"), env.opts.autoescape);
output += "</span>\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("icons/arrow.svg", false, "partials/components/pagination.njk", false, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
callback(null,t_6);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n          </a>\n        ";
});
}
output += "\n      </nav>\n    </footer>\n  </div>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/post-list.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "postListItems")),"length")) {
output += "\n  <section class=\"[ post-list ] [ pad-top-700 gap-bottom-900 ]\">\n    <div class=\"[ inner-wrapper ] [ sf-flow ]\">\n      <h2 class=\"[ post-list__heading ] [ text-700 md:text-800 ]\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "postListHeading"), env.opts.autoescape);
output += "</h2>\n      <ol class=\"[ post-list__items ] [ sf-flow ] [ pad-top-300 ]\" reversed>\n        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "postListItems");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n          ";
if((lineno = 6, colno = 33, runtime.callWrap(runtime.memberLookup((runtime.memberLookup((t_4),"date")),"getTime"), "item[\"date\"][\"getTime\"]", context, [])) <= runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "global")),"now")) {
output += "\n            <li class=\"post-list__item\">\n              <h3 class=\"font-base leading-tight text-600 weight-mid\">\n                <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\" class=\"post-list__link\" rel=\"bookmark\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"title"), env.opts.autoescape);
output += "</a>\n              </h3>\n              <p class=\"text-500 gap-top-300 weight-mid\">\n                <time datetime=\"";
output += runtime.suppressValue(env.getFilter("w3DateFilter").call(context, runtime.memberLookup((t_4),"date")), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(env.getFilter("dateFilter").call(context, runtime.memberLookup((t_4),"date")), env.opts.autoescape);
output += "</time>\n              </p>\n            </li>\n          ";
;
}
output += "\n        ";
;
}
}
frame = frame.pop();
output += "\n      </ol>\n    </div>\n  </section>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/subscribe.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<form class='subscribe' id='subscribe' name=\"subscribe\" action=\"https://script.google.com/macros/s/AKfycbxZNVCq-9zSC6qPfDPCi0Vp5Wez9IV39B5wiANdZXdSC82CwJrpMgNW3OFrIJR-9c5N9A/exec\" method='post'>\n  <p class='subscribe__text'>Coming Soon in 2021. Subscribe for News</p>\n  <div class='subscribe__wrapper'>\n    <input class='subscribe__input' type='email' name='email' placeholder='Type e-mail' aria-label='E-mail' required>\n    <button class='subscribe__btn' name='btn'><span>Send</span></button>\n    <p class='subscribe__message' hidden>This is wrong email</p>\n  </div>\n  <input name=\"bot-field\" aria-label='Don’t fill this out' type='hidden'/>\n</form>\n<script>\n  document.getElementById('subscribe').addEventListener('submit', function(e) {\n    e.preventDefault();\n    const form = e.currentTarget;\n    const formData = new FormData(form);\n    const email = form.email;\n    const btn = form.btn;\n    const msg = document.querySelector('.subscribe__message');\n    form.classList.remove('subscribe--success', 'subscribe--error');\n    email.disabled = btn.disabled = true;\n\n    fetch(form.action, {method: form.method, body: formData})\n            .then(async response => {\n              form.classList.add('subscribe--success');\n              msg.textContent = 'Thank you, we added your email to the list';\n              console.log('Success!', await response.json().then(data => data));\n              email.disabled = btn.disabled = false;\n            })\n            .catch(error => {\n              form.classList.add('subscribe--error');\n              msg.textContent = 'Network error. Please try later';\n              console.error('Error!', error.message);\n              email.disabled = btn.disabled = false;\n            })\n  });\n</script>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/meta-info.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "title") + " - " + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name");
frame.set("pageTitle", t_1, true);
if(frame.topLevel) {
context.setVariable("pageTitle", t_1);
}
if(frame.topLevel) {
context.addExport("pageTitle", t_1);
}
output += "\n";
var t_2;
t_2 = "";
frame.set("pageDesc", t_2, true);
if(frame.topLevel) {
context.setVariable("pageDesc", t_2);
}
if(frame.topLevel) {
context.addExport("pageDesc", t_2);
}
output += "\n";
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name");
frame.set("siteTitle", t_3, true);
if(frame.topLevel) {
context.setVariable("siteTitle", t_3);
}
if(frame.topLevel) {
context.addExport("siteTitle", t_3);
}
output += "\n";
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"url") + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url");
frame.set("currentUrl", t_4, true);
if(frame.topLevel) {
context.setVariable("currentUrl", t_4);
}
if(frame.topLevel) {
context.addExport("currentUrl", t_4);
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "metaTitle")) {
output += "\n  ";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "metaTitle");
frame.set("pageTitle", t_5, true);
if(frame.topLevel) {
context.setVariable("pageTitle", t_5);
}
if(frame.topLevel) {
context.addExport("pageTitle", t_5);
}
output += "\n";
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "metaDesc")) {
output += "\n  ";
var t_6;
t_6 = runtime.contextOrFrameLookup(context, frame, "metaDesc");
frame.set("pageDesc", t_6, true);
if(frame.topLevel) {
context.setVariable("pageDesc", t_6);
}
if(frame.topLevel) {
context.addExport("pageDesc", t_6);
}
output += "\n";
;
}
output += "\n\n<title>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageTitle"), env.opts.autoescape);
output += "</title>\n<link rel=\"canonical\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "currentUrl"), env.opts.autoescape);
output += "\" />\n\n<meta property=\"og:site_name\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "siteTitle"), env.opts.autoescape);
output += "\" />\n<meta property=\"og:title\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageTitle"), env.opts.autoescape);
output += "\" />\n<meta property=\"og:type\" content=\"website\" />\n<meta property=\"og:url\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "currentUrl"), env.opts.autoescape);
output += "\" />\n\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"authorHandle")) {
output += "\n  <meta name=\"twitter:creator\" content=\"@";
output += runtime.suppressValue(env.getFilter("replace").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"authorHandle"),"@",""), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "metaDesc")) {
output += "\n  <meta name=\"description\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "metaDesc"), env.opts.autoescape);
output += "\" />\n  <meta name=\"twitter:description\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "metaDesc"), env.opts.autoescape);
output += "\" />\n  <meta property=\"og:description\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "metaDesc"), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "socialImage")) {
output += "  \n  <meta property=\"og:image\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "socialImage"), env.opts.autoescape);
output += "\" />\n  <meta name=\"twitter:image\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "socialImage"), env.opts.autoescape);
output += "\" />\n  <meta property=\"og:image:alt\" content=\"Page image for ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += "\" />\n  <meta name=\"twitter:image:alt\" content=\"Page image for ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"paymentPointer")) {
output += "\n  <meta name=\"monetization\" content=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"paymentPointer"), env.opts.autoescape);
output += "\" />\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/site-foot.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<footer class=\"footer\">\n  ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/nav.njk", false, "partials/global/site-foot.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n</footer>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/site-frame.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<div class='frame'>\n    <span class='frame__target'></span>\n    <span class='frame__swatches'></span>\n    <span class='frame__target'></span>\n    <span class='frame__left'></span>\n    <span class='frame__code'>EJ 01 5790 8702+33</span>\n    <span class='frame__scale'>\n        <span></span>\n    </span>\n    <span class='frame__target'></span>\n    <span class='frame__target'></span>\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/site-head.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<a class=\"skip-link\" href=\"#main-content\">Skip to content</a>\n<header role=\"banner\" class=\"[ site-head ] [ pad-top-700 pad-bottom-700 \">\n  <div class=\"wrapper\">\n    <div class=\"[ site-head__inner ] [ md:box-flex space-between align-center ]\">\n      <a href=\"/\" class=\"[ site-head__site-name ] [ leading-tight ]\">\n        <span class=\"visually-hidden\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += " - Home</span>\n        <span class=\"[ site-head__site-name ] [ text-600 ]\" aria-hidden=\"true\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += "</span>\n      </a>\n      ";
var t_1;
t_1 = "navigation";
frame.set("ariaLabel", t_1, true);
if(frame.topLevel) {
context.setVariable("ariaLabel", t_1);
}
if(frame.topLevel) {
context.addExport("ariaLabel", t_1);
}
output += "\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/nav.njk", false, "partials/global/site-head.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
callback(null,t_2);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
callback(null,t_4);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    </div>\n  </div>\n</header>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/third-party-comments.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!-- ADD YOUR THIRD PARTY COMMENTS CODE HERE -->\n<!-- COMMENTO EXAMPLE \n<div id=\"commento\"></div>\n<script defer\n  src=\"https://cdn.commento.io/js/commento.js\">\n</script>\n-->\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

