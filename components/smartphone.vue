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
                          @overlay-event="openOverlay()"
                          @music-event="musicOverlay = true"
                          @mail-event="mailOverlay = true"
                      />
                    </template>
                  </template>
                </v-sheet>
              </v-carousel-item>
            </template>
          </v-carousel>
          
          <v-bottom-sheet v-model="overlay" height="350px" color="transparent" inset hide-overlay>
           <v-card tile v-show="musicOverlay">
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

          <v-card tile v-show="mailOverlay">
            <v-container>
              <v-row justify="center">
                <v-col cols="12" md="8">
                    <v-card-title class="headline">Send me a message!</v-card-title>
                    <v-list-item>
                      <v-list-item-content>
                      <form>
                        <v-text-field
                          v-model="name"
                          :error-messages="nameErrors"
                          :counter="10"
                          label="Name"
                          outlined
                          required
                          @input="$v.name.$touch()"
                          @blur="$v.name.$touch()"
                        ></v-text-field>
                        <v-text-field
                          v-model="email"
                          :error-messages="emailErrors"
                          label="E-mail"
                          outlined
                          required
                          @input="$v.email.$touch()"
                          @blur="$v.email.$touch()"
                        ></v-text-field>
                        <v-list-item-title>What interests you about me?</v-list-item-title>
                        <v-container style="padding:0">
                          <v-row justify="space-around">
                            <v-col style="padding:0 0 0 10px">
                              <v-checkbox
                                v-model="checkbox"
                                :error-messages="checkboxErrors"
                                label="Carrer"
                                required
                                @change="$v.checkbox.$touch()"
                                @blur="$v.checkbox.$touch()"
                              ></v-checkbox>
                            </v-col>
                            <v-col style="padding:0 0 0 5px">
                              <v-checkbox
                                v-model="checkbox"
                                :error-messages="checkboxErrors"
                                label="Raising twins"
                                required
                                @change="$v.checkbox.$touch()"
                                @blur="$v.checkbox.$touch()"
                              ></v-checkbox>
                            </v-col>
                            <v-col style="padding:0 0 0 5px">
                              <v-checkbox
                                v-model="checkbox"
                                :error-messages="checkboxErrors"
                                label="Other"
                                required
                                @change="$v.checkbox.$touch()"
                                @blur="$v.checkbox.$touch()"
                              ></v-checkbox>
                            </v-col>
                          </v-row>
                        </v-container>
                        <v-textarea
                          label="Your Message"
                          auto-grow
                          outlined
                          rows="10"
                          row-height="15"
                        ></v-textarea>
                        <v-btn x-large block>
                          <v-container style="padding:0">
                            <v-col style="padding:0 0 0 5px">
                                <v-checkbox
                                  v-model="checkbox"
                                  :error-messages="checkboxErrors"
                                  label="I agree to the privacy policy"
                                  required
                                  @change="$v.checkbox.$touch()"
                                  @blur="$v.checkbox.$touch()"
                                ></v-checkbox>
                            </v-col>
                          </v-container>
                        </v-btn>
                        <v-btn class="mr-4 mt-4" @click="submit">submit</v-btn>
                        <v-btn class="mt-4" @click="clear">clear</v-btn>

                      </form>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          </v-bottom-sheet>
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
import SpApps from '@/components/sp_apps'
import { Howl } from 'howler'
import { validationMixin } from 'vuelidate'
import { required, minLength, between, maxLength, email } from 'vuelidate/lib/validators'

export default {
  components: {
    SpApps
  },
  data() {
    return {
      date: new Date(),
      row_app: [],
      playStatus: 'mdi-play',
      overlay: false,
      musicOverlay: false,
      mailOverlay: false,
      sound: '',
      soundProgress: 0,
      submitStatus: null,
      name: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
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
                link: 'https://www.linkedin.com/in/yoshiko-tsuka-804419182/',
                frame_color: '#0374B1',
                icon_color: 'white',
                icon: 'fab fa-linkedin-in',
                app_name: 'Linkedin'
              }
            ],
            [
              { 
                id: 7,
                frame_color: 'black',
                icon_color: 'green',
                icon: 'fab fa-spotify',
                modal: {
                    data: 'music'
                },
                app_name: 'Music'
              },
              { 
                id: 8,
                frame_color: 'red',
                icon_color: 'white',
                icon: 'mdi-gmail',
                modal: {
                    data: 'mail'
                },
                app_name: 'Mail'
              },
              {
                id: 9
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
  mixins: [validationMixin],
  validations: {
    name: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(10)
    },
    email: { required, email },
    checkbox: {
      checked (val) {
        return val
      },
    }
  },
  created() {
    this.setDate()
    this.sound = new Howl({
      src: [
        'musics/パステルハウス.mp3'
      ],
      // 設定 (以下はデフォルト値です)
      preload: true,   // 事前ロード
      volume: 0.1,     // 音量(0.0〜1.0の範囲で指定)
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
    },
    nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.minLength && errors.push('２文字以上10文字以下で記入してください。')
        !this.$v.name.maxLength && errors.push('２文字以上10文字以下で記入してください。')
        !this.$v.name.required && errors.push('required')
        return errors
    },
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('required')
      return errors
    },
    selectErrors () {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('required')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
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
    },
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    },
    openOverlay () {
      this.overlay = true
      // reset show overlay
      this.musicOverlay = false
      this.mailOverlay = false
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
  background-image: url('../assets/wallpaper.png');
}
.smartphone-bottom {
  text-align:center;
  padding:7px 10px 7px 10px;
}
.form__label {
    font-size: 0.8125rem;
    color: #4b6372;
    margin-bottom: 0.3125rem;
    margin-left: 0.875rem;
    display: block;
    font-family: "Lato", sans-serif;
}
.form__input{
    font-family: "Lato", sans-serif;
    font-size: 0.875rem;
    font-weight: 300;
    color: #374853;
    line-height: 2.375rem;
    min-height: 2.375rem;
    position: relative;
    border: 1px solid #E8E8E8;
    border-radius: 5px;
    background: #fff;
    padding: 0 0.8125rem;
    width: 100%;
    transition: border .1s ease;
    box-sizing: border-box;
}
.form-group--error{
    animation-name: shakeError;
    animation-fill-mode: forwards;
    animation-duration: .6s;
    animation-timing-function: ease-in-out;
}
.error{
  font-size: 0.75rem;
  line-height: 1;
  display: block;
  margin-left: 14px;
  margin-top: -1.6875rem;
  margin-bottom: 0.9375rem;
  color: #f57f6c;
}
</style>
