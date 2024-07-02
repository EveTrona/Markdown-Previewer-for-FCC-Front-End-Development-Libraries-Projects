const defaultMarkDownText = `# This project spend me 3 days!!! fourrrrrrr dayyyyyyyyyys!!!!!!!!!!!!!!!!!  Why I feel so long.
## Head2
### this is head3

[Link]
(https://wx1.sinaimg.cn/mw690/6ce3226cly1hj6n7w5or8j20kg0kg0ub.jpg)

\`this is a inline link\`

\`\`\`
// this is a block console.log("Hello")
\`\`\`

\`\`\`html
  <p>I have no idea about this.</p>
\`\`\`

**this shold be bold** and _this_ too!

- this is a list item:
  1.first
  2.second
  3.thired

> this is a blockquote
> aoother blockquote

![Image](https://img9.vilipix.com/picture/pages/regular/2023/02/10/14/106642783_p0_master1200.jpg?x-oss-process=image/resize,m_fill,w_1000)

**this text is bold**`

const Editor = ({defaultText}) => {
  React.useEffect(() => {
    run({target: {value: defaultText}});
  }, [defaultText]);
  
  return (
    <div>
      <textarea id="editor"
        type="text" onChange={run}
        defaultValue={defaultText}
        ></textarea>
    </div>
  )
}

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
});

const markdownConverter = new showdown.Converter({
  ellipsis: false,
  noHeaderId: true,
  simpleLineBreaks: true,
  ghCompatibleHeaderId: true,
  ghMentions: true,
  tables: true,
  tasklists: true,
  openLinksInNewWindow: true,
  emoji: true,
  github: true
});

showdown.setFlavor('github');

const Preview = ({defaultText}) => {
  const firstText = marked(defaultText);
 
  return (
    <div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: firstText}}></div>
    </div>  
  )
}

const App = () => {
  
  return (
    <div>
      <Editor defaultText={defaultMarkDownText}/>
      <Preview  defaultText={defaultMarkDownText}/>
    </div>
  )
} 

const run = (event) => {
  let text = event.target.value;
  let target = document.getElementById("preview");
  let html = marked(text); 
  target.innerHTML = html;
}



ReactDOM.render(<App />, document.getElementById("root"))
