/**
 * @jest-environment jsdom
 */


import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import ViewFetchedRows from '../src/client/components/ViewFetchedRows';

it('renders ViewFetchedRows', async () => {
  const data = { description: "" }

  render(<ViewFetchedRows data={data} />)
  await expect(screen.getByTestId('fetched-rows')).toBeInTheDocument();
  await expect(screen.getByRole('row')).toBeInTheDocument();
});
