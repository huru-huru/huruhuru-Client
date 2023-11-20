import { FRUITS } from '@/utils/constant';
import React from 'react'

type ProgressBarPropsType = {
	fruit: FRUITS;
	progress: number;
};

const ProgressBar = (props:ProgressBarPropsType) => {
  return (
    <div>ProgressBar</div>
  )
}

export default ProgressBar