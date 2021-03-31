import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul>
    <li>
      <p>Good: {good}</p>
    </li>
    <li>
      <p>Neutral: {neutral}</p>
    </li>
    <li>
      <p>Bad: {bad}</p>
    </li>
    <li>
      <p>Total: {total}</p>
    </li>
    <li>
      <p>Positive feedback: {positivePercentage || 0}%</p>
    </li>
  </ul>
);

Statistics.defaultProps = {
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
