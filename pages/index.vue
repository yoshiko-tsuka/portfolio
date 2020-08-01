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
                  <image id="name_behind" xlink:href="background.png" height="250" width="250" clip-path="url(#cpath1)" />
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
                        <v-spacer></v-spacer>
                        <v-icon>mdi-wifi-strength-4</v-icon>
                        <v-icon>mdi-signal-cellular-outline</v-icon>
                        <v-icon>mdi-battery</v-icon>
                        <span>12:30</span>
                      </v-system-bar>
                      <v-carousel
                        cycle
                        height="350px"
                        hide-delimiter-background
                      >
                        <v-carousel-item
                        >
                          <v-sheet
                            height="100%"
                            style="background:transparent"
                          >
                            <v-row
                              class="fill-height"
                              align="center"
                              justify="center"
                            >
                              <v-card><v-icon color="green darken-2">fab fa-twitter</v-icon><v-icon color="green darken-2">mdi-domain</v-icon></v-card>
                            </v-row>
                          </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item
                        >
                          <v-sheet
                            height="100%"
                          >
                            <v-row
                              class="fill-height"
                              align="center"
                              justify="center"
                            >
                              <div>cc</div>
                            </v-row>
                          </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item
                        >
                          <v-sheet
                            height="100%"
                          >
                            <v-row
                              class="fill-height"
                              align="center"
                              justify="center"
                            >
                              <div>bb</div>
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

</script>

<style>
@keyframes moveImage {0%   { transform:  translate(-300px, 0px);  y:-50px; } 
  10%   { transform:  translate(0px, 0px);   y:-50px; } 
  90%   { transform:  translate(0px, 0px);   y:10px; } 
  100%  { transform:  translate(300px, 0px); y:-50px;  }  }
.v-progress-circular__underlay {
  stroke: rgba(255, 255, 255, 0.1);
}
.v-btn--icon.v-size--small {
  height:20px;
  width:20px;
}
#name_behind{
  animation: moveImage 8s infinite;
}

</style>
