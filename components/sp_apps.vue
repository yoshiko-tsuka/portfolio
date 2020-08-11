<template>
  <v-col class="smartphone-contents-col">
    <a :href="link" target="_blank" class="smartphone-btn">
      <v-btn depressed small :color="frame_color">
        <v-icon large :color="icon_color">{{ icon }}</v-icon>
      </v-btn>
    </a>
    <p class="smartphone-contents-text">{{ app_name }}</p>
  </v-col>
</template>

<script>
export default {
  props: {
    link: String,
    frame_color: String,
    icon_color: String,
    icon: String,
    app_name: String
  }
}
</script>

<style>
.smartphone-contents-col {
  text-align:center;
  padding:0px 0px 0px 0px;
}
.smartphone-btn {
  text-decoration-line:none;
}
.smartphone-contents-col button {
  border-radius: 12px;
  height:50px!important;
  padding:5px 2px 5px 2px!important;
}
.smartphone-contents-text {
  font-size:12px;
}
</style>
