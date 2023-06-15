
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
Aceasta comanda stabileste proprietatea HTML interioară a elementului DOM elem la valoarea șirului de text. Proprietatea interiorHTML reprezintă conținutul HTML din element. Setarea acestei proprietăți înlocuiește orice conținut existent în element și introduce conținutul HTML specificat ca structură HTML analizată. În acest caz, deoarece textul este un șir simplu, acesta va fi introdus ca un nod text în element.