<template>
  <q-page class="flex flex-center">
  <div class="q-pa-md">
      <div class="btn-group">
        <router-link class = "btn" to="/light">光明真言</router-link>
        <router-link class = "btn" to="/ten">十小咒</router-link>
        <router-link class = "btn" to="/dabei">大悲咒</router-link>
        <router-link class = "btn" to="/lengyan">楞嚴咒</router-link>
        <router-link class = "btn" to="/three">三皈依</router-link>
        <router-link class = "btn" to="/bell">叩鐘</router-link>
        <router-link class = "btn" to="/">回首頁</router-link>
      </div>
  </div>

    <div>
      
      <h3>三皈依</h3>

      <p>皈依佛 皈依法 皈依僧</p>
      <br/>
      <p>皈依佛 兩足尊</p>
      <p>皈依法 離欲尊</p>
      <p>皈依僧 眾中尊</p>
      <br/>
      <p>皈依佛 離開地獄道</p>
      <p>皈依法 離開餓鬼道</p>
      <p>皈依僧 離開畜生旁生道</p>
      <br/>
      <p>皈依佛竟 皈依法竟 皈依僧竟</p>

      <p>(念誦三次)</p>
      <p>一切歸白淨</p>
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
