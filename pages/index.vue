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
                  class="rounded-xl smartphone-outline"
                  width="250px"
                  elevation="8"
                >
                  <v-card 
                    class="rounded-xl smartphone-screen"
                    dark
                  >
                    <div 
                      class="smartphone-top"
                    >
                      <v-btn 
                        disabled
                        class="smartphone-speaker"
                      >
                      </v-btn>
                    </div>

                    <v-divider></v-divider>

                    <v-card 
                      class="smartphone-middle"
                      dark
                    >
                      <v-system-bar dark>
                        <v-container>
                          <v-row justify="space-between">
                            <v-col class="smartphone-system-left">
                              <v-icon>mdi-signal-cellular-outline</v-icon>
                              <v-icon>mdi-wifi-strength-3</v-icon>
                            </v-col>
                            <v-col class="smartphone-system-middle">
                              <span>{{ hours }}:{{ minutes }}</span>
                            </v-col>
                            <v-col class="smartphone-system-right">
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
                        class="smartphone-contents"
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
                              class="smartphone-contents-row"
                            >
                              <v-col class="smartphone-contents-col">
                                <a href="https://twitter.com/S2hydrangeS2" target="_blank" class="smartphone-btn">
                                  <v-btn depressed small color="light-blue accent-2">
                                    <v-icon large color="white">fab fa-twitter</v-icon>
                                  </v-btn>
                                </a>
                                <p class="smartphone-contents-text">Twitter</p>
                              </v-col>
                              <v-col class="smartphone-contents-col">
                                <a href="https://github.com/yoshiko-tsuka" target="_blank" class="smartphone-btn">
                                  <v-btn depressed small color="white">
                                    <v-icon large color="black">fab fa-github</v-icon>
                                  </v-btn>
                                </a>
                                <p class="smartphone-contents-text">Github</p>
                              </v-col>
                              <v-col class="smartphone-contents-col">
                                <a href="https://www.linkedin.com/in/yoshiko-sumita-804419182/" target="_blank" class="smartphone-btn">
                                  <v-btn depressed small color="#0374B1">
                                    <v-icon large color="white">fab fa-linkedin-in</v-icon>
                                  </v-btn>
                                </a>
                                <p class="smartphone-contents-text">Linkedin</p>
                              </v-col>
                            </v-row>
                            <v-row
                              align="top"
                              justify="center"
                              class="smartphone-contents-row"
                            >
                              <v-col class="smartphone-contents-col">
                                <v-btn depressed small color="white">
                                  <span style="color:red;font-size:10px;margin:0">
                                    {{week}}
                                  </span>
                                  <span style="color:black;margin:0">{{day}}</span>
                                </v-btn>
                                <p class="smartphone-contents-text">Calender</p>
                              </v-col>
                              <v-col class="smartphone-contents-col">
                                <v-btn depressed small color="white">
                                  <span style="color:black;margin:0">{{ hours }}:{{ minutes }}</span>
                                </v-btn>
                                <p class="smartphone-contents-text">Clock</p>
                              </v-col>
                              <v-col class="smartphone-contents-col">
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
                    <div class="smartphone-bottom">
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
      down_image: true
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
    setInterval(() => this.setImageY(), 100)
  },
  methods: {
    setDate() {
      this.date = new Date()
    },
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
.v-progress-circular__underlay {
  stroke: rgba(255, 255, 255, 0.1);
}
.v-btn--icon.v-size--small {
  height:20px;
  width:20px;
}
#cpath1{
  animation: moveImage1 8s infinite;
}
.v-btn {
  text-transform: none;
}
.smartphone-outline {
  margin:auto;
  padding: 2px 2px 2px 2px;
}
.smartphone-screen {
  padding: 2px 2px 2px 2px;
}
.smartphone-top {
  text-align:center;
  padding:13px 10px 13px 15px;
}
.smartphone-speaker {
  width:100px;
  height:10px!important;
  padding:0!important;
  border: 1px solid #444444;
}
.smartphone-middle {
  padding: 2px 2px 2px 2px;
  margin: 2px 0px 2px 0px;
}
.smartphone-system-left {
  padding:0;
}
.smartphone-system-middle {
  padding:0;
  text-align:center;
}
.smartphone-system-right {
  padding:0;
  text-align:right;
}
.smartphone-contents {
  background-image: url('/wallpaper.png');
}
.smartphone-contents-row {
  margin:10px 5px 10px 5px;
}
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
.smartphone-bottom {
  text-align:center;
  padding:7px 10px 7px 10px;
}
</style>
