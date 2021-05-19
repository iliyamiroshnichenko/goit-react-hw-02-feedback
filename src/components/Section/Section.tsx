// import PropTypes from 'prop-types';
import styles from './Section.module.css';

interface ISection {
  title?: string;
  children?: React.ReactNode;
}

const Section = ({ title, children }: ISection) => (
  <div className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </div>
);

Section.defaultProps = {
  title: '',
  children: null,
};

// Section.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.node,
// };

export default Section;
