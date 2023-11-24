import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import WorkoutPlanPage from "../Pages/WorkoutPlanPage/WorkoutPlanPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import LoginPage from "../Pages/LoginPage/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <HomePage />},
            {path: "workoutPlan", element: <WorkoutPlanPage />},
            {path: "profile", element: <ProfilePage />},
            {path: "login", element: <LoginPage />}
        ]
    }
])