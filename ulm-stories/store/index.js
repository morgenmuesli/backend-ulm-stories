import { TYPE } from "~/js/constants";

export const state = () => ({
  profIsCalling: false,
  profState: 0,
  gameState: [
    { chapter: "intro", scene: 0, isFinish: false, type: TYPE.video },
    { chapter: "intro", scene: 1, isFinish: false, type: TYPE.video },
    { chapter: "intro", scene: 2, isFinish: false, type: TYPE.video },
    { chapter: "intro", scene: 3, isFinish: false, type: TYPE.animation },
    { chapter: "intro", scene: 4, isFinish: false, type: TYPE.video },
    { chapter: "intro", scene: 5, isFinish: false, type: TYPE.video },
    { chapter: "intro", scene: 6, isFinish: false, type: TYPE.video },
    { chapter: "intro", scene: 7, isFinish: false, type: TYPE.video },
    { chapter: "intro", scene: 8, isFinish: false, type: TYPE.video },
    { chapter: "intro", scene: 9, isFinish: false, type: TYPE.video },
    { chapter: "intro", scene: 10, isFinish: false, type: TYPE.video },
    { chapter: "intro", scene: 11, isFinish: false, type: TYPE.video },
    { chapter: "intro", scene: 12, isFinish: false, type: TYPE.video },
    { chapter: "intro", scene: 13, isFinish: false, type: TYPE.video },
    { chapter: "intro", scene: 14, isFinish: false, type: TYPE.video },
    { chapter: "intro", scene: 15, isFinish: false, type: TYPE.video },
    { chapter: "ensinger", scene: 0, isFinish: false, type: TYPE.video },
    { chapter: "ensinger", scene: 1, isFinish: false, type: TYPE.video },
    { chapter: "ensinger", scene: 2, isFinish: false, type: TYPE.video },
    { chapter: "ensinger", scene: 3, isFinish: false, type: TYPE.video },
    { chapter: "ensinger", scene: 4, isFinish: false, type: TYPE.video },
    { chapter: "ensinger", scene: 5, isFinish: false, type: TYPE.video },
    { chapter: "ensinger", scene: 6, isFinish: false, type: TYPE.video },
    { chapter: "ensinger", scene: 7, isFinish: false, type: TYPE.video },
    { chapter: "ensinger", scene: 8, isFinish: false, type: TYPE.video },
    { chapter: "ensinger", scene: 9, isFinish: false, type: TYPE.video },
    {
      chapter: "ensinger",
      scene: 10,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "ensinger",
      scene: 11,
      isFinish: false,
      type: TYPE.video
    },
    { chapter: "ensinger", scene: 12, isFinish: false, type: TYPE.game },
    {
      chapter: "ensinger",
      scene: 13,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "ensinger",
      scene: 14,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "ensinger",
      scene: 15,
      isFinish: false,
      type: TYPE.video
    },
    { chapter: "aicher", scene: 0, isFinish: false, type: TYPE.video },
    { chapter: "aicher", scene: 1, isFinish: false, type: TYPE.video },
    { chapter: "aicher", scene: 2, isFinish: false, type: TYPE.video },
    { chapter: "aicher", scene: 3, isFinish: false, type: TYPE.video },
    { chapter: "aicher", scene: 4, isFinish: false, type: TYPE.video },
    { chapter: "aicher", scene: 5, isFinish: false, type: TYPE.video },
    { chapter: "aicher", scene: 6, isFinish: false, type: TYPE.video },
    { chapter: "aicher", scene: 7, isFinish: false, type: TYPE.video },
    { chapter: "aicher", scene: 8, isFinish: false, type: TYPE.video },
    { chapter: "aicher", scene: 9, isFinish: false, type: TYPE.video },
    { chapter: "aicher", scene: 10, isFinish: false, type: TYPE.video },
    { chapter: "aicher", scene: 11, isFinish: false, type: TYPE.video },
    { chapter: "aicher", scene: 12, isFinish: false, type: TYPE.video },
    { chapter: "aicher", scene: 13, isFinish: false, type: TYPE.video },
    { chapter: "aicher", scene: 14, isFinish: false, type: TYPE.game },
    {
      chapter: "streicher",
      scene: 0,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "streicher",
      scene: 1,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "streicher",
      scene: 2,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "streicher",
      scene: 3,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "streicher",
      scene: 4,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "streicher",
      scene: 5,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "streicher",
      scene: 6,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "streicher",
      scene: 7,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "streicher",
      scene: 8,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "streicher",
      scene: 9,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "streicher",
      scene: 10,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "streicher",
      scene: 11,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "streicher",
      scene: 12,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "streicher",
      scene: 13,
      isFinish: false,
      type: TYPE.game
    },
    {
      chapter: "berblinger",
      scene: 0,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "berblinger",
      scene: 1,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "berblinger",
      scene: 2,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "berblinger",
      scene: 3,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "berblinger",
      scene: 4,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "berblinger",
      scene: 5,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "berblinger",
      scene: 6,
      isFinish: false,
      type: TYPE.game
    },
    {
      chapter: "berblinger",
      scene: 7,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "berblinger",
      scene: 8,
      isFinish: false,
      type: TYPE.video
    },
    { chapter: "holl", scene: 0, isFinish: false, type: TYPE.video },
    { chapter: "holl", scene: 1, isFinish: false, type: TYPE.video },
    { chapter: "holl", scene: 2, isFinish: false, type: TYPE.video },
    { chapter: "holl", scene: 3, isFinish: false, type: TYPE.video },
    { chapter: "holl", scene: 4, isFinish: false, type: TYPE.video },
    { chapter: "holl", scene: 5, isFinish: false, type: TYPE.video },
    { chapter: "holl", scene: 6, isFinish: false, type: TYPE.video },
    { chapter: "holl", scene: 7, isFinish: false, type: TYPE.video },
    { chapter: "holl", scene: 8, isFinish: false, type: TYPE.video },
    { chapter: "holl", scene: 9, isFinish: false, type: TYPE.video },
    { chapter: "holl", scene: 10, isFinish: false, type: TYPE.video },
    { chapter: "holl", scene: 11, isFinish: false, type: TYPE.video },
    { chapter: "holl", scene: 12, isFinish: true, type: TYPE.game },
    {
      chapter: "schwanenwirtin",
      scene: 0,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "schwanenwirtin",
      scene: 1,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "schwanenwirtin",
      scene: 2,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "schwanenwirtin",
      scene: 3,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "schwanenwirtin",
      scene: 4,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "schwanenwirtin",
      scene: 5,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "schwanenwirtin",
      scene: 6,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "schwanenwirtin",
      scene: 7,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "schwanenwirtin",
      scene: 8,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "schwanenwirtin",
      scene: 9,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "schwanenwirtin",
      scene: 10,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "schwanenwirtin",
      scene: 11,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "schwanenwirtin",
      scene: 12,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "schwanenwirtin",
      scene: 13,
      isFinish: false,
      type: TYPE.game
    },
    {
      chapter: "einstein",
      scene: 0,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "einstein",
      scene: 1,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "einstein",
      scene: 2,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "einstein",
      scene: 3,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "einstein",
      scene: 4,
      isFinish: false,
      type: TYPE.animation
    },
    {
      chapter: "einstein",
      scene: 5,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "einstein",
      scene: 6,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "einstein",
      scene: 7,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "einstein",
      scene: 8,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "einstein",
      scene: 9,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "einstein",
      scene: 10,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "einstein",
      scene: 11,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "einstein",
      scene: 12,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "einstein",
      scene: 13,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "einstein",
      scene: 14,
      isFinish: false,
      type: TYPE.video
    },
    {
      chapter: "prof0",
      scene: 0,
      isFinish: false,
      type: TYPE.profcall
    },
    {
      chapter: "prof1",
      scene: 0,
      isFinish: false,
      type: TYPE.profcall
    }
  ]
});

