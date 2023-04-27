import random, os

# Store the states and their capitals in a dictionary
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
directory = "/Users/thomas/PycharmProjects/[9.1] Generating Random Quiz Files"

# Create the directory if it doesn't exist
if not os.path.exists(directory):
    os.makedirs(directory)

# Generate 35 quiz files
for quizNum in range(0, 35):
    # Create the quiz and answer key files
    quizFile = f'Capital Quiz No {quizNum + 1}.txt'
    answerFile = f'Capital Quiz_Answer No {quizNum + 1}.txt'
    quizFilePath = os.path.join(directory, quizFile)
    answerFilePath = os.path.join(directory, answerFile)
    print(f"Creating quiz file: {quizFilePath}")
    print(f"Creating answer file: {answerFilePath}")
    quizFiles = open(quizFilePath, 'w')
    answerFiles = open(answerFilePath, 'w')

    # Write the header for the quiz
    quizFiles.write('Name:\n\nDate:\n\nClass:\n\n')
    quizFiles.write(('' * 20) + f'State Capitals Quiz (Form {quizNum + 1})\n')
    # Make it random
    states = list(capitals)
    random.shuffle(states)

    # Loop through 50 states and make a question for each
    for questionNum in range(0, 50):
        # Get right and wrong answers
        correctAnswers = capitals[states[questionNum]]
        # Get wrong answers
        # Duplicating all value in capitals dictionary
        wrongAnswers = list(capitals.values())
        # Delete the correct answers
        del wrongAnswers[wrongAnswers.index(correctAnswers)]
        # The full list of answer options is the combination of 3 wrong answers with correct answer
        wrongAnswers = random.sample(wrongAnswers, 3)
        answerSet = wrongAnswers + [correctAnswers]
        # Randomize the answers so that the correct responses isn't always choice D
        random.shuffle(answerSet)

        # Write out the question and answer options to the quiz file
        quizFiles.write(f"{questionNum + 1}. What is the capital of {states[questionNum]}?\n")
        for i in range(0, 4):
            quizFiles.write(f"     {'ABCD'[i]}. {answerSet[i]}\n")
        quizFiles.write('\n')

        # Write the answer key to the answer file
        answerFiles.write(f"{questionNum + 1}. {'ABCD'[answerSet.index(correctAnswers)]}\n")

    quizFiles.close()
    answerFiles.close()
    print(f"Quiz file {quizFilePath} created.")
    print(f"Answer file {answerFilePath} created.\n")