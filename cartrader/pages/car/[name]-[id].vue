<script setup>
const route = useRoute()

import useFetchCar from "../../composables/useFetchCar"


const {data:car} = await useFetchCar(route.params.id)

useHead({
  title:route.params.name
})




definePageMeta({
  layout:"custom"
})

// const car = computed(()=>{
//   return cars.find((c)=>{
//     return c.id === parseInt(route.params.id)
//   })
// })


if(!car.value){
  throw createError({
    statusCode:404,
    message:`Car with id of ${route.params.id}  does not exist`
  })
}

</script>

<template>

  <div v-if="car">
      <CarDetailHero :car="car"/>
      <CarDetailAttributes :features="car.features"/>
      <CarDetailDescription :description="car.description"/>
      <CarDetailContact/>

    <!-- CAR DETAIL PAGE   -->

  </div>
</template>