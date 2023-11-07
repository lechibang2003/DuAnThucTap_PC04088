<template>
  <Navbar />
  <ProductDetail />
</template>
<script>

import Navbar from '~/components/Navbar.vue'
import ProductDetail from '~/components/ProductDetail.vue'

// const routes = [
//   {
//     path: '/',
//     component: Navbar,
//   },
//   {
//     path: '/product-detail',
//     component: ProductDetail,
//   },

// ];

// const router = new VueRouter({
//   routes,
// });

// export default router;


export default {
  components: {
    Navbar,
    ProductDetail
  }
}

</script>