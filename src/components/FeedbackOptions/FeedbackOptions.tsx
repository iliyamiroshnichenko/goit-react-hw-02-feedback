// import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

interface IFeedback {
  options: string[];
  onLeaveFeedback: React.MouseEventHandler<HTMLButtonElement>;
}

const FeedbackOptions = ({ options, onLeaveFeedback }: IFeedback) => {
  return (
    <div className={styles.container}>
      {options.map(option => (
        <button
          className={styles[option]}
          type="button"
          key={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

export default FeedbackOptions;
