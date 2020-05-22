export default function(context) {
  console.log("WHO YOU GONNA CALL? PROFCALL!!!!");
  context.store.commit("toggleProfCall");
  const rightProf = "prof" + context.store.state.profState;
  console.debug(rightProf);
  // return context.redirect("/content/phoneCall", {
  //   chapter: rightProf,
  //   scene: context.query.scene
  // });
}
