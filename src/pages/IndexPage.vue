<template>
  <q-page class="flex flex-center">

    <div class="q-pa-md">
      <div class="btn-group">
        <router-link class = "btn" to="/light">光明真言</router-link>
        <router-link class = "btn" to="/ten">十小咒</router-link>
        <router-link class = "btn" to="/dabei">大悲咒</router-link>
        <router-link class = "btn" to="/lengyan">楞嚴咒</router-link>
        <router-link class = "btn" to="/">回首頁</router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      showA: false,
      showB: true,
      showC: true
    }
  }
})
</script>
