import { createRouter, createWebHistory } from "vue-router";
import TemplatePost from "../src/pages/post/TemplatePost.vue";
import IndexPost from "../src/pages/post/IndexPost.vue";
import CreatePost from "../src/pages/post/CreatePost.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./pages/HomeMain.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("./pages/User/UserSample.vue"),
  },
  {
    path: "/posts",
    name: "indexPost",
    component: IndexPost
  },
      {
        path: "/create",
        name: "createPost",
        component : CreatePost
      }
    
  ,
  {
    path: "/post/:id",
    name: "postId",
    component: TemplatePost,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
