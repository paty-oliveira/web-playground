import {extractImageUrl} from "./api";


describe('Testing API calls', () => {
	it('should return a list of objects coming from Reddit posts', function async () {
		const payload = {
			kind: "Listing",
			data: {
				after: "t3_b1rycu",
				dist: 25,
				geo_filter: "",
				children: [
					{
						kind: "t3",
						data: {
							url_overridden_by_dest: "https://i.redd.it/fj8vqooc8nd51.jpg"
						}
					},
					{
						kind: "t3",
						data: {
							url_overridden_by_dest: "https://i.redd.it/nbf6kvcbwm741.jpg"
						}
					},
					{
						kind: "t3",
						data: {
							url_overridden_by_dest: "https://v.redd.it/trn6nvka2ie41"
						}
					}
				]
			}
		}

		const actualResult = extractImageUrl(payload);
		const expectedResult = ["https://i.redd.it/fj8vqooc8nd51.jpg", "https://i.redd.it/nbf6kvcbwm741.jpg"];

		expect(actualResult).toEqual(expectedResult);
	});
})