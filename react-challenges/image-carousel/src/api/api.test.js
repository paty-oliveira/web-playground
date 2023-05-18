import {getImageUrl, getAllRedditPosts} from "./api";

jest.mock('./api');

describe('Testing API calls', () => {
	it('should return a list of objects coming from Reddit posts', function async () {
		const mockData = {
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
		getAllRedditPosts.mockResolvedValue(mockData)
	});
})