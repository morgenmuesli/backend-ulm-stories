import _ from "lodash";

import { TYPE } from "~/js/constants";

export default function({ redirect, query, store }) {
  console.debug("Hello from middleware: Query:", query);
  if (!(_.has(query, "chapter") && _.has(query, "scene"))) {
    return redirect("/game");
  }
  if (_.has(query, "direct")) {
    const side = store.getters.getElementByChapterAndScene(
      query.chapter,
      query.scene
    );

    if (side === undefined) {
      return redirect("/game");
    }

    store.dispatch("finishedScene", {
      chapter: query.chapter,
      scene: parseInt(query.scene)
    });

    console.log(side.type);

    switch (side.type) {
      case TYPE.video:
        return redirect("/content/videoContent", {
          chapter: query.chapter,
          scene: query.scene
        });
      case TYPE.game:
        return redirect(`/content/game`, {
          chapter: query.chapter,
          scene: query.scene
        });
      case TYPE.animation:
        return redirect(`/content/animation`, {
          chapter: query.chapter,
          scene: query.scene
        });
    }
  }
}
