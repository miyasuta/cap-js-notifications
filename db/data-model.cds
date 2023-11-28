namespace shop;

entity Orders {
    key id: Integer @title: 'Order Id';
    description: String @title: 'Description';
    deliveryDate: Date @title: 'Delivery Date';
    customer: String @title: 'Customer';
}