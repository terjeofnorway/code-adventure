import styles from './BoardPanel.module.css';
import classNames from 'classnames';

interface BoardPanelProps {
  position: 'top' | 'right' | 'bottom' | 'left';
}

export const BoardPanel = ({ position }: BoardPanelProps) => {
  return (
    <div className={classNames(styles.panel, styles[position])}>
      <svg
        width="34"
        height="883"
        viewBox="0 0 34 883"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="28" width="6" height="883" fill="#462911" />
        <rect x="12" width="16" height="883" fill="#9A4D34" />
        <rect x="6.00002" width="6" height="883" fill="white" />
        <rect x="1.52588e-05" width="6" height="883" fill="#462911" />
      </svg>
    </div>
  );
};
