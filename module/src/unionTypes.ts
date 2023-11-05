// union types
{


    type FrontendDevs = "Fakibaz" | "junior developer"
    type FullStackDevs = "Frontend devs" | "Expert Devs"

    type Deves = FrontendDevs | FullStackDevs;


    const newDevs: FrontendDevs = "Fakibaz"



    type User = {

        name: string,
        email?: string,
        gender: "male" | "femail",
        blodGroup: "A+" | "b+" | "ab+"
    }

    const users1: User = {
        name: 'mominul',
        gender: 'male',
        blodGroup: "A+"
    }


    type FrontendDevss = {
        skills: string[];
        designation: "frontend developer"

    }
    type BackendDevss = {
        skills: string[];
        designation: "Backend developer"

    }

/* 
1. ekta " | " mane hocce or hobe,
2. ekta " & " mane hocce hoy eta hobe nahoye ota hobe

*/


}