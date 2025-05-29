// Immediate Invokation Function Expression (IIFE)

// Named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})();


// Simple IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("Krushit");