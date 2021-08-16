
$(document).ready(function() {
    
    displayQuoteFromArray();

    $("#next_quote").click(function() {
        $('#main').fadeOut(1200, displayQuoteFromArray);
    });

    function displayQuote(response) {
            console.log(response.quote);
            $("#quote").text(response.quote);
            $('#author').text(response.author);

            $('#main').fadeIn(1200); 
        }
	
    function displayQuoteFromArray() {
        var myQuotes = [
	        {
	            author: "James Clear",
	            quote:"I know that if things were going to improve, I was the one responsible for making it happen."
	        },
	        {
	            author: "James Clear",
	            quote:"The only way I made progress - the only choice I had - was to start small."
	        },
	        {
	            author: "James Clear",
	            quote:"What starts as a small win or a minor setback accumulates into something much more."
	        },
	        {
	            author: "James Clear",
	            quote:"It is only when looking back two, five, or perhaps ten years that the value of good habits and the cost of bad ones become strikingly apparent."
	        },
	        {
	            author: "James Clear",
	            quote:"Habits often appear to make no difference until you cross a critical threshold and unlock a new level of performance."
	        },
	        {
	            author: "James Clear",
	            quote:"If successful and unsuccessful people share the same goals, then the goal cannot be what differentiates the winners from the losers."
	        },
	        {
	            author: "James Clear",
	            quote:"The purpose of setting goals is to win the game. The purpose of building systems is to continue playing the game."
	        },
	        {
	            author: "James Clear",
	            quote:"The more pride you have in a particular aspect of your identity, the more motivated you'll be to maintain the habits associated with it."
	        },
	        {
	            author: "James Clear",
	            quote:"Good habits can make rational sense, but if they conflict with your identity, you will fail to put them into action."
	        },
	        {
	            author: "James Clear",
	            quote:"If you keep casting the same votes you've always cast, you're going to get the same results you've always had."
	        },
	        {
	            author: "James Clear",
	            quote:"You need to know who you want to be. Otherwise, your quest for change is like a boat without a rudder."
	        },
	        {
	            author: "James Clear",
	            quote:"Fundamentally, habits are not about having something. They are about becoming someone."
	        },
	        {
	            author: "James Clear",
	            quote:"By the time we become adults, we rarely notice the habits that are running our lives."
	        },
	        {
	            author: "James Clear",
	            quote:"We underestimate how much our brains and bodies can do without thinking."
	        },
	        {
	            author: "James Clear",
	            quote:"We're so used to doing what we've always done that we don't stop to question whether it's the right thing to do at all."
	        },
	        {
	            author: "James Clear",
	            quote:"The process of behavior change always start with awareness. You need to be aware of your habits before you can change them."
	        },
	        {
	            author: "James Clear",
	            quote:"We often say yes to little requests because we are not clear enough about what we need to be doing instead."
	        },
	        {
	            author: "James Clear", 
	            quote:"People often choose products not because of what they are, but because of where they are."
	        },
	        {
	            author: "James Clear",
	            quote:"Your habits change depending on the room you are in and the cues in front of you."
	        },
	        {
	            author: "James Clear",
	            quote:"Customers will occasionally buy products not because they want them but because of how they are presented to them."
	        },
	        {
	            author: "James Clear",
	            quote:"A stable environment where everything has a place and a purpose is an environment where habits can easily form."
	        },
	        {
	            author: "James Clear",
	            quote:"Addictions could spontaneously dissolve if there was a radical change in the environment."
	        },
	        {
	            author: "James Clear",
	            quote:"Here's the punchline: You can break a habit, but you're unlikely to forget it."
	        },
	        {
	            author: "James Clear",
	            quote:"I have never seen someone consistently stick to positive habits in a negative environment."
	        },
	        {
	            author: "James Clear",
	            quote:"One of the most practical ways to eliminate a bad habit is to reduce exposure to the cue that causes it."
	        },
	        {
	            author: "James Clear",
	            quote:"If history serve as a guide, the opportunities of the future will be more attractive than those of today."
	        },
	        {
	            author: "James Clear",
	            quote:"Dopamine released not only when you experience pleasure, but also when you anticipate it."
	        },
	        {
	            author: "Charles Darwin",
	            quote:"In the long history of humankind, those who learned to collaborate and improvise most effectively hav prevailed."
	        },
	        {
	            author: "James Clear",
	            quote:"If you work in a job where everyone wears expensive suits, then you'll be inclined to splurge on one as well."
	        },
	        {
	            author: "James Clear",
	            quote:"The closer we are to someone, the more likely we are to imitate some of their habits."
	        },
	        {
	            author: "James Clear",
	            quote:"Once your pride gets involved, you'll fight tooth and nail to maintain your habits."
	        },
	        {
	            author: "James Clear",
	            quote:"You have the power to change your beliefs about yourself. Your identity is not set in stone. You have a choice in every moment."
	        },
	        {
	            author: "James Clear",
	            quote:"It's only by making the fundamentals of life easier (through habits) that you can create the mental space needed for free thinking and creativity."
	        },
	        {
	            author: "James Clear",
	            quote:"Until you make the unconscious conscious, it will direct your life and you will call it fate."
	        },
	        {
	            author: "James Clear",
	            quote:"No behavior happens in isolation. Each action becomes a cue that triggers the next behavior."
	        },
	        {
	            author: "James Clear",
	            quote:"People who make a specific plan for when and where they will perform a new habits are more likely to follow through."
	        },
	        {
	            author: "James Clear",
	            quote:"The purpose of every habit is to solve the problems you face with as little energy and effort as possible."
	        },
	        {
	            author: "James Clear",
	            quote:"Building better habits isn't about littering your day with life hacks."
	        },
	        {
	            author: "James Clear",
	            quote:"The more automatic a behavior becomes, the less likely we are to consciously think about it."
	        },
	        {
	            author: "James Clear",
	            quote:"The process of behavior change always start with awareness. You need to be aware of your habits before you can change them."
	        },
	        {
	            author: "James Clear",
	            quote:"People who make a specific plan for when and where they will perform a new habits are more likely to follow through."
	        },
	        {
	            author: "James Clear",
	            quote:"All habits serve you in some way - even the bad ones - which is why you repeat them."
	        },
	        {
	            author: "James Clear",
	            quote:"Peer pressure is bad only if you're surrounded by bad influences."
	        },
	        {
	            author: "James Clear",
	            quote:"Fundamentally, habits are not about having something. They are about becoming someone."
	        },
	        {
	            author: "James Clear",
	            quote:"Behaviors are attractive when they help us fit in."
	        },
	        {
	            author: "James Clear",
	            quote:"One of the most effective things you can do to build better habits is to join a culture where your desired behavior is the normal behavior."
	        },
	        {
	            author: "James Clear",
	            quote:"Surround yourself with people who have the habits you want to have yourself. You'll rise together."
	        },
	        {
	            author: "James Clear",
	            quote:"The culture we live in determines which behaviors are attractive to us."
	        },
	        {
	            author: "James Clear",
	            quote:"It's friendship and community that embed a new identity and help behaviors last over the long run."
	        },
	        {
	            author: "James Clear",
	            quote:"People who don't have their habits handled are often the ones with the least amount of freedom."
	        },
	        {
	            author: "James Clear",
	            quote:"The closer we are to someone, the more likely we are to imitate some of their habits."
	        },
	        {
	            author: "James Clear",
	            quote:"It's friendship and community that embed a new identity and help behaviors last over the long run."
	            
	        },
	        {
	            author: "James Clear",
	            quote:"Remaining part of a group after achieving a goal is crucial to maintaining your habits."
	            
        } 
        ];
        var random = Math.floor(Math.random() * myQuotes.length);
        if ($("#quote").text().localeCompare(myQuotes[random].quote) == 0 ) {
             random = Math.floor(Math.random() * myQuotes.length);
        }
        displayQuote(myQuotes[random]);
        
    }
    

}); //end of document ready
