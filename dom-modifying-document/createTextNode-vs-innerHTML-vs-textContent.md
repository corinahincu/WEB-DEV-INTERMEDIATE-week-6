
createTextNode vs innerHTML vs textContent

importance: 5
We have an empty DOM element elem and a string text.

Which of these 3 commands will do exactly the same?

elem.append(document.createTextNode(text))
elem.innerHTML = text
elem.textContent = text 


elem.append ( document.createTextNode ( text ) ): 
Aceasta comanda creeaza un nou text node folosind document.createTextNode ( text ) și apoi il adauga elementului DOM folosind metoda append ( ), care adauga node ca ultimul copil al elementului. Aceasta abordare creează explicit un nod text si il adauga elementului.

elem.innerHTML = text: 
