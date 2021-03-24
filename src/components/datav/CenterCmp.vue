<template>
  <div class="center-cmp">
    <img :src="'data:image/jpg;base64,'+imgData">
  </div>
</template>

<script>
  export default {
    name: 'CenterCmp',
    data() {
      return {
        imgData: ""
      }
    },
    methods: {
      arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
      }
    },
    sockets: {
      connect:function() {
        console.log("success")
      },
      response_image: function(val) {
        console.log(val)
        this.imgData = this.arrayBufferToBase64(val.msg);
      },
    },
  }
</script>

<style lang="less">
  .center-cmp {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
  }
</style>
