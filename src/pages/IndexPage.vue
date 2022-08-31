<template>
  <q-page class="flex flex-center">

  <div class="q-pa-md">
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

      <h3>如意寶輪王陀羅尼</h3>

      <p v-show="showA">Namo ratna-trayāya
Nama Āryāvalokiteśvarāya bodhisattvāya mahāsattvāya mahākāruṇikāya
tadyathā
Oṃ cakravarti cintāmaṇi mahāpadme ru ru tiṣṭhat jvala ākarṣāya hūṃ phaṭ svāhā
Oṃ padma cintāmaṇi jvala hūm
Oṃ varada padme hūm</p>

      <p v-show="showB">南謨佛馱耶　南謨達摩耶　南謨僧伽耶
南謨觀自在菩薩摩訶薩　具大悲心者
怛姪他
唵斫羯羅伐底　震多末尼謨訶　鉢蹬謎　嚕嚕嚕嚕　底瑟他　篅攞痾羯利沙也　吽發莎訶
菴鉢踏摩　震多末尼　篅攞吽
菴跋剌陀　鉢亶謎吽</p>

      <p v-show="showC">皈依三寶佛法僧，<br/>禮敬聖者觀自在，<br/>大悲心覺有情者，<br/>
真言宣說眾功德；<br/>運轉神變殊勝遇，<br/>轉輪聖王世間貴，<br/>
蓮華成就最勝尊，<br/>普願皆滿悉如意；<br/>此咒一出諸震動，<br/>
即時句召光明境，<br/>法螺遍響立變現，<br/>圓滿成就功德具。</p>

      <h3>消災吉祥神咒
      </h3>

      <p v-show="showA">Namaḥ Samanta Buddhānām Apratihata Śāsanānāṃ. Tadyathā Oṃ Kha Kha Khāhi Khāhi Hūṃ Hūṃ Jvala Jvala Prajvala Prajvala Tiṣṭha Tiṣṭha Ṣṭri Ṣṭri Sphoṭa Sphoṭa Śāntika Śrīye Svāhā.</p>

      <p v-show="showB">南無 三滿哆 母馱喃 阿鉢囉底 賀多舍 娑曩喃　怛姪他　唵 　

  佉佉　佉呬　　佉呬　　吽吽　入嚩囉　　入嚩囉　　鉢囉入嚩囉　

  鉢囉入嚩囉　　底瑟姹　　瑟致哩　　瑟致哩　　

  娑癹吒　　娑癹吒　　扇底迦　　室哩曳　娑嚩訶
      </p>


      <p v-show="showC">皈依一切諸佛無所障礙佛法<br/>即說咒曰虛空妄想虛空妄想被破壞被破壞強大的力量光明光明開始光明開始光明加持由小而大由小而大擴展開來擴展開來<br/>消除災難得到繁榮成就圓滿吉祥</p>

      <h3>功德寶山神咒</h3>

      <p v-show="showA">
  Namo buddhāya Namo dharmāya Namaḥ saṅghāya Om sīte huru-ru sindhūru kṛpā-kṛpā siddhaṇi pūrṇi svāhā</p>

      <p v-show="showB">南無佛馱耶。南無達摩耶。南無僧伽耶。 唵。悉帝護嚕嚕。悉都嚕。只利波。 吉利婆。悉達哩。布嚕哩。娑嚩訶</p>

      <p v-show="showC">禮敬諸佛，禮敬尊法，禮敬賢聖僧。<br/>歸命可速速成就大慈悲心<br/>速成就具足圓滿。</p>

      <h3>佛母準提神咒</h3>

      <p v-show="showA">namaḥ saptānām samyaksambuddha koṭīnām| tadyathā| oṃ cale cule cunde svāhā|</p>

      <p v-show="showB">南無。颯多南。三藐三菩陀。俱胝南。怛侄他。唵。折隸。主隸。準提。娑婆訶。</p>

      <p v-show="showC">皈依諸佛，隨著清淨之菩提心前進，而成就佛果。</p>

      <h3>聖無量壽決定光明王陀羅尼</h3>

      <p v-show="showA">namo bhagavate aparimita-āyur jñāna su-viniścita tejo-rājāya tathāgatāya arhate samyak-saṃbuddhāya tadyathā oṃ sarva saṃ-skāra pari-śuddha dharmate gagana samudgate svabhāva vi-śuddhe mahā-naya pari-vāre svāhā</p>

      <p v-show="showB">唵。南摩薄伽伐帝。阿巴囉密沓。阿優哩阿納。蘇必你實執沓。牒左囉宰也。怛塔哿達也。阿囉訶帝。三藥三不達也。怛你也塔。唵。薩哩巴。桑斯葛哩。叭哩述沓。達囉馬帝。哿哿捺。桑馬兀哿帝。莎巴瓦。比述帝。馬喝捺也。叭哩瓦哩。娑喝。</p>

      <p v-show="showC">禮敬如來大乘無量壽智已決定光明王如來無上正等正覺<br/>即咒曰皈命一切行蘊清淨法性虛空成就自性清淨大乘眷屬圓滿</p>

      <h3>藥師灌頂真言</h3>

      <p v-show="showA">námó bóqiéfádì, píshāshè, jùlū bìliúlí, bōlǎpó, hèlàshéyě,
  dátuōjiēduōyē, ē là hè dì, sānmiǎo sānbótuóyē, dázhítuō,
  ān, píshāshì, píshāshì, píshāshè, sānmòjiēdì, suōhē.</p>

      <p v-show="showB">南無薄伽伐帝。鞞殺社。窶嚕薜琉璃。 鉢喇婆。喝囉闍也。 怛他揭多也。阿囉喝帝。三藐三勃陀耶。怛姪他。 唵。鞞殺逝。鞞薩逝。鞞薩社。三沒揭帝。莎訶。</p>

      <p v-show="showC">南無世尊藥師薜琉璃光王如來應供正等正覺<br/>即說咒曰：唵藥藥藥效升起圓滿</p>

      <h3>觀音靈感真言</h3>

      <p v-show="showA">oṃ maṇi padme hūṃ
  mahā jñāna cittotpāda cittasya na vitarka sarvārtha prasiddhaka na purāṇa na pratyutpanna
  namo lokeśvarāya svāhā</p>

      <p v-show="showB">唵嘛呢叭咪吽
  麻曷倪牙納 積都特巴達 積特些納 微達哩葛 薩而斡而塔 卜哩悉塔葛 納補囉納 納卜哩 丟忒班納
  哪麻嚧吉說囉耶 莎訶</p>

      <p v-show="showC">唵珍寶在蓮花上吽<br/>
  大智發於心，於心無所尋，成就一切義，無古亦無今。<br/>
  禮敬世自在者</p>

      <h3>七佛滅罪真言</h3>

      <p v-show="showA">lipa lipate, guha guhate, dharalite, nirharate, vimalate, maha gate, jinekante, svaha.</p>

      <p v-show="showB">離婆離婆帝 求訶求訶帝 陀羅尼帝 尼訶囉帝 毗黎你帝 摩訶伽帝 真陵乾帝 莎婆訶</p>

      <p v-show="showC">用第一神通滅罪。用魄力破除因業滅罪。用智慧謀略滅罪。用去除紛爭與名位滅罪。用去除口業與驕氣滅罪。用大行動與大魄力滅罪。用去慾、去名利、去情緒滅罪。成就吉祥。</p>

      <h3>往生淨土神咒</h3>

      <p v-show="showA">namo amitābhāya tathāgatāya tadyathā amṛtod-bhave amṛta-siddhaṃ bhave amṛta-vikrānte amṛta-vikrānta gāmine gagana kīrta-kare svāhā
      </p>

      <p v-show="showB">
       南無阿彌多婆夜 哆他伽多夜 哆地夜他 阿彌利都婆毗 阿彌利哆 悉耽婆毗 阿彌唎哆 毗迦蘭帝 阿彌唎哆 毗迦蘭多 伽彌膩 伽伽楉 枳多 迦利 娑婆訶</p>

      <p v-show="showC">歸命無量光如來即說咒曰甘露(即長生不死之藥) 、甘露成就者、甘露撒播者、甘露神力者、遍滿虛空者、聲名宣揚者成就圓滿</p>

      <h3>善女天咒(大吉祥天女咒)</h3>

      <p v-show="showA">Namo buddhāya. Namo dharmāya. Namah samghāya.
