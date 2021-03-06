import React from 'react';
import SubmitButton from './SubmitButton';
import { withKnobs, text } from '@storybook/addon-knobs';

function clicked() {
  // alert('i am clicked');
  // eslint doesn't accept onclick so it is commented for production
}
export default { title: 'Submit Button Component', decorators: [withKnobs] };

export const Submitbutton = () => {
  const buttonTitle = text('title', 'Trial button');
  return <SubmitButton buttonTitle={buttonTitle} onClick={clicked} />;
};
