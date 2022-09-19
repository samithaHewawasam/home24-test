1) removed cache in the server due to passing variables to the GraphQL Queries
2) querySearch Graphql reponse handle differenly for SearchContent - need to understand the home.24 grapqal patten
3) added SKIP_PREFLIGHT_CHECK=true to .env file just to fix eslint dependency issue with react-scripts 
4) npx eslint src/** - Got 0 linting issues
5) Unit test results as bellows
    Test Suites: 7 passed, 7 total
    Tests:       16 passed, 16 total
    Snapshots:   1 obsolete, 5 passed, 5 total
    Time:        13.015s, estimated 14s

//One warning: act method issue - can fix
