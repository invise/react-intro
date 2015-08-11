const data = [
    {
        name: "intro",
        text: "Introducing React",
        items: [
            {
                text: "Developed by Facebook"
            },
            {
                text: "Just the views",
                items: [
                    {
                        text: "No models, no controllers, no templating"
                    },
                    {
                        text: "Virtual DOM with server-side support"
                    }
                ]
            },
            {
                text: "Key principle: one-way data flow",
                items: [
                    {
                        text: "Truth flows down from the top"
                    },
                    {
                        text: "DOM always reflects the truth"
                    }
                ]
            }
        ]
    },
    {
        name: "library",
        text: "Yet another library",
        image: "moment.png",
        items: [
            {
                text: "Why do we even need libraries?"
            },
            {
                text: "You could write everything in vanilla JS"
            },
            {
                text: "Libraries do one thing well",
                items: [
                    {
                        text: "Usually something we don't like doing"
                    },
                    {
                        text: "Or maybe something we can't do very well"
                    }
                ]
            }
        ]
    },
    {
        name: "problems",
        text: "Real problems",
        image: "frameworks.png",
        items: [
            {
                text: "What's so hard about making an app today?",
                items: [
                    {
                        text: "Turning data into DOM should be easy"
                    },
                    {
                        text: "Determining app state should also be easy"
                    }
                ]
            },
            {
                text: "Actual hard questions:",
                items: [
                    {
                        text: "How do you optimally update a component hierarchy?"
                    },
                    {
                        text: "How do components share state?"
                    }
                ]
            },
            {
                text: "React is a solution to these problems"
            }
        ]
    },
    {
        name: "state",
        text: "It's all about state",
        items: [
            {
                text: "The DOM is a view of your app's state"
            },
            {
                text: "You manage state; React manages the DOM"
            },
            {
                text: "Virtual DOM answers hard question #1",
                items: [
                    {
                        text: "Always re-render - let the library optimize it"
                    }
                ]
            },
            {
                text: "Flux architecture answers hard question #2",
                items: [
                    {
                        text: "Keep all state external, then control access to it"
                    }
                ]
            }
        ]
    },
    {
        nmae: "links",
        text: "Further reading",
        items: [
            {
                text: "React Docs",
                href: "https://facebook.github.io/react/"
            },
            {
                text: "Flux Docs",
                href: "https://facebook.github.io/flux/"
            },
            {
                text: "The Future of JavaScript MVC Frameworks",
                href: "http://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs/",
                items: [
                    {
                        text: "by David Nolen"
                    }
                ]
            },
            {
                text: "Moving Atom to React",
                href: "http://blog.atom.io/2014/07/02/moving-atom-to-react.html",
                items: [
                    {
                        text: "by Nathan Sobo"
                    }
                ]
            }
        ]
    }
]

export default data
