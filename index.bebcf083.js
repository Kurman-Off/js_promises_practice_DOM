var e=new Promise(function(e,n){document.addEventListener("click",function(){e("First promise was resolved")}),setTimeout(function(){n(Error("First promise was rejected"))},3e3)}),n=new Promise(function(e){document.addEventListener("click",function(){e("Second promise was resolved")}),document.addEventListener("contextmenu",function(n){n.preventDefault(),e("Second promise was resolved")})}),t=new Promise(function(e){var n=!1,t=!1,o=function(c){0===c.button?n=!0:2===c.button&&(t=!0),n&&t&&(e("Third promise was resolved"),document.removeEventListener("click",o),document.removeEventListener("contextmenu",o))};document.addEventListener("click",o),document.addEventListener("contextmenu",o)});function o(e,n){var t=document.createElement("div");t.setAttribute("data-qa","notification"),t.className="success"===e?"success":"error",t.textContent=n,document.body.appendChild(t)}e.then(function(e){return o("success",e)},function(e){return o("error",e.message)}),n.then(function(e){return o("success",e)}),t.then(function(e){return o("success",e)});
//# sourceMappingURL=index.bebcf083.js.map
