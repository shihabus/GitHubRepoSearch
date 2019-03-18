import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import { connect } from 'react-redux'
import { clearFetch } from '../../actions'

class Results extends Component {
    constructor(props) {
        super(props)
    }

    _renderItem(item) {
        return (
            <View style={styles.card}>
                <View>
                    <Octicons name="repo" size={23} color="#676E75" />
                </View>
                <View style={styles.textArea}>
                    <View style={styles.repoDetails}>
                        <Text style={styles.repoUserTxt}>{`${item.owner.login}`}/<Text style={styles.repoNameTxt}>{`${item.name}`}</Text>
                        </Text>

                    </View>
                    <View style={styles.description}>
                        <Text style={styles.descriptionTxT}>{item.description || '--'}</Text>
                    </View>
                    <View style={styles.repoDetails}>
                        <View style={styles.repoDetails}>
                            <Octicons name="star" size={24} color="#676E75" />
                            <Text style={styles.descriptionTxT}> {item.forks_count}</Text>
                        </View>
                        <View style={[styles.repoDetails, { paddingLeft: 15, justifyContent: 'center' }]}>
                            <Octicons name="primitive-dot" size={28} color="#676E75"/>
                            <Text style={styles.descriptionTxT}> {item.language || '--'}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    ListEmptyComponent() {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#676E75" />
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.props.data}
                    renderItem={({ item }) => this._renderItem(item)}
                    keyExtractor={item => item.id}
                    ListEmptyComponent={this.ListEmptyComponent}/>
            </View>
        )
    }
}

const mapStateToProps = ({ fetchResults }) => {
    return { error, loading, query, showClearFetch, data } = fetchResults
}

export default connect(mapStateToProps, { clearFetch })(Results);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    loaderContainer: {
        marginVertical: '50%'
    },
    textArea: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal: 5,
        paddingHorizontal: 5,
    },
    repoDetails: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    repoNameTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2663E8',
        width: '80%'
    },
    repoUserTxt: {
        fontSize: 18,
        color: '#2663E8'
    },
    description: {
        paddingRight: 10,
        marginVertical: 8,
    },
    descriptionTxT: {
        fontSize: 18,
        textAlignVertical:'center'
    },
})