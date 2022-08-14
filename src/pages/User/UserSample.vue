<template>
  <div class="bg">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-4" v-for="user in Users" :key="user.id">
          <CardUser :user="user" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import CardUser from "@/pages/User/CardUser.vue";

export default {
  components: { CardUser },

  setup() {
    const Users = ref([]);

    function getUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          Users.value = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    getUsers();
    return { Users };
  },
};
</script>

<style scoped>
.bg {
  background-image: url(@/pages/userback.jpg);
  background-size: contain;
}
</style>
