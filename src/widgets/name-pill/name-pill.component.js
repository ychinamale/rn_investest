import React from 'react';
import {TextPill} from '../../shared/components/text-pill';
import {useProfile} from '../../features/profile';

export function NamePill() {
  const {name} = useProfile();
  return <TextPill>{name}</TextPill>;
}
