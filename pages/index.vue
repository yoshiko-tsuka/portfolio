<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-container>
      <v-row>
        <v-col
          xs12
          sm6
          md6
        >
        </v-col>
        <v-col
          xs12
          sm6
          md6
        >
          <v-card 
            class="rounded-xl"
            width="250px"
            style="padding: 2px 2px 2px 2px"
          >
          <v-card 
            class="rounded-xl"
            style="padding: 2px 2px 2px 2px"
            dark
          >
            <div style="text-align:center; padding:15px 10px 20px 15px"><v-btn disabled style="width:100px; height:10px; padding:0; border: 1px solid #444444;"></v-btn></div>
            <v-divider></v-divider>
            <v-card 
            style="padding: 2px 2px 2px 2px"
            dark
            >
          <v-carousel
            cycle
            height="350px"
            hide-delimiter-background
          >
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
  </v-layout>
</template>

<script>
export default {
}
</script>

<style>
.v-progress-circular__underlay{
  stroke: rgba(255, 255, 255, 0.1);
}
</style>
