class Invoice {
    constructor(id, createdAt, paymentDue, description, paymentTerms, clientName, clientEmail, status, senderAddress, clientAddress, items, total) {
        this.id = id;
        this.createdAt = createdAt;
        this.paymentDue = paymentDue; //need to adjust to a getter formula
        this.description = description;
        this.paymentTerms = paymentTerms;
        this.clientName = clientName;
        this.clientEmail = clientEmail;
        this.status = status;
        this.senderAddress = senderAddress;
        this.clientAddress = clientAddress;
        this.items = items;
        this.total = total;
    }
}

class Address {
    constructor(street, city, postCode, country) {
        this.street = street;
        this.city = city;
        this.postCode = postCode;
        this.country = country;
    }
}

class SenderAddress extends Address {
    constructor(street, city, postCode, country) {
        super(street, city, postCode, country);
    }
}

class ClientAddress extends Address {
    constructor(street, city, postCode, country) {
        super(street, city, postCode, country);
    }
}

class Item {
    constructor(name) {
        this.name = name;
        this.price = 0;
        this.quantity = 0;
        this.total = 0;
    }
    get calcTotal() {
        return this.quantity * this.price;
    }
}

export { Invoice, Address, SenderAddress, ClientAddress, Item }