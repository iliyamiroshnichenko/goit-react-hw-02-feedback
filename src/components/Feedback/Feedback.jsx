import PropTypes from 'prop-types';
// import styles from './Feedback.module.css';

const Feedback = ({
  stats: { good, neutral, bad },
  onIncrementStat,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {/* <h1>Please leave feedback</h1> */}
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
      {/* <h2>Statistics</h2> */}
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage || 0}%</p>
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
