"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[4810],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={},o=void 0,l={unversionedId:"backend/SSM/\u5b9e\u8df5/\u5e8f\u5217\u5316\u4f18\u96c5\u81ea\u5b9a\u4e49",id:"backend/SSM/\u5b9e\u8df5/\u5e8f\u5217\u5316\u4f18\u96c5\u81ea\u5b9a\u4e49",title:"\u5e8f\u5217\u5316\u4f18\u96c5\u81ea\u5b9a\u4e49",description:"\u81ea\u5b9a\u4e49\u6ce8\u89e3+JsonSerializer\u4f18\u96c5\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u903b\u8f91",source:"@site/docs/backend/SSM/\u5b9e\u8df5/\u5e8f\u5217\u5316\u4f18\u96c5\u81ea\u5b9a\u4e49.md",sourceDirName:"backend/SSM/\u5b9e\u8df5",slug:"/backend/SSM/\u5b9e\u8df5/\u5e8f\u5217\u5316\u4f18\u96c5\u81ea\u5b9a\u4e49",permalink:"/my-blog/docs/backend/SSM/\u5b9e\u8df5/\u5e8f\u5217\u5316\u4f18\u96c5\u81ea\u5b9a\u4e49",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/SSM/\u5b9e\u8df5/\u5e8f\u5217\u5316\u4f18\u96c5\u81ea\u5b9a\u4e49.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"Mybatis",permalink:"/my-blog/docs/backend/SSM/\u5b9e\u8df5/Mybatis"},next:{title:"SpringBoot\u5165\u95e8\u6307\u5317",permalink:"/my-blog/docs/backend/SSM/\u9879\u76ee\u642d\u5efa/SpringBoot\u5165\u95e8\u6307\u5317"}},c={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u81ea\u5b9a\u4e49\u6ce8\u89e3+JsonSerializer\u4f18\u96c5\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u903b\u8f91"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Target(ElementType.FIELD)\n@Retention(RetentionPolicy.RUNTIME)\n@JacksonAnnotationsInside\n@JsonSerialize(using = DictTextSerialize.class)\npublic @interface Dict {\n    String value();\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class DictTextSerialize extends JsonSerializer<String> implements ContextualSerializer {\n \n    private String code;\n    private String fieldName;\n \n    public DictTextSerialize(String code, String fieldName) {\n        this.code = code;\n        this.fieldName = fieldName;\n    }\n \n    public DictTextSerialize() { }\n \n    @Override\n    public void serialize(String value, JsonGenerator gen, SerializerProvider serializers) throws IOException {\n        gen.writeString(value);\n        String dictCode = code;\n        DictService dictService = ApplicationContextUtils.getBean(DictService.class);\n        List<DictItemDTO> items = dictService.listItemsByCode(dictCode);\n \n        // \u6dfb\u52a0\u989d\u5916\u7684\u5c5e\u6027\n        gen.writeStringField(fieldName + "Text", getDicText(value, items));\n    }\n \n    @Override\n    public JsonSerializer<?> createContextual(final SerializerProvider serializerProvider,\n            final BeanProperty beanProperty) throws JsonMappingException {\n        if (beanProperty != null) {\n            if (Objects.equals(beanProperty.getType().getRawClass(), String.class)) {\n                Dict dict = beanProperty.getAnnotation(Dict.class);\n                if (dict == null) {\n                    dict = beanProperty.getContextAnnotation(Dict.class);\n                }\n                if (dict != null) {\n                    return new DictTextSerialize(dict.value(), beanProperty.getName());\n                }\n            }\n            return serializerProvider.findValueSerializer(beanProperty.getType(), beanProperty);\n        }\n        return serializerProvider.findNullValueSerializer(null);\n    }\n \n    private String getDicText(String dicValue, List<DictItemDTO> items) {\n        return items.stream().filter(item -> item.getItemKey().equals(dicValue))\n                .map(DictItemDTO::computeItemValue).findFirst().orElse(null);\n    }\n}\n')),(0,i.kt)("p",null,"\u91cd\u70b9\u5728\u4e8e createContextual \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u9700\u8981\u8fd4\u56de\u4e00\u4e2a JsonSerializer \u5bf9\u8c61\uff0c beanProperty \u4ee3\u8868\u4e86\u8981\u8fdb\u884c\u5e8f\u5217\u5316\u7684 Java \u5bf9\u8c61\u4e2d\u7684\u67d0\u4e2a\u5c5e\u6027\u3002\u901a\u8fc7\u8fd9\u4e2a\u53c2\u6570\uff0c\u53ef\u4ee5\u83b7\u53d6\u5230\u5c5e\u6027\u7684\u7c7b\u578b\u3001\u6ce8\u89e3\u7b49\u76f8\u5173\u4fe1\u606f"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u662f\u5c1d\u8bd5\u4ecebeanProperty\u76f4\u63a5\u83b7\u53d6\u540d\u4e3aDict\u7684\u6ce8\u89e3\uff0c\u5982\u679c\u76f4\u63a5\u4ece\u5c5e\u6027\u4e0a\u83b7\u53d6\u4e0d\u5230Dict\u6ce8\u89e3\uff0c\u90a3\u4e48\u5c1d\u8bd5\u901a\u8fc7\u4e0a\u4e0b\u6587\u76f8\u5173\u7684\u65b9\u5f0f\uff08getContextAnnotation\uff09\u6765\u83b7\u53d6\u3002\u6709\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6ce8\u89e3\u53ef\u80fd\u4e0d\u662f\u76f4\u63a5\u6807\u6ce8\u5728\u5c5e\u6027\u672c\u8eab\uff0c\u6bd4\u5982\u53ef\u80fd\u5728\u5f53\u524d\u7c7b\u7684\u7236\u7c7b\u4e0a"),(0,i.kt)("p",null,"\u5982\u679c\u6210\u529f\u83b7\u53d6\u5230\u4e86Dict\u6ce8\u89e3\uff0c\u90a3\u4e48\u5c31\u521b\u5efa\u4e00\u4e2a\u65b0\u7684DictTextSerialize\u7c7b\u578b\u7684\u5e8f\u5217\u5316\u5668\u3002\u8fd9\u4e2a\u5e8f\u5217\u5316\u5668\u7684\u6784\u9020\u51fd\u6570\u4f1a\u63a5\u53d7dict.value()\uff08\u6ce8\u89e3\u4e2d\u4f20\u5165\u7684\u53c2\u6570\uff09\u548cbeanProperty.getName()\uff08\u5c5e\u6027\u7684\u540d\u79f0\uff09\u4f5c\u4e3a\u53c2\u6570\uff0c\u4ee5\u4fbf\u5728\u5e8f\u5217\u5316\u8fc7\u7a0b\u4e2d\u6839\u636e\u8fd9\u4e9b\u4fe1\u606f\u8fdb\u884c\u7279\u5b9a\u7684\u5904\u7406\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u524d\u9762\u7684\u6761\u4ef6\u90fd\u4e0d\u6ee1\u8db3\uff0c\u4e5f\u5c31\u662f\u6ca1\u6709\u627e\u5230\u9488\u5bf9\u8be5\u5c5e\u6027\u7684\u7279\u6b8a\u5904\u7406\u903b\u8f91\uff08\u6ca1\u6709\u83b7\u53d6\u5230Dict\u6ce8\u89e3\u6216\u8005\u5c5e\u6027\u7c7b\u578b\u4e0d\u662fString\uff09\uff0c\u90a3\u4e48\u5c31\u901a\u8fc7SerializerProvider\u6765\u67e5\u627e\u4e00\u4e2a\u9002\u5408\u8be5\u5c5e\u6027\u7c7b\u578b\uff08beanProperty.getType()\uff09\u7684\u9ed8\u8ba4\u503c\u5e8f\u5217\u5316\u5668\u3002\u8fd9\u4e2a\u9ed8\u8ba4\u7684\u5e8f\u5217\u5316\u5668\u662f\u7531\u5e8f\u5217\u5316\u6846\u67b6\u6839\u636e\u5df2\u7ecf\u6ce8\u518c\u7684\u5e8f\u5217\u5316\u5668\u548c\u5c5e\u6027\u7c7b\u578b\u7b49\u4fe1\u606f\u6765\u786e\u5b9a\u7684\uff0c\u5b83\u4f1a\u6309\u7167\u5e38\u89c4\u7684\u65b9\u5f0f\u5bf9\u5c5e\u6027\u8fdb\u884c\u5e8f\u5217\u5316\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528@Dict\u6ce8\u89e3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Data\n@NoArgsConstructor\npublic class RoleDTO {\n    private Long id;\n\n    @Dict(value = "role")\n    private String code;\n   // \u7701\u7565\u5176\u4ed6\u5c5e\u6027\n}\n')),(0,i.kt)("p",null,"\u9664\u4e86\u6570\u636e\u5b57\u5178\u4e4b\u5916\uff0c\u6570\u636e\u8131\u654f\u8fd9\u7c7b\u4e1a\u52a1\u573a\u666f\u4e5f\u6d89\u53ca\u5230\u81ea\u5b9a\u4e49\u5e8f\u5217\u5316\u903b\u8f91\uff0c\u53ef\u4ee5\u53c2\u8003DictTextSerialize\u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u6839\u636e\u4e1a\u52a1\u9700\u6c42\u8fdb\u884c\u5b9a\u5236\u3002"))}d.isMDXComponent=!0}}]);