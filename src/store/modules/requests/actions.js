export default {
  contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };

    newRequest.coachId = payload.coachId;
    context.commit('addRequest', newRequest);
  },
};
