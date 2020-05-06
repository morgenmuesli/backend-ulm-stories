export const state = () => ({
  videos: [
    { id: 0, chapter: "ensinger", path: "assets/video/0.webm" },
    { id: 1, chapter: "ensinger", path: "assets/video/0.webm" },
    { id: 2, chapter: "ensinger", path: "assets/video/0.webm" },
    { id: 3, chapter: "ensinger", path: "assets/video/0.webm" },
    { id: 4, chapter: "ensinger", path: "assets/video/0.webm" },
    { id: 5, chapter: "ensinger", path: "assets/video/0.webm" },
    { id: 6, chapter: "ensinger", path: "assets/video/0.webm" }
  ]
});

export const getter = {
  getAllSortedVideosOfChapter(chapterId) {
    const videosOfChapter = state.videos.filter(a => a.chapter === chapterId);
    return videosOfChapter.sort((a, b) => a.id - b.id);
  },

  getVideoByVideoId(videoID) {
    return state.videos.find(a => a.id === videoID);
  }
};
