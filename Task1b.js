// How do I run this script? 
// node Task1b.js    

todoList = []; 
/**
 * YOUR OBJECTIVE: 
 * We do a lot in the addAndPrintTodos() funciton. It's also limited in
 * in what it can do because it takes no input.
 * Is there a way to seperate the concerns so that they could be tied to particular events
 * while also allowing us to add any todos that we want?
 *
 * Replace the "__" in each of the "__todo" function definitions to create more logical 
 * function names and define some logic to accomplish these tasks inspired by 
 * what you did in Part A. Call both function in mainTask1b().
 * 
 * In addition to updating function names, only modify the file under 
 * the "// YOUR CODE HERE" comments.
 */

function addtodo(todoString) {
    // YOUR CODE HERE
    todoList.push(todoString);
}

function printtodo() {
    // YOUR CODE HERE
    for (x = 0; x < todoList.length; x++)
        console.log(x + ".\t" + todoList[x]);
}

/**
 * Main is considered the entry point to a procedural program. Within y/cs,
 * it's rare for us to write procedures in JS, but for learning purposes
 * we do it here
 */
function mainTask1b() {
    // YOUR CODE HERE (simply call the functions you implemented above)
    addtodo("Apply to y/cs!");
    addtodo("Pick out my classes");
    addtodo("Have dinner with my suite");
    printtodo();
}

// This bit of code ensures that a main method exists! If it doesn't, then it throws an error
if (require.main === module) {
    // unlike other languages like Java, there is no built in main method. We use a funciton called
    // main by convention.
    mainTask1b();
}