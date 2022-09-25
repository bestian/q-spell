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
      
      <h3>叩鐘</h3>

      <p>〇〇〇背後的萬性萬靈及十方法界眾生開悟成就正遍無上正等正覺得阿耨多羅三藐三菩提</p>
      <p>能夠遇到善知識會善知識集善知識於一處</p>
      <p>將真理正法傳遍整個虛空</p>
      <p>將常寂光的國度降臨在人間就如同行使在天上一樣</p>
      <p>並轉換自身的神經血液細胞染色體DNARNA基因原子原子核質子電子
中子微中子微子量子光子超光子</p>
      <p>乃至於心性光等所有結構</p>
      <p>轉換成無量光無量壽</p>
      <p>感恩再感恩無限的感恩</p>
      <p>弟子〇〇〇願粉身碎骨在所不惜</p>
      <p>法身遍滿虛空承擔於一切只願成就大眾</p>
      <p>阿彌陀佛(十聲)</p>
      <br/>
      <p>(註: 粉身碎骨的意思就是粉碎我們累劫累世以來的習氣恐懼害怕重新架構新的光明骨髓核心價值)</p>
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
