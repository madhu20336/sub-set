# About the Problem
A maximal subset of  where the sum of any 2 numbers in the subset is not evenly divisible by k(given number).
# solution
- In this array I have to use one empty array and push the possible remainders of the give number.
- The next step is to get the iterations of the loop for the elements in any subset.
```JavaScript
  count=Math.min(array[0],1)
//   used to get the intialization of the count.
```
- After getting the intialization of the count we are getting the number of iteration to loop over the given array.
- At the next stage we need to compare the subset length and get the subset with maximum length that contains the values with elements that are not evenly divisible by the given number.

                         ***