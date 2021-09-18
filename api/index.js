import axios from "axios"

const instance = axios.create({
  baseURL: "https://dapi.kakao.com/v3/search",
  headers: { Authorization: `KakaoAK ${process.env.KakaoKEY}`, },
})

function fetchBookInfo(keyword) {
  return instance.get("/book", { params: { query: keyword, }, })
}

export {
  fetchBookInfo,
}
