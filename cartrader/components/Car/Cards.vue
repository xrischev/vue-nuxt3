<script setup>

const favorite = useLocalStorage("favorite",{})
const props = defineProps({
  cars:Array
})

const handleFavorite = (id) =>{

  debugger

  if(id in favorite.value){
    delete favorite.value[id]
  }else{
    favorite.value = {
      ...favorite.value,
      [id] : true
    }
  }
}

</script>

<template>
  <div class="w-full">


     <CarCard v-for="car in cars" :key="car.id" :car="car" @favor="handleFavorite" :favored="car.id in favorite" />


<!--    <Card/>-->
  </div>
</template>