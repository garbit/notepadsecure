<template lang="pug">
.container
  h1 Main Page
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
</style>
