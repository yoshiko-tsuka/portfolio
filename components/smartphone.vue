<template>
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
            <template 
              v-for="sheet in apps"
            >
              <v-carousel-item
              >
                <v-sheet
                  height="100%"
                  color="transparent"
                >
                  <template v-if="sheet === '[]'">
                    <v-row
                      class="fill-height"
                      align="center"
                      justify="center"
                    >
                      <div>Coming Soon!!</div>
                    </v-row>
                  </template>
                  <template v-else>
                    <template 
                      v-for="app in sheet"
                    >
                      <v-if="isFirstColumn(app.id)">
                        <v-row
                          align="top"
                          justify="center"
                          class="smartphone-contents-row"
                        >
                      </v-if>
                      <template v-if="slot in app">
                        <SpApps 
                          :frame_color="app.frame_color"
                          :app_name="app.app_name"
                        >
                          <template v-for="span in slot">
                            <span :style="span.style">{{ span.data }}</span>
                          </template>
                        </SpApps>
                      </template>
                      <template v-else>
                        <SpApps 
                            :link="app.link"
                            :frame_color="app.frame_color"
                            :icon_color="app.icon_color"
                            :icon="app.icon"
                            :app_name="app.app_name"
                        />
                      </template>
                      <template v-if="isLastColumn(app.id)">
                        </v-row>
                      </template>
                    </template>
                  </template>
                </v-sheet>
              </v-carousel-item>
            </template>
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
</template>

<script>
import SpApps from '@/components/sp_apps';

export default {
  data() {
    return {
      date: new Date(),
      apps: [
        { 
          sheet1: [
            { 
              id: 1,
              link: 'https://twitter.com/S2hydrangeS2',
              frame_color: 'light-blue accent-2',
              icon_color: 'white',
              icon: 'fab fa-twitter',
              app_name: 'Twitter'
            },
            { 
              id: 2,
              link: 'https://github.com/yoshiko-tsuka',
              frame_color: 'white',
              icon_color: 'black',
              icon: 'fab fa-github',
              app_name: 'Github'
            },
            { 
              id: 3,
              link: 'https://www.linkedin.com/in/yoshiko-sumita-804419182/',
              frame_color: '#0374B1',
              icon_color: 'white',
              icon: 'fab fa-linkedin-in',
              app_name: 'Linkedin'
            },
            /* {
              id: 4,
              frame_color: 'white',
              slot: [
                { 
                  style: 'color:red;font-size:10px;margin:0',
                  data: this.week()
                },
                {
                  style: 'color:black;margin:0',
                  data: this.day()
                }
              ],
              app_name: 'Calender'
            },
            {
              id: 5,
              frame_color: 'white',
              slot: [
                {
                  style: 'color:black;margin:0',
                  data: this.hours() + ':' + this.minutes()
                }
              ],
              app_name: 'Clock'
            }　*/
          ] 
        },
        {
          sheet2: []
        },
        {
          sheet3: []
        }
      ]
    }
  },
  components: {
    SpApps
  },
  created() {
    this.setDate()
    setInterval(() => this.setDate(), 1000)
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
  methods: {
    setDate() {
      this.date = new Date()
    },
    isFirstColumn(id) {
      if (id % 3 === 1 ) {
        return true
      } else {
        return false
      }
    },
    ifLastColumn(id) {
      if (id % 3 === 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>
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
.smartphone-bottom {
  text-align:center;
  padding:7px 10px 7px 10px;
}
</style>
