const initState = {
    users: [
        {id: '1', first_name: "Joshua", last_name: "Singh", address_1: "address 1", address_2: "address 2", town: "Mosta", country: "Malta", post_code: "MST1234", contact_number: "99123123"},
        {id: '2', first_name: "George", last_name: "Orwell", address_1: "Town Hall", address_2: "Keplar22", town: "Blitz", country: "Mars", post_code: "MRS1232", contact_number: "99234234"},
        {id: '3', first_name: "Charlie", last_name: "Harley", address_1: "Darly Estate", address_2: "Sharley Road", town: "Harlem", country: "USA", post_code: "USA1232", contact_number: "79234234"},
        {id: '4', first_name: "Sumlee", last_name: "Dumlee", address_1: "New China Block", address_2: "Vietkong", town: "Lamdee", country: "Thailand", post_code: "TAI1003", contact_number: "99555454"},
    ]
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return state;
        case action.type.includes('ERROR'):
            return state;
        default:
            return state;
    }
}

export default userReducer