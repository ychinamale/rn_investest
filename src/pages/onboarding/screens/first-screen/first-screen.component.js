import React from 'react';
import {NameForm} from '../../../../widgets';
import {SafeView} from '../../../../widgets/safe-view';

export function FirstScreen() {
  return (
    <SafeView>
      <NameForm />
    </SafeView>
  );
}
