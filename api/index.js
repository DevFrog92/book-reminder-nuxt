import axios from "axios"

const instance = axios.create({
  baseURL: " 	https://openapi.naver.com/v1",
  headers: { "X-Naver-Client-Id": process.env.clinetId, "X-Naver-Client-Secret": process.env.clinetSecret, },
})

function fetchBookInfo() {
  return instance.get("/search/book.json", { params: { d_titl: "공강이만든공간", }, })
}

export {
  fetchBookInfo,
}
