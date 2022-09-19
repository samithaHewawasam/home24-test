# Home24 Notes

## Features
- List Products
- Search Suggestions
- Search Results
- Improved Responsiveness ( Mobile, Tab, Desktop )
- Add to Cart ( 75% completed )

## Special Notes
- Removed cache in the server due to passing variables to the GraphQL Queries
- QuerySearch Graphql reponse handle differenly for SearchContent - need to understand the home24 grapqal patten for better improvement
- Added SKIP_PREFLIGHT_CHECK=true to .env file just to fix eslint dependency issue with react-scripts
- Got 0 linting issues ( `npx eslint src/**` )
-  Warning 
    - act method issue - can fix


## Unit Test Coverage

`npm test -- a --coverage`


File                          |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------------------|----------|----------|----------|----------|-------------------|
All files                     |     62.7 |    35.85 |    51.61 |    63.93 |                   |
 src                          |    14.29 |        0 |        0 |    14.29 |                   |
  Interfaces.ts               |        0 |        0 |        0 |        0 |                   |
  Layout.tsx                  |        0 |        0 |        0 |        0 |... 32,33,34,38,61 |
  ProductContext.ts           |      100 |      100 |      100 |      100 |                   |
  ProductIntialData.ts        |      100 |      100 |      100 |      100 |                   |
  Routes.tsx                  |        0 |        0 |        0 |        0 |                   |
  index.tsx                   |        0 |      100 |      100 |        0 |                 7 |
 src/Components               |        0 |        0 |        0 |        0 |                   |
  index.ts                    |        0 |        0 |        0 |        0 |                   |
 src/Components/ArticleCard   |       80 |      100 |       50 |       80 |                   |
  Article.ts                  |      100 |      100 |      100 |      100 |                   |
  ArticleCard.tsx             |       75 |      100 |       50 |       75 |                33 |
  index.ts                    |        0 |        0 |        0 |        0 |                   |
 src/Components/Header        |    55.56 |    16.67 |    28.57 |    58.82 |                   |
  Header.tsx                  |    55.56 |    16.67 |    28.57 |    58.82 |... 41,49,67,68,81 |
  index.ts                    |        0 |        0 |        0 |        0 |                   |
 src/Components/MainContent   |    90.91 |    66.67 |       75 |    90.91 |                   |
  MainContent.tsx             |    90.91 |    66.67 |       75 |    90.91 |                13 |
  index.ts                    |        0 |        0 |        0 |        0 |                   |
 src/Components/SearchContent |    81.25 |    42.86 |       50 |    86.67 |                   |
  SearchContent.tsx           |    81.25 |    42.86 |       50 |    86.67 |             27,68 |
  index.ts                    |        0 |        0 |        0 |        0 |                   |
 src/Components/SideBar       |    81.82 |       75 |    66.67 |    81.82 |                   |
  SideBar.tsx                 |    81.82 |       75 |    66.67 |    81.82 |             14,36 |
  index.ts                    |        0 |        0 |        0 |        0 |                   |
 src/GraphRepository          |      100 |      100 |      100 |      100 |                   |
  index.ts                    |        0 |        0 |        0 |        0 |                   |
  queryCategory.ts            |      100 |      100 |      100 |      100 |                   |
  querySearch.ts              |      100 |      100 |      100 |      100 |                   |
  querySuggestions.ts         |      100 |      100 |      100 |      100 |                   |
 src/Http                     |     37.5 |        0 |       25 |     37.5 |                   |
  Http.ts                     |     37.5 |        0 |       25 |     37.5 |... 23,25,27,30,45 |
  index.ts                    |        0 |        0 |        0 |        0 |                   |
 src/Http/Hooks               |    65.52 |    41.67 |      100 |    66.67 |                   |
  index.ts                    |        0 |        0 |        0 |        0 |                   |
  useGQLRequest.ts            |    65.52 |    41.67 |      100 |    66.67 |... 79,81,84,85,87 |
 src/Utility                  |      100 |      100 |      100 |      100 |                   |
  Formatter.ts                |      100 |      100 |      100 |      100 |                   |
  index.ts                    |        0 |        0 |        0 |        0 |                   |

Test Suites: 7 passed, 7 total
Tests:       16 passed, 16 total
Snapshots:   5 passed, 5 total
Time:        13.546s


