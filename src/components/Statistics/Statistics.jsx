import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={styles.basics}>
    <li>
      Good: <span>{good}</span>
    </li>
    <li>
      Neutral: <span>{neutral}</span>
    </li>
    <li>
      Bad: <span>{bad}</span>
    </li>
    <li>
      Total: <span>{total}</span>
    </li>
    <li>
      Positive feedback: <span>{positivePercentage || 0}%</span>
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
