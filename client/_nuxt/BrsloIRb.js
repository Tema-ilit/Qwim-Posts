import{C as p,r as a,D as r}from"./7GQeKb7p.js";const l=p("postsSrore",()=>{const t=a(),o=a(),e="https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/";return{posts:t,post:o,getposts:async()=>{const s=await $fetch(e);t.value=s},getPost:async s=>{const c=await $fetch(`${e}${s}`);o.value=c}}}),u=r("/img/default1.jpg");export{u as _,l as u};