Namah Śrī Mahādevīye.Tadyathā,
paripūraņa cāre samanta darśane.
Mahā vihāra gate samanta vidhamane.
Mahā kārya pratişţhāpane,
sarvārtha sādhane,
supratipūri ayatna dharmatā.
Mahā vikurvite, mahā maitrī
upasamhite, mahārşi susamgŗhīte
samantārtha anupālane svāhā.</p>

      <p v-show="showB">南無佛陀。南無達摩。南無僧伽。
  南無室利。摩訶提鼻耶。怛你也他。
  波利富樓那。遮利三曼陀。達舍尼。
  摩訶毗訶羅伽帝。三曼陀。毗尼伽帝。
  摩訶迦利野。波禰。波囉。波禰。
  薩利嚩慄他。三曼陀。
  修缽犂帝。富隸那。阿利那。達摩帝。
  摩訶毗鼓畢帝。摩訶彌勒帝。
  婁簸僧祗帝。醯帝簁。僧祗醯帝。
  三曼陀。阿他阿耨。婆羅尼。
      </p>

      <p v-show="showC">皈依佛  皈依法  皈依僧<br/>
禮敬功德天大吉祥天女<br/>
咒傳祝願  吉祥普及<br/>  光輝榮耀  妙德殊勝<br/>
周遍四方  究竟顯現<br/>  具足圓滿  持盈保泰<br/>
得大證悟  行住坐臥<br/>  一如伽藍  清淨有序<br/>
周遍四方  種種思惟<br/>  種種念力  無不應驗<br/>
一切種利  諸作成果<br/>  皆盡如意  圓滿無瑕<br/>
善妙依止  精確證成<br/>  如昔純淨  回歸本位<br/>
根本煩惱  止息不生<br/>  塵勞不再  結縛無踪<br/>
真如法身  湛然大寂<br/>  諸法實性  真境昭明<br/>
稱頌禮讚  證道證果<br/>  正等正覺  永不退轉<br/>
稱頌禮讚  當來尊佛<br/>  慈氏菩薩  相應契合<br/>
稱頌禮讚  彌勒淨邦<br/>  至善完美  理想國度<br/>
遍一切處  遍一切事<br/>  得善守護  圓滿功德</p>

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
          <td>光明真言</td>

          <td v-show="showA">oṃ amogha vairocana mahā-mudra maṇi-padma jvala pravarttaya hūṃ</td>

          <td v-show="showB">嗡 阿模嘎 百羅佳那 嘛哈母德喇 嘛尼 叭德嘛 及乏拉 缽喇乏爾達亞 吽</td>

          <td class="wide" v-show="showC">讚歎大日如來的無瑕遍照。把寶珠、蓮花和光芒交還給我。 </td>
        </tr>

        <tr>
          <td>如意寶輪王陀羅尼</td>

          <td v-show="showA">Namo ratna-trayāya
