<template>
  <div id="app">
    <ExerciseComponent />
  </div>
</template>

<script>
import ExerciseComponent from './components/ExerciseComponent.vue';

export default {
  name: 'app',
  components: {
    ExerciseComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
