(()=>{"use strict";const e=async function(e){let t=document.querySelector("#overlay");t.classList.remove("hidden");const n=await fetch(e);if(200==n.status){let e=n.json();return t.classList.add("hidden"),e}return t.classList.add("hidden"),!1};!function(){let e=document.querySelector(".modeEvent"),t=localStorage.getItem("modeEv")?localStorage.getItem("modeEv"):1;1==t?(document.body.classList.add("modeChange"),t=0):0==t&&(document.body.classList.remove("modeChange"),t=1),e.addEventListener("click",(()=>{1==t?(document.body.classList.add("modeChange"),localStorage.setItem("modeEv",t),t=0):0==t&&(document.body.classList.remove("modeChange"),localStorage.setItem("modeEv",t),t=1)}))}();let t=document.querySelector("#list");const n=document.querySelector("#input"),o=document.querySelectorAll(".dropDawnItem");let a;function l(e){let{name:n,population:o,region:l,capital:c,img:s}={name:e.name.common?e.name.common:e.name,img:e.flags.svg,population:e.population,region:e.region,capital:e.capital},i=document.createElement("li");i.innerHTML+=`\n    <a href="./about.html?query=${n}" class="list__item">\n        <div class="list__img">\n            <img width="267" height="160" src="${s}" alt="" />\n        </div>\n        <div class="list__desc">\n          <h3>${n}</h3>\n          <p><b>Population</b> : <small>${o.toLocaleString("en-US")}\n          </small></p>\n          <p><b>Region</b> : <small>${l}</small></p>\n          <p><b>Capital</b> : <small>\n          ${c||"No capital"}</small></p>\n        </div>\n    </a>\n  `,t.appendChild(i),i.addEventListener("click",(()=>{a=n,localStorage.setItem("item",n)}))}e("https://restcountries.com/v3.1/all").then((e=>{e.forEach((e=>{l(e)}))})),o.forEach((n=>{n.addEventListener("click",(()=>{"All"!=n.textContent?(t.innerHTML="",e(`https://restcountries.com/v2/region/${n.textContent}`).then((e=>{e.forEach((e=>{l(e)}))}))):(t.innerHTML="",e("https://restcountries.com/v3.1/all").then((e=>{e.forEach((e=>{l(e)}))})))}))})),document.addEventListener("keydown",(o=>{let a=n.value;"Enter"==o.code&&e(`https://restcountries.com/v3.1/name/${a}`).then((e=>{0==e?console.log("1"):(t.innerHTML="",l(e[0]))}))}))})();