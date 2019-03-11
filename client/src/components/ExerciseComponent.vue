<template>
  <div class="container">
    <h1>Exercise Records</h1>

    <div class="create-record">
      <p>Enter an exercise and reps</p>
      <!-- v-model updates data on user input events -->
      <input type="text" data-cy="exercise-name-input" id="input-exercise" v-model="exercise" placeholder="Exercise Name">
      <input type="number" data-cy="exercise-reps-input" id="input-reps" v-model="reps" placeholder="Number of Reps">
      <button data-cy="exercise-submit">Add</button>
    </div>

    <hr>
  </div>
</template>

<script>

export default {
  name: 'ExerciseComponent',
  data() {
    return {
      exercises: [],
      error: '',
      exercise: '',
      reps: ''
    }
  },
}
</script>

<!-- scoped style = limited to component -->
<style scoped>

div.container {
  max-width: 800px;
  margin: 0 auto;
}

div.exercise {
  background-color: #d5e1df;
  padding: 10px;
  margin-bottom: 15px;
}

p.exercise {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}

p.reps {

}

p.createdAt {
  font-size: 10px;
  font-weight: 500;
  position: absolute;
}

</style>
