"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[210],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=l.createContext({}),p=function(e){var n=l.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return l.createElement(m.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},u=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(t),u=a,f=s["".concat(m,".").concat(u)]||s[u]||c[u]||r;return t?l.createElement(f,o(o({ref:n},d),{},{components:t})):l.createElement(f,o({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<r;p++)o[p]=t[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6615:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var l=t(7462),a=(t(7294),t(3905));const r={},o=void 0,i={unversionedId:"columns/vue3\u7b80\u5386-preDev",id:"columns/vue3\u7b80\u5386-preDev",title:"vue3\u7b80\u5386-preDev",description:"vue3\u6784\u5efa\u7b80\u5386\u5de5\u5177",source:"@site/docs/columns/vue3\u7b80\u5386-preDev.md",sourceDirName:"columns",slug:"/columns/vue3\u7b80\u5386-preDev",permalink:"/my-blog/docs/columns/vue3\u7b80\u5386-preDev",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/columns/vue3\u7b80\u5386-preDev.md",tags:[],version:"current",frontMatter:{},sidebar:"columnSidebar",previous:{title:"NestJS\u5165\u95e8\u6307\u5317",permalink:"/my-blog/docs/columns/NestJS\u5165\u95e8\u6307\u5317"}},m={},p=[{value:"vue3\u6784\u5efa\u7b80\u5386\u5de5\u5177",id:"vue3\u6784\u5efa\u7b80\u5386\u5de5\u5177",level:2},{value:"\u51c6\u5907\u9636\u6bb5\u6848\u4f8b",id:"\u51c6\u5907\u9636\u6bb5\u6848\u4f8b",level:3},{value:"demo1\uff1aDOM\u5143\u7d20\u8f6c\u6362\u4e3a\u56fe\u7247\uff0c\u70b9\u51fb\u6309\u94ae\u4e0b\u8f7d",id:"demo1dom\u5143\u7d20\u8f6c\u6362\u4e3a\u56fe\u7247\u70b9\u51fb\u6309\u94ae\u4e0b\u8f7d",level:4},{value:"demo2\uff1aDOM\u5143\u7d20\u8f6c\u6362\u4e3a\u56fe\u7247\u518d\u8f6c\u6362\u4e3apdf\uff0c\u70b9\u51fb\u6309\u94ae\u4e0b\u8f7d",id:"demo2dom\u5143\u7d20\u8f6c\u6362\u4e3a\u56fe\u7247\u518d\u8f6c\u6362\u4e3apdf\u70b9\u51fb\u6309\u94ae\u4e0b\u8f7d",level:4},{value:"el-form\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5b57\u6bb5\u589e\u5220\u548c\u5b9e\u65f6\u5c55\u793a",id:"el-form\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5b57\u6bb5\u589e\u5220\u548c\u5b9e\u65f6\u5c55\u793a",level:4},{value:"\u5c01\u88c5BaseInfo\u7ec4\u4ef6\u5e76\u5c06\u6700\u65b0\u5b57\u6bb5\u4fe1\u606f\u66b4\u9732\u7ed9\u7236\u7ec4\u4ef6",id:"\u5c01\u88c5baseinfo\u7ec4\u4ef6\u5e76\u5c06\u6700\u65b0\u5b57\u6bb5\u4fe1\u606f\u66b4\u9732\u7ed9\u7236\u7ec4\u4ef6",level:4},{value:"title\u6837\u5f0f",id:"title\u6837\u5f0f",level:4}],d={toc:p},s="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,l.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vue3\u6784\u5efa\u7b80\u5386\u5de5\u5177"},"vue3\u6784\u5efa\u7b80\u5386\u5de5\u5177"),(0,a.kt)("h3",{id:"\u51c6\u5907\u9636\u6bb5\u6848\u4f8b"},"\u51c6\u5907\u9636\u6bb5\u6848\u4f8b"),(0,a.kt)("h4",{id:"demo1dom\u5143\u7d20\u8f6c\u6362\u4e3a\u56fe\u7247\u70b9\u51fb\u6309\u94ae\u4e0b\u8f7d"},"demo1\uff1aDOM\u5143\u7d20\u8f6c\u6362\u4e3a\u56fe\u7247\uff0c\u70b9\u51fb\u6309\u94ae\u4e0b\u8f7d"),(0,a.kt)("p",null,"\u5728dom\u6302\u8f7d\u540e\uff0c\u8c03\u7528html2canvas\u7684API\u5373\u53ef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <div>\n    <div ref=\"captureElement\" style=\"padding: 10px; background: #f5da55\">\n      <h4 style=\"color: #000;\">Hello world!</h4>\n    </div>\n    <button @click=\"capture\">Capture</button>\n  </div>\n</template>\n\n<script setup>\nimport { ref, onMounted } from 'vue';\nimport html2canvas from 'html2canvas';\n\nconst captureElement = ref(null);\n\nconst capture = () => {\n  if (captureElement.value) {\n    html2canvas(captureElement.value).then(canvas => {\n      const imgData = canvas.toDataURL('image/jpeg');\n      // \u4e0b\u8f7d\u56fe\u7247\n      const link = document.createElement('a');\n      link.download = 'capture.jpg';\n      link.href = imgData;\n      link.click();\n    });\n  }\n  console.log('captureElement is null')\n};\n\nonMounted(() => {\n  capture()\n});\n<\/script>\n")),(0,a.kt)("h4",{id:"demo2dom\u5143\u7d20\u8f6c\u6362\u4e3a\u56fe\u7247\u518d\u8f6c\u6362\u4e3apdf\u70b9\u51fb\u6309\u94ae\u4e0b\u8f7d"},"demo2\uff1aDOM\u5143\u7d20\u8f6c\u6362\u4e3a\u56fe\u7247\u518d\u8f6c\u6362\u4e3apdf\uff0c\u70b9\u51fb\u6309\u94ae\u4e0b\u8f7d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <div>\n    <div ref=\"captureElement\" style=\"padding: 10px; background: #f5da55\">\n      <h4 style=\"color: #000;\">Hello world!</h4>\n    </div>\n    <button @click=\"capture\">Capture</button>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue';\nimport html2canvas from 'html2canvas';\nimport jspdf from 'jspdf';\n\nconst captureElement = ref(null);\n\nconst capture = () => {\n  if (captureElement.value) {\n    html2canvas(captureElement.value).then(canvas => {\n      const imgData = canvas.toDataURL('image/jpeg');\n      const pdf = new jspdf();\n      pdf.addImage(imgData, 'JPEG', 0, 0);\n      pdf.save('capture.pdf');\n    });\n  }\n  console.log('captureElement is null')\n};\n<\/script>\n")),(0,a.kt)("h4",{id:"el-form\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5b57\u6bb5\u589e\u5220\u548c\u5b9e\u65f6\u5c55\u793a"},"el-form\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5b57\u6bb5\u589e\u5220\u548c\u5b9e\u65f6\u5c55\u793a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <div>\n    <el-form :model="form" label-width="80px" @input="handleFormChange">\n      <div v-for="(field, index) in formFields" :key="index" class="field">\n        <el-form-item label="label">\n          <el-input v-model="field.label" placeholder="\u5b57\u6bb5\u540d"></el-input>\n        </el-form-item>\n        <el-form-item label="value">\n          <el-input v-model="field.value" placeholder="\u5b57\u6bb5\u503c"></el-input>\n        </el-form-item>\n        <el-button type="danger" @click="removeField(index)" style="margin-left: 20px;">delete</el-button>\n      </div>\n      <el-form-item>\n        <el-button type="primary" @click="addField">Add Field</el-button>\n        <el-button type="primary" @click="submitForm">Submit</el-button>\n      </el-form-item>\n    </el-form>\n\n    <div class="display-area">\n      <h4>Form Data:</h4>\n      <p v-for="(field, index) in _formFields" :key="index">{{ field.label }}: {{ field.value }}</p>\n    </div>\n  </div>\n</template>\n\n<script setup>\nimport { reactive, computed  } from \'vue\';\n\nconst form = reactive({\n  name: \'\',\n  email: \'\',\n  age: \'\'\n});\n\nconst formFields = reactive([\n  { label: \'Name\', value: \'\' },\n  { label: \'Email\', value: \'\' },\n  { label: \'Age\', value: \'\' }\n]);\n\n// \u6570\u636e\u5b9e\u65f6\u5c55\u793a\u65f6\u8fc7\u6ee4\u6389\u8fd8\u672a\u786e\u5b9a\u6807\u7b7e\u7684\u81ea\u5b9a\u4e49\u5b57\u6bb5\nconst _formFields = computed(() => {\n  return formFields.filter(({label}) => label)\n})\n\nconst handleFormChange = () => {\n  // Do something when form values change\n};\n\nconst submitForm = () => {\n  // Handle form submission\n};\n\nconst addField = () => {\n  formFields.push({ label: \'\', value: \'\' });\n};\n\nconst removeField = (index) => {\n  formFields.splice(index, 1);\n};\n<\/script>\n\n<style>\n.display-area {\n  margin-top: 20px;\n}\n\n.field {\n  display: flex;\n}\n</style>\n')),(0,a.kt)("h4",{id:"\u5c01\u88c5baseinfo\u7ec4\u4ef6\u5e76\u5c06\u6700\u65b0\u5b57\u6bb5\u4fe1\u606f\u66b4\u9732\u7ed9\u7236\u7ec4\u4ef6"},"\u5c01\u88c5BaseInfo\u7ec4\u4ef6\u5e76\u5c06\u6700\u65b0\u5b57\u6bb5\u4fe1\u606f\u66b4\u9732\u7ed9\u7236\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u8003\u8651\u7528\u65f6\u95f4\u7ebf\u7ec4\u4ef6el-timeline\u53bb\u5c55\u793a\u7b80\u5386\u7684\u6bcf\u4e2a\u677f\u5757\u7f16\u8f91\u8868\u5355\uff0c\u6bcf\u4e2a\u677f\u5757\u90fd\u8981\u62bd\u6210\u7ec4\u4ef6\uff0c\u653e\u5728moduleList\u7684comp\u5c5e\u6027\u4e2d\u4f9bv-for\u65f6\u8c03\u7528\nBaseInfo\u7ec4\u4ef6\uff1a(\u4e0a\u4e2a\u4f8b\u5b50\u7684\u6570\u636e\u5c55\u793a\u533a\u57df\u5728\u7ec4\u4ef6\u5916\u90e8)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n    <div>\n        <el-form :model="form" label-width="80px" @input="handleFormChange">\n            <div v-for="(field, index) in formFields" :key="index" class="field">\n                <el-form-item label="label">\n                    <el-input v-model="field.label" placeholder="\u5b57\u6bb5\u540d"></el-input>\n                </el-form-item>\n                <el-form-item label="value">\n                    <el-input v-model="field.value" placeholder="\u5b57\u6bb5\u503c"></el-input>\n                </el-form-item>\n                <el-button type="danger" @click="removeField(index)" style="margin-left: 20px;">delete</el-button>\n            </div>\n            <el-form-item>\n                <el-button type="primary" @click="addField">Add Field</el-button>\n                <el-button type="primary" @click="submitForm">Submit</el-button>\n            </el-form-item>\n        </el-form>\n    </div>\n</template>\n  \n<script setup>\nimport { reactive, watch } from \'vue\';\nconst emit = defineEmits([\'baseInfoUpdated\'])\nconst form = reactive({\n    name: \'\',\n    email: \'\',\n    age: \'\'\n});\nconst formFields = reactive([\n    { label: \'Name\', value: \'\' },\n    { label: \'Email\', value: \'\' },\n    { label: \'Age\', value: \'\' }\n]);\n\nwatch(formFields, (newFormFields) => {\n    // \u4f7f\u7528 emit \u65b9\u6cd5\u5c06\u6700\u65b0\u7684 formFields \u6570\u636e\u66b4\u9732\u7ed9\u7236\u7ec4\u4ef6\n    emit(\'baseInfoUpdated\', newFormFields);\n});\n\nconst addField = () => {\n    formFields.push({ label: \'\', value: \'\' });\n};\n\nconst removeField = (index) => {\n    formFields.splice(index, 1);\n};\n<\/script>\n  \n<style>\n.display-area {\n    margin-top: 20px;\n}\n\n.field {\n    display: flex;\n}\n</style>\n')),(0,a.kt)("p",null,"App.vue\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <div>\n    <el-timeline>\n      <el-timeline-item v-for=\"({timestamp, comp}, index) in moduleList\" :key=\"index\" placement=\"top\" size='large' type='primary'\n        icon='MoreFilled' :timestamp=\"timestamp\">\n        <component :is=\"comp\" @baseInfoUpdated=\"handleBaseInfoUpdated\"/>\n      </el-timeline-item>\n    </el-timeline>\n\n    <div class=\"display-area\">\n      <h4>Form Data:</h4>\n      <p v-for=\"(field, index) in baseInfoList\" :key=\"index\">{{ field.label }}: {{ field.value }}</p>\n    </div>\n  </div>\n</template>\n\n<script setup>\nimport { ref, reactive } from 'vue';\nimport  BaseInfo from '@/components/BaseInfo.vue';\nconst moduleList = reactive([\n  { timestamp: 'Name', value: '', comp: BaseInfo },\n  { timestamp: 'Email', value: '' },\n  { timestamp: 'Age', value: '' }\n]);\n\nlet baseInfoList = ref([\n    { label: 'Name', value: '' },\n    { label: 'Email', value: '' },\n    { label: 'Age', value: '' }\n]);\nconst handleBaseInfoUpdated = (newList) => {\n  baseInfoList.value = newList.filter(({label}) => label)\n}\n<\/script>\n\n<style>\n.display-area {\n  margin-top: 20px;\n}\n\n.field {\n  display: flex;\n}\n</style>\n")),(0,a.kt)("p",null,'\u6d89\u53cavue3\u77e5\u8bc6\u70b9\uff1a\n1.ref \u4e0e reactive \u533a\u522b \u7528reactive\u65f6\u66f4\u6539baseInfoList\u6570\u636e\u9875\u9762\u4e0d\u5237\u65b0\uff0c\u7528ref\u65f6\u624d\u5237\u65b0\n2.\u7528@baseInfoUpdated="handleBaseInfoUpdated"\u7528\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\u63a5\u53d7\u5b50\u7ec4\u4ef6\u629b\u51fa\u7684\u6570\u636e\uff0c@\u540e\u662f\u4e8b\u4ef6\u540d'),(0,a.kt)("h4",{id:"title\u6837\u5f0f"},"title\u6837\u5f0f"),(0,a.kt)("p",null,"\u753b\u68af\u5f62\u65f6\u4f7f\u7528 clip-path \u5c5e\u6027\u53ef\u4ee5\u4e3a\u5143\u7d20\u521b\u5efa\u5404\u79cd\u5f62\u72b6\u7684\u53ef\u89c1\u533a\u57df\uff0c\u53ef\u4ee5\u88ab\u7528\u6765\u521b\u5efa\u5404\u79cd\u5f62\u72b6\u7684\u88c1\u526a\u533a\u57df"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".title {\n  padding: 3px 10px;\n  background-color: #4085da;\n  font-size: 18px;\n  font-weight: bold;\n  color: #f3efef;\n  clip-path: polygon(0 0, 14% 0, 18% 100%, 0 100%);\n}\n")),(0,a.kt)("p",null,"\u4f46\u662f\u8fd9\u79cd\u5199\u6cd5\u5728\u5f00\u53d1\u65f6\u89c6\u89c9\u6548\u679c\u867d\u7136\u6b63\u786e\uff0c\u4f46\u662f\u7ed8\u5230canvas\u4e0a\u4e4b\u540e\u88c1\u526a\u7684\u5f62\u72b6\u51fa\u4e0d\u6765\uff0c\u4f9d\u7136\u662f\u4e00\u6574\u4e2a\u77e9\u5f62\u84dd\u8272\u80cc\u666f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".title {\n  padding: 0px 10px;\n  font-size: 18px;\n  font-weight: bold;\n  color: #f3efef;\n  width: 110px;\n  height: 0;\n  border-bottom: 30px solid #4085da; /* \u8c03\u6574\u8fd9\u4e2a\u503c\u6765\u63a7\u5236\u76f4\u89d2\u68af\u5f62\u7684\u9ad8\u5ea6 */\n  border-right: 30px solid transparent; /* \u8c03\u6574\u8fd9\u4e2a\u503c\u6765\u63a7\u5236\u76f4\u89d2\u68af\u5f62\u7684\u5de6\u8fb9\u5bbd\u5ea6 */\n}\n")))}c.isMDXComponent=!0}}]);