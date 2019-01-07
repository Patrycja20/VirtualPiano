(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(7),i=a.n(l),o=a(1),c=a(2),m=a(4),r=a(3),h=a(5),N=a(8),u=(a(15),"harp"),d="piano",y=["q","w","e","r","t","y","u","i","o","p","[","z","x","c","v","b","n","m",",",".","/","2","3","4","6","7","9","0","-","s","d","g","h","j","l",";"],E="piano",p=1;function k(){return p}function g(){return"sounds/".concat(E,"_mp3/")}var f,w,b={q:"f3",w:"g3",e:"a3",r:"h3",t:"c4",y:"d4",u:"e4",i:"f4",o:"g4",p:"a4","[":"h4",z:"c5",x:"d5",c:"e5",v:"f5",b:"g5",n:"a5",m:"h5",",":"c6",".":"d6","/":"e6",2:"fis3",3:"gis3",4:"ais3",6:"cis4",7:"dis4",9:"fis4",0:"gis4","-":"ais4",s:"cis5",d:"dis5",g:"fis5",h:"gis5",j:"ais5",l:"cis6",";":"dis6"},C={q:"f",w:"g",e:"a",r:"h",t:"c4",y:"d",u:"e",i:"f",o:"g",p:"a","[":"h",z:"c5",x:"d",c:"e",v:"f",b:"g",n:"a",m:"h",",":"c6",".":"d","/":"e",2:"f#",3:"g#",4:"a#",6:"c#",7:"d#",9:"f#",0:"g#","-":"a#",s:"c#",d:"d#",g:"f#",h:"g#",j:"a#",l:"c#",";":"d#"},v=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(r.a)(t).call(this))).addClickedSound=function(t){e.setState({clickedPianoKeys:Object(N.a)(e.state.clickedPianoKeys).concat([t])})},e.removeClickedSound=function(t){e.setState({clickedPianoKeys:e.state.clickedPianoKeys.filter(function(e){return e!==t})})},e.play=function(e){var t=e.target.id,a=g(),s=new Audio("".concat(a).concat(t,".mp3"));s.volume=k(),s.play()},e.changeSignatures=function(t){"1"===t.target.value?e.setState({signatures:!0,keys:y}):e.setState({signatures:!1,keys:[]})},e.onCheckedPiano=function(){E=d,e.setState({sound:"piano"})},e.onCheckedHarp=function(){E=u,e.setState({sound:"harp"})},e.onSetVolume=function(t){for(var a=["On","On","On","On"],s=parseInt(t.target.id);s<4;s++)a[s]="Off";!function(e){p=e}(parseInt(t.target.id)/4),e.setState({volume:a})},e.classNameToNote={f3:"white",fis3:"black",g3:"white l",gis3:"black",a3:"white l",ais3:"black",h3:"white l",c4:"white",cis4:"black",d4:"white l",dis4:"black",e4:"white l",f4:"white",fis4:"black",g4:"white l",gis4:"black",a4:"white l",ais4:"black",h4:"white l",c5:"white",cis5:"black",d5:"white l",dis5:"black",e5:"white l",f5:"white",fis5:"black",g5:"white l",gis5:"black",a5:"white l",ais5:"black",h5:"white l",c6:"white",cis6:"black",d6:"white l",dis6:"black",e6:"white l"},e.getClassNameToNote=function(t){return e.state.clickedPianoKeys.includes(t)?"".concat(e.classNameToNote[t]," active"):e.classNameToNote[t]},f=e.addClickedSound,w=e.removeClickedSound,e.state={sound:"piano",signatures:!1,keys:[],clickedPianoKeys:[],volume:["On","On","On","On"]},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.signatures?"On":"Off",a=this.state.signatures?"1":"0";return n.a.createElement("ul",{className:"Casing"},n.a.createElement("div",{className:"options1"},n.a.createElement("label",{className:t},"Signatures"),n.a.createElement("br",null),n.a.createElement("input",{type:"range",className:"slider",value:a,min:"0",max:"1",step:"1",onChange:this.changeSignatures})),n.a.createElement("div",{className:"radio-group options2"},n.a.createElement("input",{id:"toggle-on",className:"toggle toggle-left",name:"toggle",type:"radio",checked:"piano"===this.state.sound}),n.a.createElement("label",{htmlFor:"toggle-on",className:"btn",onClick:this.onCheckedPiano},"Piano"),n.a.createElement("input",{id:"toggle-off",className:"toggle toggle-right",name:"toggle",type:"radio",checked:"harp"===this.state.sound}),n.a.createElement("label",{htmlFor:"toggle-off",className:"btn",onClick:this.onCheckedHarp},"Harp")),n.a.createElement("div",{className:"options3"},n.a.createElement("div",{id:"0",className:"Off"===this.state.volume[0]?"Name NameNoActive":"Name",onMouseDown:function(t){return e.onSetVolume(t)}},"Volume"),n.a.createElement("div",{id:"1",className:this.state.volume[0],onMouseDown:function(t){return e.onSetVolume(t)}}),n.a.createElement("div",{id:"2",className:this.state.volume[1],onMouseDown:function(t){return e.onSetVolume(t)}}),n.a.createElement("div",{id:"3",className:this.state.volume[2],onMouseDown:function(t){return e.onSetVolume(t)}}),n.a.createElement("div",{id:"4",className:this.state.volume[3],onMouseDown:function(t){return e.onSetVolume(t)}})),n.a.createElement("br",null),n.a.createElement("li",{id:"f3",className:this.getClassNameToNote("f3"),onMouseDown:this.play},this.state.keys[0],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[0]])),n.a.createElement("li",{id:"fis3",className:this.getClassNameToNote("fis3"),onMouseDown:this.play},this.state.keys[21],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[21]])),n.a.createElement("li",{id:"g3",className:this.getClassNameToNote("g3"),onMouseDown:this.play},this.state.keys[1],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[1]])),n.a.createElement("li",{id:"gis3",className:this.getClassNameToNote("gis3"),onMouseDown:this.play},this.state.keys[22],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[22]])),n.a.createElement("li",{id:"a3",className:this.getClassNameToNote("a3"),onMouseDown:this.play},this.state.keys[2],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[2]])),n.a.createElement("li",{id:"ais3",className:this.getClassNameToNote("ais3"),onMouseDown:this.play},this.state.keys[23],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[23]])),n.a.createElement("li",{id:"h3",className:this.getClassNameToNote("h3"),onMouseDown:this.play},this.state.keys[3],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[3]])),n.a.createElement("li",{id:"c4",className:this.getClassNameToNote("c4"),onMouseDown:this.play},this.state.keys[4],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[4]])),n.a.createElement("li",{id:"cis4",className:this.getClassNameToNote("cis4"),onMouseDown:this.play},this.state.keys[24],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[24]])),n.a.createElement("li",{id:"d4",className:this.getClassNameToNote("d4"),onMouseDown:this.play},this.state.keys[5],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[5]])),n.a.createElement("li",{id:"dis4",className:this.getClassNameToNote("dis4"),onMouseDown:this.play},this.state.keys[25],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[25]])),n.a.createElement("li",{id:"e4",className:this.getClassNameToNote("e4"),onMouseDown:this.play},this.state.keys[6],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[6]])),n.a.createElement("li",{id:"f4",className:this.getClassNameToNote("f4"),onMouseDown:this.play},this.state.keys[7],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[7]])),n.a.createElement("li",{id:"fis4",className:this.getClassNameToNote("fis4"),onMouseDown:this.play},this.state.keys[26],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[26]])),n.a.createElement("li",{id:"g4",className:this.getClassNameToNote("g4"),onMouseDown:this.play},this.state.keys[8],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[8]])),n.a.createElement("li",{id:"gis4",className:this.getClassNameToNote("gis4"),onMouseDown:this.play},this.state.keys[27],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[27]])),n.a.createElement("li",{id:"a4",className:this.getClassNameToNote("a4"),onMouseDown:this.play},this.state.keys[9],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[9]])),n.a.createElement("li",{id:"ais4",className:this.getClassNameToNote("ais4"),onMouseDown:this.play},this.state.keys[28],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[28]])),n.a.createElement("li",{id:"h4",className:this.getClassNameToNote("h4"),onMouseDown:this.play},this.state.keys[10],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[10]])),n.a.createElement("li",{id:"c5",className:this.getClassNameToNote("c5"),onMouseDown:this.play},this.state.keys[11],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[11]])),n.a.createElement("li",{id:"cis5",className:this.getClassNameToNote("cis5"),onMouseDown:this.play},this.state.keys[29],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[29]])),n.a.createElement("li",{id:"d5",className:this.getClassNameToNote("d5"),onMouseDown:this.play},this.state.keys[12],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[12]])),n.a.createElement("li",{id:"dis5",className:this.getClassNameToNote("dis5"),onMouseDown:this.play},this.state.keys[30],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[30]])),n.a.createElement("li",{id:"e5",className:this.getClassNameToNote("e5"),onMouseDown:this.play},this.state.keys[13],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[13]])),n.a.createElement("li",{id:"f5",className:this.getClassNameToNote("f5"),onMouseDown:this.play},this.state.keys[14],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[14]])),n.a.createElement("li",{id:"fis5",className:this.getClassNameToNote("fis5"),onMouseDown:this.play},this.state.keys[31],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[31]])),n.a.createElement("li",{id:"g5",className:this.getClassNameToNote("g5"),onMouseDown:this.play},this.state.keys[15],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[15]])),n.a.createElement("li",{id:"gis5",className:this.getClassNameToNote("gis5"),onMouseDown:this.play},this.state.keys[32],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[32]])),n.a.createElement("li",{id:"a5",className:this.getClassNameToNote("a5"),onMouseDown:this.play},this.state.keys[16],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[16]])),n.a.createElement("li",{id:"ais5",className:this.getClassNameToNote("ais5"),onMouseDown:this.play},this.state.keys[33],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[33]])),n.a.createElement("li",{id:"h5",className:this.getClassNameToNote("h5"),onMouseDown:this.play},this.state.keys[17],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[17]])),n.a.createElement("li",{id:"c6",className:this.getClassNameToNote("c6"),onMouseDown:this.play},this.state.keys[18],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[18]])),n.a.createElement("li",{id:"cis6",className:this.getClassNameToNote("cis6"),onMouseDown:this.play},this.state.keys[34],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[34]])),n.a.createElement("li",{id:"d6",className:this.getClassNameToNote("d6"),onMouseDown:this.play},this.state.keys[19],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[19]])),n.a.createElement("li",{id:"dis6",className:this.getClassNameToNote("dis6"),onMouseDown:this.play},this.state.keys[35],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[35]])),n.a.createElement("li",{id:"e6",className:this.getClassNameToNote("e6"),onMouseDown:this.play},this.state.keys[20],n.a.createElement("br",null),n.a.createElement("span",{className:"noteName"},C[this.state.keys[20]])))}}]),t}(n.a.Component),D=(a(17),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"initSounds",value:function(){this.iterateSounds("piano"),this.iterateSounds("harp")}},{key:"iterateSounds",value:function(e){var t="sounds/".concat(e,"_mp3/");for(var a in b){var s=b[a];new Audio("".concat(t).concat(s,".mp3"))}}},{key:"componentDidMount",value:function(){this.initSounds()}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"NameApp"},"Virtual Piano"),n.a.createElement(v,null))}}]),t}(n.a.Component));document.addEventListener("keydown",function(e){for(var t in b)if(e.key===t){var a=b[t],s=g(),n=new Audio("".concat(s).concat(a,".mp3"));n.volume=k(),n.play(),f(a)}}),document.addEventListener("keyup",function(e){for(var t in b)e.key===t&&w(b[t])}),i.a.render(n.a.createElement(D,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.c3c3fcb3.chunk.js.map