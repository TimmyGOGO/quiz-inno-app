import React, { ReactNode } from 'react';
import styles from './QuizScreen.module.scss';

interface Props {
  className?: string;
}

const QuizScreen: React.FC<Props> = () => {
  return (
    <div className={styles.bg}>
      <button className='btn'>Click</button>
    </div>
);0
};

export default QuizScreen;