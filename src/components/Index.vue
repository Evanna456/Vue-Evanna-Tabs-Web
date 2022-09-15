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
          alt="logo" />
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
              aria-selected="true">
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
              aria-selected="false">
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
              aria-selected="false">
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
            align="left">
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
            align="left">
            <div>
              <p>
                <strong><i class="bi bi-person-circle"></i> Name:</strong>
                Evanna Tabs
              </p>
            </div>
            <div>
              <p>
                <strong><i class="bi bi-mailbox2"></i> Email:</strong>
                <a href="mailto:evannatabs@gmail.com"> evannatabs@gmail.com</a>
              </p>
            </div>
            <div>
              <p>
                <strong><i class="bi bi-flag-fill"></i> Nationality:</strong>
                Filipino
              </p>
            </div>
            <div>
              <p>
                <strong><i class="bi bi-flag"></i> Country:</strong>
                Philippines
              </p>
            </div>
            <div>
              <p>
                <strong><i class="bi bi-globe2"></i> Languages:</strong>
                English, Filipino, Bisaya
              </p>
            </div>
            <div>
              <p>
                <strong
                  ><i class="bi bi-journal-bookmark-fill"></i>
                  Education:</strong
                >
                BS-Information Technology
              </p>
            </div>
            <div>
              <p>
                <strong><i class="bi bi-journal-richtext"></i> Track:</strong>
                Business Analytics
              </p>
            </div>
            <div>
              <p>
                <strong
                  ><i class="bi bi-journal-bookmark"></i> Vocational:</strong
                >
                Computer Technician
              </p>
            </div>
            <div>
              <p>
                <strong
                  ><i class="bi bi-bookmark-check"></i> Certifications:</strong
                >
                CSC Professional, IBM Data Analyst
              </p>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="tech-tab-pane"
            role="tabpanel"
            aria-labelledby="tech-tab"
            tabindex="0"
            align="left">
            <div align="center">
              <strong align="center"
                ><i class="bi bi-star-fill"></i>Confidence Level<i
                  class="bi bi-star-fill"></i
              ></strong>
            </div>
            <hr />
            <strong>Programming Languages</strong>
            <p>
              C# <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star"></i
              ><i class="bi bi-star"></i>
            </p>
            <p>
              PHP <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star"></i
              ><i class="bi bi-star"></i>
            </p>
            <p>
              JavaScript <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              Python <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              C++ <i class="bi bi-star-fill"></i><i class="bi bi-star"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i
              ><i class="bi bi-star"></i>
            </p>
            <hr />
            <strong>Web Development</strong>
            <p>
              Laravel <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              ExpressJS/EJS <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              TypeScript <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              JQuery <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              VueJS <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              BootStrap <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <hr />
            <strong>Desktop/Mobile Development</strong>
            <p>
              .NET MAUI <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              .NET WPF <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              Material Design <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <hr />
            <strong>Game Development</strong>
            <p>
              Godot Mono (OpenGL 2D) <i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <hr />
            <strong>Embedded Development</strong>
            <p>
              Arduino Uno <i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <hr />
            <strong>Data Analytics and Python Libraries</strong>
            <p>
              Excel <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              IPython/Jupyter Notebook <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              IBM Cognos Analytics <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              Pandas/Numpy <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              Mathplotlib/Plotly <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              Scipy/Scikit-Learn <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <hr />
            <strong>Markups</strong>
            <p>
              HTML/CSS <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              XAML <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i
              ><i class="bi bi-star"></i>
            </p>
            <hr />
            <strong>Database</strong>
            <p>
              MariaDB <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              SQlite <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <hr />
            <strong>Web Server</strong>
            <p>
              Digital Ocean <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              Apache 2 <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              NodeJS/HTTP <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <hr />
            <strong>Operating System</strong>
            <p>
              Windows <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              Ubuntu Server <i class="bi bi-star-fill"></i
              ><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i>
            </p>
            <p>
              Kali <i class="bi bi-star-half"></i><i class="bi bi-star"></i
              ><i class="bi bi-star"></i><i class="bi bi-star"></i
              ><i class="bi bi-star"></i>
            </p>
            <hr />
            <strong>Dev Tools</strong>
            <p>
              Visual Studio, VS Code, Notepad++, Git, WSL 2, PHPmyAdmin, DB
              Browser, Draw.IO
            </p>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<style scoped>
  #profile {
    margin: 20px 0px 20px 0px;
  }
  #profile-img {
    border-radius: 50%;
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
