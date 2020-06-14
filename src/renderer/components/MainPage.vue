<template lang="pug">
#app-container
  .columns.is-mobile.is-gapless.is-fullheight
    #side-panel.column.is-2
      .container
        h1 Side menu
    #notes.column.is-3
      .row(v-for="n in notes")
        h1 {{ n.title }}
        p {{ n.body }}
    #editor.column.is-7
      //- button.button(v-on:click="encryptData()") Encrypt
      //- button.button(v-on:click="decryptData()") Decrypt
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
        notes: [
          {
            title: 'Latest book draft',
            body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            created: '2020-02-02 15:30',
          },
          {
            title: 'New deal',
            body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            created: '2020-02-02 15:30',
          },
          {
            title: 'Credentials',
            body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            created: '2020-02-02 15:30',
          },
          {
            title: 'Latest book draft',
            body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            created: '2020-02-02 15:30',
          },
          {
            title: 'New deal',
            body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            created: '2020-02-02 15:30',
          },
          {
            title: 'Credentials',
            body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            created: '2020-02-02 15:30',
          },
          {
            title: 'Latest book draft',
            body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            created: '2020-02-02 15:30',
          },
          {
            title: 'New deal',
            body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            created: '2020-02-02 15:30',
          },
          {
            title: 'Credentials',
            body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            created: '2020-02-02 15:30',
          },
          {
            title: 'Latest book draft',
            body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            created: '2020-02-02 15:30',
          },
          {
            title: 'New deal',
            body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            created: '2020-02-02 15:30',
          },
          {
            title: 'Credentials',
            body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            created: '2020-02-02 15:30',
          },
          {
            title: 'Latest book draft',
            body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            created: '2020-02-02 15:30',
          },
          {
            title: 'New deal',
            body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            created: '2020-02-02 15:30',
          },
          {
            title: 'Credentials',
            body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            created: '2020-02-02 15:30',
          },
          {
            title: 'Latest book draft',
            body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            created: '2020-02-02 15:30',
          },
          {
            title: 'New deal',
            body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            created: '2020-02-02 15:30',
          },
          {
            title: 'Credentials',
            body: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
            created: '2020-02-02 15:30',
          },
        ],
      };
    },
  };
</script>

<style lang="scss">

$nav-height: 80px;

#nav-bar {
  height: $nav-height;
}

#app-container {
  height: 100vh;
}

#side-panel {
  border-right: 1px #eee solid;
  height: 100%;
}

#notes {
  border-right: 1px #eee solid;
  height: 100%;
  overflow-x: scroll;

  .row {
    padding: 12px 0px;
    border-bottom: 1px solid #eee;
  }

  .row.active {
    background: whitesmoke;
  }

}

#editor {
  padding-bottom: 0px;
  height: 100%;
  overflow-y: hidden;
}

.is-fullheight {
  height: 100%;
}
</style>
