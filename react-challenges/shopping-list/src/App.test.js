import App from './App';
import {assert} from "chai";
import { render, screen } from '@testing-library/react'

describe("Shopping List app", () => {
	describe("The user visits root", () => {
		it("The page starts with the search input empty",() => {
			render(<App />);

		})
	})
})