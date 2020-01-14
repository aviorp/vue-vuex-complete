<template>
    <div>
        <!-- the click methods need to be the same as the mutations methods to been attached -->
 <v-btn @click="asyncIncrement({by:50,duration:2000})" class="secondary">Increment</v-btn>
 <v-btn @click="asyncDecrement({by:50,duration:2000})" class="secondary">Decrement</v-btn>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
    export default {
        methods: {
            // increment() {
            // ? commit methods making vuex search for the method that in the commit parameter, when he found it the function will be executed.
            //     this.$store.commit('increment')
            // },
            // decrement() {
            //    this.$store.commit('decrement')
            // },
            ...mapActions(['asyncIncrement', 'asyncDecrement'])
        },
    }
</script>

<style scoped>

</style>