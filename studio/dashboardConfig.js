export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6032bb3698d6e8de0baf0de3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-netlify-v-2-studio',
                  apiId: '094d40b8-6877-4d5e-83e8-aa85348b351b'
                },
                {
                  buildHookId: '6032bb365c468a0ca4677335',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-netlify-v-2',
                  apiId: '333eab41-ec30-441f-8bd5-71e54d419ae8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jacob-Fromm/sanity-gatsby-netlify-v2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-netlify-v-2.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
