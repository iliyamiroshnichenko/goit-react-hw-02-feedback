import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

const Feedback = ({ stats, onIncrementStat, total, positivePercentage }) => {
  //   const values = [...Object.values(stats)];
  //   const total = values.reduce((acc, value) => acc + value, 0);
  //   const positivePercentage =
  //     Math.round(((stats.good * 100) / total) * 100) / 100;
  return (
    <>
      <h1>Please leave feedback</h1>
      <ul>
        <li>
          <button type="button" onClick={() => onIncrementStat('good')}>
            Good
          </button>
        </li>
        <li>
          <button type="button " onClick={() => onIncrementStat('neutral')}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onIncrementStat('bad')}>
            Bad
          </button>
        </li>
      </ul>
      <h2>Statistics</h2>
      <p>Good: {stats.good}</p>
      <p>Neutral: {stats.neutral}</p>
      <p>Bad: {stats.bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage || 0}</p>
    </>
  );
};

Feedback.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};

export default Feedback;

// const handleIncrementStat = stat =>
//   setStats({ ...stats, [stat]: stats[stat] + 1 });
