import React, { useEffect } from "react";
// Context hook
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
// Components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  useEffect(() => {
    const getWorkout = async () => {
      fetch("api/workouts")
        .then((response) => response.json())
        .then((data) => dispatch({ type: "SET_WORKOUTS", payload: data }));
    };

    getWorkout();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
        <WorkoutForm />
      </div>
    </div>
  );
};

export default Home;
