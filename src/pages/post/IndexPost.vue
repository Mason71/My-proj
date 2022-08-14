<template>
  <div class="all">
    <div class="cp">
      <router-link class="btn btn-info" to="/create"
        >Create your Post</router-link
      >
    </div>
    <div class="container">
      <div class="row g-3">
        <div class="col-md-3" v-for="post in posts" :key="post.id">
          <div class="card">
            <router-link
              class="card-title"
              :to="{ name: 'postId', params: { id: post.id } }"
            >
              {{ post.title }}
            </router-link>
            <div class="postBody">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">{{ post.body }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  setup() {
    const posts = ref([]);

    function getposts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          posts.value = response.data;
          // or this =>> posts.value.push(...response.data);
          console.log(posts);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getposts();
    return { posts };
  },
};
</script>

<style scoped>
.cp {
  margin: 30px 0 30px 115px;
}
.all {
  background-color: azure;
}
.card-title {
  border-radius: 5px;
  font-weight: 700;
  padding: 7px;
  text-align: center;
  margin: 30px;
  background-color: rgb(51, 95, 240);
  font-optical-sizing: 100px;
  color: white !important;
}

.list-group-item {
  background-color: unset !important;
}

.card {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 30px;
  border-radius: 60px;
  background-color: rgb(238, 238, 238);
}
</style>
