<template>
  <div>
    <canvas id="glcanvasdemo1" width="640" height="480"></canvas>
  </div>
</template>
<script>
export default {
    mounted(){
        this.main()
    },
    methods:{
        main() {
            const canvas = document.querySelector('#glcanvasdemo1');
            // Initialize the GL context
            const gl = canvas.getContext('webgl');

            // If we don't have a GL context, give up now
            // Only continue if WebGL is available and working

            if (!gl) {
                alert('Unable to initialize WebGL. Your browser or machine may not support it.');
                return;
            }

            // Set clear color to black, fully opaque
            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            // Clear the color buffer with specified clear color
            gl.clear(gl.COLOR_BUFFER_BIT);
        }
    }
}
</script>
<style>
canvas {
  border: 2px solid black;
  background-color: black;
}
</style>