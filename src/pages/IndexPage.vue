<template>
  <q-page class="flex flex-center">

    <!--<div class="q-pa-md">
      <h4>App免費下載</h4>
      <q-btn href="https://play.google.com/store/apps/details?id=tw.bestian.spells" label="" push color="purple"><q-icon name="shop" />Google play安裝</q-btn>
      <q-btn href="https://apps.apple.com/tw/app/%E4%BD%9B%E9%96%80%E5%92%92%E6%96%87%E9%9B%86/id1642445144" label="" push color="blue"><q-icon name="apple" />App Store安裝</q-btn>
    
    </div> -->
    <div class="q-pa-md">
      <div v-for="s in st(spells)" :key="s.time">
        {{s.date}}: {{s.name}} 念了 {{s.say}}
      </div>
    </div>

    <div class="q-pa-md">
      <q-form
      @submit="submit"
      @reset="reset"
      class="q-gutter-md"
      >
        <q-input
          filled
          v-model="name"
          label="您的大名/法名 *"
          hint=""
          lazy-rules
          :rules="[ val => val && val.length > 0 || '請輪入']"
        />

        <q-input
          filled
          type="text"
          v-model="say"
          label="您今天念了什麼咒 *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || '請輪入']"
        />
        <div>
          <q-btn label="登入!" type="submit" color="primary"/>
          <q-btn label="重設" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>

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
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      showA: false,
      showB: true,
      showC: true,
      name: '',
      date: new Date().getFullYear() +'/'+ parseInt(1+new Date().getMonth()) +'/'+ new Date().getDate(),
      say: '',
      spells: [],
      loading: false
    }
  },
  methods: {
    st (list) {
      var ans = [ ...list]
      ans.sort(function (a, b) {
        return b.time - a.time
      })
      return ans
    },
    submit () {
        firebase
            .firestore()
            .collection("spells")
            .add({
                name: this.name,
                date: this.date,
                time: (new Date()).getTime(),
                say: this.say
            })
        this.getData()
    },   
    reset() {
        this.name = '';
        this.say  = '';
    },
    getData () {
      console.log('aaa');
      this.loading = true
      this.spells = []
      let collection = firebase.firestore().collection('spells')
      collection.get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.spells.push(doc.data())
          })
          this.loading = false
        })
        .catch(error => console.error(error))
    }
  },
  mounted () {
    this.getData()
  }
})
</script>
