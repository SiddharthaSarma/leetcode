class Solution:
    def deckRevealedIncreasing(self, deck: List[int]) -> List[int]:
        deck.sort()
        outDeck = []
        
        while len(deck) > 0 :
            outDeck.append(deck.pop())

            if len(deck) > 0:
                outDeck.append(outDeck.pop(0))
            
        outDeck.reverse()
        return outDeck
