(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{227:function(t,e,n){"use strict";n.r(e);var o=n(23),i=n(3),r=n(47);e.default=(t={})=>{const{gmcMerchantId:e,dialogPosition:n}=t;if(e){const t=window.storefrontApp&&window.storefrontApp.router;if(t){const s=({name:t,params:s})=>{if("confirmation"===t&&s.json){const t=t=>{const e=new Date(Date.now());return e.setDate(e.getDate()+t),e};let a,d,c,l;const p=decodeURIComponent(s.json);if(p)try{a=JSON.parse(p)}catch(t){}if(a){const{buyers:e}=a;e&&e[0]&&(d=e[0].main_email);const n=a.shipping_lines&&a.shipping_lines[0];if(n&&n.delivery_time){let e=n.delivery_time.days;n.posting_deadline&&(e+=n.delivery_time.days),n.delivery_time.working_days&&(e*=1.25),l=t(e+3)}}d||(d=r.a.getCustomer().main_email),c||(c=o.$ecomConfig.get("country_code")),l||(l=t(14));const u=[],g=[],m={merchant_id:e,order_id:s.number||s.id,email:d,delivery_country:c,estimated_delivery_date:l.getFullYear()+`-${(l.getMonth()+1).toString().padStart(2,"0")}-`+l.getDate().toString().padStart(2,"0"),opt_in_style:n||"CENTER_DIALOG"};if(a&&a.items)for(let t=0;t<a.items.length&&t<=4;t++)u.push(Object(i.g)({url:`/products/${a.items[t].product_id}.json`}).then((({data:t})=>{t.gtin&&t.gtin.forEach((t=>{g.includes(t)||g.push(t)}))})).catch(console.error));Promise.allSettled(u).then((()=>{g.length&&(m.products=g.map((t=>({gtin:t})))),window.gapi.load("surveyoptin",(function(){window.gapi.surveyoptin.render(m)}))}))}};t.currentRoute&&s(t.currentRoute),t.afterEach(s)}}else console.error(new Error("Can't show opt-in dialog without `gmcMerchantId` option"))}}}]);
//# sourceMappingURL=chunk.1001266be686f43b2f2e.js.map