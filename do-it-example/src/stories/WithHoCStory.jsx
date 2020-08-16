import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../04/Button';
import Text from '../04/Text';
import withLoading from '../05/withLoading';
import withHoc from '../05/withHoC';

const ButtonWithHoc = withLoading(<Button disabled>로딩 중...</Button>)(Button);
const TextWithHoc = withLoading('로딩 중')(Text);

storiesOf('withLoading', module)
  .addWithJSX('기본 설정', () => (
    <div>
      <ButtonWithHoc>안녕하세요</ButtonWithHoc>
      <TextWithHoc>안녕하세요</TextWithHoc>
    </div>
  ))
  .addWithJSX('isLoading 예제', () => (
    <div>
      <ButtonWithHoc isLoading>안녕하세요</ButtonWithHoc>
      <TextWithHoc isLoading>안녕하세요</TextWithHoc>
    </div>
  ));
