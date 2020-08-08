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
                <MoveText/>
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
              <Smartphone/>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import MoveText from '@/components/move_text';
import Smartphone from '@/components/smartphone';

export default {
  head() {
    return {
      title: 'Tsuka Yoshiko',
      description: 'portfolio site'
    }
  },
  components: {
    MoveText,
    Smartphone 
  }
}
</script>

<style>
.v-progress-circular__underlay {
  stroke: rgba(255, 255, 255, 0.1);
}
.v-btn--icon.v-size--small {
  height:20px;
  width:20px;
}
.v-btn {
  text-transform: none;
}
</style>
