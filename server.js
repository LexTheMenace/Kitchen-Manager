const express = require('express');/* 
const mongoose = require('mongoose'); */

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.get('/', ( req, res ) => {
    res.json({
        employees: [
        { 
           id: 1,
           name: 'Mike',
           role: 'General Manager',
           department: 'Manager'
        },
        { 
            id: 2,
            name: 'Jimmy',
            role: 'Bar Manager',
           department: 'Manager'

        },
        { 
            id: 3,
            name: 'Sarah',
            role: 'Service Manager',
            department: 'Manager'

        },
        { 
            id: 4,
            name: 'John',
            role: 'Kitchen Manager',
            department: 'Manager'

        },
        { 
            id: 5,
            name: 'Sam',
            role: 'Lead Cook',
           department: 'BOH'

        },
        { 
            id: 6,
            name: 'Bobby',
            role: 'Lead Server',
           department: 'FOH'

        },
        { 
            id: 7,
            name: 'Kevin',
            role: 'Bartender',
           department: 'FOH'

        },
        { 
            id: 8,
            name: 'Micah',
            role: 'Cook',
           department: 'BOH'

        },
        { 
            id: 9,
            name: 'Courtney',
            role: 'Server',
            department: 'FOH'

        },
    ]


    })
})

app.listen(5000)