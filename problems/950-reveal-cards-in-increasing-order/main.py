class Solution:
    def deckRevealedIncreasing(self, deck: List[int]) -> List[int]:
        deck.sort()
        out_deck = []
        
        while len(deck) > 0 :
            out_deck.append(deck.pop())

            if len(deck) > 0:
                out_deck.append(out_deck.pop(0))
            
        out_deck.reverse()
        return out_deck
