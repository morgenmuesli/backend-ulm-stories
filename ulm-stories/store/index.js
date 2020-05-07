import { TYPE } from "~/js/constants";

export const state = () => ({
  gameState: [
    { id: 0, chapter: "ensinger", scene: 0, isFinish: false, type: TYPE.video },
    { id: 1, chapter: "holl", scene: 0, isFinish: false, type: TYPE.video }
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
  }
};

export const mutations = {
  toggleFinish(state, gameState) {
    gameState.isFinish = true;
  }
};

export const actions = {
  finishedScene({ state, commit, dispatch, getters }, data) {
    const gameState = state.gameState.find(
      gameScene =>
        gameScene.chapter === data.chapter && gameScene.scene === data.scene
    );
    commit("toggleFinish", gameState);
    if (getters.isChapterFinish(data.chapter)) {
      dispatch("npcLocation/visitlocation", data.chapter);
    }
  }
};
