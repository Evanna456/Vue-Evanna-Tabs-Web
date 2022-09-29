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
    <div class="row">
      <div class="col-lg-10 offset-lg-1" align="center">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Updated On</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="blog in blogs" v-bind:key="blog.id">
              <td>{{ blog.blogTitle }}</td>
              <td>{{ blog.blogCategory }}</td>
              <td>{{ blog.blogUpdated }}</td>
              <td>
                <a id="abtn" v-bind:href="blog.blogView" target="_blank">
                  <button type="button" class="btn btn-secondary">Read</button>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
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
      return {
        blogs: [
          {
            blogTitle: "Samsung AO2s",
            blogCategory: "Technology",
            blogUpdated: "9/29/2022" + this.updatedDays("9/29/2022"),
            blogView: "/blog/samsung-ao2s",
          },
          {
            blogTitle: "Philippines Review",
            blogCategory: "News",
            blogUpdated: "9/27/2022" + this.updatedDays("9/27/2022"),
            blogView: "/blog/philippines-review",
          },
          {
            blogTitle: "Essential Windows Apps",
            blogCategory: "Technology",
            blogUpdated: "8/29/2022" + this.updatedDays("8/29/2022"),
            blogView: "/blog/essential-windows-apps",
          },
        ],
      };
    },
    mounted() {
      window.scrollTo(0, 0);
    },
    updated() {},
    computed: {},
    methods: {
      updatedDays: function (updated_on) {
        var date_now = new Date();
        var month = date_now.getMonth() + 1;
        var day = date_now.getDate();
        var year = date_now.getFullYear();
        var full_date = new Date(month + "/" + day + "/" + year);
        var one_day = 60 * 60 * 24 * 1000;

        var modified_date = new Date(updated_on);
        var date_ms = Math.abs(modified_date - full_date);
        var days = date_ms / one_day;

        if (days < 30) {
          return " (" + days + " day/s ago" + ")";
        } else if (days >= 30 && days < 365) {
          var months = days / 30;
          return " (" + Math.trunc(months) + " month/s ago" + ")";
        } else if (days >= 365) {
          var years = days / 365;
          return " (" + Math.trunc(years) + " year/s ago" + ")";
        } else {
          return " (" + days + " day/s ago" + ")";
        }
      },
    },
  };
</script>
