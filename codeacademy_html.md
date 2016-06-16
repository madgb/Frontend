##HTML ELEMENTS


h1 - h6: indicate text headings on a webpage. h1 is the largest heading; h6 is the smallest.
```
<h1>Heading</h1>
```

p: used for non-heading text, such as the bodies of articles or company descriptions.
```
<p>Description of company here.</p>
```

a: short for anchor and used to add links to other webpages. Anchor elements typically have an href attribute:
```
<a href="http://codecademy.com">Click here</a> to learn how to make a website!
```

img: used to add an image to a webpage. Image elements are self-closing and do not require a closing tag:
```
<img src="https://images.com/favorite.png">
```

video: used to add videos to a webpage, and uses multiple attributes and a nested source element:
```
<video width="320" height="240" controls>
  <source src="https://movies.io/great-clip.mp4" type="video/mp4">
</video>
```

unordered list: used to create lists on a webpage and requires li elements inside a ul:
```
<ul>
  <li>list item</li>
  <li>another item</li>
  <li>yet another</li>
</ul>
```

div: used to organize HTML elements into different groups, which can be given a class attribute:
```
<div class="main">
  <h2>Subheading!</h2>
</div>
```

metadata tags: provide metadata about a webpage.

WEB CONCEPTS

parent/child elements: used to describe HTML elements that enclose or are enclosed by other elements. For example, below the ul is the parent and the li items are children:
```
<ul>
  <li>...</li>
  <li>...</li>
  <li>...</li>
</ul>
```
