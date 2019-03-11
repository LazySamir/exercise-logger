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
    <p class="error" v-if="error">{{ error }}</p>
    <div class="exercise-container">
      <!-- loop through exercises - needs a key for each element but its unused-->
      <div class="exercise"
        v-for="(exercise) in exercises" :key="exercise._id"

      >
        <p class="createdAt">{{ `${exercise.createdAt.getDate()}/${exercise.createdAt.getMonth()}/${exercise.createdAt.getFullYear()}` }}</p>
        <p class="exercise">{{ exercise.exercise }}</p>
        <p class="reps>"> {{ exercise.reps }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ExerciseService from '../ExerciseService';

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
  // when component is loaded
  async created() {
    try {
      this.exercises = await ExerciseService.getExercises();
    } catch(err) {
      this.error = err.message;
    }
  },
  methods: {
    async createExercise() {
      await ExerciseService.insertExercise(this.exercise, this.reps);
      // reset text boxes
      this.exercise = '',
      this.reps = '',
      this.exercises = await ExerciseService.getExercises()
    },
    async deleteExercise(id) {
      await ExerciseService.deleteExercise(id);
      this.exercises = await ExerciseService.getExercises()
    }
  }
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
