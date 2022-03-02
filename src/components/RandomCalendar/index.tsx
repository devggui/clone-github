import React from 'react';
import HeatMap from 'react-calendar-heatmap';
import { subYears } from 'date-fns';

import { Container } from './styles';

const RandomCalendar: React.FC = () => {
  const startDate = subYears(new Date(), 1)
  const endDate = new Date();

  return (
    <Container>
      <div className="wrapper">
        <HeatMap 
          startDate={}
          endDate={}
          values={[]}
        />
      </div>
      
      <span>Random calendar (do not represent actual data)</span>
    </Container>
  );
}

export default RandomCalendar;