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
      Total: <span>{total()}</span>
    </li>
    <li>
      Positive feedback: <span>{positivePercentage()}%</span>
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
