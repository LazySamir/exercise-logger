import axios from "axios";

const url = 'http://localhost:5000/exercises/'

class ExerciseService {
  static insertExercise(name, reps) {
    return axios.post(url, {
      name,
      reps
    });
  }

  static deleteExercise(id) {
    return axios.delete(`${url}${id}`);
  }

  static getExercises() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(exercise => ({
            ...exercise,
            createdAt: new Date(exercise.createdAt)
          }))
        )
      } catch(err) {
        reject(err);
      }
    })
  }
}

export default ExerciseService
