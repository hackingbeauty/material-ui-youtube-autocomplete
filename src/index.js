import React, { Component } from 'react'
import { AutoComplete }     from 'material-ui';
import JSONP                from 'jsonp';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const googleAutoSuggestURL = '//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=';

class MaterialUIAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.onUpdateInput  = this.onUpdateInput.bind(this);
    this.onNewRequest   = this.onNewRequest.bind(this);
    this.state = {
      dataSource : [],
      inputValue : ''
    }
  }

  onUpdateInput(inputValue) {
    var self = this;
    this.setState({
      inputValue : inputValue
      },function(){
      self.performSearch();
    });
  }

  performSearch() {
    var
      self = this,
      url  = googleAutoSuggestURL + this.state.inputValue;

    if(this.state.inputValue !== '') {
      JSONP(url, function(error, data) {
        var searchResults, retrievedSearchTerms;

        if(error) return console.log(error);

        searchResults = data[1];

        retrievedSearchTerms = searchResults.map(function(result) {
          return result[0];
        });

        self.setState({
          dataSource : retrievedSearchTerms
        });
      });
    }
  }

  onNewRequest(searchTerm) {
    var
      self   = this,
      params = {
        part        : 'id,snippet',
        type        : 'video',
        q           : this.state.inputValue,
        maxResults  : '50'
      }

    this.YoutubeClient.search(params, function(error,results) {
      if(error) return console.log(error);
      self.props.callback(results.items,searchTerm);
      self.setState({
        dataSource : [],
        inputValue : ''
      });
    });
  }

  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <AutoComplete
        dataSource    ={this.state.dataSource}
        onUpdateInput ={this.onUpdateInput}
        onNewRequest  ={this.onNewRequest} />
      </MuiThemeProvider>
  }
}


export default MaterialUIAutocomplete;
