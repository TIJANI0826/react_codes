import React ,{ Component } from 'react';

class Forms extends Component{
    constructor (){
        super()
        this.state = {
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            checked:true,
            isFriendly:true,
            gender:"",
            favColor:"blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {name,value,type,checked} = event.target
        type === "checkbox" ? this.setState({ [name] : checked }): this.setState({ [name]:value})
    }
    handleSubmit(){
        
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="First Name" 
                        onChange={this.handleChange}
                    /><br/>
                    <input 
                        type="email" 
                        name="lastName"  
                        placeholder="Last Name" 
                        onChange={this.handleChange}
                    /><br/>
                    <input 
                        type="password"  
                        name="password"  
                        placeholder="Password" 
                        onChange={this.handleChange}/><br/>
                    <h1>{this.state.firstName} {this.state.lastName}{this.state.password}</h1>
                    <textarea value={"Some default value"}/><br/>
                    <label>
                        <input 
                            type="checkbox" 
                            name="isFriendly"
                            checked={this.state.isFriendly}
                            onChange={this.handleChange}/>isFriendly
                    </label><br/>
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="other"
                            checked={this.state.gender === "other"}
                            onChange={this.handleChange}
                        />Other
                    </label><br/>
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        />Male
                    </label><br/>
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        />Female
                    </label><br/>
                    <h1>{ this.state.gender}</h1>
                    <select 
                        value={this.state.favColor}
                        onChange={this.handleChange} name="favColor"
                        >
                        <option value="blue">Blue</option>
                        <option value="orange">Orange</option>
                        <option></option>
                    </select>
                    <h1>{this.state.favColor}</h1>
                    <button>Submit</button>   
                </form>
            </div>
        )
    }
}
export default Forms