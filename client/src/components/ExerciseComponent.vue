<template>
  <div class="container">
    <h1>Exercise Records</h1>

    <div class="create-record">
      <p>Enter an exercise and reps</p>
      <input type="text" data-cy="exercise-name-input" id="input-name" v-model="name" placeholder="Exercise Name">
      <input type="number" data-cy="exercise-reps-input" id="input-reps" v-model="reps" placeholder="Number of Reps">
      <button data-cy="exercise-submit" v-on:click="createExercise">Add</button>
    </div>

    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="exercise-container">
      <div class="exercise"
        v-for="(exercise) in exercises" :key="exercise._id"
        v-on:dblclick="deleteExercise(exercise._id)"
      >
        <p class="createdAt">{{ `${exercise.createdAt.getDate()}/${exercise.createdAt.getMonth()}/${exercise.createdAt.getFullYear()}` }}</p>
        <p class="name">{{ exercise.name }}</p>
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
      name: '',
      reps: ''
    }
  },
  async created() {
    try {
      this.exercises = await ExerciseService.getExercises();
    } catch(err) {
      this.error = err.message;
    }
  },
  methods: {
    async createExercise() {
      console.log("creating exercise")
      await ExerciseService.insertExercise(this.name, this.reps);
      this.name = '',
      this.reps = '',
      this.exercises = await ExerciseService.getExercises()
    },
    async deleteExercise(id) {
      console.log("deleting exercise")
      await ExerciseService.deleteExercise(id);
      this.exercises = await ExerciseService.getExercises()
    }
  }
}
</script>

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

p.name {
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
