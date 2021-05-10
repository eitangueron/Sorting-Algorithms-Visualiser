# Sorting algo project
I find sorting algothimes fasicinating and elegent.
I saw clements sorting algos visulaitzer project and imediatkey knew i'll create my version.
Enjoyed it deeply and learned a lot. Defenatly will ace my sorting algos questions in my dsa uni course.
Used react for this project and a simple node server.
Here you can view the affects of comparisment bassed sorting algos on a random and sorted arrays.
Each bar represents a number, height is accordingly.
The numbers that are compared are marked in yellow, and you can see the swaps occuring.

Interesting to notice:
-the divide and concure pattern in the merge sort
-how slow is bubble sort
-when an array is sorted quick sort has a horrible complexity due to the choice of the pivot to b the last elemts which is recursivly the maximum.

## How to use:
pick number of bars (numbers in the array)
pick an algorithem
pick sorting speed (I recommend using the default speed we configured and re running adapted )
click sort and watch

you can refresh whenever 
you can create new bars which represents an array of numbers and redo it all

## to do:
- buttons nav bar
- random nums array
- graphs of div by num val
- sorting algos ?


## Table Of Contents
- [React Bank](#ReactBank)
  * [Running the project](#running-the-project)
  * [Screenshots](#screenshots)
    + [Expense-List](#expense-list)
    + [Add Expense](#add-expense)
    + [Reports](#reports)
    + [Menu](#menu)
  * [Tech Stack](#tech-stack)


## Running the project

Preferably check the online demo: [https://sortingalgosvis-eg.herokuapp.com/](https://sortingalgosvis-eg.herokuapp.com/)

Otherwise:

1. Clone the repo.
2. Run `npm install`.
3. Run `npm run build`
4. Run `npm start`.
5. Navigate to `http://localhost:3001`.

## Screenshots

### Landing Page
A landing page greeting the users, includes a random quote (From Random quotes API).

<p align="center"><img src="imgs4readme/landingPage.png" width="500" /></p>

### Transactions
An overview of all your expenses.

<p align="center"><img src="imgs4readme/transactionsPage.png" width="500" /></p>

### Add Expense
Fill out the inputs and then either add a new *Deposit* or a new *Withdraw*.

<p align="center"><img src="imgs4readme/actionsPage.png" width="500" /></p>

### Analytics
A basic overview of your expenses by category, and some simple piecharts as visual aids.

<p align="center"><img src="imgs4readme/analyticsPage.png" width="500" /></p>


## Techstack
1. React, Material-UI. 
2. Express (Node.js).
