import { TYPE } from "~/js/type_constants";
export const state = () => ({
  gameState: [
    { id: 0, chapter: "ensinger", scene: 0, isFinish: false, type: TYPE.game },
    { id: 0, chapter: "ensinger", scene: 0, isFinish: false, type: TYPE.game },
    { id: 0, chapter: "ensinger", scene: 0, isFinish: false, type: TYPE.game },
    { id: 0, chapter: "ensinger", scene: 0, isFinish: false, type: TYPE.game },
    { id: 0, chapter: "ensinger", scene: 0, isFinish: false, type: TYPE.game },
    { id: 0, chapter: "ensinger", scene: 0, isFinish: false, type: TYPE.game },
    { id: 0, chapter: "ensinger", scene: 0, isFinish: false, type: TYPE.game },
    { id: 0, chapter: "ensinger", scene: 0, isFinish: false, type: TYPE.game },
    { id: 0, chapter: "ensinger", scene: 0, isFinish: false, type: TYPE.game },
    { id: 0, chapter: "ensinger", scene: 0, isFinish: false, type: TYPE.game }
  ]
});

export const getters = {
  getElementByChapterAndScene(state) {
    return (chapterId, sceneId) => {
      return state.gameState.find(
        a => a.chapter === chapterId && a.scene === sceneId
      );
    };
  }
};

export const mutation = {};
