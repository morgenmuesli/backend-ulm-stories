const types = {
  GAME: "GAME",
  VIDEO: "VIDEO",
  IMAGE: "IMAGE"
};

export default () => ({
  dialogs: [
    {
      id: "intro",
      background: "",
      finish: false,
      content: [
        {
          id: 0,
          component: this.VIDEO,
          data: {
            path: "/video/test2.webm"
          }
        },
        {
          id: 1,
          component: this.VIDEO,
          data: {
            path: "/video/test2.webm"
          }
        },
        {
          id: 2,
          component: this.VIDEO,
          data: {
            path: "/video/test2.webm"
          }
        },
        {
          id: 3,
          component: "/game/quiz",
          data: {
            foo: "bar"
          }
        }
      ]
    },
    {
      id: "ensinger",
      background: "",
      finish: false,
      content: [
        {
          id: 0,
          component: this.VIDEO,
          data: {
            path: "/video/test2.webm",
            text:
              "Kennen wir uns? Ich bin Matthäus Ensinger. Was machst du in meinem Traum?"
          }
        },
        {
          id: 1,
          component: this.VIDEO,
          data: {
            path: "/video/test2.webm",
            text:
              "Achso ist das!? Ich dachte ich träume! Schau mal was ich schönes mit dem Kristall gebaut habe. Wenn ich groß bin, will ich nämlich auch ein bekannter Baumeister werden, genauso wie mein Vater. Kennst du Ihn?"
          }
        },
        {
          id: 2,
          component: this.VIDEO,
          data: {
            path: "/video/test2.webm"
          }
        }
      ]
    }
  ]
});
