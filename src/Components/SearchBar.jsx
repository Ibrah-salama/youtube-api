import React from 'react';
class SearchBar extends React.Component {
    state= {
        term:''
    }

    onInputChange =(e)=>{
        this.setState({ term: e.target.value })
    }

    // assign this fucntion as arrow fun as we wll pass this to a child
    onFormSubmit = e => {
        e.preventDefault() 
        this.props.onFormSubmit(this.state.term)
    } 
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text" 
                            value={this.state.term}
                            // onChange={(e)=>this.onInputChange(e)} === 
                            onChange={this.onInputChange}
                            />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;