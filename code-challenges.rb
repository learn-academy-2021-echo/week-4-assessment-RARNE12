# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# Psudeo Code: 
# create method
# set conditional state
 
num1 = 7
Expected output: '7 is odd'
num2 = 42
Expected output: '42 is even'
num3 = 221
Expected output: '221 is odd'


def isItEven(num)
    if num % 2 == 0
        p "#{num} is even"
    else
        p "#{num} is odd"
    end
end

isItEven 7
isItEven 42
isItEven 221
 

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# Psudeo Code:
# declare method
# use .delete

album1 = 'Rubber Soul'

def remvowel (myString)
    p myString.delete "aeiou"
end

remvowel album1
remvowel album2
remvowel album3

album1 = 'Rubber Soul'
Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
Expected output: 'bby Rd'



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
Expected output: 'Rotator is a palindrome'

def palindrome string
    if string.upcase == string.reverse.upcase
        p "#{string} is a palindrome."
    else
        p "#{string} is not a palindrome."
    end
end
 
   palindrome(is_palindrome1)
   palindrome(is_palindrome2)
   palindrome(is_palindrome3)














