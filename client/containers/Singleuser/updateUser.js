import React, {Component} from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import {Accounts} from 'meteor/accounts-base'
import {
    Button,
    Card,Label,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col
  } from "reactstrap";
class UpdateUser extends Component{
    constructor(props){
        super(props)
        
        this.handleImageChange=this.handleImageChange.bind(this)
        this.handlePhoneChange=this.handlePhoneChange.bind(this)
        this.state={
            userImage:null,
            phone:null,

        }

    }

    componentWillMount(){
        const {selectUser} =this.props.location.state
        if(selectUser.profile){
                this.setState({userImage:selectUser.profile.userImage})
                // console.log('dedN')
             }else{
                this.setState({userImage:"http://www.clker.com/cliparts/0/5/3/e/11949946071992273737kopeteaway.svg.med.png"})
                //console.log('dedY')  
             }
    }
    componentDidUpdate() {
         
     }
 
    handleImageChange(e) {
     this.setState({userImage:this.refs.input.value});
     }
     handlePhoneChange( ) {
        this.setState({phone:this.refs.phone.value});
        console.log(this.state.phone)
     }
     handelChange(e){
        const {selectUser} =this.props.location.state
        e.preventDefault();
        const data={
            userImage:this.refs.input.value,
            phone:this.refs.phone.value,
            userId:selectUser._id
        }
        this.setState({userImage:this.refs.input.value})
        console.log(data)
        Meteor.call("userProfile",data)
     }
     
    render(){
        
        const {selectUser} =this.props.location.state
       
        
           
        return(
            <div className="card-user">
             
            <Row className="card text-white bg-primary mb-3" style={{maxWidth:"max-width:auto"}}>
            <Col md="6">
              <Card className="main-card mb-3">
              <header style={{height:"2em" ,fontSize:"22px",margin:" 5% 2%"}} >
                 I@conect -user update profile
                </header>
              <CardBody className="list-group ">
              <form onSubmit={this.handelChange.bind(this)}>
                <div >
                    <img  src={this.state.userImage} className="mx-auto img-fluid img-circle d-block" alt="avatar"/>
                    <h6 className="mt-2">ادخل رابط صورة الحساب</h6>
                    <label className="custom-file">
                        <input  onChange={()=> this.handleImageChange }  type="text" id="file" className="form-control" 
                        ref="input" placeholder="url of user image"/>
                     </label>
                </div>
               
                <div  className="form-group column">
                    <FormGroup>
                        <Label for="exampleEmail"># رقم السجل : </Label>
                        <input disabled  className="form-control" type="text" ref="userId" value={selectUser._id}/>
                    </FormGroup>

                    <FormGroup>
                    <Label for="exampleEmail">اسم المستخدم</Label>
                    <input className="form-control" type="text" name="email"  id="exampleEmail" 
                        placeholder="with a placeholder" ref="username" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="examplePhone">رقم الهاتف</Label>
                    <input  onChange={()=> this.handlePhoneChange() }
                    className="form-control" type="number" name="phone"  id="exampleEmail" 
                        ref="phone"
                        placeholder="+966" />
                    </FormGroup>
                  
                 <Button color="warning"
                 disabled={!this.state.phone&&!this.state.userImage} size="1g" block style={{width:"18em"}}>تاكيد</Button>
                </div>
                </form>
                </CardBody>

              </Card>
              </Col>
              </Row>
          
              </div>
        )
    }
}
export default UpdateUser;