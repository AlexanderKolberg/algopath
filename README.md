<br />
<h2 align="center">Node Weather CLI</h2>
<br />
  <p align="center">
    A path finding visualizer created with svelte.
  </p>
  <br />

![Animation of algopath](/recording-full.gif)

Currently supports the following algorithms

## Pathfinding

- [A\* (A star)](https://en.wikipedia.org/wiki/A*_search_algorithm)
- [Dijkstra](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
- [Depth First Search](https://en.wikipedia.org/wiki/Depth-first_search) (shortest path not guaranteed)

## Maze generation

- [Recursive division](https://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_division_method)
- [Randomized Depth First Search](https://en.wikipedia.org/wiki/Maze_generation_algorithm#Randomized_depth-first_search)
- Random dots (adds random walls)

<br />

## Go play with it at [algopath.netlify.app](https://algopath.netlify.app/)

<br />
<br />

## Or build it locally:

<br />

### Prerequisites

1. [Node.js](https://nodejs.org) and [npm](https://npmjs.com) installed

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:kolberg-dev/algopath.git
   cd algopath
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the development enjoinment with
   ```sh
   npm run dev
   ```
