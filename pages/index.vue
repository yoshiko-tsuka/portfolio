<template>
  <v-layout
    column
    justify-center
    align-center
    style="height:100%;"
  >
    <v-container>
      <v-row justify="center" align="center" height="100%">
        <v-col
          xs12
          sm6
          md6
        >
          <v-container>
            <v-row justify="center">
              <v-col xs12 sm1>
              </v-col>
              <v-col xs12 sm10>
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
              </v-col>
              <v-col xs12 sm1>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col
          xs12
          sm6
          md6
        >
          <v-container>
            <v-row justify="center">
              <v-col>
                <v-card 
                  class="rounded-xl"
                  width="250px"
                  style="margin:auto; padding: 2px 2px 2px 2px;"
                  elevation="8"
                >
                  <v-card 
                    class="rounded-xl"
                    style="padding: 2px 2px 2px 2px"
                    dark
                  >
                    <div style="text-align:center; padding:13px 10px 13px 15px"><v-btn disabled style="width:100px; height:10px; padding:0; border: 1px solid #444444;"></v-btn></div>
                    <v-divider></v-divider>
                    <v-card 
                    style="padding: 2px 2px 2px 2px; margin: 2px 0px 2px 0px;"
                    dark
                    >
                      <v-system-bar dark>
                        <v-container>
                        <v-row justify="space-between">
                          <v-col style="padding:0">
                            <v-icon>mdi-signal-cellular-outline</v-icon>
                            <v-icon>mdi-wifi-strength-3</v-icon>
                          </v-col>
                          <v-col style="padding:0; text-align:center;">
                            <span>{{ hours }}:{{ minutes }}</span>
                          </v-col>
                          <v-col style="padding:0; text-align:right;">
                            <span>98%</span>
                            <v-icon>mdi-battery</v-icon>
                          </v-col>
                        </v-row>
                        </v-container>
                      </v-system-bar>
                      <v-carousel
                        cycle
                        :show-arrows="false"
                        height="350px"
                        hide-delimiter-background
                        style="background-image: url('wallpaper.png');"
                      >
                        <v-carousel-item
                        >
                          <v-sheet
                            height="100%"
                            color="transparent"
                          >
                            <v-row
                              align="top"
                              justify="center"
                              style="margin:10px 5px 10px 5px"
                            >
                              <v-col style="text-align:center; padding:0px 0px 0px 0px">
                                <a href="https://twitter.com/S2hydrangeS2" target="_blank" style="text-decoration-line:none"><v-btn depressed small color="light-blue accent-2" style="border-radius: 12px; height:50px; padding:5px 2px 5px 2px;">
                                  <v-icon large color="white">fab fa-twitter</v-icon>
                                </v-btn></a>
                                <p style="font-size:12px">Twitter</p>
                              </v-col>
                              <v-col  style="text-align:center; padding:0px 0px 0px 0px">
                                <a href="https://github.com/yoshiko-tsuka" target="_blank" style="text-decoration-line:none"><v-btn depressed small color="white" style="border-radius: 12px; height:50px; padding:5px 2px 5px 2px;">
                                  <v-icon large color="black">fab fa-github</v-icon>
                                </v-btn></a>
                                <p style="font-size:12px">Github</p>
                              </v-col>
                              <v-col  style="text-align:center; padding:0px 0px 0px 0px">
                                <a href="https://www.linkedin.com/in/yoshiko-sumita-804419182/" target="_blank" style="text-decoration-line:none"><v-btn depressed small color="#0374B1" style="border-radius: 12px; height:50px; padding:5px 2px 5px 2px;">
                                  <v-icon large color="white">fab fa-linkedin-in</v-icon>
                                </v-btn></a>
                                <p style="font-size:12px">Linkedin</p>
                              </v-col>
                            </v-row>
                            <v-row
                              align="top"
                              justify="center"
                              style="margin:10px 5px 10px 5px"
                            >
                              <v-col style="text-align:center; padding:0px 0px 0px 0px">
                                <v-btn depressed small color="white" style="border-radius: 12px; height:50px; padding:5px 2px 5px 2px;">
                                  <span style="color:red;font-size:10px;margin:0">
                                    {{week}}
                                    
                                  </span>
                                  <span style="color:black;margin:0">{{day}}</span>
                                </v-btn>
                                <p style="font-size:12px">Calender</p>
                              </v-col>
                              <v-col  style="text-align:center; padding:0px 0px 0px 0px">
                                <v-btn depressed small color="white" style="border-radius: 12px; height:50px; padding:5px 2px 5px 2px;">
                                  <span style="color:black;margin:0">{{ hours }}:{{ minutes }}</span>
                                </v-btn>
                                <p style="font-size:12px">Clock</p>
                              </v-col>
                              <v-col  style="text-align:center; padding:0px 0px 0px 0px">
                              </v-col>
                            </v-row>
                          </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item
                        >
                          <v-sheet
                            height="100%"
                            color="transparent"
                          >
                            <v-row
                              class="fill-height"
                              align="center"
                              justify="center"
                            >
                              <div>Coming Soon!!</div>
                            </v-row>
                          </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item
                        >
                          <v-sheet
                            height="100%"
                            color="transparent"
                          >
                            <v-row
                              class="fill-height"
                              align="center"
                              justify="center"
                            >
                              <div>Coming Soon!!</div>
                            </v-row>
                          </v-sheet>
                        </v-carousel-item>
                      </v-carousel>
                    </v-card>
                    <v-divider></v-divider>
                    <div style="text-align:center; padding:7px 10px 7px 10px">
                      <v-progress-circular  
                        value="30"
                        width="2"
                        rotate="240"
                        color="grey darken-1"
                      ></v-progress-circular>
                    </div>
                  </v-card>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  head() {
    return {
      title: 'Tsuka Yoshiko',
      description: 'portfolio site'
    }
  },
  data() {
    return {
      date: new Date(),
      image_y: 0,
    }
  },
  computed: {
    week() {
      const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      return weekdays[this.date.getDay()]
    },
    day() {
      return this.date.getDate()
    },
    hours() {
      return this.date.getHours()
    },
    minutes() {
      return (this.date.getMinutes()<10?'0':'') + this.date.getMinutes()
    }
  },
  mounted() {
    this.setDate()
    setInterval(() => this.setDate(), 1000)
  },
  methods: {
    setDate() {
      this.date = new Date()
    }
  }
}
</script>

<style>
@keyframes moveImage1 {0% { transform:  translate(-300px, 0px);} 
  10% { transform:  translate(0px, 0px);} 
  90% { transform:  translate(0px, 0px);} 
  100% { transform:  translate(300px, 0px);}}
@keyframes moveImage2 {0% { y:-50px;} 
  100% { y:10px;}}
.v-progress-circular__underlay {
  stroke: rgba(255, 255, 255, 0.1);
}
.v-btn--icon.v-size--small {
  height:20px;
  width:20px;
}
#name_behind{
  animation: moveImage2 8s infinite;
}
#cpath1{
  animation: moveImage1 8s infinite;
}
.v-btn {
  text-transform: none;
}
</style>
