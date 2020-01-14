import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
// seperate the code to files and make the store clean, but it needed to be general function for all modules.
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0,
    },
    getters,
    // ? expected to be setters , those function will change the currect State
    // ! always have to run sync.
    mutations,
    // ? actions -  the solution to commit async mutations, can execute function before changing the state by mutations.
    actions,

    modules: {
        // import the seperate stores and actions
        counter
    }
});