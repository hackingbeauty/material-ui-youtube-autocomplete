# material-ui-youtube-autocomplete

A React.js Autcomplete complete component inspired by Material-UI.


## Demo

See this [compenent in action](https://videoyak.io)

## Installation

`npm install --save material-ui-youtube-autocomplete`


## Features

- Material-UI stylized search input
- Auto-suggest drop-down as user types (suggested results come from Youtube)
- Retrieve collection of video search results from Youtube


## Usage

```js
import YoutubeAutcomplete from 'material-ui-youtube-autocomplete';

<YoutubeAutocomplete
  apiKey={string}        // you must get an API key from google if you want video search results returned
  maxResults={string}    // defaults -> 50. Number of video search results you want
  placeHolder={string}   // defaults -> "Search Youtube"
  callback={function}    // callback to execute when search results are retrieved
/>


## Example

```js
import YoutubeAutocomplete from 'material-ui-youtube-autocomplete';

class Example extends React.Component {
  render() {
    return (
      <YouTubeAutocomplete
        apiKey="YOUR-API-KEY-THAT-YOUR-REGISTERED-WITH-GOOGLE"
        placeHolder="Search Youtube"
        maxResults="20"
        callback={this._onSearchResultsFound}
      />
    );
  }

  _onSearchResultsFound(results) {
    // Results is an array of retreived search results from Youtube.
    // Do what you want with the results here.
  }
}
```

## License

MIT