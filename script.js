const fs = require('fs');

//My solution----------------------------------------------------------------------------------------------------------

// Question 1: What floor does Santa end up on 
const Q1 = () => {

    //Timer start
    console.time('Q1-CPU Time');

    //Read file
    const file  = fs.readFileSync('./input.txt');

    //Converting data to string
    let data = file.toString();

    let floor=0;

    for(i=0;i< data.length;i++)
    {
        let c = data[i];
        if(c ==='(')
            floor++;
        else if(c===')')
            floor--;
        else
            throw("invalid character inside the file: it should be ( or ) ");
    }

    console.log("Q1-floor", floor );

    //Timer end
    console.timeEnd('Q1-CPU Time');
}

// Question 2: At what index does Santa reach the basement (floor -1)
const Q2 = () => {

    //Timer start
    console.time('Q2-CPU Time');

    //Read file
    const file  = fs.readFileSync('./input.txt');

    //Converting data to string
    let data = file.toString();

    let floor=0;
    let firstIdxInBasement = 0;

    for(i=0;i< data.length;i++)
    {
        let c = data[i];
        if(c ==='(')
            floor++;
        else if(c===')')
            floor--;
        else
            throw("invalid character inside the file: it should be ( or ) ");

        if(floor === -1 && firstIdxInBasement === 0)
        {
            firstIdxInBasement = i+1;
            break;
        }
    }

    console.log("Q2-Santa has entered to basement for first time at position " + firstIdxInBasement);

    //Timer end
    console.timeEnd('Q2-CPU Time');
}

//----------------------------------------------------------------------------------------------------------

//Andrei solution

function S1()
{
    console.time('S1-CPU Time');

    fs.readFile('./input.txt', 
        (err,data) => {
            if(err) {
                throw(err);
            }
            const directions = data.toString('utf8');
            const directionsArray = directions.split('');

            let floor = directionsArray.reduce( (acc,val) => {
                if(val ==='(')
                    acc++;
                else if(val ===')')
                    acc--;
                return acc;
            },0);
            console.log("S1-floor", floor );
        }
    );

    console.timeEnd('S1-CPU Time');
}

function S2()
{
    console.time('S2-CPU Time');

    fs.readFile('./input.txt', 
        (err,data) => {
            if(err) {
                throw(err);
            }
            const directions = data.toString('utf8');
            const directionsArray = directions.split('');
            let firstIdxInBasement = 0;
            let accumulator = 0;

             directionsArray.some( 
                (val) => {
                    firstIdxInBasement++;
                    if(val === '(')
                        accumulator++;
                     else if(val === ')')
                        accumulator--;

                    return (accumulator === -1);
                });



            console.log("S2- Santa has entered to basement for first time at positio", firstIdxInBasement );
        }
    );

    console.timeEnd('S2-CPU Time');

}


Q1();
Q2();
S1();
S2();
