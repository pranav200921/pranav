function showDetails(itemId) {
    // Fetch and display item details based on itemId
    // You can use AJAX or fetch data from a JSON file or database
    // For this example, let's assume you have an array of item details
    const itemData = [
        { id: 1, title: 'Autoo 1', description: 'Details of Auto 1 , Waste Bank is a place for sorting and collecting waste that can be recycled and / or reused that has economic value.' },
        { id: 2, title: 'Auto 2', description: 'Details of Auto 2' },
        { id: 3, title: 'Auto 3', description: 'Details of Auto 3' },
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
