
export async function getMostPopularImagesFromReddit() {
	try {
		const response = await fetch("https://www.reddit.com/r/aww/top/.json?t=all");
		const payload =  await response.json();

		return extractImageUrl(payload);

	} catch (error){
		throw new Error("Invalid response" + error);
	}
}

export function extractImageUrl(payload) {
	const imagesUrl = [];
	const postsMetadata = payload.data.children;

	postsMetadata.forEach((post) => {
		let url = post.data.url_overridden_by_dest;

		if (url.includes(".jpg")) {
			imagesUrl.push(url)
		}
	})

	return imagesUrl
}
