import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Running Test for Footer', () => {
  test('Check Footer', () => {
    render(<p>Footer text</p>);
    const footer = screen.getByText('Footer text');
    expect(footer).toBeTruthy();
  });
});
