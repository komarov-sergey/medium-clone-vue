const state = {
  isSubmitting: false,
};

const mutations = {
  registerStart(currentState) {
    currentState.isSubmitting = true;
  },
};

export default {
  state,
  // actions,
  mutations,
  // getters
};
