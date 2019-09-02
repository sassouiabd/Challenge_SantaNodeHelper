const fs = require('fs');

//My solution----------------------------------------------------------------------------------------------------------

// Question 1: What floor does Santa end up on 
const Question1 = () => {

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
const Question2 = () => {

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


Question1();
Question2();

//----------------------------------------------------------------------------------------------------------