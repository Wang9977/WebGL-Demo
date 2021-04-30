import{o as t,c as r,a as e}from"./index.37da97a5.js";var a={mounted(){this.main()},methods:{main(){const t=document.querySelector("#glcanvasdemo2").getContext("webgl");if(!t)return void alert("Unable to initialize WebGL. Your browser or machine may not support it.");const r=this.initShaderProgram(t,"\n                attribute vec4 aVertexPosition;\n                uniform mat4 uModelViewMatrix;\n                uniform mat4 uProjectionMatrix;\n                void main() {\n                gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n                }\n            ","\n                void main() {\n                gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n                }\n            "),e={program:r,attribLocations:{vertexPosition:t.getAttribLocation(r,"aVertexPosition")},uniformLocations:{projectionMatrix:t.getUniformLocation(r,"uProjectionMatrix"),modelViewMatrix:t.getUniformLocation(r,"uModelViewMatrix")}},a=this.initBuffers(t);this.drawScene(t,e,a)},initBuffers(t){const r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r);return t.bufferData(t.ARRAY_BUFFER,new Float32Array([1,1,-1,1,1,-1,-1,-1]),t.STATIC_DRAW),{position:r}},drawScene(t,r,e){t.clearColor(0,0,0,1),t.clearDepth(1),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT);const a=45*Math.PI/180,o=t.canvas.clientWidth/t.canvas.clientHeight,i=mat4.create();mat4.perspective(i,a,o,.1,100);const n=mat4.create();mat4.translate(n,n,[-0,0,-6]);{const a=2,o=t.FLOAT,i=!1,n=0,c=0;t.bindBuffer(t.ARRAY_BUFFER,e.position),t.vertexAttribPointer(r.attribLocations.vertexPosition,a,o,i,n,c),t.enableVertexAttribArray(r.attribLocations.vertexPosition)}t.useProgram(r.program),t.uniformMatrix4fv(r.uniformLocations.projectionMatrix,!1,i),t.uniformMatrix4fv(r.uniformLocations.modelViewMatrix,!1,n);{const r=0,e=4;t.drawArrays(t.TRIANGLE_STRIP,r,e)}},initShaderProgram(t,r,e){const a=this.loadShader(t,t.VERTEX_SHADER,r),o=this.loadShader(t,t.FRAGMENT_SHADER,e),i=t.createProgram();return t.attachShader(i,a),t.attachShader(i,o),t.linkProgram(i),t.getProgramParameter(i,t.LINK_STATUS)?i:(alert("Unable to initialize the shader program: "+t.getProgramInfoLog(i)),null)},loadShader(t,r,e){const a=t.createShader(r);return t.shaderSource(a,e),t.compileShader(a),t.getShaderParameter(a,t.COMPILE_STATUS)?a:(alert("An error occurred compiling the shaders: "+t.getShaderInfoLog(a)),t.deleteShader(a),null)}}};const o=e("canvas",{id:"glcanvasdemo2",width:"640",height:"480"},null,-1);a.render=function(e,a,i,n,c,s){return t(),r("div",null,[o])};export default a;
