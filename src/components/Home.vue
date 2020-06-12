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
import Pill from './Pill'
export default {
    components: { Pill },
    data: function() {
        return {
            files: [],
            groupedWords: [
                { name: 'you', amount: 900 },
                { name: 'he', amount: 568 },
                { name: 'i', amount: 1238 },
            ]
        }
    },
    methods: {
        processSubtitles() {
            console.log(this.files)
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