Nama Āryāvalokiteśvarāya bodhisattvāya mahāsattvāya mahākāruṇikāya
tadyathā
Oṃ cakravarti cintāmaṇi mahāpadme ru ru tiṣṭhat jvala ākarṣāya hūṃ phaṭ svāhā
Oṃ padma cintāmaṇi jvala hūm
Oṃ varada padme hūm</td>

          <td v-show="showB">南謨佛馱耶　南謨達摩耶　南謨僧伽耶
南謨觀自在菩薩摩訶薩　具大悲心者
怛姪他
唵斫羯羅伐底　震多末尼謨訶　鉢蹬謎　嚕嚕嚕嚕　底瑟他　篅攞痾羯利沙也　吽發莎訶
菴鉢踏摩　震多末尼　篅攞吽
菴跋剌陀　鉢亶謎吽</td>

          <td class="wide" v-show="showC">皈依三寶佛法僧，<br/>禮敬聖者觀自在，<br/>大悲心覺有情者，<br/>
真言宣說眾功德；<br/>運轉神變殊勝遇，<br/>轉輪聖王世間貴，<br/>
蓮華成就最勝尊，<br/>普願皆滿悉如意；<br/>此咒一出諸震動，<br/>
即時句召光明境，<br/>法螺遍響立變現，<br/>圓滿成就功德具。 </td>
        </tr>

        <tr>
          <td>消災吉祥神咒</td>

          <td v-show="showA">Namaḥ Samanta Buddhānām Apratihata Śāsanānāṃ. Tadyathā Oṃ Kha Kha Khāhi Khāhi Hūṃ Hūṃ Jvala Jvala Prajvala Prajvala Tiṣṭha Tiṣṭha Ṣṭri Ṣṭri Sphoṭa Sphoṭa Śāntika Śrīye Svāhā.</td>

          <td v-show="showB">南無 三滿哆 母馱喃 阿鉢囉底 賀多舍 娑曩喃　怛姪他　唵 　

