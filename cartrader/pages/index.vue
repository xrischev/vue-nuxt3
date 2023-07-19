<script setup>
useHead({
  title:"Cartrader"
})
</script>

<template>

  <div>
    <CarHero/>
  </div>

</template>
<script>
import NavBar from "../components/NavBar";
import CarHero from "../components/Car/Hero";
export default {
  components: {CarHero, NavBar}
}
</script>