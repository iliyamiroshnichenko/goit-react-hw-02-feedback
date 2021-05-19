// import PropTypes from 'prop-types';
import styles from './Notification.module.css';

interface INotification {
  message?: string;
}

const Notification = ({ message }: INotification) => (
  <p className={styles.basics}>{message}</p>
);

// Notification.propTypes = {
//   message: PropTypes.string.isRequired,
// };

export default Notification;
