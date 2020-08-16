<template>
  <v-row
    align="top"
    justify="center"
    class="smartphone-contents-row"
  >
    <v-col 
      v-for="app in apps"
      :key="app.id"
      class="smartphone-contents-col"
    >
      <a :href="app.link" target="_blank" class="smartphone-btn">
        <v-btn depressed small :color="app.frame_color">
          <v-icon large :color="app.icon_color">{{ app.icon }}</v-icon>
        </v-btn>
      </a>
      <p class="smartphone-contents-text">{{ app.app_name }}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    apps: Array
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
