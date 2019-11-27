import React from 'react'
import {render} from 'react-dom'
import PostList from '../PostList'

import {
    Row, Col,ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
    Button,
    CardHeader,
    CardTitle,
    Card,CardImg,
    CardBody,
    Progress,
    TabContent,
    TabPane,
} from 'reactstrap';
class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: ''
        }
        this.handlePostChange = this
            .handlePostChange
            .bind(this)
        this.handleSubmit = this
            .handleSubmit
            .bind(this)

    }
    componentDidMount() {
        componentHandler.upgradeDom();
    }

    handleSubmit(event) {
        event.preventDefault()

        this
            .props
            .actions
            .post({user_id: this.props.user_posts.user_id, post: this.state.post})
        this.setState({post: ''});
    }

    handlePostChange(event) {
        this.setState({post: event.target.value});
    }
    subTitle = (location) => {
        let subtitle = '';
        if (location.service) {
          subtitle = location.service;
        }
        if (location.servicetime && subtitle.length) {
            subtitle = `${location.brandName}  - ${subtitle} - ${location.servicetime}- ${location.phone}`;
          } else if (location.servicetime) {
            subtitle =` ${location.brandName}-${location.servicetime}`;
          }
      
          return subtitle;
        };
        
    render() {
        const {user_posts} = this.props
        return (
    
        <Card  className="list-card-user">
        <div className="card-header-map">تفاصيل مقدم الخدمة</div>
             <ListGroupItem className="list-item-map">
           <ListGroupItemHeading className="text-card-map"> {user_posts.name}</ListGroupItemHeading>
            </ListGroupItem>
                <div className="card-body card-user-map">
                
                <ListGroupItem className="list-item-map">
                                <ListGroupItemHeading className="list-item-txt-map"> الاسم التجاري:-{user_posts.brandName}</ListGroupItemHeading>
                </ListGroupItem>
                
                <ListGroupItem className="list-item-map">
                                <ListGroupItemHeading className="list-item-txt-map"> الخدمة:-{user_posts.service}</ListGroupItemHeading>
                </ListGroupItem>

                 <ListGroupItem className="list-item-map">
                                <ListGroupItemHeading className="list-item-txt-map"> الجوال:-{user_posts.phone}</ListGroupItemHeading>
                </ListGroupItem>
                     
                <ListGroupItem className="list-item-map">
                                <ListGroupItemHeading className="list-item-txt-map"> الخدمات:-{user_posts.serviceinfo}</ListGroupItemHeading>
                </ListGroupItem>
                
                <ListGroupItem className="list-item-map">
                                <ListGroupItemHeading className="list-item-txt-map"> اوقات العمل:-{user_posts.servicetime}</ListGroupItemHeading>
                </ListGroupItem>
                     
                    <Button style={{margin:"1rem"}}
                     outline className="mb-2 mr-2 btn-transition"
                     size="lg"
                      color="danger"
                     type="submit">النشاط
                    </Button>
                    

                </div>
                 
                </Card>

        );
    }
}
export default PostForm;