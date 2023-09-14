function showDetails(itemId) {
    // Fetch and display item details based on itemId
    // You can use AJAX or fetch data from a JSON file or database
    // For this example, let's assume you have an array of item details
    const itemData = [
        { id: 1, title: 'Item 1', description: 'Details of Item 1' },
        { id: 2, title: 'Item 2', description: 'Details of Item 2' },
        // Add more item details as needed
    ];

    const selectedItem = itemData.find(item => item.id === itemId);

    if (selectedItem) {
        const itemDetailsContainer = document.getElementById('item-details');
        itemDetailsContainer.innerHTML = `
            <h2>${selectedItem.title}</h2>
            <p>${selectedItem.description}</p>
        `;
    }
}
