const {Deck,Card}=require('./check.js')
describe("Check deck n value",()=>
{
    test("deck len and value",()=>
    {
        expect(Deck.init()).toBe(52)
    })
    var card=new Card('A','S')
    test("deck len and value",()=>
    {
        expect(card.getValue(11)).toBe(1)
    })
})