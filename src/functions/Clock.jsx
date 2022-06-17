import React from 'react';

import { useAutoExp } from '../utils/hooks';

export default function Clock() {
  const { exp } = useAutoExp();

  return <div>{exp}</div>;
}
