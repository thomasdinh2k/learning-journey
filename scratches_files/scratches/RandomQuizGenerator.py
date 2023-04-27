# Generate Random Quiz Files
import random,os
# Store the states and their capitals in a dictionary
# Quiz Data: Keys are states and values are capitals
capitals = {'Alabama': 'Montgomery', 'Alaska': 'Juneau', 'Arizona': 'Phoenix',
   'Arkansas': 'Little Rock', 'California': 'Sacramento', 'Colorado': 'Denver',
   'Connecticut': 'Hartford', 'Delaware': 'Dover', 'Florida': 'Tallahassee',
   'Georgia': 'Atlanta', 'Hawaii': 'Honolulu', 'Idaho': 'Boise', 'Illinois':
   'Springfield', 'Indiana': 'Indianapolis', 'Iowa': 'Des Moines', 'Kansas':
   'Topeka', 'Kentucky': 'Frankfort', 'Louisiana': 'Baton Rouge', 'Maine':
   'Augusta', 'Maryland': 'Annapolis', 'Massachusetts': 'Boston', 'Michigan':
   'Lansing', 'Minnesota': 'Saint Paul', 'Mississippi': 'Jackson', 'Missouri':
   'Jefferson City', 'Montana': 'Helena', 'Nebraska': 'Lincoln', 'Nevada':
   'Carson City', 'New Hampshire': 'Concord', 'New Jersey': 'Trenton', 'New Mexico': 'Santa Fe', 'New York': 'Albany',
   'North Carolina': 'Raleigh', 'North Dakota': 'Bismarck', 'Ohio': 'Columbus', 'Oklahoma': 'Oklahoma City',
   'Oregon': 'Salem', 'Pennsylvania': 'Harrisburg', 'Rhode Island': 'Providence',
   'South Carolina': 'Columbia', 'South Dakota': 'Pierre', 'Tennessee':
   'Nashville', 'Texas': 'Austin', 'Utah': 'Salt Lake City', 'Vermont':
   'Montpelier', 'Virginia': 'Richmond', 'Washington': 'Olympia', 'West Virginia': 'Charleston', 'Wisconsin': 'Madison', 'Wyoming': 'Cheyenne'}
# Define the directory
directory = "/Users/thomas/PycharmProjects/Fixing Project"

# Create the directory if it doesn't exist
if not os.path.exists(directory):
    os.makedirs(directory)

# Generate 35 quiz files
for quizNum in range (0,35):
    # Create the quiz and answer key files
    quizFile = os.path.join(directory, f'Quiz No {quizNum + 1}.txt')
    answerFile = os.path.join(directory, f'Capital Quiz_Answer No {quizNum + 1}.txt')
    quizFiles = open(quizFile, 'w')
    answerFiles = open(answerFile, 'w')
    print('Successfully')
    # Write the header for the quiz:
    quizFiles.write('Name:\n\nDate:\n\nClass:\n\n')
    quizFiles.write((''*20) + f'State Capitals Quiz (Form {quizNum + 1})')
    # Make it random
    states = list(capitals)
    random.shuffle(states)

    # Loop through 50 states and make a question for each:
    for questionNum in range (0,50):
        # Get right and wrong answers.
        correctAnswers = capitals[states[questionNum]]
        # Get wrong answers
        # Duplicating all value in capitals dictionary
        wrongAnswers = list(capitals.values())
        # Delete the correct answers
        del wrongAnswers[wrongAnswers.index(correctAnswers)]
        # The full list of answer options is the combination of 3 wrong answers with correct answer
        wrongAnswers = random.sample(wrongAnswers,3)
        answerSet = wrongAnswers + [correctAnswers]
        # Randomize the answers so that the correct responses isn't always choice D
        random.shuffle(answerSet)
        # Write out the header for the quiz
        quizFiles.write(f'{questionNum + 1}. What is the capital of {states[questionNum]}?\n')
        for i in range (0,4):
            quizFiles.write(f"     {'ABCD'[i]}. { answerSet[i]}\n")
        quizFiles.write('\n')

        # Write answer key to a file
        answerFiles.write(f"{questionNum + 1}.{'ABCD'[answerSet.index(correctAnswers)]}")
    quizFiles.close()
    answerFiles.close()
    print(f"Quiz file {quizNum + 1} created!")
    print(f"Answer file {quizNum + 1} created!\n")
