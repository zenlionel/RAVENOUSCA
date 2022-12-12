import React from 'react';
import './SearchBar.css'


class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      term: '',
      location: '',
      sortBy: 'best_match'
    }
    const place = '';
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleEnterKey = this.handleEnterKey.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match' ,
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
  };
}
  getSortByClass(sortByOption){
    if(this.state.sortBy ===  sortByOption){
      return 'active';
    } 
      return '';
  }
    handleSortByChange(sortByOption){
      this.setState({
        sortBy: sortByOption
      },
      //use callback function to handleSortByChange event when clicking on the sortByOptions rendered object
      () => {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
      });
    }
    handleTermChange(event){
      this.setState({
        term: event.target.value
      })
  }
    handleLocationChange(event){
      this.setState({
        location: event.target.value
      }) 
    }
    handleSearch(event){
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
      event.preventDefault();
  } 
     renderSortByOptions = () =>{
        return Object.keys(this.sortByOptions).map(sortByOption =>{
            let sortByOptionValue = this.sortByOptions[sortByOption];
           return (<li onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue}>{sortByOption}</li>);
        });
    
  }
    handleEnterKey(event) {
      // Enter
      if (event.keyCode === 13) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
      }
    }
    render(){
        return (
        <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input name='Businessses' onChange={this.handleTermChange} onKeyDown={this.handleEnterKey} placeholder="Search Businesses" />
          <input name='Location' onChange={this.handleLocationChange} onKeyDown={this.handleEnterKey} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
      );
    }
}
export default SearchBar;