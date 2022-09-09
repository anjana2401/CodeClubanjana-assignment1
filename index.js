export default {
  fetch (request) {
    console.log(request.url);
    console.log(request.method);
    if (request.method == "POST"){
      let data = {
       CoderName: 'Anjana Maheshwari',
       CoderLevel: 'Beginner'
      };
      let jsonData = JSON.stringify(data,null,2);

      return new Response (jsonData, {
        headers: {
          'content-type': 'application/json',
        },
      });
    }
    else if (request.method == "GET") {
      return new Response ('This is Anjana attending Code Club', {
        headers: {
          'content-type': 'text/plain',
        }
      });
    }
	},
} 
