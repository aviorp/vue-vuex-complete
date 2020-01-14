<template>
    <div>
        <!-- the click methods need to be the same as the mutations methods to been attached -->
        <v-btn @click="increment(100)" class="primary">Increment</v-btn>
        <v-btn @click="decrement(50)" class="primary">Decrement</v-btn>
    </div>
</template>

<script>
    // import {mapMutations} from 'vuex';
    import {
        mapActions
    } from 'vuex';
    export default {
        methods: {
            // increment() {
            // ? commit methods making vuex search for the method that in the commit parameter, when he found it the function will be executed.
            //     this.$store.commit('increment')
            // },
            // decrement() {
            //    this.$store.commit('decrement')
            // },
            // ...mapMutations(['increment', 'decrement'])
            // ? map actions its the same as $store.state.dispatch('increment')
            // ...mapActions(['increment', 'decrement']),

            // ! pass with the function a payload/parameter , the mapActions remember also the parameters.
            // increment(by) {
            //     this.$store.dispatch('increment', by)
            // }

        },
    }
</script>

<style scoped>
</style>