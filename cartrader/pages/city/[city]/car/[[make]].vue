<script setup>
import useFetchCars from "../../../../composables/useFetchCars";

const route = useRoute();
const {data:cars,refresh} = await useFetchCars(route.params.city, {
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.params.make
})

watch(() => route.query, () => {
  window.location.reload(true)
});

</script>

<template>
  <div>
    <Cards v-if="cars.length" :cars="cars"/>
    <h1 v-else class="text-red-600">
      No cars Found With Filters
    </h1>
  </div>

</template>

<script>
import Cards from "../../../../components/Car/Cards";

export default {
  components: {Cards}
}
</script>