let r=document.createElement("style");r.innerHTML="canvas{border:2px solid #000;background-color:#000}",document.head.appendChild(r);import{o as t,c as e,a as o}from"./index.37da97a5.js";var a={mounted(){this.main()},methods:{main(){const r=document.querySelector("#glcanvas").getContext("webgl");if(!r)return void alert("Unable to initialize WebGL. Your browser or machine may not support it.");const t=this.initShaderProgram(r,"\n        attribute vec4 aVertexPosition;\n        attribute vec4 aVertexColor;\n        uniform mat4 uModelViewMatrix;\n        uniform mat4 uProjectionMatrix;\n        varying lowp vec4 vColor;\n        void main(void) {\n          gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n          vColor = aVertexColor;\n        }\n      ","\n        varying lowp vec4 vColor;\n        void main(void) {\n          gl_FragColor = vColor;\n        }\n      "),e={program:t,attribLocations:{vertexPosition:r.getAttribLocation(t,"aVertexPosition"),vertexColor:r.getAttribLocation(t,"aVertexColor")},uniformLocations:{projectionMatrix:r.getUniformLocation(t,"uProjectionMatrix"),modelViewMatrix:r.getUniformLocation(t,"uModelViewMatrix")}},o=this.initBuffers(r);this.drawScene(r,e,o)},initBuffers(r){const t=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,t);r.bufferData(r.ARRAY_BUFFER,new Float32Array([1,1,-1,1,1,-1,-1,-1]),r.STATIC_DRAW);const e=r.createBuffer();return r.bindBuffer(r.ARRAY_BUFFER,e),r.bufferData(r.ARRAY_BUFFER,new Float32Array([1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1]),r.STATIC_DRAW),{position:t,color:e}},drawScene(r,t,e){r.clearColor(0,0,0,1),r.clearDepth(1),r.enable(r.DEPTH_TEST),r.depthFunc(r.LEQUAL),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT);const o=45*Math.PI/180,a=r.canvas.clientWidth/r.canvas.clientHeight,i=mat4.create();mat4.perspective(i,o,a,.1,100);const n=mat4.create();mat4.translate(n,n,[-0,0,-6]);{const o=2,a=r.FLOAT,i=!1,n=0,c=0;r.bindBuffer(r.ARRAY_BUFFER,e.position),r.vertexAttribPointer(t.attribLocations.vertexPosition,o,a,i,n,c),r.enableVertexAttribArray(t.attribLocations.vertexPosition)}{const o=4,a=r.FLOAT,i=!1,n=0,c=0;r.bindBuffer(r.ARRAY_BUFFER,e.color),r.vertexAttribPointer(t.attribLocations.vertexColor,o,a,i,n,c),r.enableVertexAttribArray(t.attribLocations.vertexColor)}r.useProgram(t.program),r.uniformMatrix4fv(t.uniformLocations.projectionMatrix,!1,i),r.uniformMatrix4fv(t.uniformLocations.modelViewMatrix,!1,n);{const t=0,e=4;r.drawArrays(r.TRIANGLE_STRIP,t,e)}},initShaderProgram(r,t,e){const o=this.loadShader(r,r.VERTEX_SHADER,t),a=this.loadShader(r,r.FRAGMENT_SHADER,e),i=r.createProgram();return r.attachShader(i,o),r.attachShader(i,a),r.linkProgram(i),r.getProgramParameter(i,r.LINK_STATUS)?i:(alert("Unable to initialize the shader program: "+r.getProgramInfoLog(i)),null)},loadShader(r,t,e){const o=r.createShader(t);return r.shaderSource(o,e),r.compileShader(o),r.getShaderParameter(o,r.COMPILE_STATUS)?o:(alert("An error occurred compiling the shaders: "+r.getShaderInfoLog(o)),r.deleteShader(o),null)}}};const i=o("canvas",{id:"glcanvas",width:"640",height:"480"},null,-1);a.render=function(r,o,a,n,c,l){return t(),e("div",null,[i])};export default a;
