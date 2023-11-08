<template>
  <ProductDetail />
  <!-- <Navbar /> -->
</template>
<script>

// import Vue from 'vue'
// import VueRouter from 'vue-router'
import ProductDetail from '~/components/ProductDetail.vue'
import Navbar from '~/components/Navbar.vue'


// Vue.ProductDetail(VueRouter)
// Vue.Navbar(VueRouter)


// const routes = [
//   {
//     path: '/Productdetail',
//     component: ProductDetail,
//   },
//   {
//     path: '/Navbar',
//     component: Navbar,
//   },


// ];

// const router = new VueRouter({
//   routes,
// });

// export default router;


export default {
  // components: {
  //   path: '/Navbar',
  //   Navbar,
  // },
  
  components: {
    path: '/Productdetail',
    ProductDetail,
  }
}

</script>