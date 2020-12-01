export default [
    {
        id: 1,
        questionText: "How long is your stay",
        options: [
            {
            text: "1 Month",
            nextQuestion: 2,
            result: null
        },
            {
            text: "1 Week",
            nextQuestion: null,
            result: {
                name: "7 day ticket",
                price: "€34"
            }
        },
            {
            text: "1 Day",
            nextQuestion: 3,
            result: null
        }
            ]

    },

    {
        id: 2, 
        questionText: "do you have a bicycle",
        options: [
            {
                text: "Yes",
                nextQuestion: null,
                result: {
                    name: "Monthly ticket bicycle",
                    price : "€105"
                }
            },
            {
                text: "No",
                nextQuestion: null,
                result: {
                    name: "Monthly ticket",
                    price : "€84"
                }
            }
        ]
    },
    {
        id: 3,
        questionText: "How many trips",
        options: [
          
                {
                text: "within 2 hours one direction",
                nextQuestion: 4,
                result: null
            },
                {
                text: "Short trip 3 stations U/S-bahn or 6 stations trams/buses",
                nextQuestion: null,
                result: {
                    name: "Short trip ticket",
                    price: "€1.90 - reduced fare  €1.40"
                }
            },
                {
                text: "4 trips within 2 hours in one direction",
                nextQuestion: null,
                result: {
                    name: "4-trip ticket",
                    price: "€9.00 - reduced fare  €5.60"
                }
            },
                {
                text: "more than 4 trips",
                nextQuestion: 5,
                result: {
                    name: "Weekly card",
                    price: "## Euros"
                }
            }
                
            
            ]
    },
    {
        id: 4, 
        questionText: "do you have a bicycle",
        options: [
            {
                text: "Yes",
                nextQuestion: null,
                result: {
                    name: "Bike single trip",
                    price : "€2"
                }
            },
            {
                text: "No",
                nextQuestion: null,
                result: {
                    name: "single trip",
                    price : "€2.90 - reduced fare  €1.80"
                }
            }
        ]
    },

    {
        id: 5, 
        questionText: "which one suits you better?",
        options: [
            {
                text: "travelling alone or with children under tha age of 6",
                nextQuestion: null,
                result: {
                    name: "Day ticket",
                    price : "€8.60 - reduced fare  €5.50"
                }
            },
            {
                text: "a group of up to 5 persons",
                nextQuestion: null,
                result: {
                    name: "Small group day ticket",
                    price : "€23.50"
                }
            }
        ]
    },
]