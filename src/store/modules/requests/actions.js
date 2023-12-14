export default {
  contactCoach(context, payload) {
    const newRequest = {
      email: payload.email,
      message: payload.message,
    };

    newRequest.coachId = payload.coachId;
    context.commit('addRequest', newRequest);
  },
};
