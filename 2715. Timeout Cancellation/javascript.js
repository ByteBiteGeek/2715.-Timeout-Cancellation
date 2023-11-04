function cancellable(fn, args, t, cancelT) {
   const timerFn = setTimeout(() => {
     const result = fn(...args);
     // Haz algo con el resultado, como almacenarlo para su posterior acceso o visualización
     // Puedes guardar el resultado en una variable o imprimirlo en la consola
   }, t);
 
   const cancelFn = () => {
     clearTimeout(timerFn);
   };
 
   setTimeout(cancelFn, cancelT);
   return cancelFn;
 }
 