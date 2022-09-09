export default {
	fetch(request)
		return new Response('Hello CodeClub!', {
			headers: {
				'content-type': 'text/plain',
			},
		});
	},
};
