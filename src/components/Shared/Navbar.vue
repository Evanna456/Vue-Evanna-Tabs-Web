<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">Evanna Tabs</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item" align="center">
                  <a class="nav-link"><router-link to="/">Home</router-link></a>
                </li>
                <li class="nav-item" align="center">
                  <a class="nav-link"
                    ><router-link to="/blog">Blog</router-link></a
                  >
                </li>
                <li class="nav-item" align="center">
                  <a class="nav-link"
                    ><router-link to="/projects">Projects</router-link></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
  nav {
    margin: 10px 0px 10px 0px;
    padding: 10px;
    border-radius: 10px;
  }
</style>

<script>
  export default {
    name: "Navbar",
    components: {},
    data: function () {
      return {};
    },
    mounted() {},
    updated() {},
    computed: {},
    methods: {},
  };
</script>
