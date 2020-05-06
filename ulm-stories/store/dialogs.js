import { TYPE } from "~/js/type_constants";
export const state = () => ({
  chapters: [
    {
      chapter: "ensinger",
      isFinish: false,
      dialogs: [
        {
          scene: 0,
          type: TYPE.video,
          isFinish: false,
          data: {
            text: "Ich bin ein Text",
            img: "/img/ensinger.jpg",
            videopath: "/webm/ensinger.webm"
          }
        }
      ]
    }
  ]
});
