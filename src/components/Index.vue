<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content }}</template>
  </metainfo>
  <div class="container text-center">
    <div class="row">
      <div class="col-lg-12" id="profile">
        <img
          id="profile-img"
          src="/images/Profile.jpg"
          width="300"
          height="300"
          alt="logo"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-10 offset-lg-1" align="center">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="about-tab"
              data-bs-toggle="tab"
              data-bs-target="#about-tab-pane"
              type="button"
              role="tab"
              aria-controls="about-tab-pane"
              aria-selected="true"
            >
              About
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="details-tab"
              data-bs-toggle="tab"
              data-bs-target="#details-tab-pane"
              type="button"
              role="tab"
              aria-controls="details-tab-pane"
              aria-selected="false"
            >
              Details
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="tech-tab"
              data-bs-toggle="tab"
              data-bs-target="#tech-tab-pane"
              type="button"
              role="tab"
              aria-controls="tech-tab-pane"
              aria-selected="false"
            >
              Tech Stack
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="about-tab-pane"
            role="tabpanel"
            aria-labelledby="about-tab"
            tabindex="0"
            align="left"
          >
            <p>Hi, I'm Evanna (not really).</p>
            <p>
              My long time friends would say that I'm the type that would
              seriously stick to something for a long time. In games, I usually
              main for a particular character or a nation and would never switch
              to the other regardless of certain advantages. So don't be
              surprised when I'm rechoosing my characters consecutive times in
              the game.
            </p>
          </div>
          <div
            class="tab-pane fade"
            id="details-tab-pane"
            role="tabpanel"
            aria-labelledby="details-tab"
            tabindex="0"
          >
            aaaaaaaaaaaaaaa
          </div>
          <div
            class="tab-pane fade"
            id="tech-tab-pane"
            role="tabpanel"
            aria-labelledby="tech-tab"
            tabindex="0"
          >
            bbbbbbbbbbbbbbbbb
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #profile {
    margin: 20px 0px 20px 0px;
  }
  #profile-img {
    border-radius: 50%;
  }
  .tab-content {
    padding: 10px;
    border-left: 0.2px solid #d9d9d9;
    border-right: 0.2px solid #d9d9d9;
    border-bottom: 0.2px solid #d9d9d9;
  }
</style>

<script>
  import { useMeta } from "vue-meta";

  export default {
    name: "Index",
    components: {},
    setup() {
      useMeta({
        title: "Evanna Tabs",
        description: "Evanna Tabs personal page.",
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
