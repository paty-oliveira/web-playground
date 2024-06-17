import '@testing-library/jest-dom'
import {render} from "@testing-library/react"
import App from "../App"

test('demo', () => {
	expect(true).toBe(true)
})

test("Renders the main page", async () => {
	const {findAllByRole} = render(<App/>)
	const users = await findAllByRole("listitem");
	expect(users).toHaveLength(2);
})