<template>
  <v-app>
    <v-main>
      <v-container style="height:100%;">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>Yoshiko Tsuka &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      fixed: false
    }
  }
}
</script>
