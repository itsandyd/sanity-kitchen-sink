export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '6332cfee2cfc3f0568e8ad92',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bsdjejd7',
                  apiId: '0ff40e2b-e415-4f09-9ed5-31714a7d9799'
                },
                {
                  buildHookId: '6332cfee96efca16da8b09c2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-sb1ro4ty',
                  apiId: '91c0c534-937f-4563-93c1-98a3b023adf0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pauseplayrepeat/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-sb1ro4ty.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
