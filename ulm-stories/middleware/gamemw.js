import _ from "lodash";
// import { TYPE } from "~/js/type_constants";

import { TYPE } from "~/js/type_constants";

export default function({ redirect, query, store }) {
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

    console.log(side.type);

    switch (side.type) {
      case TYPE.video:
        return redirect("/content/video", {
          chapter: query.chapter,
          scene: query.scene
        });
      case TYPE.game:
        return redirect(`/content/game`, {
          chapter: query.chapter,
          scene: query.scene
        });
      case TYPE.image:
        return redirect(`/content/image`, {
          chapter: query.chapter,
          scene: query.scene
        });
    }
  }
}