佉佉　佉呬　　佉呬　　吽吽　入嚩囉　　入嚩囉　　鉢囉入嚩囉　

鉢囉入嚩囉　　底瑟姹　　瑟致哩　　瑟致哩　　

娑癹吒　　娑癹吒　　扇底迦　　室哩曳　娑嚩訶</td>
          <td class="wide" v-show="showC">皈依一切諸佛無所障礙佛法<br/>即說咒曰虛空妄想虛空妄想被破壞被破壞強大的力量光明光明開始光明開始光明加持由小而大由小而大擴展開來擴展開來<br/>消除災難得到繁榮成就圓滿吉祥</td>
        </tr>

        <tr>
          <td>
            功德寶山神咒
          </td>
          <td v-show="showA">
            Namo buddhāya Namo dharmāya Namaḥ saṅghāya Om sīte huru-ru sindhūru kṛpā-kṛpā siddhaṇi pūrṇi svāhā
          </td>
          <td v-show="showB">
            南無佛馱耶。南無達摩耶。南無僧伽耶。 唵。悉帝護嚕嚕。悉都嚕。只利波。 吉利婆。悉達哩。布嚕哩。娑嚩訶
          </td>
          <td class="wide" v-show="showC">禮敬諸佛，禮敬尊法，禮敬賢聖僧。<br/>歸命可速速成就大慈悲心<br/>速成就具足圓滿。
          </td>
        </tr>

        <tr>
          <td>
            佛母準提神咒
          </td>
          <td v-show="showA">
            namaḥ saptānām samyaksambuddha koṭīnām| tadyathā| oṃ cale cule cunde svāhā|
          </td>
          <td v-show="showB">
            南無。颯多南。三藐三菩陀。俱胝南。怛侄他。唵。折隸。主隸。準提。娑婆訶。
          </td>
          <td class="wide" v-show="showC">皈依諸佛，隨著清淨之菩提心前進，而成就佛果。
          </td>
        </tr>

        <tr>
          <td>聖無量壽決定光明王陀羅尼</td>

          <td v-show="showA">namo bhagavate aparimita-āyur jñāna su-viniścita tejo-rājāya tathāgatāya arhate samyak-saṃbuddhāya tadyathā oṃ sarva saṃ-skāra pari-śuddha dharmate gagana samudgate svabhāva vi-śuddhe mahā-naya pari-vāre svāhā</td>

          <td v-show="showB">唵。南摩薄伽伐帝。阿巴囉密沓。阿優哩阿納。蘇必你實執沓。牒左囉宰也。怛塔哿達也。阿囉訶帝。三藥三不達也。怛你也塔。唵。薩哩巴。桑斯葛哩。叭哩述沓。達囉馬帝。哿哿捺。桑馬兀哿帝。莎巴瓦。比述帝。馬喝捺也。叭哩瓦哩。娑喝。</td>

          <td v-show="showC">禮敬如來大乘無量壽智已決定光明王如來無上正等正覺<br/>即咒曰皈命一切行蘊清淨法性虛空成就自性清淨大乘眷屬圓滿</td>
        </tr>

        <tr>
          <td>藥師灌頂真言</td>

          <td v-show="showA">námó bóqiéfádì, píshāshè, jùlū bìliúlí, bōlǎpó, hèlàshéyě,
      dátuōjiēduōyē, ē là hè dì, sānmiǎo sānbótuóyē, dázhítuō,
      ān, píshāshì, píshāshì, píshāshè, sānmòjiēdì, suōhē.</td>

          <td v-show="showB">南無薄伽伐帝。鞞殺社。窶嚕薜琉璃。 鉢喇婆。喝囉闍也。 怛他揭多也。阿囉喝帝。三藐三勃陀耶。怛姪他。 唵。鞞殺逝。鞞薩逝。鞞薩社。三沒揭帝。莎訶。</td>

          <td v-show="showC">南無世尊藥師薜琉璃光王如來應供正等正覺<br/>即說咒曰：唵藥藥藥效升起圓滿</td>
        </tr>

        <tr>
          <td>觀音靈感真言</td>

          <td v-show="showA">oṃ maṇi padme hūṃ
      mahā jñāna cittotpāda cittasya na vitarka sarvārtha prasiddhaka na purāṇa na pratyutpanna
      namo lokeśvarāya svāhā</td>

          <td v-show="showB">唵嘛呢叭咪吽
      麻曷倪牙納 積都特巴達 積特些納 微達哩葛 薩而斡而塔 卜哩悉塔葛 納補囉納 納卜哩 丟忒班納
      哪麻嚧吉說囉耶 莎訶</td>

          <td v-show="showC">唵珍寶在蓮花上吽<br/>
      大智發於心，於心無所尋，成就一切義，無古亦無今。<br/>
      禮敬世自在者</td>
        </tr>

        <tr>
          <td>七佛滅罪真言</td>

          <td v-show="showA">lipa lipate, guha guhate, dharalite, nirharate, vimalate, maha gate, jinekante, svaha.</td>

          <td v-show="showB">離婆離婆帝 求訶求訶帝 陀羅尼帝 尼訶囉帝 毗黎你帝 摩訶伽帝 真陵乾帝 莎婆訶</td>

          <td v-show="showC">用第一神通滅罪。用魄力破除因業滅罪。用智慧謀略滅罪。用去除紛爭與名位滅罪。用去除口業與驕氣滅罪。用大行動與大魄力滅罪。用去慾、去名利、去情緒滅罪。成就吉祥。</td>
        </tr>

        <tr>
          <td>往生淨土神咒</td>

          <td v-show="showA">namo amitābhāya tathāgatāya tadyathā amṛtod-bhave amṛta-siddhaṃ bhave amṛta-vikrānte amṛta-vikrānta gāmine gagana kīrta-kare svāhā
          </td>

          <td v-show="showB">
           南無阿彌多婆夜 哆他伽多夜 哆地夜他 阿彌利都婆毗 阿彌利哆 悉耽婆毗 阿彌唎哆 毗迦蘭帝 阿彌唎哆 毗迦蘭多 伽彌膩 伽伽楉 枳多 迦利 娑婆訶</td>

          <td v-show="showC">歸命無量光如來即說咒曰甘露(即長生不死之藥) 、甘露成就者、甘露撒播者、甘露神力者、遍滿虛空者、聲名宣揚者成就圓滿</td>
        </tr>

        <tr>
          <td>善女天咒(大吉祥天女咒)</td>

          <td v-show="showA">Namo buddhāya. Namo dharmāya. Namah samghāya.
    Namah Śrī Mahādevīye.Tadyathā,
    paripūraņa cāre samanta darśane.
    Mahā vihāra gate samanta vidhamane.
    Mahā kārya pratişţhāpane,
    sarvārtha sādhane,
    supratipūri ayatna dharmatā.
    Mahā vikurvite, mahā maitrī
    upasamhite, mahārşi susamgŗhīte
    samantārtha anupālane svāhā.</td>

          <td v-show="showB">南無佛陀。南無達摩。南無僧伽。
      南無室利。摩訶提鼻耶。怛你也他。
      波利富樓那。遮利三曼陀。達舍尼。
      摩訶毗訶羅伽帝。三曼陀。毗尼伽帝。
      摩訶迦利野。波禰。波囉。波禰。
      薩利嚩慄他。三曼陀。
      修缽犂帝。富隸那。阿利那。達摩帝。
      摩訶毗鼓畢帝。摩訶彌勒帝。
      婁簸僧祗帝。醯帝簁。僧祗醯帝。
      三曼陀。阿他阿耨。婆羅尼。
          </td>

          <td v-show="showC">皈依佛  皈依法  皈依僧<br/>
    禮敬功德天大吉祥天女<br/>
    咒傳祝願  吉祥普及<br/>  光輝榮耀  妙德殊勝<br/>
    周遍四方  究竟顯現<br/>  具足圓滿  持盈保泰<br/>
    得大證悟  行住坐臥<br/>  一如伽藍  清淨有序<br/>
    周遍四方  種種思惟<br/>  種種念力  無不應驗<br/>
    一切種利  諸作成果<br/>  皆盡如意  圓滿無瑕<br/>
    善妙依止  精確證成<br/>  如昔純淨  回歸本位<br/>
    根本煩惱  止息不生<br/>  塵勞不再  結縛無踪<br/>
    真如法身  湛然大寂<br/>  諸法實性  真境昭明<br/>
    稱頌禮讚  證道證果<br/>  正等正覺  永不退轉<br/>
    稱頌禮讚  當來尊佛<br/>  慈氏菩薩  相應契合<br/>
    稱頌禮讚  彌勒淨邦<br/>  至善完美  理想國度<br/>
    遍一切處  遍一切事<br/>  得善守護  圓滿功德</td>
        </tr>

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
