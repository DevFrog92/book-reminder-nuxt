<template>
  <div>
    this is home page
  </div>
</template>

<script>
import { fetchBookInfo, } from "~/api/index.js"
export default {
  async asyncData() {
    const response = await fetchBookInfo()

    this.data = response.data
    console.log(response)
  },
  data() {
    return {
      data: null,
    }
  },
}
</script>
