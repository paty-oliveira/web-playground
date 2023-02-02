import { render, screen } from '@testing-library/react';
import App from './App';

test('The FQA component should have a title', () => {
    render(<App />);
    const fqaTitle = screen.getByText("Frequently Asked Questions");
    expect(fqaTitle).toBeInTheDocument();
});
