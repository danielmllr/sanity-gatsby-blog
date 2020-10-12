export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8451c3ab26cac2338e65bf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7imgqs8w',
                  apiId: '60467d87-991d-4ee1-b158-ced65f8d7fea'
                },
                {
                  buildHookId: '5f8451c3e6479bb1443dea5a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qgfttzi8',
                  apiId: '095027ba-a74b-43bb-bac4-637edd0f2c0f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danielmllr/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qgfttzi8.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
