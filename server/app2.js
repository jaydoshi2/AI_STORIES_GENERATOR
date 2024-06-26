const { default: MonsterApiClient } = require("monsterapi");
const client = new MonsterApiClient('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IjAwNzRlYWUzMzNlNjc1YmFjOTI0YjRjMDU0OGVjMWJiIiwiY3JlYXRlZF9hdCI6IjIwMjQtMDYtMjZUMTk6NDM6MjYuMTE4MTAyIn0.ZS2ejT3UhiI9VGAv2IYpS69qKn_Ywu-RlFN9IwlLhcI');


const model = 'txt2img'; // Replace with the desired model name
const input = {
prompt: 'detailed sketch of lion by greg rutkowski, beautiful, intricate, ultra realistic, elegant, art by artgerm',
negprompt: 'deformed, bad anatomy, disfigured, poorly drawn face',
samples: 2,
steps: 50,
aspect_ratio: 'square',
guidance_scale: 7.5,
seed: 2414,
style: 'photographic'
          };

  
          client.generate(model, input)
          .then((response) => {
         // Handle the response from the API
         console.log('Generated content:', response);
         })
         .catch((error) => {
         // Handle API errors
         console.error('Error:', error);
         });