<template>
  <div>
    <NavBar/>
    <slot/>
  </div>
</template>
<script>
import NavBar from "~/components/NavBar";
export default {
  components: {NavBar}
}
</script>