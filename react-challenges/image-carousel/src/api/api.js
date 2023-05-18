
export async function getAllRedditPosts() {
	const response = await fetch("https://www.reddit.com/r/aww/top/.json?t=all");
	if (response.status === 200) {
		return await response.json();
	}
	throw new Error("Invalid response");
}

export async function getImageUrl() {
	return await getAllRedditPosts();
}
