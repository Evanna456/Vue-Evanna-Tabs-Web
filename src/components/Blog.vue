<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content }}</template>
    <template v-slot:description="{ content }">{{ content }}</template>
  </metainfo>
  <div class="container center">
    <div class="row">
      <div class="col-lg-12" align="center">
        <h2>Blogs</h2>
      </div>
    </div>
    <br />
  </div>
</template>

<style scoped></style>

<script>
  import { useMeta } from "vue-meta";

  export default {
    name: "Blog",
    components: {},
    setup() {
      useMeta({
        title: "Evanna Tabs | Blog",
        description: "Evanna Tabs Blog.",
      });
    },
    data: function () {
      return {};
    },
    mounted() {
      window.scrollTo(0, 0);
    },
    updated() {},
    computed: {},
    methods: {},
  };
</script>
