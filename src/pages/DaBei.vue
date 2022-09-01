<template>
  <q-page class="flex flex-center">

  <div class="q-pa-md">
    選擇顯示：
    <q-checkbox v-model="showA" />拼音
    <q-checkbox v-model="showB" />中文發音
    <q-checkbox v-model="showC" />意譯
  </div>

    <div class="pad thin-only">

    <h3>大悲咒</h3>

    <p v-show="showA">na mo ra tna tra yā ya / <br/> 
na ma ā ryā / <br/> 
va lo ki te śva rā ya / <br/> 
bo dhi sa tvā ya / <br/> 
ma hā sa tvā ya / <br/> 
ma hā kā ru ṇi kā ya / <br/> 
sa rva ra bha ye / <br/> 
ṣu dha na da sya / <br/> 
na mo skṛ ta ī mo ā ryā / <br/> 
ba ru ki te śi va raṃ dha va / <br/> 
na mo na ra ki dhi / <br/> 
he ri ma va dha ṣa me / <br/> 
sa rva a tha du śu tuṃ / <br/> 
a je yaṃ / <br/> 
sa rva bhu ta na ma va ga / <br/> 
ma va du du / <br/> 
ta dya thā oṃ / <br/> 
a va lo ka lo kā te / <br/> 
ka ra te / <br/> 
e hṛe / <br/> 
ma hā bo dhi sa tva sa rva2 / <br/> 
ma la2 ma ma hṛe da yaṃ / <br/> 
ku ru2 ka rmaṃ / <br/> 
dhu ru2 va ja ya te / <br/> 
ma hā va ja ya te / <br/> 
dha ra2 / <br/> 
dhi ri ṇi / <br/> 
rā ya / <br/> 
ca la ca la / <br/> 
ma ma / <br/> 
va ma ra / <br/> 
su kte le / <br/> 
e he e he / <br/> 
ci nda2 / <br/> 
ar ṣam pra ca li / <br/> 
va ṣa va ṣaṃ pra śa ya / <br/> 
hu ru2 ma ra / <br/> 
hu ru2 / <br/> 
sa ra2 / <br/> 
si ri2 su ru2 / <br/> 
bo dhi ya2 / <br/> 
bo dha ya2 / <br/> 
mai tri ya / <br/> 
na ra ki ndi / <br/> 
dha rṣi ṇi na pa ṣa ma na / <br/> 
svā hā si ddhā ya / <br/> 
svā hā ma hā si ddhā ya svā hā / <br/> 
si ddha yo ge / <br/> 
śva ka rā ya svā hā / <br/> 
na ra ki ndi svā hā ma ra na ra /  <br/> 
svā hā / <br/> 
si ra saṃ ha mu khā ya /<br/> 
svā hā pa ma hā si ddhā ya /<br/> 
svā hā ca kra si ddhā ya / <br/> 
svā hā / <br/> 
pa dma ka stā ya / <br/> 
svā hā / <br/> 
na ra ki ndi va ga ra ya svā hā / <br/> 
ma va ri śa nka ya svā hā / <br/> 
na mo ra tna tra yā ya / <br/> 
na mo ā ryā va lo ki te śva / <br/> 
rā ya bo dhi svā hā </p>

    <p v-show="showB">南無喝囉怛那哆囉夜耶 南無阿唎耶 婆盧羯帝爍鉢囉耶 菩提薩埵婆耶 摩訶薩埵婆耶 摩訶迦盧尼迦耶 唵 薩皤囉罰曳 數怛那怛寫 南無悉吉唎埵伊蒙阿唎耶 婆盧吉帝室佛囉楞馱婆 南無那囉謹墀 醯唎摩訶皤哆沙咩 薩婆阿他豆輸朋 阿逝孕 薩婆薩哆那摩婆薩多 那摩婆伽 摩罰特豆 怛姪他 唵 阿婆盧醯 盧迦帝 迦羅帝 夷醯唎 摩訶菩提薩埵 薩婆薩婆 摩囉摩囉 摩醯摩醯唎馱孕 俱盧俱盧羯蒙 度盧度盧罰闍耶帝 摩訶罰闍耶帝 陀囉陀囉 地唎尼 室佛囉耶 遮囉遮囉 摩麼罰摩囉 穆帝隸 伊醯伊醯 室那室那 阿囉嘇佛囉舍利 罰娑罰嘇 佛囉舍耶 呼嚧呼嚧摩囉 呼嚧呼嚧醯利 娑囉娑囉 悉唎悉唎 蘇嚧蘇嚧 菩提夜菩提夜 菩馱夜菩馱夜 彌地利夜 那囉謹墀 地利瑟尼那 婆夜摩那 娑婆訶 悉陀夜 娑婆訶 摩訶悉陀夜 娑婆訶 悉陀喻藝 室皤囉耶 娑婆訶 那囉謹墀 娑婆訶 摩囉那囉 娑婆訶 悉囉僧阿穆佉耶 娑婆訶 娑婆摩訶阿悉陀夜 娑婆訶 者吉囉阿悉陀夜 娑婆訶 波陀摩羯悉陀夜 娑婆訶 那囉謹墀皤伽囉耶 娑婆訶 摩婆利勝羯囉夜 娑婆訶 南無喝囉怛那哆囉夜耶 南無阿唎耶 婆嚧吉帝 爍皤囉耶 娑婆訶 唵 悉殿都 漫多囉 跋陀耶 娑婆訶</p>

    <p v-show="showC">歸命三寶歸命聖觀自在菩薩大悲者善布施者之一切祝禱幸福歡樂尊者禮敬青頸觀音偉大之主一切皆美好無能勝者禮敬一切眾生，低吟「婆娑」與「南無」遠離束縛即說咒曰唵！觀照此世間者禮拜大菩薩一切，一切染污，染污偉大的心作吧！作此業堅守，堅守！勝利者大勝利者堅持，堅持總持自在者去吧，去吧我純淨的解脫來吧，來吧賢哲之事物傳播流佈充滿世界，充滿世界征服，往生悟覺，悟覺覺悟吧，覺悟吧！仁慈的青頸觀音勇猛者令人敬畏的心成就成就者成就大成就者成就成就瑜伽自在者成就青頸觀音成就破壞者成就具獅頭獅面者成就一切大成就者成就法輪成就者成就手持蓮花者成就青頸觀音皤伽囉成就無數的法螺成就向三寶及聖觀自在禮敬成就唵！成就咒語文句成就</p>

    </div>

    <table class="styled-table container fat-only">
      <thead>
        <tr><th>咒文</th><th v-show="showA">羅馬拼音</th><th v-show="showB">漢語音譯</th><th class="wide" v-show="showC">意譯</th></tr>
      </thead>

      <tbody>

        <tr>
      
          <td>大悲咒</td>

    <td v-show="showA">na mo ra tna tra yā ya / <br/> 
