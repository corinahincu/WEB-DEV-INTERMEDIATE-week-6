
    The sibling question
importance: 5
If elem – is an arbitrary DOM element node…

1.Is it true that elem.lastChild.nextSibling is always null?
  Da, fiindca elem.lastChild e mereu ultimul element, si nu are nextSibling.
2.Is it true that elem.children[0].previousSibling is always null ?
  Nu, din motiv ca elem.children e primul copil din elements, dar inaintea lui pot fi si non-element nodes, spre exemplu text node ar putea fi un previousSibling.
