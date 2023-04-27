# Rock - Paper - Scissors
import pyinputplus as p
def RPS(P1,P2):
    option = ['R', 'P', 'S']
    P1 = p.inputMenu(option,prompt="Player 1 - What's your move?",numbered=True)
    P2 = p.inputMenu(option,prompt="Plauer 2 - What's your move?",numbered=True)
    return P1, P2

RPS(P1,P2)

