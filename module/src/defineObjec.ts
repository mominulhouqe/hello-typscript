// Refferance type .--> object

const user: {
   readonly firstname: string; //we can read only it
    middleName?: string | undefined;
    lastName: string;
    company: 'phero'; //it will be type -->litterel type->if value will fixed
} = {

    firstname: "momin",
    middleName: 'ul',
    lastName: 'houqe',
    company:'phero'
}

