import authApi from '@/api/auth';

const state = {
  isSubmitting: false,
};

const mutations = {
  registerStart(state) {
    state.isSubmitting = true;
  },

  registerSuccess(state) {
    state.isSubmitting = false;
  },

  registerFailure(state) {
    state.isSubmitting = false;
  },
};

const actions = {
  register(context, credentials) {
    return new Promise(resolve => {
      authApi
        .register(credentials)
        .then(res => {
          console.log({ res });
          context.commit('registerSuccess', response.data.user);
          resolve(response.data.user);
        })
        .catch(err => {
          console.log({ err });
          context.commit('registerFailure', err.response.data.errors);
        });
    });
    // context.commit('registerStart');
    // setTimeout(() => {
    //   context.commit('registerSuccess');
    // }, 1000);
  },
};

export default {
  state,
  actions,
  mutations,
  // getters
};
