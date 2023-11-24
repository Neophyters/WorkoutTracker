import React, { FC } from 'react';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
   return (
   <div>
        <h1 style={{ textAlign: 'center' }}>Hello this is the Home Page!!</h1>
   </div>
   );
};

export default HomePage;