import React,{Component} from 'react'

class RefsDemo extends Component
{
 constructor(props){
     super(props)
     this.inputRef = React.createRef()
     this.cbRef = null
     this.setCbRef = (element)=>{
         this.cbRef=element
     }
 }   
 componentDidMount(){
     if(this.cbRef){
         this.cbRef.focus()
     }
    this.inputRef.current.focus()
     console.log(this.inputRef);
 }
 clickhandy = () =>{
     alert(this.inputRef.current.value)
 }
 render(){
     return(
         <div>
            <input type='text' ref={this.inputRef}></input>
            <input type='text' ref={this.cbRef}></input>
            <button onClick={this.clickhandy}>click</button>
     </div>
     )
 }
}
 
export  default RefsDemo
