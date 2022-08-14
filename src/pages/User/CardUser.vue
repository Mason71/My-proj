<template>
  <div class="bk">
    <div class="card" style="width: 18rem">
      <div class="card-header">
        {{ user.name }}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">UserName => {{ user.username }}</li>
        <li class="list-group-item">email ({{ user.email }})</li>
        <li class="list-group-item">Phone :{{ user.phone }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style scoped>
.bk {
  opacity: 0.85;
}
.card-header {
  background-color: rgb(60, 172, 88);
}
</style>
