import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import {App, LocationDisplay} from './app'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

test('rendering a component that uses useLocation', () => {
	const route = '/some-route'

	// use <MemoryRouter> when you want to manually control the history
	render(
		<MemoryRouter initialEntries={[route]}>
			<LocationDisplay />
		</MemoryRouter>,
	)

	// verify location display is rendered
	expect(screen.getByTestId('location-display')).toHaveTextContent(route)
})