export const getters = {
  getElementByChapterAndScene(state) {
    return (chapterId, sceneId) => {
      return state.gameState.find(
        a => a.chapter === chapterId && a.scene === sceneId
      );
    };
  },
  getAllElementsFromChapter: state => chapter => {
    return state.gameState.filter(x => x.chapter === chapter);
  },
  isChapterFinish: (state, getters) => chapter => {
    for (const item of getters.getAllElementsFromChapter(chapter)) {
      if (!item.isFinish) {
        return false;
      }
    }
    return true;
  },
  checkIfProfIsCalling(state) {
    return state.profIsCalling;
  },
  getChaptersAsSet(state) {
    const chapters = state.gameState.map(x => x.chapter);
    return new Set(chapters);
  },
  getFinishedChapter(state, getters) {
    const finishedList = [];
    for (const chapter of getters.getChaptersAsSet) {
      if (chapter === "intro") {
        continue;
      }
      if (getters.isChapterFinish(chapter)) {
        finishedList.push(chapter);
      }
    }
    return finishedList;
  },
  countFinishChapters: (state, getters) => {
    let count = 0;
    for (const chapter of getters.getChaptersAsSet) {
      if (chapter === "intro") {
        continue;
      }
      if (getters.isChapterFinish(chapter)) {
        count++;
      }
    }
    return count;
  },
  getProfVideos(state, getters) {
    const currentProfID = "prof" + state.profState;
    console.debug(currentProfID);
    const videos = getters["videos/getAllSortedVideosOfChapter"](currentProfID);
    return videos.reverse();
  },
  checkIfLocationsAreFinish: (state, getters) => multipleLocations => {
    for (const chapter of multipleLocations) {
      if (!getters.isChapterFinish(chapter)) {
        return false;
      }
    }
    return true;
  }
};

export const mutations = {
  toggleFinish(state, gameState) {
    console.info("toggle finish  ", gameState);
    state.gameState.find(x => x === gameState).isFinish = true;
  },
  changeProfCallFlag(state, value) {
    state.profIsCalling = value;
  },
  toggleProfCall(state) {
    state.profIsCalling = !state.profIsCalling;
  },
  changeProfState(state, value) {
    state.profState = value;
  }
};

export const actions = {
  finishedScene({ state, commit, dispatch, getters }, data) {
    console.debug("finish scene action ", data);

    const gameState = state.gameState.find(
      gameScene =>
        gameScene.chapter === data.chapter &&
        gameScene.scene === parseInt(data.scene)
    );
    console.debug("Gamestate= ", gameState);
    if (gameState) {
      commit("toggleFinish", gameState);
    }

    if (getters.isChapterFinish(data.chapter)) {
      console.debug("CHAPTER IS FINISH: ", data.chapter);
      if (data.chapter !== "intro") {
        dispatch("npcLocation/visitlocation", data.chapter);
        dispatch("updateProfCalling");
      }
    }
  },
  updateProfCalling({ commit, getters, dispatch }) {
    if (getters.isChapterFinish("ensinger")) {
      commit("toggleProfCall");
      dispatch("npcLocation/activateMultipleLocations", [
        "aicher",
        "streicher",
        "schwanenwirtin",
        "holl",
        "berblinger"
      ]);
    } else if (
      getters.checkIfLocationsAreFinish([
        "aicher",
        "streicher",
        "schwanenwirtin",
        "holl",
        "berblinger"
      ])
    ) {
      commit("toggleProfCall");
      dispatch("npcLocation/activateMultipleLocations", ["einstein"]);
      commit("changeProfState", 2);
    }
  }
};
