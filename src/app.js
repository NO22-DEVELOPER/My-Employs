import React from 'react';
import Cardlist from './Cardlist';
import Searchbox from './searchBox';
import { employs } from './employs';
import Scroll from './scroll';


class App extends React.Component{
    constructor(){
        super();
        this.state = {
        employs : employs,
        searchfield : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value});
    }

    render() {

        const filterEmploys = this.state.employs.filter(employs => {
            return employs.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc '>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"></link>
                <h1> Employs of NO.22 Company </h1>
                <Searchbox searchChange = {this.onSearchChange} />
                <Scroll>
                    <Cardlist employs = {filterEmploys} />
                </Scroll>
           </div>
        );
    }
}

export default App;