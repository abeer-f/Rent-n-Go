/**
 * @jest-environment jsdom
 */


import React from 'react';
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer';
import LandingPage from '../src/client/components/LandingPage';
import { MemoryRouter } from 'react-router-dom';

it('renders LandingPage', async () => {
  const data = { description: "" }
  const component = renderer.create(
    <MemoryRouter>
      <LandingPage rowData={data} /></MemoryRouter>,
  );
  let tree = component.toJSON();
  await expect(tree).toMatchSnapshot();
});
