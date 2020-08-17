<template>
  <v-row
    class="smartphone-contents-row align-top justify-center"
  >
    <v-col 
      v-for="app in apps"
      :key="app.id"
      class="smartphone-contents-col"
    >
      <a v-if="'link' in app" :href="app.link" target="_blank" class="smartphone-btn">
        <v-btn depressed small :color="app.frame_color">
          <v-icon large v-if="'icon_color' in app" :color="app.icon_color">{{ app.icon }}</v-icon>
        </v-btn>
      </a>
      <v-btn depressed small v-if="'slot' in app" :color="app.frame_color">
        <span v-for="sp in app.slot" :style="sp.style">
          {{ doAction(sp.data) }}
        </span>
      </v-btn>
      <p v-if="'app_name' in app" class="smartphone-contents-text">{{ app.app_name }}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    apps: Array,
    date: ''
  },
  methods: {
    doAction (action_name) {
      switch (action_name) {
        case 'getWeek':
          return this.getWeek()
        case 'getHours':
          return this.getHours()
        case 'getHourMinutes':
          return this.getHourMinutes()
      }
    },
    getWeek() {
      const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      return weekdays[this.date.getDay()]
    },
    getHours() {
      return this.date.getHours()
    },
    getHourMinutes(){
      return this.date.getHours() + ':' + (this.date.getMinutes()<10?'0':'') + this.date.getMinutes()
    }
  }
}
</script>

<style>
.smartphone-contents-col {
  text-align:center;
  padding:0px 0px 0px 0px;
}
.smartphone-contents-row {
  margin:10px 5px 10px 5px;
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
