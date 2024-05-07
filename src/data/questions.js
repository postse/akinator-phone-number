const questions = [
    {
        "question": "Does your phone number have a preferred seat on the subway?",
        "options": [
            "Window seat",
            "Aisle seat",
            "Middle seat",
            "Standing room only"
        ]
    },
    {
        "question": "If your phone number were a book, would it be a mystery novel or a sci-fi adventure?",
        "options": [
            "Mystery novel",
            "Sci-fi adventure",
            "Romance novel",
            "Fantasy epic"
        ]
    },
    {
        "question": "Does your phone number enjoy watching reruns of '90s sitcoms?",
        "options": [
            "Yes, all the time",
            "Occasionally",
            "Not really",
            "What's a '90s sitcom?"
        ]
    },
    {
        "question": "Would your phone number prefer to spend a weekend camping in the mountains or lounging on a sunny beach?",
        "options": [
            "Camping in the mountains",
            "Lounging on a sunny beach",
            "Neither, prefers city life",
            "Both sound equally appealing"
        ]
    },
    {
        "question": "Does your phone number have a secret talent for juggling oranges?",
        "options": [
            "Yes, a natural pro",
            "Can juggle a little",
            "No, but willing to learn",
            "No, and no interest"
        ]
    },
    {
        "question": "Is your phone number a morning person or a night owl?",
        "options": [
            "Morning person",
            "Night owl",
            "Neither, prefers afternoon",
            "Varies depending on the day"
        ]
    },
    {
        "question": "Does your phone number have an opinion on pineapple as a pizza topping?",
        "options": [
            "Loves it",
            "Hates it",
            "Indifferent",
            "Never tried it"
        ]
    },
    {
        "question": "If your phone number were a vehicle, would it be a bicycle or a motorcycle?",
        "options": [
            "Bicycle",
            "Motorcycle",
            "Car",
            "Public transportation"
        ]
    },
    {
        "question": "Does your phone number always remember to bring an umbrella on cloudy days?",
        "options": [
            "Always",
            "Sometimes",
            "Rarely",
            "Never"
        ]
    },
    {
        "question": "Would your phone number rather go to a music festival or a quiet art gallery?",
        "options": [
            "Music festival",
            "Quiet art gallery",
            "Both sound equally appealing",
            "Neither, prefers to stay home"
        ]
    },
    {
        "question": "Is your phone number more likely to order pizza or sushi for dinner?",
        "options": [
            "Pizza",
            "Sushi",
            "Burger",
            "Salad"
        ]
    },
    {
        "question": "If your phone number were a color, would it be blue or green?",
        "options": [
            "Blue",
            "Green",
            "Red",
            "Yellow"
        ]
    },
    {
        "question": "Does your phone number prefer to binge-watch TV shows or watch movies in theaters?",
        "options": [
            "Binge-watch TV shows",
            "Watch movies in theaters",
            "Neither, prefers to read books",
            "Both, depends on the mood"
        ]
    },
    {
        "question": "Would your phone number rather spend a day hiking in the mountains or exploring a bustling city?",
        "options": [
            "Hiking in the mountains",
            "Exploring a bustling city",
            "Neither, prefers staying indoors",
            "Both sound equally appealing"
        ]
    },
    {
        "question": "If your phone number could travel in time, would it go to the past or the future?",
        "options": [
            "Past",
            "Future",
            "Prefer to stay in the present",
            "Time travel is too risky"
        ]
    },
    {
        "question": "Does your phone number enjoy solving puzzles or playing sports?",
        "options": [
            "Solving puzzles",
            "Playing sports",
            "Neither, prefers artistic activities",
            "Both, enjoys a variety of activities"
        ]
    },
    {
        "question": "Would your phone number rather have a picnic in a park or dine at a fancy restaurant?",
        "options": [
            "Picnic in a park",
            "Dine at a fancy restaurant",
            "Prefer cooking at home",
            "None, prefers fast food"
        ]
    },
    {
        "question": "If your phone number were an animal, would it be a cat or a dog?",
        "options": [
            "Cat",
            "Dog",
            "Bird",
            "Fish"
        ]
    },
    {
        "question": "Does your phone number believe in aliens or ghosts?",
        "options": [
            "Aliens",
            "Ghosts",
            "Neither, prefers to focus on reality",
            "Both, enjoys supernatural mysteries"
        ]
    },
    {
        "question": "Would your phone number rather travel to outer space or explore the depths of the ocean?",
        "options": [
            "Travel to outer space",
            "Explore the depths of the ocean",
            "Neither, prefers to stay on land",
            "Both sound equally fascinating"
        ]
    },
    {
        "question": "Does your phone number prefer coffee or tea?",
        "options": [
            "Coffee",
            "Tea",
            "Neither, prefers energy drinks",
            "Both, enjoys a variety of beverages"
        ]
    },
    {
        "question": "If your phone number could have any superpower, would it choose flight or invisibility?",
        "options": [
            "Flight",
            "Invisibility",
            "Both, if possible",
            "Neither, prefers to live a normal life"
        ]
    },
    {
        "question": "Would your phone number rather explore a haunted house or go on a thrilling roller coaster ride?",
        "options": [
            "Explore a haunted house",
            "Go on a thrilling roller coaster ride",
            "Neither, prefers quieter activities",
            "Both sound equally exciting"
        ]
    },
    {
        "question": "Is your phone number more likely to listen to rock music or classical music?",
        "options": [
            "Rock music",
            "Classical music",
            "Pop music",
            "Jazz music"
        ]
    },
    {
        "question": "Does your phone number enjoy cooking or eating out at restaurants?",
        "options": [
            "Cooking",
            "Eating out at restaurants",
            "Both, depending on the occasion",
            "Neither, prefers microwave meals"
        ]
    },
    {
        "question": "If your phone number could be any profession, would it choose astronaut or professional athlete?",
        "options": [
            "Astronaut",
            "Professional athlete",
            "Neither, prefers a different career",
            "Both, if possible"
        ]
    },
    {
        "question": "Does your phone number believe that aliens have visited Earth?",
        "options": [
            "Yes",
            "No",
            "Maybe",
            "I am an alien"
        ]
    },
    {
        "question": "Would your phone number rather live in a big city or a small town?",
        "options": [
            "Big city",
            "Small town",
            "Countryside",
            "Beachside"
        ]
    },
    {
        "question": "Is your phone number a fan of spicy food or does it prefer mild flavors?",
        "options": [
            "Spicy food",
            "Mild flavors",
            "Neither, prefers sweet treats",
            "Both, enjoys a balance of flavors"
        ]
    },
    {
        "question": "Does your phone number enjoy outdoor activities like hiking or prefers indoor hobbies like reading?",
        "options": [
            "Outdoor activities like hiking",
            "Indoor hobbies like reading",
            "Both, enjoys a mix of activities",
            "Neither, prefers binge-watching TV shows"
        ]
    }
];

export default questions;