<template lang="pug">
#app-container
  .columns.is-mobile.is-gapless.is-fullheight
    #side-panel.column.is-2
      .container
        h1 Side menu
    #notes.column.is-3
      h1 Content selector
    #editor.column
      .container
        button.button(v-on:click="encryptData()") Encrypt
        button.button(v-on:click="decryptData()") Decrypt
        note-editor(v-model="content")
        pre
          code(v-text="content")
</template>


<script>
  import CryptoMixin from './../mixins/cryptoMixin';
  import NoteEditor from './NoteEditor';
  export default {
    name: 'main-page',
    components: { NoteEditor },
    mixins: [CryptoMixin],
    methods: {
      encryptData() {
        this.encryptedData = this.encrypt(this.content);
        this.content = this.encryptedData.toString();
      },
      decryptData() {
        this.content = this.decrypt(this.encryptedData).toString();
      },
    },
    data() {
      return {
        content: '',
        encryptedData: '',
      };
    },
  };
</script>

<style lang="scss">

$nav-height: 80px;

.wrapper {
  height: 100vh;
  margin-bottom: 0px;
}

#nav-bar {
  height: $nav-height;
}

#app-container {
  height: 100vh;
}

#side-panel {
  border-right: 1px #eee solid;
}

#notes {
  border-right: 1px #eee solid;
}

#editor {
  padding-bottom: 0px;
}

.is-fullheight {
  height: 80%;
}
</style>
