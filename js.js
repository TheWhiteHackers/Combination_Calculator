// let sumbox = document.getElementById("sumbox");
// let sizebox = document.getElementById("sizebox");



// function cal(set_arr, target){
//     if (sumbox.value === "" || sizebox.value === ""){
//         alert("please fill out all the number boxes");
//     } else {

       

//     }
// }
window.onload=start();

function start(){
    document.getElementById("moreinfo").style.display="none";
    document.getElementById("shadow").style.display="none";
}

function clickedinfo(){
    document.getElementById("moreinfo").style.display="block";
    document.getElementById("shadow").style.display="block";

}

function closepop(){
    document.getElementById("moreinfo").style.display="none";
    document.getElementById("shadow").style.display="none";
}



// Get the HTML elements for sumbox, sizebox, and the switch
let sumbox = document.getElementById("sumbox");
let sizebox = document.getElementById("sizebox");
let incal = document.getElementById("incal");
let totalResultsSpan = document.getElementById("totalresults");
let switchInput = document.querySelector(".switch input");
let clearButton = document.getElementById("clear");

// Function to calculate combinations
function cal() {
    // Get values from input boxes
    let targetSum = parseInt(sumbox.value);
    let combinationSize = parseInt(sizebox.value);

    if (isNaN(targetSum) || isNaN(combinationSize)) {
        alert("Please fill out valid numbers for both 'sum' and 'size' boxes.");
        return;
    }

    // Clear previous content in 'incal' div
    incal.innerHTML = '';

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
            if (!switchInput.checked && currentCombination.includes(i)) {
                continue; // Skip repeating numbers when the switch is off
            }

            currentCombination.push(i); // Add the number to the combination
            findCombination(i, remainingSum - i, currentCombination); // Recursively find next numbers
            currentCombination.pop(); // Remove the last element to backtrack
        }
    }

    // Start finding combinations
    findCombination(1, targetSum, set_arr);

    // Display the combinations in the 'incal' div
    result.forEach(combination => {
        let div = document.createElement("div");
        div.className = "anss";
        div.textContent = combination.join(', ');
        incal.appendChild(div);
    });

    // Display the total number of results
    totalResultsSpan.textContent = result.length;
}

// Event listener for the "clear" button
clearButton.addEventListener("click", function() {
    // Clear content in 'incal' div and reset total results span
    incal.innerHTML = '';
    totalResultsSpan.textContent = '';
});


