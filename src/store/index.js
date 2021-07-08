import { createStore } from 'vuex'

export default createStore({
  state: {
    story: [
      {
        chapterTitle: 'The First Chapter',
        chapterSubTitle: 'Chapter 1',
        chapterId: 1,
        chapterContent: 'uhuhuhuhuhu'
      },
      {
        chapterTitle: 'The Second Chapter',
        chapterSubTitle: 'Chapter 2',
        chapterId: 2,
        chapterContent: 'kjldkjsadkj'
      }
    ]
  },
  getters: {
    activeChapter: (state) => (id) => {
      return state.story.find(chapter => chapter.chapterId === id)
    },
    greatestChapterId: (state) => {
      const greatestId = state.story.reduce((max, chapter) => (chapter.chapterId > max ? chapter.chapterId : max),
        0
      )
      return greatestId
    }
  },
  mutations: {
    updateChapterContent (state, { id, chapterContent }) {
      state.story = state.story.map(chapter => {
        return chapter.chapterId === id
          ? {
            ...chapter,
            chapterContent
          }
          : chapter
      })
    },
    updateChapterTitle (state, { id, chapterTitle }) {
      state.story = state.story.map(chapter => {
        return chapter.chapterId === id
          ? {
            ...chapter,
            chapterTitle
          }
          : chapter
      })
    },
    updateChapterSubTitle (state, { id, chapterSubTitle }) {
      state.story = state.story.map(chapter => {
        return chapter.chapterId === id
          ? {
            ...chapter,
            chapterSubTitle
          }
          : chapter
      })
    },

    createNewChapter (state, chapter) {
      state.story.push(chapter)
    },
    removeChapter (state, payload) {
      const id = payload.id
      const chapter = state.story.map(chapter => chapter.chapterId).indexOf(id)
      state.story.splice(chapter, 1)
      // state.story.splice(chapter, 1)
    }
  },
  actions: {},
  modules: {}
})
