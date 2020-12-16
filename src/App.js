import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import 'react-table/react-table.css';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true
    }
  }
  async getUsersData(){
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(res.data)
    this.setState({loading:false, users: res.data})
  }
  componentDidMount(){
    this.getUsersData()
  }
  render() {
    const columns = [{  
      Header: 'ID',  
      accessor: 'id',
     }
     ,{  
      Header: 'User Id',  
      accessor: 'userId' ,
      },
      {  
     Header: 'Title',  
     accessor: 'title' ,
     }
     ,{  
     Header: 'Body',  
     accessor: 'body',
     },
  ]
    return (
      <ReactTable  
      data={this.state.users}  
      columns={columns}  
   />
    )
  }
}

