import React from "react";


export class Darkmode extends React.Component{
    constructor(props) {
        super(props);
        this.toggle_dark_mode = this.toggle_dark_mode.bind(this);
    }
    toggle_dark_mode(){
        const dark = document.getElementById('toggle_mode');
        const body = document.body.className;

        if(body === 'dark'){
            dark.className = 'btn btn-dark';
            dark.innerHTML = 'Dark Mode'
        }else{
            dark.className = 'btn btn-light';
            dark.innerHTML = 'Light Mode';

        }

        document.body.classList.toggle('dark');
    }

    render() {
        return(
          <button id={'toggle_mode'} className='btn btn-dark' type="button"
                  onClick={this.toggle_dark_mode}>
            Dark Mode
          </button>
        );
    }
}