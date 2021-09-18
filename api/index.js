import axios from "axios"

const instance = axios.create({
  baseURL: "https://dapi.kakao.com/v3/search",
  headers: { Authorization: `KakaoAK ${process.env.KakaoKEY}`, },
})

function fetchBookInfo() {
  console.log(instance)

  // console.log(instance.get("/book"))
  return instance.get("/book", { params: { query: "공간이만든공간", }, })
}

export {
  fetchBookInfo,
}
