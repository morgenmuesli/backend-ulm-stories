export const state = () => ({
  profState: 0,
  currentShowedMessages: [],
  newMessages: [],
  messages: [
    {
      profState: 1,
      scene: 0,
      img: "handy",
      video: "16_Prof",
      text:
        "Du hast den jungen Ensinger wieder in seine Zeit zurück schicken können, stimmt‘s?"
    },
    {
      profState: 1,
      scene: 1,
      img: "handy",
      video: "17_Prof",
      text: "Das Chaos im Labor wurde nämlich gerade viel ruhiger!"
    },
    {
      profState: 1,
      scene: 2,
      img: "handy",
      video: "18_Prof",
      text:
        "Mach weiter so! Schau auf der Karte nach, da müsste der nächste Ort frei geschaltet worden sein. Viel Erfolg und vergiss die Kristallscherben nicht!"
    },
    {
      profState: 2,
      scene: 0,
      img: "handy",
      video: "81_ZweisteinO",
      text: "Hast du alle Kristallstücke?",
      answer: "Ja hab ich!"
    },
    {
      profState: 2,
      scene: 1,
      img: "handy",
      video: "82_ZweisteinO",
      text:
        "Du bist super! Zum Glück habe ich dich in die Stadt geschickt! Ich wusste du schaffst es!"
    },
    {
      profState: 2,
      scene: 2,
      img: "handy",
      video: "83_ZweisteinO",
      text:
        "Ich habe mittlerweile auch die Zeitmaschine reparieren können. Jetzt fehlt nur noch der Kristall für das Zeitmessgerät."
    },
    {
      profState: 2,
      scene: 3,
      img: "handy",
      video: "84_ZweisteinO",
      text:
        "Und weißt du wieso das Experiment missglückt ist? Wir haben es an dem falschen Ort gemacht!"
    },
    {
      profState: 2,
      scene: 4,
      img: "handy",
      video: "85_ZweisteinO",
      text:
        "Der Ort muss eine persönliche Bindung zu der Person haben, die wir durch die Zeit schicken wollen. Also lass uns an dem Elternhaus von Albert Einstein treffen."
    },
    {
      profState: 2,
      scene: 5,
      img: "handy",
      video: "86_ZweisteinO",
      text:
        "Der Punkt ist in der Karte vermerkt. Ich bin ja so aufgeregt!! Wir sehen uns dort. Bis gleich!"
    }
  ]
});

export const getters = {
  checkifProfIsCalling(state, getters) {
    if (getters.getNewProfMessages.length > 0) {
      console.debug("PROF IS CALLING");
      return true;
    }
    return false;
  },
  getNumbersOfNewMessages(state) {
    return state.newMessages.length;
  },
  getProfVideosOfCurrentState(state) {
    return state.messages.filter(x => x.profState === state.profState);
  },
  getNewProfMessages(state) {
    return state.newMessages;
  },
  getDisplayedMessages(state) {
    return state.currentShowedMessages;
  }
};

export const mutations = {
  clearNewMessages(state) {
    state.newMessages = [];
  },
  setNewMessages(state, messages) {
    state.newMessages = messages;
  },
  setCurrentShowedMessages(state, messages) {
    state.currentShowedMessages.push(...messages);
  },
  incrementProfState(state) {
    state.profState++;
  },
  setProfState(state, profStateValue) {
    state.profState = profStateValue;
  }
};

export const actions = {
  updateNewMessages({ commit, getters, state }) {
    const messages = getters.getProfVideosOfCurrentState;

    const dispayedMessages = getters.getDisplayedMessages;
    if (messages) {
      const found = messages.some(r => dispayedMessages.includes(r));
      if (!found) {
        commit("setNewMessages", messages);
      }
    }
  },
  updateDisplayMessages({ commit, state }) {
    commit("setCurrentShowedMessages", state.newMessages);
    commit("clearNewMessages");
  },
  clearMessages({ commit }) {
    commit("clearNewMessages");
  },
  setProfState({ state, commit }, profState) {
    commit("setProfState", profState);
  }
};
