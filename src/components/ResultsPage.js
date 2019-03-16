import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import { connect } from 'react-redux'
import Results from './ResultCard/Results'
import { clearFetch } from '../actions'

class ResultsPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View style={styles.topContainer}>
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.goBack()
                            } >
                            <Octicons name="chevron-left" size={30} color="#C7C7C7" />
                        </TouchableOpacity>
                        <Octicons name="octoface" size={50} color="#fff" />
                        <Octicons name="bell" size={24} color="#C7C7C7" />
                    </View>
                    <View style={styles.bottomContainer}>
                        <ScrollView horizontal={true}>
                            <Text style={styles.scrollItemTxt}>Overview</Text>
                            <Text style={styles.scrollItemTxt}>Repositories</Text>
                            <Text style={styles.scrollItemTxt}>Projects</Text>
                            <Text style={styles.scrollItemTxt}>Stars</Text>
                            <Text style={styles.scrollItemTxt}>Followers</Text>
                            <Text style={styles.scrollItemTxt}>Following</Text>
                        </ScrollView>
                    </View>
                </View>
                <Results />
            </View>
        )
    }
}

export default connect(null, { clearFetch })(ResultsPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    headerContainer: {
        height: '18%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#212121',
        paddingHorizontal: 10,
    },
    topContainer: {
        paddingTop: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bottomContainer: {
        flexDirection: 'row'
    },
    scrollItemTxt: {
        color: '#fff',
        paddingLeft: 10,
        fontSize: 18,
        paddingVertical: 15,
    }
})