<template>
  <svg xmlns="http://www.w3.org/2000/svg" height="250" width="250" viewBox="0 0 250 250"> 
    <clipPath id="cpath1">
      <style>
        .main_name { font: 50px sans-serif; }
      </style>
      
      <text class="main_name" x="0" y="100">TSUKA</text>
      <text class="main_name" x="0" y="150">YOSHIKO</text>
    </clipPath>
    <image id="name_behind" xlink:href="background.png" height="250" width="250" x="0" :y="image_y" clip-path="url(#cpath1)" />
  </svg>
</template>

<script>
export default {
  data() {
    return {
      image_y: 0,
      down_image: true
    }
  },
  mounted() {
    setInterval(() => this.setImageY(), 100)
  },
  methods: {
    setImageY() {
      if (this.down_image === true && this.image_y === 10) {
        this.down_image = false
      } else if (this.down_image === false && this.image_y === -50) {
        this.down_image = true
      }

      if(this.down_image){
        this.image_y++
      }else{
        this.image_y--
      }
    }
  }
}
</script>

<style>
@keyframes moveImage1 {0% { transform:  translate(-300px, 0px);} 
  10% { transform:  translate(0px, 0px);} 
  90% { transform:  translate(0px, 0px);} 
  100% { transform:  translate(300px, 0px);}}
#cpath1{
  animation: moveImage1 8s infinite;
}
</style>
