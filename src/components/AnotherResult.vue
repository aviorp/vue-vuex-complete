<template>
    <div>
        <p>Counter is : {{ doubleCounter }} </p>
        <p>Number of Clicks : {{ stringCounter }}</p>

    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';
    import * as types from '../store/types'
    export default {
        //  computed: {
        //      counter() {
        //          return this.$store.getters.doubleCounter;
        //      },
        //      clicks() {
        //          return this.$store.getters.stringCounter;
        //      }
        //  },
        // ? creating computed properties that listening to store getters.
        // ! by ES6 we can use spread operator and mix your own computed methods with the state getters.
        computed: {
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,
                stringCounter: types.CLICK_COUNTER
            })

        }

    }
</script>

<style scoped>

</style>