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
                  <template v-if="sheet.contents.length === 0">
                    <v-row
                      class="fill-height justify-center align-center"
                    >
                      <div>Coming Soon!!</div>
                    </v-row>
                  </template>
                  <template v-else>
                    <template 
                      v-for="apps in sheet.contents"
                    >
                      <SpApps
                          :apps="apps"
                          :date="date"
                          @music-event="music_overlay = true"
                      />
                    </template>
                  </template>
                </v-sheet>
              </v-carousel-item>
            </template>
          </v-carousel>
          
          <v-bottom-sheet v-model="music_overlay" height="350px" color="transparent" @click.stop="music_overlay = false" inset hide-overlay>
           <v-card tile>
            <v-progress-linear
              :value="soundProgress"
              class="my-0"
              height="3"
            ></v-progress-linear>

            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle>パステルハウス</v-list-item-subtitle>
                  <v-list-item-subtitle>by かずち</v-list-item-subtitle>
                </v-list-item-content>

                <!-- <v-list-item-icon>
                  <v-btn icon>
                    <v-icon>mdi-rewind</v-icon>
                  </v-btn>
                </v-list-item-icon> -->

                <v-list-item-icon :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
                  <v-btn icon @click.stop="playMusic">
                    <v-icon>{{ playStatus }}</v-icon>
                  </v-btn>
                </v-list-item-icon>

                <!-- <v-list-item-icon
                  class="ml-0"
                  :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
                >
                  <v-btn icon>
                    <v-icon>mdi-fast-forward</v-icon>
                  </v-btn>
                </v-list-item-icon> -->
              </v-list-item>
            </v-list>
          </v-card>
          </v-bottom-sheet>
          </v-overlay>
        </v-card>

        <v-divider></v-divider>

        <div class="smartphone-bottom">
          <v-progress-circular  
            value="30"
            width="2"
            rotate="240"
            color="grey darken-1"
            @click="music_overlay = false"
          ></v-progress-circular>
        </div>

      </v-card>
    </v-card>
  </v-col>
</template>

<script>
import SpApps from '@/components/sp_apps';
import {Howl} from 'howler';

export default {
  data() {
    return {
      date: new Date(),
      row_app: [],
      music_overlay: false,
      playStatus: 'mdi-play',
      sound: '',
      soundProgress: 0,
      apps: [
        { 
          contents: [
            [
              {
                id: 1,
                frame_color: 'white',
                slot: [
                  { 
                    style: 'color:red;font-size:10px;margin:0',
                    data: 'getWeek'
                  },
                  {
                    style: 'color:black;margin:0',
                    data: 'getHours'
                  }
                ],
                app_name: 'Calender'
              },
              {
                id: 2,
                frame_color: 'white',
                slot: [
                  {
                    style: 'color:black;margin:0',
                    data: 'getHourMinutes'
                  }
                ],
                app_name: 'Clock'
              },
              {
                id: 3
              }
            ],
            [
              { 
                id: 4,
                link: 'https://twitter.com/S2hydrangeS2',
                frame_color: 'light-blue accent-2',
                icon_color: 'white',
                icon: 'fab fa-twitter',
                app_name: 'Twitter'
              },
              { 
                id: 5,
                link: 'https://github.com/yoshiko-tsuka',
                frame_color: 'white',
                icon_color: 'black',
                icon: 'fab fa-github',
                app_name: 'Github'
              },
              { 
                id: 6,
                link: 'https://www.linkedin.com/in/yoshiko-sumita-804419182/',
                frame_color: '#0374B1',
                icon_color: 'white',
                icon: 'fab fa-linkedin-in',
                app_name: 'Linkedin'
              }
            ],
            [
              { 
                id: 7,
                frame_color: 'white',
                style: 'color: #FF8C00;',
                src: '/musics/music.png',
                modal: {
                    data: 'music'
                },
                app_name: 'Music'
              },
              { 
                id: 8,
                link: 'https://twitter.com/S2hydrangeS2',
                frame_color: 'red',
                icon_color: 'white',
                icon: 'mdi-gmail',
                app_name: 'Mail'
              },
              { 
                id: 9,
                link: 'https://twitter.com/S2hydrangeS2',
                frame_color: 'white',
                icon_color: 'red',
                icon: 'attach_money',
                app_name: 'Price'
              }
            ]
          ]
        },
        {
          contents: []
        },
        {
          contents: []
        }
      ]
    }
  },
  components: {
    SpApps
  },
  created() {
    this.setDate()
    this.sound = new Howl({
      src: [
        'musics/pastelhouse.mp3'
      ],

      // 設定 (以下はデフォルト値です)
      preload: true,   // 事前ロード
      volume: 0.5,     // 音量(0.0〜1.0の範囲で指定)
      loop: true,     // ループ再生するか
      autoplay: false, // 自動再生するか
    })
    setInterval(() => this.setDate(), 1000)
    setInterval(() => this.setProgress(), 1000)
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
    playMusic() {
      if( this.sound.playing() ){
        this.playStatus = 'mdi-play'
        this.sound.pause()
      }
      else{
        this.playStatus = 'mdi-pause'
        this.sound.play()
      }
    },
    setProgress(){
      if( this.sound.playing() ) this.soundProgress = this.sound.seek()/this.sound.duration()*100
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
.smartphone-bottom {
  text-align:center;
  padding:7px 10px 7px 10px;
}
</style>
