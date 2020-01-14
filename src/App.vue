<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <h1>Vuex</h1>
          <br>
          <app-result />
          <app-another-result />
          <hr>
          <app-counter />
          <br>
          <app-another-counter />
          <hr>
          <br>
          <input outlined dense style="width:400px; border : 3px solid black;" v-model="value" label="Change Value" />
          <p> {{value}} </p>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import appCounter from './components/Counter.vue';
  import appResult from './components/Result.vue';
  import appAnotherResult from './components/AnotherResult.vue';
  import appAnotherCounter from './components/AnotherCounter.vue';
  export default {
    computed: {
      // ? the way to use v-model on Vuex State:
      value: {
        get() {
          return this.$store.getters.value;
        },
        set(value) {
          this.$store.dispatch('updateValue', value)
        }
      },

    },
    //  methods: {
    //     updateValue(event) {
    //        this.$store.dispatch('updateValue' , event.target.value)
    //     }
    //   },
    components: {
      appCounter,
      appResult,
      appAnotherResult,
      appAnotherCounter
    }
  }
</script>

<style scoped>

</style>