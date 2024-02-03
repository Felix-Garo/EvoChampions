# Evo Champion Wins Table
A reusable React.js sortable table component for displaying and sorting the number of wins for Evo champions, with the added feature of dynamically rendering country flags for each champion. The table includes a custom hook for storing the sorting logic, separate React components for managing table data and country codes, and dynamic links to existing Wikipedia pages for player information, country flags, and games played.

## What is Evo:
The Evolution Championship Series, commonly known as Evo, is a prominent esports tournament series that showcases competitive video gaming across multiple fighting game genres. Evo is one of the largest and most prestigious events in the esports community. It attracts top players from around the world who compete for victory in popular fighting games. This React table component is designed to elegantly display and sort the wins of Evo champions, offering a user-friendly experience with dynamic country flag rendering and dynamic links to relevant Wikipedia pages for player information, country flags, and the respective video game(s) played where when they won.

## Features:
- Sortable Columns: Easily sort the table based on different criteria, such as player name, number of tournament wins, and country flag.
  - When the arrow icon located next to a table header is clicked, the table will do a cycle of sorting the entire table in an order of ascending, to descending, and back to the deafault unorder.
  - Arrow(s) for a table with sorting criteria also changes with respect to the sort order. The default unorder depicts both arrows, up arrow alone for ascending order, and down arrow alone for descending order.
  - If a different sort column is picked while in the middle of a sort cycle, the order will begin with ascending order for the new sort column.
- Custom Styling: Customize the look and feel of the table to match your application's design aesthetic.
- Dynamic Data Loading: Load dynamic data into the table component, making it easy to update and maintain the list of Evo champions.
- Country Flags: Dynamically render country flags for each champion using reusable code that parses country names into country codes and generates flag URLs.
- Dynamic Links: Include dynamic links throughout the table leading to existing Wikipedia pages for player information, country flags, and games played.

## Screenshot
<img width="1440" alt="EvoChamps" src="https://github.com/Felix-Garo/EvoChampions/assets/148928126/faca70e1-c81b-4c21-b0d1-62cca84a6b3f">
