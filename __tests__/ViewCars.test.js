/**
 * @jest-environment jsdom
 */


import React from 'react';
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer';
import ViewCars from '../src/client/components/ViewCars';
import { MemoryRouter } from 'react-router-dom';

it('renders ViewCars', async () => {
  const data = { description: "" }
  const component = renderer.create(
    <MemoryRouter>
      <ViewCars rowData={data} />
    </MemoryRouter>,
  );
  let tree = component.toJSON();
  await expect(tree).toMatchSnapshot();
});
