(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},111:function(e,t){},113:function(e,t){},146:function(e,t){},147:function(e,t){},190:function(e,t){},191:function(e,t){},192:function(e,t){},193:function(e,t){},198:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(95),s=a.n(r),i=(a(104),a(15)),l=a(17),c=a(19),d=a(18),p=a(13),u=a(20),h=a(10),m=a.n(h),g=a(21),b=a(98),f=a(97),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={detector:null,togglingModel:!1,predicting:!1,progress:null,progressMessage:""},a.toggleModel=a.toggleModel.bind(Object(p.a)(a)),a.detect=a.detect.bind(Object(p.a)(a)),a.progressCallback=a.progressCallback.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"detect",value:function(){var e=Object(g.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({predicting:!0}),e.next=4,this.state.detector.detect(this.props.imageRef.current,.3);case 4:t=e.sent,this.setState({predicting:!1}),this.props.predictionCallback(t);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"progressCallback",value:function(e,t){this.setState({progress:e,progressMessage:t})}},{key:"toggleModel",value:function(){var e=Object(g.a)(m.a.mark(function e(){var t;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({togglingModel:!0}),!this.state.detector){e.next=6;break}this.state.detector.dispose(),t=null,e.next=9;break;case 6:return e.next=8,Object(f.a)(this.props.modelConfig.modelUrl,this.props.modelConfig.classes,this.props.modelConfig.preprocessingMode,this.progressCallback);case 8:t=e.sent;case 9:this.setState({detector:t,togglingModel:!1});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.state.detector&&this.state.detector.dispose()}},{key:"render",value:function(){return o.a.createElement("div",{style:{border:"2px dotted white",margin:"8px 0",padding:"0 8px 0px 8px"}},o.a.createElement("h2",null,this.props.modelConfig.displayName),o.a.createElement("div",null,o.a.createElement("button",{style:{width:"45%",marginRight:"5%",backgroundColor:"#EEEEEE"},variant:"contained",disabled:this.state.togglingModel,onClick:this.toggleModel},this.state.detector?"Disable":"Load (".concat(this.props.modelConfig.modelSize,")")),o.a.createElement("button",{disabled:!this.state.detector||1!==this.state.progress,style:{width:"45%",marginLeft:"5%"},onClick:this.detect},"Predict")),o.a.createElement("div",null,this.state.progress&&1!==this.state.progress?o.a.createElement("div",{style:{marginTop:"10px"}},o.a.createElement(b.a,{percent:100*this.state.progress,strokeWidth:"4",strokeColor:"#D3D3D3"}),o.a.createElement("p",{style:{textAlign:"center",margin:0}},this.state.progressMessage)):null),o.a.createElement("p",null,this.props.modelConfig.description))}}]),t}(n.Component),y=[{displayName:"Cat/Dog Detector",backboneName:"mobilenet224",modelUrl:"https://github.com/faustomorales/retinanetjs-example-app/releases/download/mobilenet224_1_0_oxfordcatdog/model.json",classes:["dog","cat"],preprocessingMode:"tf",modelSize:"53MB",color:"red",description:"A MobileNet224 model trained to detect dogs and cats. it was trained on the Oxford-IIIT Pet Dataset."},{displayName:"COCO",backboneName:"resnet50",modelSize:"150MB",modelUrl:"https://github.com/faustomorales/retinanetjs-example-app/releases/download/resnet50_coco_best_v2.1.0/model.json",description:"The pre-trained object detector with a ResNet50 backbone provided by the fizyr team. It detects the 80 classes in the COCO dataset.",classes:["person","bicycle","car","motorcycle","airplane","bus","train","truck","boat","traffic light","fire hydrant","stop sign","parking meter","bench","bird","cat","dog","horse","sheep","cow","elephant","bear","zebra","giraffe","backpack","umbrella","handbag","tie","suitcase","frisbee","skis","snowboard","sports ball","kite","baseball bat","baseball glove","skateboard","surfboard","tennis racket","bottle","wine glass","cup","fork","knife","spoon","bowl","banana","apple","sandwich","orange","broccoli","carrot","hot dog","pizza","donut","cake","chair","couch","potted plant","bed","dining table","toilet","tv","laptop","mouse","remote","keyboard","cell phone","microwave","oven","toaster","sink","refrigerator","book","clock","vase","scissors","teddy bear","hair drier","toothbrush"],preprocessingMode:"caffe",color:"green"},{displayName:"Purify",backboneName:"resnet101",modelUrl:"https://github.com/faustomorales/retinanetjs-example-app/releases/download/resnet101_purify/model.json",modelSize:"220MB",description:"A resnet101 model trained to detect explicit content. It is generously provided by the CTI community team. Their work is also available at https://pury.fi [content warning].",classes:["exposed belly","exposed buttocks","exposed female breast","covered female breast","exposed female genitalia","covered female genitalia","exposed male genitalia","exposed male breast"],preprocessingMode:"caffe",color:"blue"}],v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(d.a)(t).call(this))).imageRef=o.a.createRef(),e.state={image:null,annotationGroups:[[]]},e.handleFile=e.handleFile.bind(Object(p.a)(e)),e.handlePredictions=e.handlePredictions.bind(Object(p.a)(e)),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handlePredictions",value:function(e,t){var a=this.state.annotationGroups;a[e]=t,this.setState({annotationGroups:a})}},{key:"handleFile",value:function(e){var t=URL.createObjectURL(e.target.files[0]);this.setState({image:t,annotationGroups:[[]]})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{width:"500px",margin:"0 auto"}},o.a.createElement("h1",null,"RetinaNetJS Object Detection"),o.a.createElement("p",null,"This page demonstrates use of the",o.a.createElement("a",{href:"https://www.npmjs.com/package/retinanetjs"},"retinanetjs")," package for deploying ",o.a.createElement("a",{href:"https://github.com/fizyr/keras-retinanet"},"keras-retinanet")," models for inference in the browser. To use, simply:"),o.a.createElement("ol",null,o.a.createElement("li",null,"Enable one or more models (note the download sizes can be significant)."),o.a.createElement("li",null,"Hit predict. Note that the inference all occurs in the browser using ",o.a.createElement("a",{href:"https://js.tensorflow.org"},"tensorflowjs"),", so no data is sent to a server. Each detector's predictions appear in a different color.")),o.a.createElement("div",null,y.map(function(t,a){return o.a.createElement(k,{predictionCallback:function(t){e.handlePredictions(a,t)},modelConfig:t,imageRef:e.imageRef,key:t.modelUrl})})),o.a.createElement("div",null,o.a.createElement("input",{type:"file",onChange:this.handleFile,id:"file"})),o.a.createElement("div",{style:{position:"relative"}},o.a.createElement("img",{style:{width:"100%"},ref:this.imageRef,src:this.state.image||"dog.jpg",alt:"your labeled upload"}),this.state.annotationGroups.map(function(e,t){return o.a.createElement("div",{key:t},e.map(function(e,a){return o.a.createElement("div",{key:a,style:{position:"absolute",border:"5px solid ".concat(y[t].color),color:y[t].color,width:"".concat(100*(e.x2-e.x1),"%"),height:"".concat(100*(e.y2-e.y1),"%"),left:"".concat(100*e.x1,"%"),top:"".concat(100*e.y1,"%"),fontWeight:"bold"}},o.a.createElement("span",{style:{padding:"5px"}},e.label))}))})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},99:function(e,t,a){e.exports=a(198)}},[[99,1,2]]]);
//# sourceMappingURL=main.6a169e44.chunk.js.map