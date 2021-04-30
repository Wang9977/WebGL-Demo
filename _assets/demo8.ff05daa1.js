let t=document.createElement("style");t.innerHTML="canvas[data-v-27ea11c5]{border:2px solid #000;background-color:#000}",document.head.appendChild(t);import{p as e,b as r,o,c as a,w as n,a as i}from"./index.37da97a5.js";var c={mounted(){this.run()},methods:{run(){var t=0,e=!1;function r(t,e,r){const o=t.createShader(e);return t.shaderSource(o,r),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(alert("An error occurred compiling the shaders: "+t.getShaderInfoLog(o)),t.deleteShader(o),null)}!function(){const o=document.querySelector("#glcanvas").getContext("webgl");if(!o)return void alert("Unable to initialize WebGL. Your browser or machine may not support it.");const a=function(t,e,o){const a=r(t,t.VERTEX_SHADER,e),n=r(t,t.FRAGMENT_SHADER,o),i=t.createProgram();if(t.attachShader(i,a),t.attachShader(i,n),t.linkProgram(i),!t.getProgramParameter(i,t.LINK_STATUS))return alert("Unable to initialize the shader program: "+t.getProgramInfoLog(i)),null;return i}(o,"\n                    attribute vec4 aVertexPosition;\n                    attribute vec3 aVertexNormal;\n                    attribute vec2 aTextureCoord;\n                    uniform mat4 uNormalMatrix;\n                    uniform mat4 uModelViewMatrix;\n                    uniform mat4 uProjectionMatrix;\n                    varying highp vec2 vTextureCoord;\n                    varying highp vec3 vLighting;\n                    void main(void) {\n                    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n                    vTextureCoord = aTextureCoord;\n                    // Apply lighting effect\n                    highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);\n                    highp vec3 directionalLightColor = vec3(1, 1, 1);\n                    highp vec3 directionalVector = normalize(vec3(0.85, 0.8, 0.75));\n                    highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);\n                    highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n                    vLighting = ambientLight + (directionalLightColor * directional);\n                    }\n                ","\n                    varying highp vec2 vTextureCoord;\n                    varying highp vec3 vLighting;\n                    uniform sampler2D uSampler;\n                    void main(void) {\n                    highp vec4 texelColor = texture2D(uSampler, vTextureCoord);\n                    gl_FragColor = vec4(texelColor.rgb * vLighting, texelColor.a);\n                    }\n                "),n={program:a,attribLocations:{vertexPosition:o.getAttribLocation(a,"aVertexPosition"),vertexNormal:o.getAttribLocation(a,"aVertexNormal"),textureCoord:o.getAttribLocation(a,"aTextureCoord")},uniformLocations:{projectionMatrix:o.getUniformLocation(a,"uProjectionMatrix"),modelViewMatrix:o.getUniformLocation(a,"uModelViewMatrix"),normalMatrix:o.getUniformLocation(a,"uNormalMatrix"),uSampler:o.getUniformLocation(a,"uSampler")}},i=function(t){const e=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,e);const r=[-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1];t.bufferData(t.ARRAY_BUFFER,new Float32Array(r),t.STATIC_DRAW);const o=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,o);const a=[0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0];t.bufferData(t.ARRAY_BUFFER,new Float32Array(a),t.STATIC_DRAW);const n=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,n);const i=[0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1];t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW);const c=t.createBuffer();t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,c);const u=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23];return t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(u),t.STATIC_DRAW),{position:e,normal:o,textureCoord:n,indices:c}}(o),c=function(t,e){const r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);const o=0,a=t.RGBA,n=1,i=1,c=0,u=t.RGBA,l=t.UNSIGNED_BYTE,m=new Uint8Array([0,0,255,255]);return t.texImage2D(t.TEXTURE_2D,o,a,n,i,c,u,l,m),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),r}(o),u=function(t){const r=document.createElement("video");console.log("video",r),console.log("url",t);var o=!1,a=!1;function n(){o&&a&&(e=!0)}return r.autoplay=!0,r.muted=!0,r.loop=!0,r.addEventListener("playing",(function(){o=!0,n()}),!0),r.addEventListener("timeupdate",(function(){a=!0,n()}),!0),r.src=t,r.play(),r}("/src/Firefox.mp4");var l=0;requestAnimationFrame((function r(a){const m=(a*=.001)-l;l=a,e&&function(t,e,r){const o=0,a=t.RGBA,n=t.RGBA,i=t.UNSIGNED_BYTE;t.bindTexture(t.TEXTURE_2D,e),t.texImage2D(t.TEXTURE_2D,o,a,n,i,r)}(o,c,u),function(e,r,o,a,n){e.clearColor(0,0,0,1),e.clearDepth(1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);const i=45*Math.PI/180,c=e.canvas.clientWidth/e.canvas.clientHeight,u=.1,l=100,m=mat4.create();mat4.perspective(m,i,c,u,l);const s=mat4.create();mat4.translate(s,s,[-0,0,-6]),mat4.rotate(s,s,t,[0,0,1]),mat4.rotate(s,s,.7*t,[0,1,0]);const d=mat4.create();mat4.invert(d,s),mat4.transpose(d,d);{const t=3,a=e.FLOAT,n=!1,i=0,c=0;e.bindBuffer(e.ARRAY_BUFFER,o.position),e.vertexAttribPointer(r.attribLocations.vertexPosition,t,a,n,i,c),e.enableVertexAttribArray(r.attribLocations.vertexPosition)}{const t=2,a=e.FLOAT,n=!1,i=0,c=0;e.bindBuffer(e.ARRAY_BUFFER,o.textureCoord),e.vertexAttribPointer(r.attribLocations.textureCoord,t,a,n,i,c),e.enableVertexAttribArray(r.attribLocations.textureCoord)}{const t=3,a=e.FLOAT,n=!1,i=0,c=0;e.bindBuffer(e.ARRAY_BUFFER,o.normal),e.vertexAttribPointer(r.attribLocations.vertexNormal,t,a,n,i,c),e.enableVertexAttribArray(r.attribLocations.vertexNormal)}e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,o.indices),e.useProgram(r.program),e.uniformMatrix4fv(r.uniformLocations.projectionMatrix,!1,m),e.uniformMatrix4fv(r.uniformLocations.modelViewMatrix,!1,s),e.uniformMatrix4fv(r.uniformLocations.normalMatrix,!1,d),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,a),e.uniform1i(r.uniformLocations.uSampler,0);{const t=36,r=e.UNSIGNED_SHORT,o=0;e.drawElements(e.TRIANGLES,t,r,o)}t+=n}(o,n,i,c,m),requestAnimationFrame(r)}))}()}}};const u=n();e("data-v-27ea11c5");const l=i("canvas",{id:"glcanvas",width:"640",height:"480"},null,-1);r();const m=u(((t,e,r,n,i,c)=>(o(),a("div",null,[l]))));c.render=m,c.__scopeId="data-v-27ea11c5";export default c;
