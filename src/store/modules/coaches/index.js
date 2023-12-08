import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'a1',
          firstName: 'Jo',
          lastName: 'Cat',
          types: ['strength', 'mobility', 'HIIT'],
          levels: ['beginner', 'advanced'],
          for: ['female', 'male', 'everybody'],
          description:
            "I'm Jo and I've worked as a personal trainer for years. I can help you with setting and reaching your training's goals.",
          hourlyRate: 30,
        },
        {
          id: 'a2',
          firstName: 'Rocky',
          lastName: 'Balboa',
          types: ['strength'],
          levels: ['advanced'],
          for: ['female', 'male', 'everybody'],
          description:
            "I'm Rocky and as a personal trainer with over two decades of experience, I can help you with reaching your biggest fitness goals.",
          hourlyRate: 50,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
