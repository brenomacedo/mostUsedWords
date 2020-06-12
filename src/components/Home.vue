<template>
  <v-container fluid>
      <v-form>
          <v-file-input multiple chips v-model="files" label="Selecione as legendas"
          prepend-icon="mdi-message-text" outlined append-outer-icon="mdi-send"
          @click:append-outer="processSubtitles"></v-file-input>
      </v-form>
      <div class='pills'>
          <Pill v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount" />
      </div>
  </v-container>
</template>

<script>
import { ipcRenderer } from 'electron'
import Pill from './Pill'
export default {
    components: { Pill },
    data: function() {
        return {
            files: [],
            groupedWords: [
                { name: 'i', amount: 1238 },
                { name: 'you', amount: 900 },
                { name: 'he', amount: 843 },
                { name: 'go', amount: 620 },
                { name: 'always', amount: 611 },
                { name: 'nothing', amount: 561 },
                { name: 'feeling', amount: 128 },
            ]
        }
    },
    methods: {
        processSubtitles() {
            const paths = this.files.map(f => f.path)
            ipcRenderer.send('process-subtitle', this.files)
            ipcRenderer.on('process-subtitle', (event, resp) => {
                this.groupedWords = resp
            })
        }
    }
}
</script>

<style>
.pills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>