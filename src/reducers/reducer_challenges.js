let initialState = {
        "list": [
            {
                "id": 0,
                "number": 1,
                "challenge":"How many days until the hack?",
                "answer": 5,
                "answer_feedback": ["SUCCESS! We now know when the hack is going down. Check the evidence tab for your next challenge.", "Sorry, we couldn't find any evidence that the hack is going down then."],
                "completed": false,
            },
            {
                "id": 1,
                "number": 2,
                "challenge":"What is the Syndicate's bank account code?",
                "answer": 38347056,
                "answer_feedback": ["SUCCESS! That's their code. We can now monitor the activity on their account. Check the evidence tab for your next challenge.", "Sorry, we couldn't access the account with that code."],
                "completed": false,
            },
            {
                "id": 2,
                "number": 3,
                "challenge": "The Syndicate is planning insider trading on an exchange in what city?",
                "answer": "\\bChicago\\b",
                "answer_feedback": ["SUCCESS! We can now monitor their activity through the options exchange in Chicago. Check the evidence tab for your next challenge.", "Sorry, we couldn't find any trading activity on exchanges in that city."],
                "completed": false,
            },
            {
                "id": 3,
                "number": 4,
                "challenge":"What publication is The Syndicate planning to hack.",
                "answer": "\\bFinancial Times\\b",
                "answer_feedback": ["SUCCESS! We caught The Syndicate trying to hack that publication. We're getting close! Check the evidence tab for your next challenge.", "Sorry, we couldn't find any hacking activity at that publication."],
                "completed": false,
            },
            {
                "id": 4,
                "number": 5,
                "name": "Lesson 5",
                "challenge":"What country is the Kingpin fleeing to?",
                "answer": "\\bSwitzerland\\b",
                "answer_feedback": ["SUCCESS! We got the Kingpin and The Syndicate is no longer a threat! Check the evidence tab for your reward.", "Sorry, we couldn't find any evidence that the Kingpin is flying to that location."],
                "completed": false,
            },
            {
                "id": 5,
                "number": 6,
                "name": "Lesson 6",
                "challenge":"We got them!",
                "answer": "",
                "answer_feedback": ["", ""],
                "completed": false,
            },
        ],
        "activeLesson": 0,
        "current_code": null,
        "current_output":"Make Changes and Submit Code"
    };
export default function (state = initialState, action){
    switch (action.type) {
        case 'UPDATE_CODE':
            return state;
        default:
            return state;
    }
}