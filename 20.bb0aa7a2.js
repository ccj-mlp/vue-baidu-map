webpackJsonp([20],{Om1g:function(t,s,a){var v,_,n;!function(a,l){_=[t,s],v=l,void 0!==(n="function"==typeof v?v.apply(s,_):v)&&(t.exports=n)}(0,function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{infoWindow:{show:!0},markerIcon:{url:"http://developer.baidu.com/map/jsdemo/img/fox.gif",size:{width:300,height:157}},markerLabel:{content:"Marker Label",opts:{offset:{width:20,height:-10}}},markerPoint:{lng:116.404,lat:39.915}}},methods:{infoWindowClose:function(){this.infoWindow.show=!1},infoWindowOpen:function(){this.infoWindow.show=!0}}},t.exports=s.default})},"b/ti":function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[[a("h1",[t._v("点")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("属性")]),t._v(" "),t._m(1),t._v(" "),a("h2",[t._v("事件")]),t._v(" "),t._m(2),t._v(" "),a("h2",[t._v("示例")]),t._v(" "),a("h3",[t._v("在地图中心添加可拖动的跳跃点标记")]),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(3),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15}},[a("bm-marker",{attrs:{position:t.markerPoint,dragging:!0,animation:"BMAP_ANIMATION_BOUNCE"}},[a("bm-label",{attrs:{content:"我爱北京天安门",labelStyle:{color:"#f33",fontSize:"12px"},offset:{width:-35,height:30}}})],1)],1)],1),t._v(" "),a("h3",[t._v("添加一个自定义图标的点")]),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(4),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15}},[a("bm-marker",{attrs:{position:t.markerPoint,icon:t.markerIcon}})],1)],1)],t._v(" "),a("h3",[t._v("点击 Marker 弹出 InfoWindow")]),t._v(" "),a("h4",[t._v("代码")]),t._v(" "),t._m(5),t._v(" "),a("h4",[t._v("预览")]),t._v(" "),a("doc-preview",[a("baidu-map",{staticClass:"map",attrs:{center:{lng:116.404,lat:39.915},zoom:15}},[a("bm-marker",{attrs:{position:{lng:116.404,lat:39.915},dragging:!0},on:{click:t.infoWindowOpen}},[a("bm-info-window",{attrs:{show:t.infoWindow.show},on:{close:t.infoWindowClose,open:t.infoWindowOpen}},[t._v("我爱北京天安门")])],1)],1)],1)],2)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("BmMarker")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("position")]),t._v(" "),a("td",[t._v("Point")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("标注的位置")])]),t._v(" "),a("tr",[a("td",[t._v("offset")]),t._v(" "),a("td",[t._v("Size")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("标注的位置偏移值")])]),t._v(" "),a("tr",[a("td",[t._v("icon")]),t._v(" "),a("td",[t._v("Icon")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("标注所用的图标对象")])]),t._v(" "),a("tr",[a("td",[t._v("massClear")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("是否在调用map.clearOverlays清除此覆盖物")])]),t._v(" "),a("tr",[a("td",[t._v("dragging")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("是否启用拖拽")])]),t._v(" "),a("tr",[a("td",[t._v("clicking")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("是否响应点击事件")])]),t._v(" "),a("tr",[a("td",[t._v("raiseOnDrag")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("拖拽标注时，标注是否开启离开地图表面效果")])]),t._v(" "),a("tr",[a("td",[t._v("draggingCursor")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范")])]),t._v(" "),a("tr",[a("td",[t._v("rotation")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("旋转角度")])]),t._v(" "),a("tr",[a("td",[t._v("shadow")]),t._v(" "),a("td",[t._v("Icon")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("阴影图标")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("鼠标移到marker上的显示内容")])]),t._v(" "),a("tr",[a("td",[t._v("label")]),t._v(" "),a("td",[t._v("Label")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("为标注添加文本标注")])]),t._v(" "),a("tr",[a("td",[t._v("animation")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("动画效果")])]),t._v(" "),a("tr",[a("td",[t._v("top")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("将标注置于其他标注之上。默认情况下，纬度较低的标注会覆盖在纬度较高的标注之上，从而形成一种立体效果。通过此方法可使某个标注覆盖在其他所有标注之上。注意：如果在多个标注对象上调用此方法，则这些标注依旧按照纬度产生默认的覆盖效果。")])]),t._v(" "),a("tr",[a("td",[t._v("zIndex")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("设置覆盖物的zIndex")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("事件名")]),t._v(" "),a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("click")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("点击标注图标后会触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("dblclick")]),t._v(" "),a("td",[t._v("event{type, target, point,pixel}")]),t._v(" "),a("td",[t._v("双击标注图标后会触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("mousedown")]),t._v(" "),a("td",[t._v("event{type, target, point,pixel}")]),t._v(" "),a("td",[t._v("鼠标在标注图上按下触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("mouseup")]),t._v(" "),a("td",[t._v("event{type, target, point,pixel}")]),t._v(" "),a("td",[t._v("鼠标在标注图上释放触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("mouseout")]),t._v(" "),a("td",[t._v("event{type, target, point,pixel}")]),t._v(" "),a("td",[t._v("鼠标离开标注时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("mouseover")]),t._v(" "),a("td",[t._v("event{type, target, point,pixel}")]),t._v(" "),a("td",[t._v("当鼠标进入标注图标区域时会触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("remove")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("移除标注时触发")])]),t._v(" "),a("tr",[a("td",[t._v("infowindowclose")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("信息窗在此标注上关闭时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("infowindowopen")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("信息窗在此标注上打开时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("dragstart")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("开始拖拽标注时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("dragging")]),t._v(" "),a("td",[t._v("event{type, target, pixel, point}")]),t._v(" "),a("td",[t._v("拖拽标注过程中触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("dragend")]),t._v(" "),a("td",[t._v("event{type, target, pixel, point}")]),t._v(" "),a("td",[t._v("拖拽结束时触发此事件")])]),t._v(" "),a("tr",[a("td",[t._v("rightclick")]),t._v(" "),a("td",[t._v("event{type, target}")]),t._v(" "),a("td",[t._v("右键点击标注时触发此事件")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-marker")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":position")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":dragging")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("animation")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"BMAP_ANIMATION_BOUNCE"')]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-label")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("content")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"我爱北京天安门"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":labelStyle")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"{color: 'red', fontSize : '24px'}\"")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":offset")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{width: -35, height: 30}"')]),t._v("/>")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-marker")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-marker")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":position")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"markerPoint"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":dragging")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("animation")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"BMAP_ANIMATION_BOUNCE"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":icon")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v("\"{url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif', size: {width: 300, height: 157"),a("span",[t._v("}}")]),t._v('"')]),t._v(">")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-marker")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"15"')]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-marker")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":position")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"markerPoint"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":dragging")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"true"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("@click")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"infoWindowOpen"')]),t._v(">")]),t._v("\n      "),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("bm-info-window")]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v(":show")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"show"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("@close")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"infoWindowClose"')]),t._v(" "),a("span",{staticClass:"hljs-attr"},[t._v("@open")]),t._v("="),a("span",{staticClass:"hljs-string"},[t._v('"infoWindowOpen"')]),t._v(">")]),t._v("我爱北京天安门"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-info-window")]),t._v(">")]),t._v("\n    "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("bm-marker")]),t._v(">")]),t._v("\n  "),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),a("span",{staticClass:"hljs-tag"},[t._v("<"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),a("span",{staticClass:"javascript"},[t._v("\n"),a("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),a("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),a("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[t._v("show")]),t._v(": "),a("span",{staticClass:"hljs-literal"},[t._v("false")]),t._v("\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    infoWindowClose () {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".show = "),a("span",{staticClass:"hljs-literal"},[t._v("false")]),t._v("\n    },\n    infoWindowOpen () {\n      "),a("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".show = "),a("span",{staticClass:"hljs-literal"},[t._v("true")]),t._v("\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[t._v("</"),a("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}},qasP:function(t,s,a){t.exports=a("xgPB")},xgPB:function(t,s,a){var v=a("VU/8")(a("Om1g"),a("b/ti"),null,null);t.exports=v.exports}});