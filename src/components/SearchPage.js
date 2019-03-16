import React, { Component } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import { connect } from 'react-redux'
import SearchBar from './SearchBar/SearchBar'

const image = require('../assets/img/logo2.png');

class SearchPage extends Component{

    componentDidUpdate(){
        if(this.props.data.length){
            this.props.navigation.navigate('ResultPage')
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titleText}>Search GitHub User Repo</Text>
                <Image 
                  source={image}
                  style={styles.imageStyle}
                />
                <SearchBar/>
                {
                    this.props.error&&<Text style={styles.noResultTxT}>No user records found !!</Text>
                }
            </View>
        )
    }
}

const mapStateToProps = ({ fetchResults }) => {
    return { error,data } = fetchResults
}

export default connect(mapStateToProps, null)(SearchPage);
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#D9FFF9',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText:{
        fontSize:25,
        fontWeight:'bold'
    },
    noResultTxT:{
        color:'red'
    },
    imageStyle: { 
        height: 200, 
        width: 200,
        resizeMode:'cover'
      }
})