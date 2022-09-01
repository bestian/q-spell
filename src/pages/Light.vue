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
    選擇顯示：
    <q-checkbox v-model="showA" />拼音
    <q-checkbox v-model="showB" />中文發音
    <q-checkbox v-model="showC" />意譯
  </div>

    <div class="pad thin-only">
      <h3>光明真言</h3>
      <p v-show="showA">𑖌𑖼𑖀𑖦𑖺𑖑𑖪𑖹𑖨𑖺𑖓𑖡<br/>𑖦𑖮𑖯𑖦𑖲𑖟𑖿𑖨𑖯𑖦𑖜𑖰𑖢𑖟𑖿𑖦<br/>𑖕𑖿𑖪𑖯𑖩𑖢𑖿𑖨𑖪𑖨𑖿𑖝𑖿𑖝𑖧𑖮𑗝𑖽
          </p>
      <p v-show="showA">oṃ amogha vairocana mahā-mudra maṇi-padma jvala pravarttaya hūṃ</p>

      <p v-show="showB">嗡 阿模嘎 百羅佳那 嘛哈母德喇 嘛尼 叭德嘛 及乏拉 缽喇乏爾達亞 吽</p>

      <p v-show="showC">讚歎大日如來的無瑕遍照。把寶珠、蓮花和光芒交還給我。 </p>
    </div>

    <table class="styled-table container fat-only">
      <thead>
        <tr><th>咒文</th><th v-show="showA">羅馬拼音</th><th v-show="showB">漢語音譯</th><th class="wide" v-show="showC">意譯</th></tr>
      </thead>

      <tbody>
      
        <tr>
          <td>光明真言</td>

          <td v-show="showA">oṃ amogha vairocana mahā-mudra maṇi-padma jvala pravarttaya hūṃ</td>

          <td v-show="showB">嗡 阿模嘎 百羅佳那 嘛哈母德喇 嘛尼 叭德嘛 及乏拉 缽喇乏爾達亞 吽</td>

          <td class="wide" v-show="showC">讚歎大日如來的無瑕遍照。把寶珠、蓮花和光芒交還給我。 </td>
        </tr>

      </tbody>
    </table>
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
