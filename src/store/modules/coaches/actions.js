export default {
  registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      id: userId,
      firstName: data.firstName,
      lastName: data.lastName,
      description: data.desc,
      hourlyRate: data.rate,
      types: data.types,
      levels: data.levels,
      genders: data.genders,
    };

    context.commit('registerCoach', {
      ...coachData,
    });
  },
};
