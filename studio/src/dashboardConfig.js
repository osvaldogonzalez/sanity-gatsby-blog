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
                  buildHookId: '5e988871cdee01ea36d339d9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qyfwmjp4',
                  apiId: '1ed4334a-f0f2-4859-b8fd-a83662d8f5d2'
                },
                {
                  buildHookId: '5e9888717d7219f211eebd33',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fhwqipro',
                  apiId: '2b2a73db-2022-4a8a-ad4f-8a46022c972f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/osvaldogonzalez/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fhwqipro.netlify.app', category: 'apps' }
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
