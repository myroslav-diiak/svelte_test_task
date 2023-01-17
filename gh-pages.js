var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/myroslav-diiak/svelte_test_task.git', // Update to point to your repository  
        user: {
            name: 'myroslav-diiak', // update to use your name
            email: 'diiakm23819@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)