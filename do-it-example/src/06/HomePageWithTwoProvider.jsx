import React, { PureComponent } from 'react';
import LoadingProviderWithKey from './LoadingProviderWithKey';
import { ButtonWithDefaultLoadingContext } from './ButtonWithLoadingContextAndKey';

const LoadingProvider1 = LoadingProviderWithKey();
const LoadingProvider2 = LoadingProviderWithKey('loading2');
function TableComponent() {
  return (
    <table>
      <ButtonWithDefaultLoadingContext>컨텍스트1</ButtonWithDefaultLoadingContext>
    </table>
  );
}

class HomePageComponentWithTwoProvider extends PureComponent {
  render() {
    return (
      <LoadingProvider1>
        <LoadingProvider2>
          <TableComponent />
        </LoadingProvider2>
      </LoadingProvider1>
    );
  }
}

export default HomePageComponentWithTwoProvider;
