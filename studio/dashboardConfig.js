export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '610f0acf4e6ed772912d79b7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-yovavwea',
                  apiId: 'ad92d7ce-49c5-46ad-8adf-6a0e9829da23'
                },
                {
                  buildHookId: '610f0ad0185b209b9f91c288',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9tjdxy1t',
                  apiId: '3b197ccd-038f-451b-9590-7b961852f715'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Robin52-dev/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9tjdxy1t.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
