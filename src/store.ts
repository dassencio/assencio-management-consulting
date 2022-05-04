import { createStore } from "vuex";

interface State {
  isMobileNavBarMenuExpanded: boolean;
}

const store = createStore<State>({
  state() {
    return {
      isMobileNavBarMenuExpanded: false,
    };
  },
  getters: {
    isMobileNavBarMenuExpanded(state) {
      return state.isMobileNavBarMenuExpanded;
    },
  },
  mutations: {
    setIsMobileNavBarMenuExpanded(state, newIsMobileNavBarMenuExpanded) {
      state.isMobileNavBarMenuExpanded = newIsMobileNavBarMenuExpanded;
    },
  },
  actions: {
    toggleMobileNavBarMenu(context) {
      (document.activeElement as HTMLElement).blur();
      context.commit(
        "setIsMobileNavBarMenuExpanded",
        !context.getters.isMobileNavBarMenuExpanded
      );
    },
    collapseMobileNavBarMenu(context) {
      (document.activeElement as HTMLElement).blur();
      context.commit("setIsMobileNavBarMenuExpanded", false);
    },
  },
});

export default store;
