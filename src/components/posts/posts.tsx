import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { Header, Icon, ListItem ,Avatar , Card, CheckBox} from 'react-native-elements';
import * as StyledComponents from '../common/commonStyledElements';
import i18n from "../../internationalization/i18n"
import {standartAvatar} from "../../asserts"
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
export interface IUserInfo {
  email: string;
  username: string;
}

export interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  userInfo?: IUserInfo;
}

export default class Posts extends React.Component<IProps> {
    public constructor(props: IProps) {
      super(props);
    }
    
    state =  {
      postText : "",
      list : [
        {
          email: 'alex',
          avatar: standartAvatar,
          postText : "jajajajaNavigationScreenPropNavigationScreenPropNavigationScreenPropNavigationScreenPropNavigationScreenPropNavigationScreenPropNavigationScreenPropNavigationScreenPropNavigationScreenPropNavigationScreenPropNavigationScreenPropNavigationScreenPropNavigationScreenProp",
          postTime :  new Date(),
          likeCount : 3,
          isLiked : false
        },
        {
          email: 'ilya',
          avatar: standartAvatar,
          postText : "jajajaja",
          postTime :  new Date(),
          likeCount : 3,
          isLiked : false
        },
      ]
      
    }
    handleClick =(i : any) => {
      let list = [...this.state.list] 
      list[i].isLiked = !list[i].isLiked
      this.setState({list})
    }
    
    render(): JSX.Element {
      return (
        <View style = {{flex : 1, marginBottom:50,}}>
          <Header
          centerComponent = {
             <Icon
                type = 'material-community'
                name='account'
                size={40}
                color = 'white'
                onPress={() => this.props.navigation.navigate('Profile')} 
             />
          }
          rightComponent={
            <Icon
              type = 'AntDesign'
              name='settings'
              size={40}
              color = 'white'
              onPress={() => this.props.navigation.navigate('Settings')} 
            />
          }
          />
          <Card 
          containerStyle = {{flex : 1, padding : 0 , margin : 0}}
          >
            {
              this.state.list.map((post, i) => {
                return (
                  
                  <View style = {{ flexDirection: 'row', borderBottomColor : '#6a717d', borderBottomWidth : 1}}>
                    <View key={i} style={{alignItems : "center", flex : 1,  padding : 5 }} >
                      <Avatar 
                        size = "medium"
                        rounded
                        source={ post.avatar}
                      />
                      <Text style = {{ marginTop : 10}}>{post.email}</Text>
                    </View>
                    <View style = {{flex : 4,margin : 5,   flexDirection :"column", justifyContent : "space-between"}}>
                      <Text >{post.postText}</Text>
                      <View style = {{ flexDirection: "row"  }}>
                        <Text style = {{flex : 4, textAlign : "center",alignSelf : "flex-end" }}>{post.postTime.getHours()}:{post.postTime.getMinutes()}:{post.postTime.getSeconds()}</Text>
                        <CheckBox
                          containerStyle = {{flex : 1,padding : 0,margin : 0, alignSelf : "flex-end" , }}
                          checkedIcon={<Icon name = "favorite-border" reverseColor = "red" color = "red"/>}
                          uncheckedIcon={<Icon name = "favorite" reverseColor = "red" color = "red"/>}
                          checked={post.isLiked}
                          onPress= {()=>this.handleClick(i)}
                        />
                        
                      </View>
                    </View>
                  </View>
                );
              })
            }
            
          </Card>
          <StyledComponents.input
                  style = {{height : 80 , justifyContent: 'flex-end', padding: 10}}
                  value={this.state.postText}
                  onChangeText={postText => this.setState({postText})}
                  placeholder={i18n.t('library.postPlaceholder')}
                  maxLength = {240}
                  multiline = {true}
                  scrollEnabled = {true}
                  
              />
          
            
          
      </View>
      
      );
    }
  }

  