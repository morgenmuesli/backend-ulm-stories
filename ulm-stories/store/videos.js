export const state = () => ({
  videos: [
    {
      id: 0,
      chapter: "ensinger",
      scene: 0,
      img: "ensinger",
      video: "sample",
      text: "sample text"
    },
    {
      id: 1,
      chapter: "holl",
      scene: 0,
      img: "ensinger",
      video: "sample",
      text: "sample text"
    }
  ]
});

export const getters = {
  getAllSortedVideosOfChapter: state => chapterId => {
    const videosOfChapter = state.videos.filter(a => a.chapter === chapterId);
    return videosOfChapter.sort((a, b) => a.id - b.id);
  },

  getVideoByVideoId: state => videoID => {
    return state.videos.find(a => a.id === videoID);
  },
  getVideoByChapterAndScene: state => (chapter, scene) => {
    scene = parseInt(scene);
    const video = state.videos.find(
      a => a.chapter === chapter && a.scene === scene
    );
    console.log(video);
    return video;
  }
};
