Where's the "document" in the hierarchy?
importance: 4


  -Which class does the document belong to?
      Putem afla la ce clasa apartine, atunci cand afisam spre exemplu alert(document) sau alert(document.constructor.name), in acest mod se afiseaza clasa utilizata pentru crearea obiectului document, care este HTMLDocument
      

  -What’s its place in the DOM hierarchy?
    Obiectul document(document object) in Dom hierarchy reprezinta radacina arborelui DOM(root of the DOM tree)

  -Does it inherit from Node or Element, or maybe HTMLElement? 

    Document nu mosteneste direct de la Node, Element, sau HTMLElement, dar are o relatie ierarhica cu acestia prin lantul de mostenire in DOM
  