import axios from "axios";

const url = 'http://localhost:5000/exercises/'

class ExerciseService {
  // static = do not need to instantiate to invoke .getExercises()

  // Create exercises
  static insertExercise(name, reps) {
    return axios.post(url, {
      name,
      reps
    });
  }

  static getExercises() {
    // call resolve if works, rej if error
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          // returns array of exercise objects
          data.map(exercise => ({
            ...exercise,
            createdAt: new Date(exercise.createdAt)
          }))
        )
      } catch(err) {
        // return error if unable to resolve
        reject(err);
      }
    })
  }
}

export default ExerciseService
