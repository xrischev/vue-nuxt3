<script setup>

const error = useError()

const handleError = () =>{
  clearError({
    redirect:"/"
  })
}

</script>

<template>
  <div>
   Error

    <h1>
      {{error.statusCode}}
    </h1>
    <p>
      {{error.message}}
    </p>

    <button @click="handleError">
      Go back
    </button>
  </div>
</template>