na ma ā ryā / <br/> 
va lo ki te śva rā ya / <br/> 
bo dhi sa tvā ya / <br/> 
ma hā sa tvā ya / <br/> 
ma hā kā ru ṇi kā ya / <br/> 
sa rva ra bha ye / <br/> 
ṣu dha na da sya / <br/> 
na mo skṛ ta ī mo ā ryā / <br/> 
ba ru ki te śi va raṃ dha va / <br/> 
na mo na ra ki dhi / <br/> 
he ri ma va dha ṣa me / <br/> 
sa rva a tha du śu tuṃ / <br/> 
a je yaṃ / <br/> 
sa rva bhu ta na ma va ga / <br/> 
ma va du du / <br/> 
ta dya thā oṃ / <br/> 
a va lo ka lo kā te / <br/> 
ka ra te / <br/> 
e hṛe / <br/> 
ma hā bo dhi sa tva sa rva2 / <br/> 
ma la2 ma ma hṛe da yaṃ / <br/> 
ku ru2 ka rmaṃ / <br/> 
dhu ru2 va ja ya te / <br/> 
ma hā va ja ya te / <br/> 
dha ra2 / <br/> 
dhi ri ṇi / <br/> 
rā ya / <br/> 
ca la ca la / <br/> 
ma ma / <br/> 
va ma ra / <br/> 
su kte le / <br/> 
e he e he / <br/> 
ci nda2 / <br/> 
ar ṣam pra ca li / <br/> 
va ṣa va ṣaṃ pra śa ya / <br/> 
hu ru2 ma ra / <br/> 
hu ru2 / <br/> 
sa ra2 / <br/> 
si ri2 su ru2 / <br/> 
bo dhi ya2 / <br/> 
bo dha ya2 / <br/> 
mai tri ya / <br/> 
na ra ki ndi / <br/> 
dha rṣi ṇi na pa ṣa ma na / <br/> 
svā hā si ddhā ya / <br/> 
svā hā ma hā si ddhā ya svā hā / <br/> 
si ddha yo ge / <br/> 
śva ka rā ya svā hā / <br/> 
na ra ki ndi svā hā ma ra na ra /  <br/> 
svā hā / <br/> 
si ra saṃ ha mu khā ya /<br/> 
svā hā pa ma hā si ddhā ya /<br/> 
svā hā ca kra si ddhā ya / <br/> 
svā hā / <br/> 
pa dma ka stā ya / <br/> 
svā hā / <br/> 
na ra ki ndi va ga ra ya svā hā / <br/> 
ma va ri śa nka ya svā hā / <br/> 
na mo ra tna tra yā ya / <br/> 
na mo ā ryā va lo ki te śva / <br/> 
rā ya bo dhi svā hā </td>

    <td v-show="showB">南無喝囉怛那哆囉夜耶 南無阿唎耶 婆盧羯帝爍鉢囉耶 菩提薩埵婆耶 摩訶薩埵婆耶 摩訶迦盧尼迦耶 唵 薩皤囉罰曳 數怛那怛寫 南無悉吉唎埵伊蒙阿唎耶 婆盧吉帝室佛囉楞馱婆 南無那囉謹墀 醯唎摩訶皤哆沙咩 薩婆阿他豆輸朋 阿逝孕 薩婆薩哆那摩婆薩多 那摩婆伽 摩罰特豆 怛姪他 唵 阿婆盧醯 盧迦帝 迦羅帝 夷醯唎 摩訶菩提薩埵 薩婆薩婆 摩囉摩囉 摩醯摩醯唎馱孕 俱盧俱盧羯蒙 度盧度盧罰闍耶帝 摩訶罰闍耶帝 陀囉陀囉 地唎尼 室佛囉耶 遮囉遮囉 摩麼罰摩囉 穆帝隸 伊醯伊醯 室那室那 阿囉嘇佛囉舍利 罰娑罰嘇 佛囉舍耶 呼嚧呼嚧摩囉 呼嚧呼嚧醯利 娑囉娑囉 悉唎悉唎 蘇嚧蘇嚧 菩提夜菩提夜 菩馱夜菩馱夜 彌地利夜 那囉謹墀 地利瑟尼那 婆夜摩那 娑婆訶 悉陀夜 娑婆訶 摩訶悉陀夜 娑婆訶 悉陀喻藝 室皤囉耶 娑婆訶 那囉謹墀 娑婆訶 摩囉那囉 娑婆訶 悉囉僧阿穆佉耶 娑婆訶 娑婆摩訶阿悉陀夜 娑婆訶 者吉囉阿悉陀夜 娑婆訶 波陀摩羯悉陀夜 娑婆訶 那囉謹墀皤伽囉耶 娑婆訶 摩婆利勝羯囉夜 娑婆訶 南無喝囉怛那哆囉夜耶 南無阿唎耶 婆嚧吉帝 爍皤囉耶 娑婆訶 唵 悉殿都 漫多囉 跋陀耶 娑婆訶</td>

    <td v-show="showC">歸命三寶歸命聖觀自在菩薩大悲者善布施者之一切祝禱幸福歡樂尊者禮敬青頸觀音偉大之主一切皆美好無能勝者禮敬一切眾生，低吟「婆娑」與「南無」遠離束縛即說咒曰唵！觀照此世間者禮拜大菩薩一切，一切染污，染污偉大的心作吧！作此業堅守，堅守！勝利者大勝利者堅持，堅持總持自在者去吧，去吧我純淨的解脫來吧，來吧賢哲之事物傳播流佈充滿世界，充滿世界征服，往生悟覺，悟覺覺悟吧，覺悟吧！仁慈的青頸觀音勇猛者令人敬畏的心成就成就者成就大成就者成就成就瑜伽自在者成就青頸觀音成就破壞者成就具獅頭獅面者成就一切大成就者成就法輪成就者成就手持蓮花者成就青頸觀音皤伽囉成就無數的法螺成就向三寶及聖觀自在禮敬成就唵！成就咒語文句成就</td>

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
