## First-day
- 1. NVM Installing
- 2. `npm install -g install` 
- 3. open a folder. Write index.ts file ,in vs code editor. write your first typescript code --- ` let helloTs = "I am from typscript" `
- 4. Run terminal `node index.ts`  
- 5. run terminal ` tsc --init` to config your root-diroctory file.
## Basic data types
* Primitive typs and Non primitive typs
- 1. number           1. ->Array
- 2. string         2.-> typle
- 3. boolean        3. ->  object
- 4. undifiend
- 5. symbol 
# Question 1.
- **typescript er type gulu ki amra run time ea pabo?**
 **Ans:** --No. amra typscript run korbo na. karon hocce amra typscript ke compile kore javacript ea rupantor korbo and eta ke amra nodejs environment diye run korbo.thole amra javascript er type pabo kintu ts er type pabo na...
**Tahole typscript kibabe amader help kortece ?**
**Ans:** ->typscript ea jokon code korbo tokon code gula compile hobe tokon sekan teke type ta ke niye help korbe.as a developer hisebe jeno amra vul na kori.

## Undestand of defined objects 
-  Object declare 
// Refferance type .--> object

const user: {
    firstname: string;
    middleName?: string | undefined;
    lastName: string;
    company: 'phero'; //it will be type -->litterel type->if value will fixed
} = {

    firstname: "momin",
    middleName: 'ul',
    lastName: 'houqe',
    company:'phero'
}
