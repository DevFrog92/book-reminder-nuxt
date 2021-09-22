export const state = () => ({
  reportContents: {},
})

export const mutations = {
  SET_REPORT_CONTENTS(state, payload) {
    state.reportContents = payload
  },
}
