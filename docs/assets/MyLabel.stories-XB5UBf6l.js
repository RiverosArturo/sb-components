import{j as S}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const g=({label:o,size:C="normal",allCaps:x=!1,color:h,fontColor:v})=>S.jsx("div",{className:`${C} ${h} label`,style:{color:v},children:x?o.toUpperCase():o});g.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Label size",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize all letters",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Label color"},fontColor:{required:!1,tsType:{name:"string"},description:"Font color"}}};const q={title:"UI/labels/MyLabel",component:g,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Basic label",size:"h1"}},a={args:{label:"All caps label",allCaps:!0}},r={args:{label:"Secondary label",color:"text-secondary"}},l={args:{label:"Custom color label",fontColor:"#5517ac"}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    //Valor por default de nuestro label
    label: 'Basic label',
    //Valor del size por default
    size: 'h1'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'All caps label',
    allCaps: true
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    color: 'text-secondary'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var b,y,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Custom color label',
    fontColor: '#5517ac'
  }
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const L=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,L as __namedExportsOrder,q as default};
