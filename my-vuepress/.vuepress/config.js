module.exports = {
    title: "Personal website",
    description: "Site pessoal de Samuel para divulgação de conteúdo",
    themeConfig: {
        nav:[
            { text:"Home", link:"/"},
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                  { text: 'English', link: '/language/chinese/' },
                  { text: 'Portuguese', link: '/language/japanese/' }
                ]
            },
            { text: 'Github', link: 'https://github.com/Samuellucas97' },
        ]
    }
};