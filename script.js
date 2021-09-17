// TODO: load the dataset 
let attractions;
fetch('attractions.json')
    .then(response => response.json())
    .then(data => {
        attractions = data;
        console.log('movies - (a)', attractions);
    })
    .then(() => filterData('all'));
    
function filterData(category) {
	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/
    let filteredData = attractions.filter(data => {
        if (category === 'all') return true; 
        else return data.Category === category;
    }).sort((a, b) => a.Visitors - b.Visitors).reverse().slice(0,5);
    renderBarChart(filteredData)
}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
document.querySelector('#attraction-category').addEventListener('change', (event) => {
    console.log(event.target.value);
    filterData(event.target.value);
});