//U22978120

// function to load data from a CSV file
d3.csv("data/purchase_orders.csv")
  .then(data => {
    const ul = d3.select("#purchase-orders");

    data.forEach(order => {
      const li = ul.append("li") //append element
        .text(`${order.customerName} - Order ID: ${order.orderId} - Purchase Amount: ${order.purchaseAmount}`);
    });
  })
  //Finalize data display functionality to have no errors.
  .catch(error => {
    console.error("Error loading data:", error);
  });
