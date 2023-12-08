import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestsModules from './modules/requests/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModules,
  },
  stet() {
    return {
      userId: 'a1',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
