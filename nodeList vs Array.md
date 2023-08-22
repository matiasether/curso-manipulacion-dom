La diferencia entre NodeList y Array, es que el NodeList carece de métodos que si están disponibles en los Arrays, pero podemos pasar esto fácilmente usando el operador de propagación.

// De esta forma pasamos todos los elementos en el NodeList a un arreglo al cual si podremos usar los métodos filter, map, reduce entre otros. 
const nodeList = document.querySelectorAll("selector css");
const elementList = [...nodeList];

Recomendación importante cada vez que obtengamos un NodeList pásemelo a Array ya que los motores de javascript como el motor V8 de google están mas optimizados para Arrays que para NodeList.
