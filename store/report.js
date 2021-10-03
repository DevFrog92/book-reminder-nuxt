const initalContent = {
  title: "공간이 만든 공간",
  content: "<h1>안녕하세요</h1>\n<p>이것은 테스트입니다.</p>\n<ul>\n<li>\n<p>정말 입니다.</p>\n</li>\n</ul>\n<h3>Nuxt book reminder</h3>",
  thumbnail: "https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5349726%3Ftimestamp%3D20211001194623",
  createdAt: "2021.10.2 17:9:45",
}

export const state = () => ({
  reportContents: [initalContent],
})

export const mutations = {
  SET_REPORT_CONTENTS(state, payload) {
    state.reportContents.push(payload)
  },
}
