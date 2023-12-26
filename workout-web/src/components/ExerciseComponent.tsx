import React, { FC, useState } from 'react';

interface ExerciseProps {}

const ExerciseComponent: FC<ExerciseProps> = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = () => {
    // Perform search logic using the searchTerm
    // You can make an API call or filter data from your database
    // and update the component state with the search results
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search exercises..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

    </div>
  );
};

export default ExerciseComponent;
