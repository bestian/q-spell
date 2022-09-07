import { boot } from 'quasar/wrappers'
import Plugin from '@quasar/quasar-ui-qmediaplayer'
import '@quasar/quasar-ui-qmediaplayer/dist/index.css'

export default boot(({ app }) => {
  app.use(Plugin)
})
