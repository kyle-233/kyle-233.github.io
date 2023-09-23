import{o as u,r as t,j as e}from"./index-bb671be0.js";import{C as y}from"./index-7a86f61f.js";import{r as b}from"./base-efe8d08d.js";const h=()=>{const{blogId:s}=u(),[o,r]=t.useState({title:"",__html:"",labels:[{node:{name:"",color:""}}],createdAt:""}),a=async()=>{const n=`query {
            repository(owner: "kyle-233", name: "kyle-233.github.io") {
              issue(number: ${s}) {
                title
                bodyHTML
                number
                url
                createdAt
                labels (first: 10) {
                  nodes {
                    name
                    color
                  }
                }
              }
            }
          }`,l=await b(n),{title:i,bodyHTML:c,labels:m,createdAt:d}=l.repository.issue;r(()=>({__html:c,title:i,labels:m,createdAt:d}))};return t.useEffect(()=>{a()},[]),e.jsxs(y,{children:[e.jsx("h1",{}),e.jsx("div",{className:"markdown-body",children:e.jsx("p",{dangerouslySetInnerHTML:o})})]})};export{h as default};
