import { useState } from 'react';
import Container from './components/Container';
import Feedback from './components/Feedback';

const App = () => {
  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleIncrementStat = stat =>
    setStats({ ...stats, [stat]: stats[stat] + 1 });

  const countTotalFeedback = () => {
    const values = [...Object.values(stats)];
    const total = values.reduce((acc, value) => acc + value, 0);
    return total;
  };

  const countPositiveFeedbackPercentage = () =>
    Math.round(((stats.good * 100) / countTotalFeedback()) * 100) / 100;

  return (
    <Container>
      <Feedback
        stats={stats}
        onIncrementStat={handleIncrementStat}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      ></Feedback>
    </Container>
  );
};

export default App;
