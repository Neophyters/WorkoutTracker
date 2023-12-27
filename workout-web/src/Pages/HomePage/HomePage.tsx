import React, { FC } from "react";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Hello this is the Home Page!!</h1>
      <ul>
         <li>Allow the User to search for a workout.</li>
         <li>Allow to get inspired and follow workout plans.</li>
         <li>Can have them view push, pull, legs, full body, calisthenic, athletic workouts, etc.</li>
         <li>In later features have a leaderboard for all users to compete and get motivated to be better.</li>
      </ul>
    </div>
  );
};

export default HomePage;
