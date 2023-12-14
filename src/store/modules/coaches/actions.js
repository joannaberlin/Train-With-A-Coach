export default {
  async registerCoach(context, data) {
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

    const response = await fetch(
      `https://train-with-coach-ff08b-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coachData),
      }
    );

    if (!response.ok) {
      //error message...
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
  async loadCoaches(context) {
    const response = await fetch(
      'https://train-with-coach-ff08b-default-rtdb.europe-west1.firebasedatabase.app/coaches.json'
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }
    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        types: responseData[key].types,
        levels: responseData[key].levels,
        genders: responseData[key].genders,
      };
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
  },
};
