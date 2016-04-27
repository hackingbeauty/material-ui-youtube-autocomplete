import React, { Component } from 'react'
import { AutoComplete } 		from 'material-ui';
import JSONP 								from 'jsonp';

const googleAutoSuggestURL = '//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=';

class MaterialUIAutocomplete extends Component {
	constructor(props) {
		super(props);
		this.onUpdateInput 	= this.onUpdateInput.bind(this);
		this.onNewRequest 	= this.onNewRequest.bind(this);
		this.state = {
			dataSource : []
		}
	}

	onUpdateInput(inputValue) {
		var
			self 	= this,
			url 	= googleAutoSuggestURL + inputValue;

		if(inputValue !== "") {
			JSONP(url, function(error, data){
	      if (error) {
	        console.log(error);
	      } else {
	        var searchResults, retrievedSearchTerms;

					searchResults = data[1];

	        retrievedSearchTerms = searchResults.map(function(result) {
	        	return result[0];
	        });

					self.setState({
						dataSource : retrievedSearchTerms
					});
	      }
	    });
		}
	}

	onNewRequest(searchTerm) {
		debugger;
	}

  render() {
    return <div>
	    <AutoComplete
	      floatingLabelText="Search Youtube"
	      filter={AutoComplete.noFilter}
	      triggerUpdateOnFocus={true}
	      dataSource={this.state.dataSource}
	      onUpdateInput={this.onUpdateInput}
	      onNewRequest={this.onNewRequest}
	    />
    </div>
  }
}


export default MaterialUIAutocomplete;
