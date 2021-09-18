<template>
  <div>
    this is home page
  </div>
</template>

<script>
import { fetchBookInfo, } from "~/api/index.js"
export default {
  data() {
    return {
      data: null,
    }
  },
  async created() {
    const response = await fetchBookInfo()

    console.log(response)
  },
}
</script>
