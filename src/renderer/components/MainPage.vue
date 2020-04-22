<template lang="pug">
#app-container
  .columns.is-mobile.is-gapless.is-fullheight
    #side-panel.column.is-2
      .container
        h1 Side menu
    #notes.column.is-3
      h1 Content selector
    #editor.column
      note-editor(v-model="content")
      pre
        code(v-text="content")
</template>


<script>
  import NoteEditor from './NoteEditor';
  export default {
    name: 'main-page',
    components: { NoteEditor },
    methods: {
    },
    data() {
      return {
        content: '',
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
