// let sumbox = document.getElementById("sumbox");
// let sizebox = document.getElementById("sizebox");



// function cal(set_arr, target){
//     if (sumbox.value === "" || sizebox.value === ""){
//         alert("please fill out all the number boxes");
//     } else {

       

//     }
// }

function clickedinfo(){
    console.log("make a popup and explain more stuff");
}


// Get the HTML elements for sumbox and sizebox
let sumbox = document.getElementById("sumbox");
let sizebox = document.getElementById("sizebox");
let incal = document.getElementById("incal");

// Function to calculate combinations
function cal() {
    // Get values from input boxes
    let targetSum = parseInt(sumbox.value);
    let combinationSize = parseInt(sizebox.value);

    if (isNaN(targetSum) || isNaN(combinationSize)) {
        alert("Please fill out valid numbers for both 'sum' and 'size' boxes.");
        return;
    }

    let set_arr = [];
    let result = [];

    // Function to find combinations recursively
    function findCombination(start, remainingSum, currentCombination) {
        if (remainingSum === 0 && currentCombination.length === combinationSize) {
            result.push(currentCombination.slice()); // Add the valid combination to the result
            return;
        }

        // Loop to find combinations
        for (let i = start; i <= targetSum && i <= remainingSum; i++) {
            currentCombination.push(i); // Add the number to the combination
            findCombination(i, remainingSum - i, currentCombination); // Recursively find next numbers
            currentCombination.pop(); // Remove the last element to backtrack
        }
    }

    // Start finding combinations
    findCombination(1, targetSum, set_arr);

    // Log the combinations to the console
    result.forEach(combination => {
        let div = document.createElement("div");
        div.className = "anss";
        div.textContent = combination.join(', ');
        incal.appendChild(div);
    });
}
