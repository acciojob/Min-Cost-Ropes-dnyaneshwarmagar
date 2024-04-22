function mincost(arr)
{ 
//write your code here
// return the min cost

	   let totalCost = 0;

    // Sort the array initially
    arr.sort((a, b) => a - b);

    while (arr.length > 1) {
        // Take the two shortest ropes
        let rope1 = arr.shift();
        let rope2 = arr.shift();

        // Calculate the cost to connect these two ropes
        let cost = rope1 + rope2;

        // Add the cost to the total cost
        totalCost += cost;

        // Insert the combined rope length back into the array
        arr.push(cost);

        // Re-sort the array
        arr.sort((a, b) => a - b);
	}

	return totalCost;
  
}

module.exports=mincost;
